"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ImageIcon } from "lucide-react";
import { cardVariants } from "../BentoGrid";
import { useLanguage } from "@/context/LanguageContext";

type Project = {
  title: { es: string; en: string };
  desc: { es: string; en: string };
  tools: string[];
  image?: string;
};

const projects: Project[] = [
  {
    title: { es: "Dashboard de adopción IA", en: "AI adoption dashboard" },
    desc: {
      es: "KPIs por dirección y proyección de horas ahorradas. Presentado al CEO de Atisa Group.",
      en: "KPIs by department and projected hours saved. Presented to Atisa Group CEO.",
    },
    tools: ["Claude Code", "Next.js", "Supabase"],
    image: undefined,
  },
  {
    title: { es: "Blueprint de leads en Zoho CRM", en: "Zoho CRM lead blueprint" },
    desc: {
      es: "Automatización del ciclo completo: captura, asignación, seguimiento y cierre.",
      en: "Full lead cycle automation: capture, assignment, follow-up, close.",
    },
    tools: ["Zoho CRM", "Deluge", "Email"],
    image: undefined,
  },
  {
    title: { es: "Zaps de operación interna", en: "Internal ops Zaps" },
    desc: {
      es: "Webhooks que conectan formularios, CRM y notificaciones a Slack y correo.",
      en: "Webhooks connecting forms, CRM and Slack/email notifications.",
    },
    tools: ["Zapier", "Webhooks", "Slack"],
    image: undefined,
  },
];

const labels = {
  es: { eyebrow: "Proyectos", sub: "Capturas de trabajos recientes" },
  en: { eyebrow: "Projects", sub: "Screenshots from recent work" },
};

export default function ProjectsCard() {
  const { lang } = useLanguage();
  const t = labels[lang];

  return (
    <motion.div
      id="proyectos"
      variants={cardVariants}
      className="md:col-span-3 rounded-[20px] overflow-hidden"
      style={{ background: "var(--paper)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="px-6 pt-5 pb-5 flex items-center justify-between relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute right-0 top-0 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "rgba(16,185,129,0.08)", transform: "translate(30%, -30%)" }} />
        <p className="font-label text-xs uppercase tracking-widest text-white/60 relative z-10">{t.eyebrow}</p>
        <span className="font-label text-xs uppercase tracking-widest text-white/50 relative z-10">{t.sub}</span>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title.es}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 24 }}
            whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.08)" }}
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{ background: "#FFFFFF", border: "1px solid rgba(15,23,42,0.07)" }}
          >
            {/* Thumbnail */}
            <div className="relative aspect-[16/10] w-full" style={{ background: "var(--ink-2)" }}>
              {p.image ? (
                <Image src={p.image} alt={p.title[lang]} fill className="object-cover" />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <ImageIcon size={22} color="rgba(255,255,255,0.35)" strokeWidth={1.5} />
                  <span className="font-label text-[10px] uppercase tracking-widest text-white/35">
                    {lang === "es" ? "Captura pendiente" : "Screenshot pending"}
                  </span>
                </div>
              )}
            </div>

            {/* Body */}
            <div className="p-4 flex flex-col gap-2 flex-1">
              <p className="font-display font-bold text-ink text-base leading-tight">{p.title[lang]}</p>
              <p className="font-grotesk text-sm text-ink/65 leading-snug">{p.desc[lang]}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {p.tools.map((tool) => (
                  <span key={tool} className="font-label text-[10px] uppercase tracking-wide text-ink/70 bg-ink/6 px-2 py-1 rounded-md">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
