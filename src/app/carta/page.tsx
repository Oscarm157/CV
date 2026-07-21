import type { Metadata } from "next";
import CoverLetter from "@/components/CoverLetter";

export const metadata: Metadata = {
  title: "Carta de presentación · Oscar Arredondo",
  description: "Carta de presentación de Oscar Arredondo para la vacante de Gerente de Marketing en Kiitos.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return <CoverLetter />;
}
