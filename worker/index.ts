/**
 * Cloudflare Worker que envuelve el static export del CV.
 * - POST /api/chat  -> chat "pregúntale a mi CV" (Anthropic Haiku), con Turnstile + rate-limit.
 * - cualquier otra ruta -> se sirve el sitio estático (binding ASSETS).
 *
 * Secrets (wrangler secret put): ANTHROPIC_API_KEY, TURNSTILE_SECRET_KEY.
 * KV opcional (binding RL) para tope de uso por IP/día; si no existe, solo gatea Turnstile.
 */

interface Env {
  ASSETS: { fetch: (req: Request) => Promise<Response> };
  ANTHROPIC_API_KEY: string;
  TURNSTILE_SECRET_KEY: string;
  RL?: KVNamespace;
}

const MODEL = "claude-haiku-4-5-20251001";
const MAX_TOKENS = 500;
const MAX_TURNS = 12; // mensajes totales en la conversación
const MAX_CHARS = 700; // por mensaje del usuario
const DAILY_LIMIT = 30; // mensajes por IP por día (si hay KV)

// Contexto del CV. Datos reales de Oscar, sin cifras inventadas.
const CV_CONTEXT = `
Oscar Arredondo. Mercadólogo con +10 años en estrategia digital, generación de leads y CRM a lo largo del customer journey completo. Base en Tijuana, B.C., México. Correo: oscar.amayoral@gmail.com. Trabaja de forma remota.

Enfoque actual: marketing + IA y automatización. Usa IA para ejecutar más rápido: sourcing y calificación de leads, extracción y estructuración de datos (web scraping), reportes y flujos internos, integrando APIs y SQL.

Experiencia:
- Coordinador CRM en Atisa Group (jun 2024 - presente, ~2 años): diagnóstico y adopción de IA (identifica casos de uso, capacita y acompaña a las direcciones), desarrollo de agentes y automatizaciones para atención y filtrado de leads integrando APIs y SQL, construyó un dashboard de KPIs para el CEO (KPIs por dirección y proyección de horas ahorradas), diseño de blueprints de automatización del ciclo de leads en Zoho CRM, coordinación y capacitación del equipo de ventas y 2 analistas de CRM, campañas de SEO, paid media y email marketing.
- Consultor Freelance (ene 2023 - may 2024): marketing digital para sectores médico e industrial, estrategia, redes, publicidad, branding y desarrollo de sitios web.
- Fundador y Director Creativo en Kraken Mkt Studio (ene 2016 - oct 2022, ~7 años): agencia creativa en Baja California (automotriz, inmobiliario, gastronómico, médico), dirección creativa de campañas audiovisuales, branding y contenido, gestión de leads, SEO y estrategia en redes. Dirigió un equipo de hasta 12 personas (creativos, fotógrafos, community managers). Clientes: Mazda, BMW, Mini Cooper, Carl Zeiss, BBVA, Forbes, Produce Pay, Chef Javier Plascencia, entre +70 marcas.

Proyectos propios (construidos por él):
- Bot de generación de leads: scrapea negocios de Google Maps, detecta y evalúa su sitio web, enriquece con rating, reseñas, ciudad y correo, los califica por score y los deja en un CRM. Corre solo cada día. Stack: Google Maps, Apify, Next.js, Neon, Cron.
- Agente de ventas con IA + Zoho CRM (voicebot): atiende y califica llamadas inbound con IA (Gemini Live + Twilio), resuelve dudas y registra cada lead en Zoho CRM, con dashboard de métricas. Stack: Gemini Live, Twilio, Zoho CRM, Neon.
- Narrativa: SaaS propio en producción, un sitio que se personaliza por lead, con agente de voz y CRM.
- inmobiq: inteligencia inmobiliaria por zona (Tijuana) que cruza precios por m² con el Censo INEGI para dar score de oportunidad, riesgo y cap rate. Stack: Next.js, Supabase, INEGI, Mapbox.
- Vértice: sitio y CRM inmobiliario comercial e industrial (Grupo Rentasa), con cotizador ROI, filtros y mapa de México.
- Automatización de leads en Zoho CRM + Zapier (webhooks a Slack y correo).

Metodología: Jobs To Be Done, Customer Journey, Blue Ocean Strategy.

Herramientas: Claude, Claude Code, prompting, Weavy.ai, Replicate, Apify, web scraping, Google Maps, Zoho CRM, Zapier, Make, Asana, Meta/Google/LinkedIn Ads, Semrush, Mailchimp, MS Clarity, Webflow, GitHub, Vercel, Supabase, Neon, APIs, Premiere, Photoshop, Lightroom.

Formación: Lic. en Mercadotecnia, Universidad Autónoma de Baja California (2013-2017). Estancia académica en la Universidad de La Coruña, España (2015-2016).
`.trim();

