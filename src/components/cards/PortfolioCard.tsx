"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";

const links = [
  {
    label: "Producción de Video",
    desc: "Spots y contenido audiovisual para marcas",
    href: "https://drive.google.com/drive/folders/1YdN7X_0a04WcTK3i0o9HBkBLwZ6Zmtyg?usp=sharing",
    emoji: "🎬",
  },
  {
    label: "Fotografía Profesional",
    desc: "Sesiones comerciales y publicitarias",
    href: "https://drive.google.com/drive/folders/1LCHCFkNIYMVhNQEqVJ70p2ewZ4S3S7U0?usp=sharing",
    emoji: "📷",
  },
  {
    label: "Diseño Gráfico",
    desc: "Branding, identidad y piezas digitales",
    href: "https://drive.google.com/drive/folders/1EX2owUMIZdZnIS0APjwi3cPH8Q3EJHOz?usp=sharing",
    emoji: "🖼️",
  },
];

export default function PortfolioCard() {
  return (
    <motion.div
      id="portafolio"
      variants={cardVariants}
      className="md:col-span-2 bg-white rounded-[20px]"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="px-6 pt-5 pb-4 border-b border-ink/6 flex items-center justify-between">
        <p className="font-label text-xs uppercase tracking-widest text-ink/40">Portafolio</p>
        <span className="font-label text-xs uppercase tracking-widest text-ink/20">Google Drive</span>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -3, boxShadow: "0 8px 20px rgba(0,0,0,0.07)" }}
            className="group rounded-2xl p-5 flex flex-col gap-3 transition-colors"
            style={{ background: "rgba(15,23,42,0.03)" }}
          >
            <span className="text-2xl">{link.emoji}</span>
            <div>
              <p className="font-display font-semibold text-ink text-sm leading-snug">{link.label}</p>
              <p className="font-grotesk text-sm text-ink/40 mt-0.5">{link.desc}</p>
            </div>
            <span className="font-label text-xs text-amber opacity-50 group-hover:opacity-100 transition-opacity mt-auto">
              Ver →
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
