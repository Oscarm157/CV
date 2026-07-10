/**
 * POST /api/chat — chat "pregúntale a mi CV" (Anthropic Haiku).
 * Corre como Serverless Function en Vercel. La key vive solo en env del server.
 * Anti-abuso: Vercel BotID (checkBotId). Única env var: ANTHROPIC_API_KEY.
 */

import { checkBotId } from "botid/server";

const MODEL = "claude-haiku-4-5-20251001";
const MAX_TOKENS = 500;
const MAX_TURNS = 12;
const MAX_CHARS = 700;

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

export async function POST(request: Request) {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json({ error: "not_configured" }, { status: 503 });
  }

  const verification = await checkBotId();
  if (verification.isBot) {
    return Response.json({ error: "verification_failed" }, { status: 403 });
  }

  let payload: { messages?: { role: string; content: string }[]; variant?: string };
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  const messages = Array.isArray(payload.messages) ? payload.messages : [];
  if (messages.length === 0 || messages.length > MAX_TURNS) {
    return Response.json({ error: "bad_request" }, { status: 400 });
  }

  const clean = messages
    .filter((m) => m.role === "user" || m.role === "assistant")
    .map((m) => ({ role: m.role, content: String(m.content).slice(0, MAX_CHARS) }));

  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: MAX_TOKENS,
      system: systemPrompt(payload.variant ?? "automatizacion"),
      messages: clean,
    }),
  });

  if (!res.ok) return Response.json({ error: "upstream_error" }, { status: 502 });
  const data = (await res.json()) as { content?: { text?: string }[] };
  const reply = data.content?.map((c) => c.text ?? "").join("").trim() ?? "";
  return Response.json({ reply });
}
