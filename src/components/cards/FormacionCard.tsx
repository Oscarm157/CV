"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";

const estudios = [
  {
    titulo: "Lic. en Mercadotecnia",
    escuela: "Universidad Autónoma de Baja California",
    periodo: "2013 – 2017",
    lugar: "Tijuana, México",
    flag: "🇲🇽",
  },
  {
    titulo: "Estancia Académica",
    escuela: "Universidad de La Coruña",
    periodo: "2015 – 2016",
    lugar: "A Coruña, España",
    flag: "🇪🇸",
  },
];

export default function FormacionCard() {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 14px 36px rgba(0,0,0,0.09)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-1 bg-white rounded-[20px]"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="px-6 pt-5 pb-4 border-b border-ink/6">
        <p className="font-label text-xs uppercase tracking-widest text-ink/40">Formación</p>
      </div>
      <div className="p-6 flex flex-col gap-5">
        {estudios.map((e, i) => (
          <motion.div
            key={e.escuela}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.35 }}
            className="flex gap-3"
          >
            <span className="text-2xl mt-0.5">{e.flag}</span>
            <div>
              <p className="font-display font-semibold text-ink text-sm leading-snug">{e.titulo}</p>
              <p className="font-grotesk text-sm text-ink/50 mt-0.5">{e.escuela}</p>
              <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1.5">
                <span className="font-label text-xs uppercase tracking-widest text-amber">{e.periodo}</span>
                <span className="text-ink/20">·</span>
                <span className="font-label text-xs uppercase tracking-widest text-ink/30">{e.lugar}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
