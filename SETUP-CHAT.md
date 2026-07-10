# Setup del chat "Pregúntale a mi CV" (Vercel)

El chat es un Route Handler de Next (`src/app/api/chat/route.ts`) que Vercel corre como Serverless Function. La UI ya está en vivo; solo falta poner 3 variables de entorno en Vercel. La API key vive solo en el server, nunca en el bundle ni en el repo.

## 1. Crear las llaves (en tus cuentas)
- **Anthropic:** console.anthropic.com → API Keys → crea una. Ponle un **límite de gasto mensual** (usa Haiku, barato).
- **Turnstile:** dashboard de Cloudflare → Turnstile → Add site (dominio del CV), modo *Managed*. Te da **site key** (pública) y **secret key** (privada).

## 2. Meter las 3 variables en Vercel
Dos caminos, el que prefieras. Los valores NO pasan por el chat.

**Dashboard (más simple):** proyecto del CV → Settings → Environment Variables → agrega para *Production* (y Preview si quieres):
| Nombre | Valor |
|---|---|
| `ANTHROPIC_API_KEY` | tu key de Anthropic |
| `TURNSTILE_SECRET_KEY` | secret key de Turnstile |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | site key de Turnstile |

**CLI (corre tú con `!` para que tu input no toque el chat):**
```
! npx vercel link
! npx vercel env add ANTHROPIC_API_KEY production
! npx vercel env add TURNSTILE_SECRET_KEY production
! npx vercel env add NEXT_PUBLIC_TURNSTILE_SITE_KEY production
```

## 3. Redeploy
La site key se inyecta en el build, así que hay que redeployar después de agregarla:
- Dashboard: Deployments → Redeploy el último, **o**
- `! npx vercel --prod`

## 4. Verificar
- Abre el CV → "Pregúntale a mi CV" → manda una pregunta: debe responder.
- La key no está en el bundle (solo server). Turnstile exige verificación en cada mensaje.

## Guardrails ya en el código
- Modelo barato (Haiku), `max_tokens` 500, máximo 12 turnos, 700 chars por mensaje.
- System prompt anclado al CV real (no inventa, solo habla de Oscar, responde en el idioma del que pregunta).
- Turnstile obligatorio en cada mensaje.
- Si quieres tope duro por IP/día, se agrega con Vercel KV o Upstash (dime y lo pongo).
