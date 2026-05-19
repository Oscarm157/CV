"use client";

import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import { useMotionValue, animate } from "motion/react";
import { cardVariants } from "../BentoGrid";

/* ── Letter animation ─────────────────────────────── */
const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "spring" as const, stiffness: 340, damping: 22 },
  },
};
const nameContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
};

function AnimatedName({ word }: { word: string }) {
  return (
    <motion.span variants={nameContainer} initial="hidden" animate="visible" className="inline-flex" aria-label={word}>
      {word.split("").map((char, i) => (
        <motion.span key={i} variants={letterVariants} style={{ display: "inline-block" }}>{char}</motion.span>
      ))}
    </motion.span>
  );
}

/* ── Count-up stat (mounts immediately, no scroll trigger) ── */
function HeroStat({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  useEffect(() => {
    const c = animate(mv, value, {
      duration: 1.4,
      ease: "easeOut",
      delay: 0.5,
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v).toString(); },
    });
    return c.stop;
  }, [value, mv]);
  return (
    <div className="flex flex-col items-center text-center">
      <span ref={ref} className="font-display font-black text-white leading-none text-4xl tabular-nums">0</span>
      <span className="font-label text-xs uppercase tracking-widest text-white/45 mt-2">{label}</span>
    </div>
  );
}

const clients = ["Mazda", "BMW", "Mini Cooper", "Ruba", "Grupo VEQ", "Chef Javier Plascencia", "Carl Zeiss", "Finca Altozano"];

export default function HeroCard() {
  return (
    <motion.div
      variants={cardVariants}
      className="md:col-span-3 rounded-[24px] overflow-hidden flex flex-col md:flex-row"
      style={{ background: "var(--ink)", minHeight: 300 }}
    >
      {/* LEFT — name, subtitle, CTAs, clients */}
      <div className="flex-1 flex flex-col justify-center px-8 md:px-12 py-10 relative overflow-hidden">
        {/* Amber glow top-left */}
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "rgba(245,158,11,0.08)" }} />

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
          className="font-label text-xs uppercase tracking-widest mb-5 relative z-10"
          style={{ color: "var(--amber)" }}
        >
          Coordinador CRM · Atisa Group · Tijuana B.C.
        </motion.p>

        <h1
          className="font-display font-black tracking-tighter text-white leading-[0.88] relative z-10"
          style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)" }}
        >
          <AnimatedName word="OSCAR" />
          <br />
          <AnimatedName word="ARREDONDO" />
        </h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
          className="font-grotesk text-base text-white/55 mt-4 relative z-10"
        >
          Marketing &amp; Growth · CRM · Agentes IA · Automatización
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-3 mt-7 relative z-10"
        >
          <motion.a href="#portafolio" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="font-label text-xs uppercase tracking-widest px-6 py-3 rounded-full font-bold"
            style={{ background: "var(--amber)", color: "var(--ink)" }}>
            Ver portafolio
          </motion.a>
          <motion.a href="mailto:oscar.amayoral@gmail.com" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="font-label text-xs uppercase tracking-widest px-6 py-3 rounded-full font-bold text-white/70 border border-white/15 hover:border-white/30 transition-colors">
            Contactar
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          className="mt-8 pt-6 border-t border-white/8 relative z-10"
        >
          <p className="font-label text-xs uppercase tracking-widest text-white/25 mb-2">Clientes destacados</p>
          <div className="flex flex-wrap gap-x-5 gap-y-1.5">
            {clients.map(c => (
              <span key={c} className="font-grotesk text-sm text-white/35">{c}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* RIGHT — stats panel */}
      <div className="md:w-64 flex flex-col items-center justify-evenly py-10 px-8 border-t md:border-t-0 md:border-l border-white/8 gap-6">
        <p className="font-label text-xs uppercase tracking-widest text-white/30 self-start">En cifras</p>
        <HeroStat value={9} label="Años de experiencia" />
        <div className="w-10 h-px bg-white/10" />
        <HeroStat value={15} label="Personas dirigidas" />
        <div className="w-10 h-px bg-white/10" />
        <HeroStat value={8} label="Industrias" />
        <div className="flex flex-wrap gap-1.5 self-start mt-2">
          {["Automotriz", "Inmobiliario", "Médico", "IA"].map(s => (
            <span key={s} className="font-label text-xs uppercase tracking-wide px-2.5 py-1 rounded-full"
              style={{ background: "rgba(245,158,11,0.12)", color: "var(--amber)" }}>
              {s}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
