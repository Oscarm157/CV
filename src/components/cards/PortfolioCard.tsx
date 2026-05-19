"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";

const links = [
  {
    label: "Producción de Video",
    desc: "Spots y contenido audiovisual para marcas",
    href: "https://drive.google.com/drive/folders/1YdN7X_0a04WcTK3i0o9HBkBLwZ6Zmtyg?usp=sharing",
  },
  {
    label: "Fotografía Profesional",
    desc: "Sesiones comerciales y publicitarias",
    href: "https://drive.google.com/drive/folders/1LCHCFkNIYMVhNQEqVJ70p2ewZ4S3S7U0?usp=sharing",
  },
  {
    label: "Diseño Gráfico",
    desc: "Branding, identidad y piezas digitales",
    href: "https://drive.google.com/drive/folders/1EX2owUMIZdZnIS0APjwi3cPH8Q3EJHOz?usp=sharing",
  },
];

export default function PortfolioCard() {
  return (
    <motion.div
      id="portafolio"
      variants={cardVariants}
      className="md:col-span-2 bg-white rounded-[20px] p-8"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <p className="font-label text-[10px] uppercase tracking-widest text-ink/40 mb-5">
        Portafolio
      </p>

      <div className="flex flex-col gap-3">
        {links.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
            whileHover={{ x: 6 }}
            className="group flex items-center justify-between bg-ink/3 hover:bg-amber/8 rounded-2xl px-5 py-4 transition-colors"
          >
            <div>
              <p className="font-display font-semibold text-ink text-sm group-hover:text-ink transition-colors">
                {link.label}
              </p>
              <p className="font-grotesk text-xs text-ink/40 mt-0.5">{link.desc}</p>
            </div>
            <motion.span
              className="text-amber font-mono text-lg opacity-50 group-hover:opacity-100 transition-opacity"
              whileHover={{ x: 3 }}
            >
              →
            </motion.span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
