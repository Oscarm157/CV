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
      example: "Quien compra casa por seguridad familiar necesita un mensaje distinto al inversionista que busca rentabilidad. El mismo inmueble, dos trabajos distintos. Copys genéricos no convierten a ninguno de los dos.",
    },
    {
      name: "Design Thinking",
      abbr: "DT",
      color: "#059669",
      desc: "Empatizar con el usuario antes de proponer soluciones. Definir el problema real, idear, prototipar y testear antes de ejecutar a escala.",
      exampleLabel: "Ejemplo",
      example: "En vez de lanzar una campaña asumiendo qué quiere el cliente, primero lo observas, hablas con él y pruebas un mensaje pequeño antes de invertir el presupuesto completo.",
    },
    {
      name: "Blue Ocean Strategy",
      abbr: "BOS",
      color: "#0284C7",
      desc: "Crear espacios de mercado propios en lugar de pelear por los existentes. Diferenciación y valor simultáneos hacen irrelevante a la competencia directa.",
      exampleLabel: "Ejemplo",
      example: "Netflix no compitió con los videoclubs: creó un modelo de suscripción online que hizo irrelevante ir a rentar un DVD.",
    },
  ],
  en: [
    {
      name: "Jobs To Be Done",
      abbr: "JTBD",
      color: "#6B5CE7",
      desc: "Understanding the real job a customer hires a product to do — not just what they say they want.",
      exampleLabel: "Example",
      example: "Someone buying a home for family security needs a completely different message than an investor chasing returns. Same property, two different jobs. Generic copy converts neither.",
    },
    {
      name: "Design Thinking",
      abbr: "DT",
      color: "#059669",
      desc: "Empathize before you build. Define the real problem, ideate, prototype, and test before scaling.",
      exampleLabel: "Example",
      example: "Instead of launching a campaign based on assumptions, you observe, talk to users, and test a small message before putting the full budget behind it.",
    },
    {
      name: "Blue Ocean Strategy",
      abbr: "BOS",
      color: "#0284C7",
      desc: "Create your own market instead of competing for an existing one. Differentiation and value at the same time make direct competition irrelevant.",
      exampleLabel: "Example",
      example: "Netflix didn't beat Blockbuster — it made the whole concept of renting a DVD irrelevant.",
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
      className="md:col-span-2 rounded-[20px] overflow-hidden"
      style={{ background: "var(--paper)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="px-6 pt-5 pb-5 relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute right-0 top-0 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "rgba(107,92,231,0.10)", transform: "translate(30%, -30%)" }} />
        <p className="font-label text-[15px] uppercase tracking-widest text-white relative z-10">{t.eyebrow}</p>
        <p className="font-grotesk text-base text-white mt-1 relative z-10">{t.sub}</p>
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
              <span className="font-label text-xs uppercase tracking-widest text-ink/40">{name}</span>
            </div>
            <p className="font-grotesk text-sm text-ink/70 leading-relaxed">{desc}</p>
            <div className="rounded-xl px-3 py-2.5" style={{ background: `${color}10` }}>
              <p className="font-label text-xs uppercase tracking-widest mb-1" style={{ color }}>{exampleLabel}</p>
              <p className="font-grotesk text-xs text-ink/65 leading-relaxed italic">{example}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
