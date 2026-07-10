"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";
import { useLanguage } from "@/context/LanguageContext";
import { useVariant } from "@/context/VariantContext";

const content = {
  automatizacion: {
    es: {
      eyebrow: "Perfil",
      headline: "Marketing + IA · Estrategia Digital · Generación de Leads",
      p1: "Mercadólogo con +10 años en estrategia digital, generación de leads y CRM a lo largo del customer journey completo. Sumo IA y automatización para ejecutar más rápido: sourcing y calificación de leads, extracción y estructuración de datos, APIs y SQL.",
      p2: "Por mi cuenta construí un bot de generación de leads que scrapea negocios de Google Maps, enriquece cada uno (sitio web, rating, reseñas, correo), los califica y los mete a un CRM propio, corriendo solo cada día. También un agente de voz inbound (Gemini Live + Twilio) que atiende llamadas, resuelve dudas y registra leads en Zoho CRM. En Atisa Group trabajo en el diagnóstico y adopción de IA: identifico casos de uso, diseño blueprints de automatización de leads y construí un dashboard de KPIs para el CEO.",
      tags: [
        "Estrategia Digital", "Marketing de contenidos", "Lead Generation", "Calificación de Leads", "CRM",
        "Meta / Google / LinkedIn Ads", "SEO / SEM", "Agentes de IA", "Automatización", "Web Scraping",
        "Extracción de Datos", "APIs", "SQL", "Blueprints",
      ],
    },
    en: {
      eyebrow: "About",
      headline: "Marketing + AI · Digital Strategy · Lead Generation",
      p1: "Marketer with 10+ years in digital strategy, lead generation and CRM across the full customer journey. I add AI and automation to execute faster: lead sourcing and qualification, data extraction and structuring, APIs and SQL.",
      p2: "On my own I built a lead-generation bot that scrapes businesses from Google Maps, enriches each one (website, rating, reviews, email), qualifies them and pushes them into a CRM I built, running on a daily schedule. Also an inbound voice agent (Gemini Live + Twilio) that takes calls, answers questions, and logs leads into Zoho CRM. At Atisa Group I work on AI diagnosis and adoption: I identify use cases, design lead-automation blueprints, and built a KPI dashboard for the CEO.",
      tags: [
        "Digital Strategy", "Content Marketing", "Lead Generation", "Lead Qualification", "CRM",
        "Meta / Google / LinkedIn Ads", "SEO / SEM", "AI Agents", "Automation", "Web Scraping",
        "Data Extraction", "APIs", "SQL", "Blueprints",
      ],
    },
  },
  inmobiliario: {
    es: {
      eyebrow: "Perfil",
      headline: "Marketing Inmobiliario + Tech · Estrategia Digital · Generación de Leads",
      p1: "Mercadólogo con +10 años, 6+ en inmobiliario: estrategia digital, generación de leads y CRM para desarrolladoras y proyectos de renta y venta. Trabajé el sector de punta a punta, de la captación del comprador al cierre; como broker capto al interesado y lo llevo con el desarrollador.",
      p2: "Además construyo la tecnología del sector: Vértice (sitio y CRM comercial e industrial para Grupo Rentasa), inmobiq (inteligencia de mercado por zona que cruza precios con el Censo INEGI), Narrativa (un sitio por lead con agente de voz) y Vivir en Yucatán (SEO de relocation). Uso IA y automatización para prospectar y calificar leads más rápido.",
      tags: [
        "Sector Inmobiliario", "Renta y Venta", "Marketing Inmobiliario", "Prospección", "Generación de Leads",
        "Estrategia Digital", "CRM", "Meta / Google / LinkedIn Ads", "SEO / SEM", "Cierre",
        "Inteligencia de mercado", "IA aplicada", "Automatización",
      ],
    },
    en: {
      eyebrow: "About",
      headline: "Real Estate Marketing + Tech · Digital Strategy · Lead Generation",
      p1: "Marketer with 10+ years, 6+ in real estate: digital strategy, lead generation and CRM for developers and rental/sale projects. I've worked the sector end to end, from capturing the buyer to closing; as a broker I capture the prospect and hand them to the developer.",
      p2: "I also build the sector's tech: Vértice (commercial and industrial site + CRM for Grupo Rentasa), inmobiq (zone market intelligence crossing prices with Mexico's INEGI Census), Narrativa (a site per lead with a voice agent) and Vivir en Yucatán (relocation SEO). I use AI and automation to prospect and qualify leads faster.",
      tags: [
        "Real Estate", "Rental & Sale", "Real Estate Marketing", "Prospecting", "Lead Generation",
        "Digital Strategy", "CRM", "Meta / Google / LinkedIn Ads", "SEO / SEM", "Closing",
        "Market Intelligence", "Applied AI", "Automation",
      ],
    },
  },
  generativa: {
    es: {
      eyebrow: "Perfil",
      headline: "Dirección de Arte + IA Generativa · Contenido Audiovisual · Marketing",
      p1: "Director creativo con +10 años, 7 al frente de campañas audiovisuales, branding y fotografía para marcas como Mazda, BMW y Mini. Dirijo lo que la IA no resuelve sola: composición, iluminación, estilo y consistencia visual. Hoy produzco imagen y video con IA generativa con ese mismo criterio de dirección de arte.",
      p2: "Genero imagen con Nano Banana Pro (2K/4K) y video image-to-video con Kling, orquestados en Replicate y en flujos nodales de Weavy.ai / Figma Wave; post en ffmpeg. Trabajo por referencias y moodboards, itero prompts hasta la consistencia visual y controlo artefactos y calidad. En Atisa Group acompaño la adopción de IA en las direcciones: identifico casos de uso y capacito equipos.",
      tags: [
        "Dirección de Arte", "IA Generativa", "Imagen con IA", "Video image-to-video", "Prompt Engineering",
        "Consistencia Visual", "Composición / Iluminación", "Contenido Audiovisual", "Branding", "Moodboards / Referencias",
        "Nano Banana Pro", "Kling", "Weavy.ai", "Replicate", "ffmpeg", "Marketing",
      ],
    },
    en: {
      eyebrow: "About",
      headline: "Art Direction + Generative AI · Audiovisual Content · Marketing",
      p1: "Creative director with 10+ years, 7 leading video campaigns, branding and photography for brands like Mazda, BMW and Mini. I direct what AI can't solve on its own: composition, lighting, style and visual consistency. Today I produce image and video with generative AI holding that same art-direction standard.",
      p2: "I generate images with Nano Banana Pro (2K/4K) and image-to-video with Kling, orchestrated in Replicate and in node-based flows on Weavy.ai / Figma Wave; post in ffmpeg. I work from references and moodboards, iterate prompts until visual consistency, and control artifacts and quality. At Atisa Group I support AI adoption across departments: I identify use cases and train teams.",
      tags: [
        "Art Direction", "Generative AI", "AI Image", "Image-to-video", "Prompt Engineering",
        "Visual Consistency", "Composition / Lighting", "Audiovisual Content", "Branding", "Moodboards / References",
        "Nano Banana Pro", "Kling", "Weavy.ai", "Replicate", "ffmpeg", "Marketing",
      ],
    },
  },
};

export default function ProfileCard() {
  const { lang } = useLanguage();
  const variant = useVariant();
  const t = content[variant][lang];

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
