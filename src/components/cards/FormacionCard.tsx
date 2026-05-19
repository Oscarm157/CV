"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";
import { useLanguage } from "@/context/LanguageContext";

const estudios = {
  es: [
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
  ],
  en: [
    {
      titulo: "B.S. in Marketing",
      escuela: "Universidad Autónoma de Baja California",
      periodo: "2013 – 2017",
      lugar: "Tijuana, Mexico",
      flag: "🇲🇽",
    },
    {
      titulo: "Academic Exchange",
      escuela: "Universidad de La Coruña",
      periodo: "2015 – 2016",
      lugar: "A Coruña, Spain",
      flag: "🇪🇸",
    },
  ],
};

const labels = {
  es: "Formación",
  en: "Education",
};

export default function FormacionCard() {
  const { lang } = useLanguage();
  const list = estudios[lang];

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 14px 36px rgba(0,0,0,0.09)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-1 rounded-[20px] overflow-hidden"
      style={{ background: "var(--paper)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="px-6 pt-5 pb-5 relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute right-0 top-0 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: "rgba(245,158,11,0.08)", transform: "translate(30%, -30%)" }} />
        <p className="font-label text-[15px] uppercase tracking-widest text-white relative z-10">{labels[lang]}</p>
      </div>
      <div className="p-6 flex flex-col gap-5">
        {list.map((e, i) => (
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
              <p className="font-grotesk text-sm text-ink/70 mt-0.5">{e.escuela}</p>
              <div className="flex flex-wrap gap-x-2 gap-y-0.5 mt-1.5">
                <span className="font-label text-xs uppercase tracking-widest text-amber">{e.periodo}</span>
                <span className="text-ink/40">·</span>
                <span className="font-label text-xs uppercase tracking-widest text-ink/60">{e.lugar}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
