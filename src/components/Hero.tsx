"use client";

import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import { useInView, useMotionValue, animate } from "motion/react";

const letterVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 340, damping: 22 },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.032, delayChildren: 0.05 } },
};

function AnimatedName({ word }: { word: string }) {
  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="inline-flex"
      aria-label={word}
    >
      {word.split("").map((char, i) => (
        <motion.span key={i} variants={letterVariants} style={{ display: "inline-block" }}>
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

function PanelStat({ value, label }: { value: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    const c = animate(motionVal, value, {
      duration: 1.3,
      ease: "easeOut",
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v).toString(); },
    });
    return c.stop;
  }, [inView, value, motionVal]);

  return (
    <div className="flex flex-col items-center text-center">
      <span ref={ref} className="font-display font-black text-ink leading-none" style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}>0</span>
      <span className="font-label text-xs uppercase tracking-widest text-ink/55 mt-1.5">{label}</span>
    </div>
  );
}

const clients = ["Mazda", "BMW", "Mini Cooper", "Ruba", "Grupo VEQ", "Chef Javier Plascencia", "Carl Zeiss", "Finca Altozano", "Atisa Group"];

export default function Hero() {
  return (
    <section className="h-screen flex overflow-hidden">

      {/* LEFT */}
      <div className="flex-1 flex flex-col justify-center px-10 lg:px-16 pt-20 pb-10 gap-0 relative">
        {/* Subtle background tint */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 5% 80%, rgba(16,185,129,0.05) 0%, transparent 55%)" }} />

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="font-label text-xs uppercase tracking-widest text-ink/40 mb-5"
        >
          Coordinador CRM · Atisa Group · Tijuana B.C.
        </motion.p>

        {/* Name */}
        <h1
          className="font-display font-black leading-[0.88] tracking-tighter text-ink"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.8rem)" }}
        >
          <AnimatedName word="OSCAR" />
          <br />
          <AnimatedName word="ARREDONDO" />
        </h1>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.62 }}
          className="flex flex-wrap items-center gap-2.5 mt-5"
        >
          <span className="font-display font-semibold text-ink/75 text-lg">Marketing &amp; Growth</span>
          <span className="w-1 h-1 rounded-full bg-amber inline-block" />
          <span className="font-display text-ink/45 text-lg">CRM · Agentes IA · Automatización</span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.78 }}
          className="flex flex-wrap gap-3 mt-8"
        >
          <motion.a href="#portafolio" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            className="font-label text-xs uppercase tracking-widest bg-ink text-amber px-7 py-3.5 rounded-full font-bold">
            Ver portafolio
          </motion.a>
          <motion.a href="mailto:oscar.amayoral@gmail.com" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}
            className="font-label text-xs uppercase tracking-widest border border-ink/20 text-ink px-7 py-3.5 rounded-full font-bold hover:bg-white transition-colors">
            Contactar
          </motion.a>
        </motion.div>

        {/* Clients */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="mt-10 pt-8 border-t border-ink/8"
        >
          <p className="font-label text-xs uppercase tracking-widest text-ink/30 mb-3">Clientes destacados</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {clients.map((c) => (
              <span key={c} className="font-grotesk text-sm text-ink/40">{c}</span>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="font-grotesk text-sm text-ink/25 mt-4"
        >
          oscar.amayoral@gmail.com · 664 731 26 95
        </motion.p>
      </div>

      {/* RIGHT: amber panel */}
      <motion.div
        initial={{ x: 60, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:flex w-[36%] flex-col pt-20 relative overflow-hidden"
        style={{ background: "var(--amber)" }}
      >
        {/* Single large decorative circle — top right only */}
        <div className="absolute top-[-100px] right-[-100px] w-[380px] h-[380px] rounded-full pointer-events-none"
          style={{ background: "rgba(255,255,255,0.10)" }} />

        {/* Label */}
        <div className="px-10 pt-6 pb-0">
          <p className="font-label text-xs uppercase tracking-widest text-ink/50">En cifras</p>
        </div>

        {/* Stats centered vertically */}
        <div className="flex-1 flex flex-col items-center justify-evenly px-10">
          <PanelStat value={9} label="Años de experiencia" />
          <div className="w-12 h-px bg-ink/15" />
          <PanelStat value={15} label="Personas dirigidas" />
          <div className="w-12 h-px bg-ink/15" />
          <PanelStat value={8} label="Industrias" />
        </div>

        {/* Sectors */}
        <div className="px-10 pb-12">
          <p className="font-label text-xs uppercase tracking-widest text-ink/40 mb-3">Sectores</p>
          <div className="flex flex-wrap gap-1.5">
            {["Automotriz", "Inmobiliario", "Médico", "Gastronómico", "Industrial", "CRM", "IA"].map(s => (
              <span key={s} className="font-label text-xs uppercase tracking-wide bg-ink/10 text-ink/65 px-2.5 py-1 rounded-full">
                {s}
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
