"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";
import { useLanguage } from "@/context/LanguageContext";

const content = {
  es: {
    eyebrow: "Perfil",
    headline: "Automatización & IA · Generación de Leads · Estratega Digital",
    p1: "Construyo sistemas de IA y automatización para resultados de negocio reales: sourcing y calificación de leads, extracción, limpieza y estructuración de datos, e integración de APIs y SQL. +10 años resolviendo problemas a lo largo del customer journey completo, ahora del lado técnico y de ejecución. Tomo responsabilidad de cada proyecto en el que me involucro.",
    p2: "Por mi cuenta construí un bot de generación de leads que scrapea negocios de Google Maps (Outscraper), enriquece cada uno (sitio web, rating, reseñas, correo), los califica y los mete a un CRM propio, corriendo solo cada día. También un agente de voz inbound (Gemini Live + Twilio) que atiende llamadas, resuelve dudas y registra leads en Zoho CRM. En Atisa Group lidero la adopción de IA para +250 personas: identifico casos de uso, diseño blueprints de automatización de leads y construí un dashboard de KPIs para el CEO.",
    tags: [
      "Lead Generation", "Web Scraping", "Extracción de Datos", "Enriquecimiento", "Agentes de IA",
      "Automatización", "APIs", "SQL", "CRM", "Blueprints",
      "Calificación de Leads", "Estrategia Digital", "Meta / Google / LinkedIn Ads", "SEO / SEM",
    ],
  },
  en: {
    eyebrow: "About",
    headline: "AI & Automation · Lead Generation · Digital Strategist",
    p1: "I build AI and automation systems for real business outcomes: lead sourcing and qualification, data extraction, cleaning and structuring, and API + SQL integration. 10+ years solving problems across the full customer journey, now on the technical, execution side. I take ownership of every project I commit to.",
    p2: "On my own I built a lead-generation bot that scrapes businesses from Google Maps (Outscraper), enriches each one (website, rating, reviews, email), qualifies them and pushes them into a CRM I built, running on a daily schedule. Also an inbound voice agent (Gemini Live + Twilio) that takes calls, answers questions, and logs leads into Zoho CRM. At Atisa Group I lead AI adoption across 250+ people: I identify use cases, design lead-automation blueprints, and built a KPI dashboard for the CEO.",
    tags: [
      "Lead Generation", "Web Scraping", "Data Extraction", "Enrichment", "AI Agents",
      "Automation", "APIs", "SQL", "CRM", "Blueprints",
      "Lead Qualification", "Digital Strategy", "Meta / Google / LinkedIn Ads", "SEO / SEM",
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
