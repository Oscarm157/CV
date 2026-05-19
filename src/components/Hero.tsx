"use client";

import { motion } from "motion/react";
import { useRef } from "react";
import { useInView, useMotionValue, animate } from "motion/react";
import { useEffect } from "react";

const letterVariants = {
  hidden: { opacity: 0, y: 60, rotateX: -40 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring" as const, stiffness: 380, damping: 20 },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.035, delayChildren: 0.05 } },
};

function AnimatedName({ word }: { word: string }) {
  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="inline-flex"
      style={{ perspective: 800 }}
      aria-label={word}
    >
      {word.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          style={{ display: "inline-block", transformOrigin: "top center" }}
        >
          {char === " " ? " " : char}
        </motion.span>
      ))}
    </motion.span>
  );
}

function StatBig({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const c = animate(motionVal, value, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v).toString(); },
    });
    return c.stop;
  }, [inView, value, motionVal]);
  return (
    <div className="flex flex-col items-center gap-1">
      <span
        ref={ref}
        className="font-display font-black leading-none"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--ink)" }}
      >0</span>
      <span className="font-label text-[9px] uppercase tracking-widest text-ink/50">{label}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen flex overflow-hidden">
      {/* LEFT: text */}
      <div className="flex-1 flex flex-col justify-between px-8 lg:px-14 pt-24 pb-10 relative z-10">
        {/* Mesh gradient */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 0% 60%, rgba(16,185,129,0.06) 0%, transparent 55%)" }} />

        {/* TOP BLOCK */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0, duration: 0.4 }}
            className="font-label text-[10px] uppercase tracking-[0.2em] text-ink/40 mb-6"
          >
            Coordinador CRM · Atisa Group · Tijuana B.C.
          </motion.p>

          <h1
            className="font-display font-black leading-[0.88] tracking-tighter text-ink mb-6"
            style={{ fontSize: "clamp(3.5rem, 8.5vw, 7.5rem)" }}
          >
            <AnimatedName word="OSCAR" />
            <br />
            <AnimatedName word="ARREDONDO" />
          </h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            <span className="font-display font-semibold text-ink/70" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.25rem)" }}>
              Marketing &amp; Growth
            </span>
            <span className="inline-block w-1 h-1 rounded-full bg-amber" />
            <span className="font-display text-ink/40" style={{ fontSize: "clamp(0.95rem, 1.8vw, 1.25rem)" }}>
              CRM · Agentes IA · Automatización
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            <motion.a
              href="#portafolio"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="font-label text-xs uppercase tracking-widest bg-ink text-amber px-7 py-3.5 rounded-full font-bold"
            >
              Ver portafolio
            </motion.a>
            <motion.a
              href="mailto:oscar.amayoral@gmail.com"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="font-label text-xs uppercase tracking-widest border border-ink/15 text-ink px-7 py-3.5 rounded-full font-bold hover:bg-white transition-colors"
            >
              Contactar
            </motion.a>
          </motion.div>
        </div>

        {/* BOTTOM BLOCK */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
        >
          <p className="font-label text-[9px] uppercase tracking-widest text-ink/25 mb-3">Clientes destacados</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1.5">
            {["Mazda", "BMW", "Mini Cooper", "Ruba", "Grupo VEQ", "Chef Javier Plascencia", "Carl Zeiss", "Finca Altozano", "Atisa Group"].map((c) => (
              <span key={c} className="font-label text-[10px] uppercase tracking-wide text-ink/35">{c}</span>
            ))}
          </div>
          <div className="mt-5 pt-5 border-t border-ink/8">
            <p className="font-label text-[10px] uppercase tracking-widest text-ink/25">
              oscar.amayoral@gmail.com · 664 731 26 95
            </p>
          </div>
        </motion.div>
      </div>

      {/* RIGHT: amber panel */}
      <motion.div
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex w-[38%] flex-col justify-between relative overflow-hidden"
        style={{ background: "var(--amber)" }}
      >
        {/* Decorative circles */}
        <div className="absolute top-[-80px] right-[-80px] w-[320px] h-[320px] rounded-full"
          style={{ background: "rgba(255,255,255,0.12)" }} />
        <div className="absolute bottom-[-60px] left-[-60px] w-[240px] h-[240px] rounded-full"
          style={{ background: "rgba(0,0,0,0.06)" }} />
        <div className="absolute top-[40%] left-[10%] w-[120px] h-[120px] rounded-full"
          style={{ background: "rgba(255,255,255,0.08)" }} />

        {/* Top label */}
        <div className="relative z-10 px-10 pt-24 pb-4">
          <p className="font-label text-[10px] uppercase tracking-[0.2em] text-ink/50">En cifras</p>
        </div>

        {/* Stats — fill remaining vertical space */}
        <div className="relative z-10 flex flex-col items-center justify-evenly flex-1 py-4">
          <StatBig value={9} label="Años de exp." />
          <div className="w-16 h-px bg-ink/20" />
          <StatBig value={15} label="Personas dirigidas" />
          <div className="w-16 h-px bg-ink/20" />
          <StatBig value={8} label="Industrias" />
        </div>

        {/* Bottom: industries */}
        <div className="relative z-10 px-10 pb-10">
          <p className="font-label text-[9px] uppercase tracking-widest text-ink/40 mb-3">Sectores</p>
          <div className="flex flex-wrap gap-1.5">
            {["Automotriz", "Inmobiliario", "Médico", "Gastronómico", "Industrial", "CRM", "IA"].map(s => (
              <span key={s} className="font-label text-[9px] uppercase tracking-wide bg-ink/10 text-ink/70 px-2.5 py-1 rounded-full">
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
