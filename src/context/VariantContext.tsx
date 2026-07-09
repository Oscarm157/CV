"use client";

import { createContext, useContext } from "react";
import type { Variant } from "@/content/variant";

const VariantContext = createContext<Variant>("automatizacion");

export function VariantProvider({ variant, children }: { variant: Variant; children: React.ReactNode }) {
  return <VariantContext.Provider value={variant}>{children}</VariantContext.Provider>;
}

export function useVariant() {
  return useContext(VariantContext);
}
