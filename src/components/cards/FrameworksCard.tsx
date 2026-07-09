"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";
import { useLanguage } from "@/context/LanguageContext";

const frameworks = {
  es: [
    {
      name: "Jobs To Be Done",
      abbr: "JTBD",
      color: "#6B5CE7",
      desc: "Entender qué trabajo real contrata el cliente cuando elige un producto o servicio, no solo lo que dice querer.",
      exampleLabel: "Ejemplo",
      example: "Quien compra casa por seguridad familiar necesita un mensaje distinto al inversionista que busca rentabilidad. El mismo inmueble, dos trabajos distintos. Un mensaje genérico no le habla a ninguno de los dos.",
    },
    {
      name: "Customer Journey",
      abbr: "CJ",
      color: "#059669",
      desc: "Mapear el recorrido completo del cliente, desde que ve la publicidad hasta la postventa. Cada punto de contacto acerca o aleja el cierre.",
      exampleLabel: "Ejemplo",
      example: "El anuncio promete algo; si la landing y el siguiente paso no lo sostienen, el lead duda y se va. Cada paso tiene que confirmar el anterior.",
    },
    {
      name: "Blue Ocean Strategy",
      abbr: "BOS",
      color: "#0284C7",
      desc: "Crear un espacio de mercado propio en lugar de pelear por los existentes. Cuando ofreces algo distinto y mejor, dejas de competir de frente.",
      exampleLabel: "Ejemplo",
      example: "Netflix no compitió con los videoclubs: creó un modelo de suscripción online que hizo irrelevante ir a rentar un DVD.",
    },
  ],
  en: [
    {
      name: "Jobs To Be Done",
      abbr: "JTBD",
      color: "#6B5CE7",
      desc: "Understanding the real job a customer hires a product to do, not just what they say they want.",
      exampleLabel: "Example",
      example: "Someone buying a home for family security needs a completely different message than an investor chasing returns. Same property, two different jobs. A generic message speaks to neither.",
    },
    {
      name: "Customer Journey",
      abbr: "CJ",
      color: "#059669",
      desc: "Map the full customer path, from first ad to post-sale. Every touchpoint brings the close closer or pushes it away.",
      exampleLabel: "Example",
      example: "The ad promises something; if the landing and the next step don't back it up, the lead hesitates and leaves. Every step has to confirm the last.",
    },
    {
      name: "Blue Ocean Strategy",
      abbr: "BOS",
      color: "#0284C7",
      desc: "Create your own market instead of competing for an existing one. When you offer something different and better, you stop competing head-on.",
      exampleLabel: "Example",
      example: "Netflix didn't beat Blockbuster; it made the whole concept of renting a DVD irrelevant.",
    },
  ],
};

const labels = {
  es: { eyebrow: "Metodología", sub: "La base de cómo abordo cada proyecto" },
  en: { eyebrow: "How I work", sub: "The foundation behind my process" },
};

export default function FrameworksCard() {
  const { lang } = useLanguage();
  const t = labels[lang];
  const list = frameworks[lang];

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 14px 36px rgba(0,0,0,0.09)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-9 rounded-[20px] overflow-hidden"
      style={{ background: "var(--paper)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="px-6 pt-5 pb-5 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute right-0 top-0 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "rgba(107,92,231,0.10)", transform: "translate(30%, -30%)" }} />
        <p className="font-label text-[15px] uppercase tracking-widest text-white relative z-10">{t.eyebrow}</p>
        <p className="font-grotesk text-sm text-white/85 relative z-10">{t.sub}</p>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {list.map(({ name, abbr, color, desc, exampleLabel, example }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 24 }}
            className="rounded-2xl p-5 flex flex-col gap-3"
            style={{ background: `${color}08`, border: `1px solid ${color}18` }}
          >
            <div className="flex items-center gap-3">
              <span className="font-display font-black text-2xl" style={{ color }}>{abbr}</span>
              <span className="font-label text-xs uppercase tracking-widest text-ink/70">{name}</span>
            </div>
            <p className="font-grotesk text-sm text-ink/70 leading-relaxed">{desc}</p>
            <div className="rounded-xl px-3 py-2.5" style={{ background: `${color}10` }}>
              <p className="font-label text-xs uppercase tracking-widest mb-1" style={{ color }}>{exampleLabel}</p>
              <p className="font-grotesk text-xs text-ink/80 leading-relaxed italic">{example}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
