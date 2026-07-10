# Setup del chat "Pregúntale a mi CV" (Fase 1)

El chat vive en un Cloudflare Worker (`worker/index.ts`) que envuelve el sitio estático (`out/`). El resto de rutas siguen siendo estáticas; solo `/api/chat` corre código. La UI ya está lista; falta poner las llaves en TU cuenta de Cloudflare y desplegar. Nada de esto va al repo.

> Tu CV auto-despliega desde `main` (Git). Ojo: **el build corre en Cloudflare**, así que la site key va como variable del build en el dashboard, no en un `.env.local` local.

## 1. Turnstile (anti-abuso, gratis)
Dashboard de Cloudflare → **Turnstile → Add site** (dominio del CV), modo *Managed*. Te da:
- **Site key** (pública, va en el build)
- **Secret key** (privada, va como secret del Worker)

## 2. Anthropic API key
console.anthropic.com → crea una API key. Recomendado: ponle un **límite de gasto mensual** ahí mismo (el chat usa Haiku, barato, pero por si acaso).

## 3. Orden seguro para ir en vivo (evita el chat abierto-pero-roto)

Desde `/root/cv`, en la rama `chat-cv`. El prefijo `!` hace que la terminal capture tu input sin que toque el chat/repo.

**a) Primer deploy manual (crea el Worker sin tocar main):**
```
npm run build
! NEXT_PUBLIC_TURNSTILE_SITE_KEY=tu_site_key npm run build   # inyecta la site key en el build
! npx wrangler deploy
```

**b) Secrets del Worker (ya existe tras el deploy):**
```
! npx wrangler secret put ANTHROPIC_API_KEY
! npx wrangler secret put TURNSTILE_SECRET_KEY
```

**c) (Opcional) Tope de uso por IP/día:**
```
! npx wrangler kv namespace create RL
```
Copia el `id` y descoméntalo en `wrangler.jsonc` (bloque `kv_namespaces`). Sin esto, el chat solo se gatea con Turnstile (suficiente para empezar).

**d) Verifica en la URL `*.workers.dev` que da wrangler:** abre el CV, clic en "Pregúntale a mi CV", manda una pregunta: debe responder. Revisa que la key no esté en el bundle: `grep -r "sk-ant" out/` (vacío).

## 4. Dejar el auto-deploy consistente
Para que el deploy automático de `main` también inyecte la site key:
- Dashboard → tu Worker → **Settings → Build → Variables and Secrets del build**: agrega `NEXT_PUBLIC_TURNSTILE_SITE_KEY` = tu site key.
- (Los secrets `ANTHROPIC_API_KEY` y `TURNSTILE_SECRET_KEY` ya quedaron puestos en el paso 3b; persisten entre deploys.)

Luego mergea `chat-cv` → `main`. El auto-deploy toma la config y sube el Worker ya configurado.

## Guardrails ya incluidos en el código
- Modelo barato (Haiku), `max_tokens` 500, máximo 12 turnos, 700 chars por mensaje.
- System prompt anclado al CV real (no inventa, solo habla de Oscar, responde en el idioma del que pregunta).
- Turnstile obligatorio en cada mensaje; rate-limit por IP/día si activas KV.
