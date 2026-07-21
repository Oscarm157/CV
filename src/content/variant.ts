export type Variant = "automatizacion" | "inmobiliario" | "generativa" | "medico";

// Interruptor de la versión activa que se sirve en la raíz "/".
// Cambiar a "inmobiliario" para poner esa versión como principal.
export const ACTIVE_VARIANT: Variant = "medico";
