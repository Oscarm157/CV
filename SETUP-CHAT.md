# Setup del chat "Pregúntale a mi CV" (Fase 1)

El chat vive en un Cloudflare Worker (`worker/index.ts`) que envuelve el sitio estático. La UI ya está lista; falta poner las llaves en TU cuenta de Cloudflare y desplegar. Nada de esto va al repo.

## 1. Llaves de Turnstile (anti-abuso, gratis)
En el dashboard de Cloudflare: **Turnstile → Add site** (dominio del CV). Modo *Managed*. Te da:
- **Site key** (pública, va en el build)
- **Secret key** (privada, va como secret del Worker)

## 2. Site key en el build
Crea `/root/cv/.env.local` con:
```
NEXT_PUBLIC_TURNSTILE_SITE_KEY=tu_site_key_publica
```
(La site key NO es secreto, aparece en el HTML; por eso sí puede ir en el build.)

## 3. Secrets del Worker (nunca en repo/chat)
Corre en `/root/cv` (usa el prefijo `!` para que la terminal capture tu input):
```
! npx wrangler secret put ANTHROPIC_API_KEY
! npx wrangler secret put TURNSTILE_SECRET_KEY
```
La API key de Anthropic la sacas de console.anthropic.com. Recomendado: ponle un **límite de gasto mensual** ahí mismo.

## 4. (Opcional) Tope de uso por IP/día
```
! npx wrangler kv namespace create RL
```
Copia el `id` que devuelve y descoméntalo en `wrangler.jsonc` (bloque `kv_namespaces`). Sin esto, el chat solo se gatea con Turnstile (suficiente para empezar).

## 5. Build + deploy
```
npm run build
! npx wrangler deploy
```
`wrangler deploy` sube el Worker + los assets de `out/`. El sitio sigue 100% estático; solo `/api/chat` corre código.

## 6. Verificar
- Abre el CV, clic en "Pregúntale a mi CV", manda una pregunta: debe responder.
- Revisa que la key NO esté en el bundle: `grep -r "sk-ant" out/` (no debe salir nada).
- Prueba el rate-limit y que Turnstile exija verificación.

## Guardrails ya incluidos en el código
- Modelo barato (Haiku), `max_tokens` 500, máximo 12 turnos, 700 chars por mensaje.
- System prompt anclado al CV (no inventa, solo habla de Oscar, responde en el idioma del que pregunta).
- Turnstile obligatorio en cada mensaje; rate-limit por IP/día si activas KV.
