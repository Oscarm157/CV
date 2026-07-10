# Setup del chat "Pregúntale a mi CV" (Vercel)

El chat es un Route Handler de Next (`src/app/api/chat/route.ts`) que Vercel corre como Serverless Function. Anti-abuso con **Vercel BotID** (transparente, sin captcha). La API key vive solo en el server, nunca en el bundle ni en el repo.

## Único paso: la API key de Anthropic
1. console.anthropic.com → API Keys → crea una. Ponle un **límite de gasto mensual** (usa Haiku, barato).
2. Métela en Vercel (el valor NO pasa por el chat):

**CLI** (corre con `!` para que tu input no toque el chat):
```
! npx vercel env add ANTHROPIC_API_KEY production
! npx vercel --prod
```
**O dashboard:** proyecto `cv` → Settings → Environment Variables → `ANTHROPIC_API_KEY` (Production) → luego Redeploy.

## Recomendado: activar BotID Deep Analysis
Dashboard → proyecto `cv` → **Firewall → Rules → habilita "Vercel BotID Deep Analysis"**. Mejora la detección de bots. El chat funciona sin esto, pero es gratis y suma.

## Verificar
- Abre el CV → "Pregúntale a mi CV" → manda una pregunta: debe responder.
- La key no está en el bundle (solo server). BotID bloquea bots automáticamente.

## Guardrails ya en el código
- Modelo barato (Haiku), `max_tokens` 500, máximo 12 turnos, 700 chars por mensaje.
- System prompt anclado al CV real (no inventa, solo habla de Oscar, responde en el idioma del que pregunta).
- Vercel BotID en cada request al endpoint.