function systemPrompt(variant: string): string {
  const foco =
    variant === "inmobiliario"
      ? "Si preguntan por su perfil general, resalta su experiencia en marketing inmobiliario y comercial, y la tecnología del sector que ha construido (Vértice, inmobiq)."
      : "Si preguntan por su perfil general, resalta su trabajo con IA, automatización y generación de leads.";
  return `Eres el asistente del CV de Oscar Arredondo. Respondes preguntas de reclutadores sobre su experiencia, con base ÚNICAMENTE en la información de abajo.

Reglas:
- Responde en el mismo idioma en que te escriben (español o inglés).
- Sé concreto y breve (2-5 frases). Habla de Oscar en tercera persona.
- NO inventes datos, cifras, fechas, clientes ni resultados que no estén abajo. Si no sabes algo, dilo con naturalidad y sugiere escribirle a oscar.amayoral@gmail.com.
- Solo hablas de Oscar y su trabajo. Si preguntan otra cosa, redirige con amabilidad.
- Sin frases vendehumos ni exageración. Tono de colega que explica, no de folleto.
- ${foco}

--- INFORMACIÓN DEL CV ---
${CV_CONTEXT}`;
}

async function verifyTurnstile(token: string, secret: string, ip: string): Promise<boolean> {
  if (!token) return false;
  const body = new FormData();
  body.append("secret", secret);
  body.append("response", token);
  if (ip) body.append("remoteip", ip);
  const res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", { method: "POST", body });
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

async function checkRateLimit(kv: KVNamespace | undefined, ip: string): Promise<boolean> {
  if (!kv || !ip) return true; // sin KV, Turnstile es la única barrera
  const day = new Date().toISOString().slice(0, 10);
  const key = `rl:${ip}:${day}`;
  const current = parseInt((await kv.get(key)) ?? "0", 10);
  if (current >= DAILY_LIMIT) return false;
  await kv.put(key, String(current + 1), { expirationTtl: 60 * 60 * 24 });
  return true;
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json" } });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === "/api/chat") {
      if (request.method !== "POST") return json({ error: "method_not_allowed" }, 405);

      let payload: { messages?: { role: string; content: string }[]; turnstileToken?: string; variant?: string };
      try {
        payload = await request.json();
      } catch {
        return json({ error: "bad_request" }, 400);
      }

      const ip = request.headers.get("cf-connecting-ip") ?? "";

      const ok = await verifyTurnstile(payload.turnstileToken ?? "", env.TURNSTILE_SECRET_KEY, ip);
      if (!ok) return json({ error: "verification_failed" }, 403);

      const allowed = await checkRateLimit(env.RL, ip);
      if (!allowed) return json({ error: "rate_limited" }, 429);

      const messages = Array.isArray(payload.messages) ? payload.messages : [];
      if (messages.length === 0 || messages.length > MAX_TURNS) return json({ error: "bad_request" }, 400);

      const clean = messages
        .filter((m) => m.role === "user" || m.role === "assistant")
        .map((m) => ({ role: m.role, content: String(m.content).slice(0, MAX_CHARS) }));

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": env.ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
        },
        body: JSON.stringify({
          model: MODEL,
          max_tokens: MAX_TOKENS,
          system: systemPrompt(payload.variant ?? "automatizacion"),
          messages: clean,
        }),
      });

      if (!res.ok) return json({ error: "upstream_error" }, 502);
      const data = (await res.json()) as { content?: { text?: string }[] };
      const reply = data.content?.map((c) => c.text ?? "").join("").trim() ?? "";
      return json({ reply });
    }

    return env.ASSETS.fetch(request);
  },
};
