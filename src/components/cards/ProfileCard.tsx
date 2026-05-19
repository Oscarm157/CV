"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  es: {
    eyebrow: "Perfil",
    headline: "Mercadólogo · Estratega Digital · Orquestador de IA",
    p1: "Me gusta resolver problemas complejos. +10 años cubriendo el customer journey completo: generación de leads, contenido audiovisual, SEO, redes sociales y CRM. Construyo confianza en cada punto de contacto y la convierto en ventas. Trabajo mejor cuando el proyecto importa.",
    p2: "Fundé Kraken Mkt Studio (2016–2022), equipo de hasta 15 personas, con clientes como Mazda, BMW, Ruba y Chef Javier Plascencia. En Atisa Group diseño blueprints de automatización, lideré el dashboard de adopción de IA presentado al CEO y tengo en curso un agente de atención y filtrado de leads.",
    tags: [
      "Estrategia Digital", "Customer Journey", "Generación de Leads",
      "CRM", "Automatización", "Blueprints", "SEO / SEM", "Meta / Google / LinkedIn Ads",
      "Contenido Audiovisual", "Email Marketing", "Branding", "Gestión de Equipos",
    ],
  },
  en: {
    eyebrow: "About",
    headline: "Marketer · Digital Strategist · AI Builder",
    p1: "Built to solve complex problems. 10+ years across the full customer journey: lead generation, video content, SEO, social media, and CRM. I build trust at every touchpoint and turn it into sales. My best work comes when the project actually matters.",
    p2: "Founded Kraken Mkt Studio (2016–2022), a 15-person creative agency working with Mazda, BMW, Chef Javier Plascencia and others. At Atisa Group I design automation blueprints, led the AI adoption dashboard for the CEO, and am shipping an AI agent for lead response and filtering.",
    tags: [
      "Digital Strategy", "Customer Journey", "Lead Generation",
      "CRM", "Automation", "Blueprints", "SEO / SEM", "Meta / Google / LinkedIn Ads",
      "Video Content", "Email Marketing", "Branding", "Team Leadership",
    ],
  },
};

export default function ProfileCard() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 14px 36px rgba(0,0,0,0.09)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-8 rounded-[20px] overflow-hidden"
      style={{ background: "var(--paper)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      {/* Header dark */}
      <div className="px-6 pt-5 pb-5 relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute right-0 top-0 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "rgba(245,158,11,0.10)", transform: "translate(30%, -30%)" }} />
        <p className="font-label text-[15px] uppercase tracking-widest text-white mb-1.5 relative z-10">{t.eyebrow}</p>
        <p className="font-display font-bold text-white text-lg relative z-10">
          {t.headline}
        </p>
      </div>

      {/* Body */}
      <div className="px-6 py-5">
        <p className="font-grotesk text-base text-ink font-medium leading-relaxed mb-4">
          {t.p1}
        </p>
        <p className="font-grotesk text-sm text-ink/80 leading-relaxed mb-5">
          {t.p2}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {t.tags.map((tag) => (
            <span key={tag} className="font-label text-xs uppercase tracking-wide text-ink/75 bg-ink/6 px-2.5 py-1.5 rounded-lg">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
