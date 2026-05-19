"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";

export default function ProfileCard() {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-2 bg-white rounded-[20px] p-8"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <p className="font-label text-[10px] uppercase tracking-widest text-ink/40 mb-4">
        Perfil
      </p>
      <p className="font-grotesk text-ink/80 leading-relaxed text-base max-w-2xl">
        Mercadólogo con 9 años gestionando marcas, equipos y campañas. Hoy orquesto agentes
        de IA, automatizaciones y dashboards en{" "}
        <span className="text-ink font-medium">Atisa Group</span>. Fundador de{" "}
        <span className="text-ink font-medium">Kraken Mkt Studio</span> (2016–2022), donde
        dirigí un equipo de 15 personas y serví a Mazda, BMW, Ruba y Chef Javier Plascencia.
        Lic. en Mercadotecnia por la UABC, con estancia académica en la Universidad de La
        Coruña, España.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {["CRM", "Marketing Digital", "Automatización", "Gestión de Equipos", "Análisis de Datos"].map(
          (tag) => (
            <span
              key={tag}
              className="font-label text-[10px] uppercase tracking-wide text-ink/60 bg-ink/5 px-3 py-1.5 rounded-full"
            >
              {tag}
            </span>
          )
        )}
      </div>
    </motion.div>
  );
}
