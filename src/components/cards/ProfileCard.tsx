"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";

const competencias = [
  "Marketing Digital", "CRM", "Gestión de Equipos", "Análisis de Datos",
  "Automatización", "Email Marketing", "Facebook / IG / Google Ads",
  "SEO / SEM", "Branding", "Producción de Video",
];

export default function ProfileCard() {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-2 rounded-[20px] overflow-hidden"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
    >
      {/* Colored header strip */}
      <div className="px-7 pt-6 pb-5 relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute right-0 top-0 w-48 h-48 rounded-full"
          style={{ background: "rgba(245,158,11,0.12)", transform: "translate(30%, -30%)" }} />
        <div className="absolute right-20 bottom-0 w-32 h-32 rounded-full"
          style={{ background: "rgba(16,185,129,0.08)", transform: "translate(0, 50%)" }} />
        <p className="font-label text-[10px] uppercase tracking-widest text-white/30 mb-1 relative z-10">Perfil</p>
        <p className="font-display font-bold text-white relative z-10" style={{ fontSize: "1.1rem" }}>
          Mercadólogo · Estratega Digital · Orquestador de IA
        </p>
      </div>

      {/* Body */}
      <div className="bg-white px-7 py-6">
        <p className="font-grotesk text-ink/75 leading-relaxed text-[0.925rem] mb-5">
          9 años gestionando marcas, equipos y campañas en Automotriz, Inmobiliario, Médico y Gastronómico.
          Hoy orquesto agentes de IA, automatizaciones y dashboards en{" "}
          <span className="text-ink font-medium">Atisa Group</span>. Fundé{" "}
          <span className="text-ink font-medium">Kraken Mkt Studio</span> (2016–2022) y dirigí
          un equipo de 15 personas sirviendo a Mazda, BMW, Ruba y Chef Javier Plascencia.
          Lic. UABC · Estancia en Universidad de La Coruña, España.
        </p>

        <div className="flex flex-wrap gap-1.5">
          {competencias.map((tag) => (
            <span
              key={tag}
              className="font-label text-[9px] uppercase tracking-wide text-ink/55 bg-ink/5 px-2.5 py-1.5 rounded-lg"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
