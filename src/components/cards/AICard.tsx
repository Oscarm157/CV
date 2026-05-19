"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";
import { useLanguage } from "@/context/LanguageContext";

const tags = {
  es: ["Claude", "Claude Code", "Codificación Agéntica", "Zapier", "ChatGPT", "Midjourney", "Prompting Avanzado", "Agentes IA"],
  en: ["Claude", "Claude Code", "Agentic Coding", "Zapier", "ChatGPT", "Midjourney", "Advanced Prompting", "AI Agents"],
};

const content = {
  es: {
    badge: "En producción",
    eyebrow: "AI Lab",
    title: "IA & Agentes",
    body: "Diseño agentes y herramientas de IA para automatizar operaciones reales: CRM, leads, reportes, generación de contenido y flujos internos. Desarrollé el dashboard de adopción de IA de Atisa Group presentado al CEO, la propuesta estratégica de implementación y múltiples plataformas SaaS con Claude Code, Supabase y Vercel.",
  },
  en: {
    badge: "Live",
    eyebrow: "AI Lab",
    title: "AI & Agents",
    body: "I build and deploy AI agents to automate real operations: CRM, lead response, reporting, content generation, and internal workflows. I built Atisa Group's AI adoption dashboard for the CEO, led the strategic AI implementation proposal, and shipped multiple SaaS platforms using Claude Code, Supabase, and Vercel.",
  },
};

const tagContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.2 } },
};
const tagItem = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 500, damping: 22 } },
};

export default function AICard() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <motion.div
      id="ia"
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 16px 44px rgba(15,23,42,0.28)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-1 rounded-[20px] overflow-hidden relative"
      style={{ background: "var(--ink)" }}
    >
      {/* One circle, top-right */}
      <div className="absolute top-[-70px] right-[-70px] w-[220px] h-[220px] rounded-full pointer-events-none"
        style={{ background: "rgba(16,185,129,0.10)" }} />

      <div className="relative z-10 p-6 flex flex-col gap-4 h-full">
        {/* Badge */}
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ background: "var(--emerald)" }}
          />
          <span className="font-label text-xs uppercase tracking-widest" style={{ color: "var(--emerald)" }}>
            {t.badge}
          </span>
        </div>

        <div>
          <p className="font-label text-xs uppercase tracking-widest text-white/55 mb-1">{t.eyebrow}</p>
          <h3 className="font-display font-bold text-white text-xl">{t.title}</h3>
        </div>

        <p className="font-grotesk text-sm text-white/80 leading-relaxed">
          {t.body}
        </p>

        <motion.div
          variants={tagContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-wrap gap-1.5 mt-auto"
        >
          {tags[lang].map((tag) => (
            <motion.span key={tag} variants={tagItem}
              className="font-label text-xs uppercase tracking-wide px-2.5 py-1.5 rounded-lg"
              style={{ color: "var(--emerald)", background: "rgba(16,185,129,0.12)" }}>
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
