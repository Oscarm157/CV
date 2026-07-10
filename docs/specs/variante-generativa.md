# Spec — Variante "generativa" del CV

## Objetivo
Tercera variante del CV enfocada en IA generativa + audiovisual, sin soltar el core de marketing.
Ángulo elegido por Oscar: **Director creativo + IA generativa** (apalanca 7 años de dirección
de arte/audiovisual en Kraken + capa de IA generativa hoy). Marketing sigue de base.
Detonante: vacante AG Virtual Support (Especialista IA Generativa para contenido creativo,
webinar 90 min, $150-200 usd/hr). La variante debe servir para esta clase de gig, no solo el webinar.

## Fuente de verdad (cerrada con Oscar, NO inventar)
Herramientas reales y defendibles:
- Dirección de arte / composición / iluminación / estilos / consistencia visual → 7 años Kraken (real).
- Imagen IA: **Nano Banana Pro** (2K/4K) vía **Replicate**.
- Video IA (image-to-video): **Kling** (v2.5-turbo-pro) vía Replicate.
- Flujos audiovisuales nodales: **Weavy.ai / Figma Wave**.
- Post: **ffmpeg** (720p, mp4/webm).
- Prompt engineering con ChatGPT / Gemini / Claude.
- Referencias / moodboards / iteración (real).
- Capacitación y adopción de IA: Atisa (real) → cubre "impartir webinar/capacitación ejecutiva".

NO se listan (Oscar no las usa): Midjourney, Adobe Firefly, Runway, Veo.
Replicate = capa de flujos; dentro van Nano Banana, Kling, etc.

## Alcance
- Agregar `"generativa"` al type `Variant` en `src/content/variant.ts` (sin cambiar ACTIVE_VARIANT).
- Ruta de preview `src/app/generativa/page.tsx` (espejo de `/inmobiliario`). Raíz sigue en `automatizacion`.
- Contenido por variante en las 4 tarjetas que ya ramifican:
  - HeroCard: `subtitle.generativa`, `industries.generativa`.
  - ProfileCard: `content.generativa` (headline / p1 / p2 / tags).
  - ProjectsCard: `projectsByVariant.generativa` (6 slots).
  - ExperienceCard: overrides opcionales (resaltar dirección audiovisual de Kraken).
- NO reconstruir la maqueta. Solo contenido + una entrada de ruta.

## Decisión pendiente (bloquea Projects) — assets audiovisuales
Solo existen capturas gen-media de Weavy. Falta material de imagen/video generado.
Ver AskUserQuestion. Opciones: reusar assets ya generados de otros repos / generar mini-showcase
nuevo con Replicate / ambas / arrancar con lo que hay.

## Criterios de aceptación
- `/generativa` renderiza sin error; `/`, `/automatizacion`, `/inmobiliario` intactas.
- `npx tsc --noEmit` limpio (el type union nuevo no rompe los `Record<Variant, ...>`).
- Cero herramientas inventadas: todo tag/proyecto trazable a la fuente de verdad de arriba.
- Cero AI slop en copy (reglas de Oscar). Sin em-dashes.
- Captura real de `/generativa` (Playwright) antes de dar por aprobado.
- Projects con capturas reales en cada slot (o marcado explícito de lo pendiente, no relleno falso).

## Riesgos
- Que la variante quede "flaca" en material audiovisual real → depende de la decisión de assets.
- `Record<Variant, Project[]>` obliga a llenar `generativa`: si falta, no compila (bien, fuerza completar).
