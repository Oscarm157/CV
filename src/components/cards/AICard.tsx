"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";

const tags = [
  "Claude", "Claude Code", "Codificación Agéntica",
  "Make / Automatización", "ChatGPT-4", "Midjourney",
  "Prompting Avanzado", "Agentes IA",
];

const tagContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055, delayChildren: 0.3 } },
};
const tagItem = {
  hidden: { opacity: 0, scale: 0.65 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring" as const, stiffness: 500, damping: 22 } },
};

export default function AICard() {
  return (
    <motion.div
      id="ia"
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 20px 50px rgba(15,23,42,0.35)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-1 rounded-[20px] overflow-hidden relative"
      style={{ background: "var(--ink)" }}
    >
      {/* Decorative blobs */}
      <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{ background: "rgba(16,185,129,0.12)" }} />
      <div className="absolute bottom-[-40px] left-[-40px] w-[160px] h-[160px] rounded-full pointer-events-none"
        style={{ background: "rgba(245,158,11,0.06)" }} />

      <div className="relative z-10 p-6 flex flex-col h-full gap-4">
        {/* Badge */}
        <div className="flex items-center gap-2">
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--emerald)" }}
          />
          <span className="font-label text-[11px] uppercase tracking-widest" style={{ color: "var(--emerald)" }}>
            Habilidad emergente
          </span>
        </div>

        <div>
          <p className="font-label text-[11px] uppercase tracking-widest text-white/25 mb-1">AI Lab</p>
          <h3 className="font-display font-bold text-white text-xl">
            IA &amp; Agentes
          </h3>
        </div>

        <p className="font-grotesk text-sm text-white/50 leading-relaxed">
          Orquesto agentes de IA para automatizar flujos de CRM, generar reportes
          y construir herramientas internas con Claude Code.
        </p>

        <motion.div
          variants={tagContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex flex-wrap gap-1.5 mt-auto pt-2"
        >
          {tags.map((tag) => (
            <motion.span
              key={tag}
              variants={tagItem}
              className="font-label text-[11px] uppercase tracking-wide px-2.5 py-1.5 rounded-lg"
              style={{ color: "var(--emerald)", background: "rgba(16,185,129,0.12)" }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
