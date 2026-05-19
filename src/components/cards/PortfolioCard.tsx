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
    bg: "linear-gradient(135deg, #ede9ff 0%, #d8d0ff 100%)",
  },
  {
    label: "Fotografía",
    sublabel: "Comercial",
    desc: "Sesiones publicitarias para automotriz, gastronomía y moda",
    href: "https://drive.google.com/drive/folders/1LCHCFkNIYMVhNQEqVJ70p2ewZ4S3S7U0?usp=sharing",
    Icon: Camera,
    accent: "#059669",
    bg: "linear-gradient(135deg, #e0f7ef 0%, #c2eedf 100%)",
  },
  {
    label: "Diseño",
    sublabel: "Gráfico",
    desc: "Branding, identidad visual y piezas digitales",
    href: "https://drive.google.com/drive/folders/1EX2owUMIZdZnIS0APjwi3cPH8Q3EJHOz?usp=sharing",
    Icon: PenTool,
    accent: "#D97706",
    bg: "linear-gradient(135deg, #fff8e1 0%, #fde9a0 100%)",
  },
];

export default function PortfolioCard() {
  return (
    <motion.div
      id="portafolio"
      variants={cardVariants}
      className="md:col-span-2 bg-white rounded-[20px] overflow-hidden"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="px-6 pt-5 pb-4 border-b border-ink/6 flex items-center justify-between">
        <p className="font-label text-xs uppercase tracking-widest text-ink/40">Portafolio Creativo</p>
        <span className="font-label text-xs uppercase tracking-widest text-ink/40">Google Drive</span>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {links.map(({ label, sublabel, desc, href, Icon, accent, bg }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 24 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="group relative rounded-2xl p-5 flex flex-col gap-4 overflow-hidden cursor-pointer"
            style={{ background: bg, minHeight: 200 }}
          >
            {/* Glow circle */}
            <div className="absolute -top-8 -right-8 w-28 h-28 rounded-full pointer-events-none transition-opacity duration-300 opacity-30 group-hover:opacity-50"
              style={{ background: `radial-gradient(circle, ${accent}44, transparent 70%)` }} />

            {/* Icon */}
            <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 relative z-10"
              style={{ background: `${accent}22`, border: `1px solid ${accent}33` }}>
              <Icon size={18} color={accent} strokeWidth={1.6} />
            </div>

            {/* Text */}
            <div className="relative z-10 flex-1">
              <p className="font-label text-xs uppercase tracking-widest mb-1" style={{ color: accent }}>
                {sublabel}
              </p>
              <p className="font-display font-bold text-ink text-xl leading-tight">{label}</p>
              <p className="font-grotesk text-sm text-ink/65 mt-2 leading-snug">{desc}</p>
            </div>

            {/* CTA */}
            <div className="relative z-10 flex items-center gap-1.5 font-label text-xs uppercase tracking-widest font-bold transition-all duration-200 opacity-50 group-hover:opacity-100"
              style={{ color: accent }}>
              Ver trabajo
              <motion.span
                animate={{ x: 0 }}
                whileHover={{ x: 3 }}
                className="inline-flex"
              >
                <ArrowUpRight size={14} />
              </motion.span>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
