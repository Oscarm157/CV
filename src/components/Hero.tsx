"use client";

import { motion } from "motion/react";

const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 400, damping: 22 },
  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};

function AnimatedWord({ word, className }: { word: string; className?: string }) {
  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`inline-flex ${className}`}
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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-8 pt-24 pb-16 overflow-hidden">
      {/* Mesh gradient background */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 80% 10%, rgba(245,158,11,0.08) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 10% 90%, rgba(16,185,129,0.05) 0%, transparent 60%)",
        }}
      />

      {/* Eyebrow */}
      <motion.p
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.05, duration: 0.4 }}
        className="font-label text-xs uppercase tracking-widest text-ink/40 mb-6"
      >
        Coordinador CRM · Atisa Group · 2024–Presente
      </motion.p>

      {/* Name */}
      <h1
        className="font-display font-bold leading-none tracking-tight text-ink mb-2"
        style={{ fontSize: "clamp(3.5rem, 10vw, 8.5rem)" }}
      >
        <AnimatedWord word="OSCAR" />
        <br />
        <AnimatedWord word="ARREDONDO" className="mt-1 block" />
      </h1>

      {/* Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
        className="mt-6 flex flex-wrap items-center gap-3"
      >
        <span
          className="font-display text-ink/70"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
        >
          Marketing &amp; Growth
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-amber" />
        <span
          className="font-display text-ink/50"
          style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)" }}
        >
          CRM · Agentes IA · Automatización
        </span>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.4 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <motion.a
          href="#portafolio"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="font-label text-sm uppercase tracking-widest bg-amber text-ink px-8 py-4 rounded-full font-bold"
        >
          Ver portafolio
        </motion.a>
        <motion.a
          href="mailto:oscar.amayoral@gmail.com"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
          className="font-label text-sm uppercase tracking-widest bg-white text-ink px-8 py-4 rounded-full font-bold"
          style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
        >
          Contactar
        </motion.a>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.5 }}
        className="absolute bottom-8 left-8 flex items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="w-px h-8 bg-ink/20"
        />
        <span className="font-label text-[10px] uppercase tracking-widest text-ink/30">Scroll</span>
      </motion.div>
    </section>
  );
}
