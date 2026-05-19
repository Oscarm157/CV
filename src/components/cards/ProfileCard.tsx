"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";

const competencias = [
  "Estrategia Digital", "Customer Journey", "Design Thinking", "Generación de Leads",
  "CRM", "Automatización", "Blueprints", "SEO / SEM", "Facebook / IG / Google Ads",
  "Contenido Audiovisual", "Email Marketing", "Branding", "Gestión de Equipos",
];

export default function ProfileCard() {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 14px 36px rgba(0,0,0,0.09)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-2 rounded-[20px] overflow-hidden"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      {/* Header dark */}
      <div className="px-6 pt-5 pb-5 relative overflow-hidden" style={{ background: "var(--ink)" }}>
        {/* One subtle gradient blob */}
        <div className="absolute right-0 top-0 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "rgba(245,158,11,0.10)", transform: "translate(30%, -30%)" }} />
        <p className="font-label text-xs uppercase tracking-widest text-white/60 mb-1.5 relative z-10">Perfil</p>
        <p className="font-display font-bold text-white text-lg relative z-10">
          Mercadólogo · Estratega Digital · Orquestador de IA
        </p>
      </div>

      {/* Body */}
      <div className="bg-white px-6 py-5">
        <p className="font-grotesk text-base text-ink font-medium leading-relaxed mb-4">
          9 años cubriendo el customer journey completo: generación de leads, contenido audiovisual,
          SEO, redes sociales y CRM. Mi enfoque es estratégico: construir confianza en cada punto
          de contacto y convertirla en ventas. Trabajo mejor cuando el proyecto importa —
          me incomoda entregar algo a medias.
        </p>
        <p className="font-grotesk text-sm text-ink/70 leading-relaxed mb-5">
          Fundé <span className="text-ink font-medium">Kraken Mkt Studio</span> (2016–2022), equipo de hasta
          15 personas, clientes como Mazda, BMW, Ruba y Chef Javier Plascencia. En{" "}
          <span className="text-ink font-medium">Atisa Group</span> diseño blueprints de automatización
          y desarrollo agentes de IA para filtrado y atención rápida de leads.
          Lic. UABC · Estancia en Universidad de La Coruña, España.
        </p>

        <div className="flex flex-wrap gap-1.5">
          {competencias.map((tag) => (
            <span key={tag} className="font-label text-xs uppercase tracking-wide text-ink/75 bg-ink/6 px-2.5 py-1.5 rounded-lg">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
