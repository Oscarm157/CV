"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";

const estudios = [
  {
    titulo: "Lic. en Mercadotecnia",
    escuela: "Universidad Autónoma de Baja California",
    periodo: "2013 – 2017",
    lugar: "Tijuana, México",
  },
  {
    titulo: "Estancia Académica",
    escuela: "Universidad de La Coruña",
    periodo: "2015 – 2016",
    lugar: "A Coruña, España",
  },
];

export default function FormacionCard() {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-1 bg-white rounded-[20px] p-8"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <p className="font-label text-[10px] uppercase tracking-widest text-ink/40 mb-5">
        Formación
      </p>

      <div className="flex flex-col gap-5">
        {estudios.map((e, i) => (
          <motion.div
            key={e.escuela}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex items-start gap-2 mb-1">
              <div className="w-1.5 h-1.5 rounded-full bg-amber mt-1.5 shrink-0" />
              <div>
                <p className="font-display font-semibold text-ink text-sm">{e.titulo}</p>
                <p className="font-grotesk text-sm text-ink/60">{e.escuela}</p>
                <div className="flex gap-2 mt-1">
                  <span className="font-label text-[10px] uppercase tracking-widest text-amber">
                    {e.periodo}
                  </span>
                  <span className="font-label text-[10px] uppercase tracking-widest text-ink/30">
                    {e.lugar}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
