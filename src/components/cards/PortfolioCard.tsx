"use client";

import { motion } from "motion/react";
import { Film, Camera, PenTool, ArrowUpRight } from "lucide-react";
import { cardVariants } from "../BentoGrid";

const links = [
  {
    label: "Producción de Video",
    desc: "Spots y contenido audiovisual para marcas",
    href: "https://drive.google.com/drive/folders/1YdN7X_0a04WcTK3i0o9HBkBLwZ6Zmtyg?usp=sharing",
    Icon: Film,
    color: "#9999FF",
    bg: "rgba(153,153,255,0.08)",
  },
  {
    label: "Fotografía Profesional",
    desc: "Sesiones comerciales y publicitarias",
    href: "https://drive.google.com/drive/folders/1LCHCFkNIYMVhNQEqVJ70p2ewZ4S3S7U0?usp=sharing",
    Icon: Camera,
    color: "#10B981",
    bg: "rgba(16,185,129,0.08)",
  },
  {
    label: "Diseño Gráfico",
    desc: "Branding, identidad y piezas digitales",
    href: "https://drive.google.com/drive/folders/1EX2owUMIZdZnIS0APjwi3cPH8Q3EJHOz?usp=sharing",
    Icon: PenTool,
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
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
        <span className="font-label text-xs uppercase tracking-widest text-ink/50">Google Drive</span>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {links.map(({ label, desc, href, Icon, color, bg }, i) => (
          <motion.a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            whileHover={{ y: -3, boxShadow: "0 8px 20px rgba(0,0,0,0.07)" }}
            className="group rounded-2xl p-5 flex flex-col gap-3 transition-colors"
            style={{ background: bg }}
          >
            <div className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: `${color}18` }}>
              <Icon size={18} color={color} strokeWidth={1.8} />
            </div>
            <div>
              <p className="font-display font-semibold text-ink text-sm leading-snug">{label}</p>
              <p className="font-grotesk text-sm text-ink/70 mt-0.5">{desc}</p>
            </div>
            <span className="flex items-center gap-1 font-label text-xs opacity-40 group-hover:opacity-100 transition-opacity mt-auto"
              style={{ color }}>
              Ver trabajo <ArrowUpRight size={13} />
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
