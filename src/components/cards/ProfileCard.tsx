"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  es: {
    eyebrow: "Perfil",
    headline: "Estratega Digital · Consultor de IA · Traductor de Negocio",
    p1: "Trabajo en la frontera entre negocio y tecnología: traduzco IA y automatización a decisiones que las direcciones entienden y adoptan. +10 años resolviendo problemas de negocio a lo largo del customer journey completo: generación de leads, contenido audiovisual, SEO, redes sociales y CRM. Tomo responsabilidad de cada proyecto en el que me involucro.",
    p2: "Fundé Kraken Mkt Studio (2016–2022), equipo de hasta 12 personas, con clientes como Mazda, BMW, Ruba y Chef Javier Plascencia. En Atisa Group lidero la gestión del cambio en la adopción de IA para +250 personas: identifico casos de uso con las direcciones, diseño blueprints de automatización, construí un dashboard de seguimiento para el CEO y tengo en curso un agente de atención y filtrado de leads.",
    tags: [
      "Consultor de IA", "Gestión del Cambio", "Acompañamiento Ejecutivo", "Desarrollo de Agentes",
      "Estrategia Digital", "Customer Journey", "CRM", "Automatización", "Blueprints",
      "SQL", "SEO / SEM", "Meta / Google / LinkedIn Ads", "Email Marketing", "Branding",
    ],
  },
  en: {
    eyebrow: "About",
    headline: "Digital Strategist · AI Consultant · Business Translator",
    p1: "I work at the border between business and technology: I translate AI and automation into decisions that leadership actually understands and adopts. 10+ years solving business problems across the full customer journey: lead generation, video content, SEO, social media, and CRM. I take ownership of every project I commit to.",
    p2: "Founded Kraken Mkt Studio (2016–2022), a 12-person creative agency working with Mazda, BMW, Chef Javier Plascencia and others. At Atisa Group I lead change management for AI adoption across 250+ people: I identify use cases with leadership, design automation blueprints, built a tracking dashboard for the CEO, and am shipping an AI agent for lead response and filtering.",
    tags: [
      "AI Consultant", "Change Management", "Executive Advisory", "Agent Development",
      "Digital Strategy", "Customer Journey", "CRM", "Automation", "Blueprints",
      "SQL", "SEO / SEM", "Meta / Google / LinkedIn Ads", "Email Marketing", "Branding",
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
