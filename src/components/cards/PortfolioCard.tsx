"use client";

import { motion } from "motion/react";
import { Film, Camera, PenTool, ArrowUpRight } from "lucide-react";
import { cardVariants } from "../BentoGrid";

const links = [
  {
    label: "Video",
    sublabel: "Producción",
    desc: "Spots y contenido audiovisual para marcas internacionales",
    href: "https://drive.google.com/drive/folders/1YdN7X_0a04WcTK3i0o9HBkBLwZ6Zmtyg?usp=sharing",
    Icon: Film,
    accent: "#6B5CE7",
    num: "01",
  },
  {
    label: "Fotografía",
    sublabel: "Comercial",
    desc: "Sesiones publicitarias para automotriz, gastronomía y moda",
    href: "https://drive.google.com/drive/folders/1LCHCFkNIYMVhNQEqVJ70p2ewZ4S3S7U0?usp=sharing",
    Icon: Camera,
    accent: "#059669",
    num: "02",
  },
  {
    label: "Diseño",
    sublabel: "Gráfico",
    desc: "Branding, identidad visual y piezas digitales",
    href: "https://drive.google.com/drive/folders/1EX2owUMIZdZnIS0APjwi3cPH8Q3EJHOz?usp=sharing",
    Icon: PenTool,
    accent: "#D97706",
    num: "03",
  },
];

export default function PortfolioCard() {
  return (
    <motion.div
      id="portafolio"
      variants={cardVariants}
      className="md:col-span-3 bg-white rounded-[20px] overflow-hidden"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="px-6 pt-5 pb-4 border-b border-ink/6 flex items-center justify-between">
        <p className="font-label text-xs uppercase tracking-widest text-ink/40">Portafolio Creativo</p>
        <span className="font-label text-xs uppercase tracking-widest text-ink/40">Google Drive</span>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {links.map(({ label, sublabel, desc, href, Icon, accent, num }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 24 }}
            whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.08)" }}
            className="group relative rounded-2xl bg-white overflow-hidden flex flex-col"
            style={{
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
                Ver trabajo <ArrowUpRight size={13} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
