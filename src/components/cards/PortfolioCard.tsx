"use client";

import { motion } from "motion/react";
import { Film, Camera, PenTool, ArrowUpRight } from "lucide-react";
import { cardVariants } from "../BentoGrid";
import { useLanguage } from "@/context/LanguageContext";

const links = {
  es: [
    {
      label: "Video",
      sublabel: "Producción",
      desc: "Spots y contenido audiovisual para marcas internacionales",
      cta: "Ver trabajo",
      href: "https://drive.google.com/drive/folders/1YdN7X_0a04WcTK3i0o9HBkBLwZ6Zmtyg?usp=sharing",
      Icon: Film,
      accent: "#6B5CE7",
      num: "01",
    },
    {
      label: "Fotografía",
      sublabel: "Comercial",
      desc: "Sesiones publicitarias para automotriz, gastronomía y moda",
      cta: "Ver trabajo",
      href: "https://drive.google.com/drive/folders/1LCHCFkNIYMVhNQEqVJ70p2ewZ4S3S7U0?usp=sharing",
      Icon: Camera,
      accent: "#059669",
      num: "02",
    },
    {
      label: "Diseño",
      sublabel: "Gráfico",
      desc: "Branding, identidad visual y piezas digitales",
      cta: "Ver trabajo",
      href: "https://drive.google.com/drive/folders/1EX2owUMIZdZnIS0APjwi3cPH8Q3EJHOz?usp=sharing",
      Icon: PenTool,
      accent: "#D97706",
      num: "03",
    },
  ],
  en: [
    {
      label: "Video",
      sublabel: "Production",
      desc: "Spots and video content for international brands",
      cta: "View work",
      href: "https://drive.google.com/drive/folders/1YdN7X_0a04WcTK3i0o9HBkBLwZ6Zmtyg?usp=sharing",
      Icon: Film,
      accent: "#6B5CE7",
      num: "01",
    },
    {
      label: "Photography",
      sublabel: "Commercial",
      desc: "Ad shoots for automotive, food, and fashion clients",
      cta: "View work",
      href: "https://drive.google.com/drive/folders/1LCHCFkNIYMVhNQEqVJ70p2ewZ4S3S7U0?usp=sharing",
      Icon: Camera,
      accent: "#059669",
      num: "02",
    },
    {
      label: "Design",
      sublabel: "Graphic",
      desc: "Branding, visual identity, and digital assets",
      cta: "View work",
      href: "https://drive.google.com/drive/folders/1EX2owUMIZdZnIS0APjwi3cPH8Q3EJHOz?usp=sharing",
      Icon: PenTool,
      accent: "#D97706",
      num: "03",
    },
  ],
};

const labels = {
  es: { eyebrow: "Portafolio Creativo", badge: "Google Drive" },
  en: { eyebrow: "Creative Work", badge: "Google Drive" },
};

export default function PortfolioCard() {
  const { lang } = useLanguage();
  const t = labels[lang];
  const list = links[lang];

  return (
    <motion.div
      id="portafolio"
      variants={cardVariants}
      className="md:col-span-3 rounded-[20px] overflow-hidden"
      style={{ background: "var(--paper)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="px-6 pt-5 pb-5 flex items-center justify-between relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute right-0 top-0 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "rgba(245,158,11,0.08)", transform: "translate(30%, -30%)" }} />
        <p className="font-label text-[15px] uppercase tracking-widest text-white relative z-10">{t.eyebrow}</p>
        <span className="font-label text-[15px] uppercase tracking-widest text-white relative z-10">{t.badge}</span>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {list.map(({ label, sublabel, desc, cta, href, Icon, accent, num }, i) => (
          <motion.a
            key={label + sublabel}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 24 }}
            whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.08)" }}
            className="group relative rounded-2xl overflow-hidden flex flex-col"
            style={{
              background: "#FFFFFF",
              border: "1px solid rgba(15,23,42,0.07)",
              minHeight: 190,
            }}
          >
            {/* Colored top bar */}
            <div className="h-1 w-full flex-shrink-0" style={{ background: accent }} />

            <div className="p-5 flex flex-col gap-3 flex-1">
              {/* Number + icon row */}
              <div className="flex items-center justify-between">
                <span className="font-display font-black text-ink/8 text-5xl leading-none select-none">{num}</span>
                <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ background: `${accent}12` }}>
                  <Icon size={17} color={accent} strokeWidth={1.7} />
                </div>
              </div>

              {/* Text */}
              <div className="flex-1">
                <p className="font-label text-xs uppercase tracking-widest mb-0.5" style={{ color: accent }}>
                  {sublabel}
                </p>
                <p className="font-display font-bold text-ink text-xl leading-tight">{label}</p>
                <p className="font-grotesk text-sm text-ink/60 mt-1.5 leading-snug">{desc}</p>
              </div>

              {/* CTA */}
              <div className="flex items-center gap-1 font-label text-xs uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100 transition-opacity duration-200"
                style={{ color: accent }}>
                {cta} <ArrowUpRight size={13} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
