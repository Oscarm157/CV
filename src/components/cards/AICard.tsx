"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";

const tags = [
  "Claude",
  "Claude Code",
  "Codificación Agéntica",
  "Make",
  "ChatGPT-4",
  "Midjourney",
  "Automatización",
  "Prompting",
];

const tagContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.4 } },
};
const tagItem = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, stiffness: 500, damping: 20 },
  },
};

export default function AICard() {
  return (
    <motion.div
      id="ia"
      variants={cardVariants}
      whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(15,23,42,0.3)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-1 rounded-[20px] p-8 flex flex-col"
      style={{ background: "var(--ink)" }}
    >
      <div className="flex items-center gap-2 mb-4">
        <motion.span
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-1.5 h-1.5 rounded-full bg-emerald"
        />
        <span className="font-label text-[10px] uppercase tracking-widest text-emerald">
          Nuevo
        </span>
      </div>

      <p className="font-label text-[10px] uppercase tracking-widest text-white/30 mb-1">
        AI Lab
      </p>
      <h3 className="font-display font-bold text-white text-xl mb-2">
        IA &amp; Agentes
      </h3>
      <p className="font-grotesk text-sm text-white/50 mb-6 leading-relaxed">
        Orquesto agentes de IA para automatizar flujos de CRM, generar reportes y
        construir herramientas internas con Claude Code.
      </p>

      <motion.div
        variants={tagContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        className="flex flex-wrap gap-2 mt-auto"
      >
        {tags.map((tag) => (
          <motion.span
            key={tag}
            variants={tagItem}
            className="font-label text-[10px] uppercase tracking-wide text-emerald bg-emerald/10 px-3 py-1.5 rounded-full"
          >
            {tag}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
