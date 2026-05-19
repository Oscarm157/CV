"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";

const frameworks = [
  {
    name: "Jobs To Be Done",
    abbr: "JTBD",
    color: "#6B5CE7",
    desc: "Entender qué trabajo real contrata el cliente cuando elige un producto o servicio, no solo lo que dice querer.",
    example: "Alguien que compra casa no busca metros cuadrados: busca seguridad para su familia y estatus. Eso cambia el mensaje, el canal y el cierre.",
  },
  {
    name: "Design Thinking",
    abbr: "DT",
    color: "#059669",
    desc: "Empatizar con el usuario antes de proponer soluciones. Definir el problema real, idear, prototipar y testear antes de ejecutar a escala.",
    example: "Antes de diseñar una campaña de leads, entrevisto al equipo de ventas para saber qué fricción tienen con los prospectos que ya llegan.",
  },
  {
    name: "Blue Ocean Strategy",
    abbr: "BOS",
    color: "#0284C7",
    desc: "Crear espacios de mercado propios en lugar de pelear por los existentes. Diferenciación y valor simultáneos hacen irrelevante a la competencia directa.",
    example: "En Kraken me enfoqué en industrias sin producción audiovisual de calidad — gastronómica y médica — donde no había con quién competir por precio.",
  },
];

export default function FrameworksCard() {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 14px 36px rgba(0,0,0,0.09)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-2 bg-white rounded-[20px]"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="px-6 pt-5 pb-4 border-b border-ink/6">
        <p className="font-label text-xs uppercase tracking-widest text-ink/40">Metodología</p>
        <p className="font-grotesk text-sm text-ink/55 mt-1">La base de cómo abordo cada proyecto</p>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
        {frameworks.map(({ name, abbr, color, desc, example }, i) => (
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
              <p className="font-label text-xs uppercase tracking-widest mb-1" style={{ color }}>Ejemplo</p>
              <p className="font-grotesk text-xs text-ink/65 leading-relaxed italic">{example}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
