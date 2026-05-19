"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import { useMotionValue, animate } from "motion/react";
import { cardVariants } from "../BentoGrid";
import { useLanguage } from "@/context/LanguageContext";

/* ── Letter animation ── */
const letterVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 340, damping: 22 } },
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

/* ── Count-up stat ── */
function HeroStat({ value, label, size = "lg" }: { value: number; label: string; size?: "sm" | "lg" }) {
  const ref = useRef<HTMLSpanElement>(null);
  const mv = useMotionValue(0);
  useEffect(() => {
    const c = animate(mv, value, {
      duration: 1.4, ease: "easeOut", delay: 0.6,
      onUpdate: (v) => { if (ref.current) ref.current.textContent = `+${Math.round(v)}`; },
    });
    return c.stop;
  }, [value, mv]);
  const valueClass = size === "sm" ? "text-2xl" : "text-4xl";
  const labelClass = size === "sm" ? "text-[10px] mt-0.5" : "text-xs mt-1.5";
  return (
    <div className="flex flex-col items-center text-center">
      <span ref={ref} className={`font-display font-black text-white leading-none tabular-nums ${valueClass}`}>+0</span>
      <span className={`font-label uppercase tracking-widest text-white/70 ${labelClass}`}>{label}</span>
    </div>
  );
}

const clients = {
  es: ["Mazda", "BMW", "Mini Cooper", "Carl Zeiss", "BBVA", "Forbes", "Produce Pay", "Chef Javier Plascencia", "+70 marcas"],
  en: ["Mazda", "BMW", "Mini Cooper", "Carl Zeiss", "BBVA", "Forbes", "Produce Pay", "Chef Javier Plascencia", "+70 brands"],
};

const industries = {
  es: ["Automotriz", "Inmobiliario", "Gastronómico", "Médico", "Financiero", "Agrícola", "Tecnología / TI"],
  en: ["Automotive", "Real Estate", "Food & Beverage", "Medical", "Financial", "Agriculture", "Technology / IT"],
};

const content = {
  es: {
    role: "Coordinador CRM · Atisa Group · Tijuana B.C.",
    subtitle: "Estrategia Digital · Customer Journey · Leads · Automatización · Agentes IA",
    cta1: "Ver portafolio",
    cta2: "Contactar",
    clientsLabel: "Clientes",
    industriesLabel: "Industrias",
    statYrs: "Años exp.",
    statInd: "Industrias",
    available: "Disponible",
  },
  en: {
    role: "CRM Manager · Atisa Group · Tijuana, Mexico",
    subtitle: "Digital Strategy · Customer Journey · Lead Gen · Automation · AI Agents",
    cta1: "See my work",
    cta2: "Get in touch",
    clientsLabel: "Clients",
    industriesLabel: "Industries",
    statYrs: "Yrs exp.",
    statInd: "Industries",
    available: "Available",
  },
};

export default function HeroCard() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <motion.div
      variants={cardVariants}
      className="md:col-span-12 rounded-[24px] overflow-hidden flex flex-col md:flex-row md:min-h-[320px]"
      style={{ background: "var(--ink)" }}
    >
      {/* LEFT — text */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-8 md:px-12 py-8 md:py-10 relative overflow-hidden">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
          style={{ background: "rgba(245,158,11,0.07)" }} />

        {/* Mobile-only: photo + available + stats */}
        <div className="flex md:hidden flex-col gap-4 mb-6 relative z-10">
          <div className="flex items-center gap-4">
            <Image
              src="/oscar.jpg"
              alt="Oscar Arredondo"
              width={80}
              height={80}
              className="rounded-full object-cover object-top w-20 h-20 shrink-0"
              priority
            />
            <span className="font-label text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full font-bold"
              style={{ background: "var(--amber)", color: "var(--ink)" }}>
              {t.available}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <HeroStat value={10} label={t.statYrs} size="sm" />
            <div className="w-px h-8 bg-white/15" />
            <HeroStat value={8} label={t.statInd} size="sm" />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.05 }}
          className="font-label text-xs uppercase tracking-widest mb-5 relative z-10"
          style={{ color: "var(--amber)" }}
        >
          {t.role}
        </motion.p>

        <h1
          className="font-display font-black tracking-tighter text-white leading-[0.88] relative z-10"
          style={{ fontSize: "clamp(2.6rem, 11vw, 5rem)" }}
        >
          <AnimatedName word="OSCAR" />
          <br />
          <AnimatedName word="ARREDONDO" />
        </h1>

        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.65 }}
          className="font-grotesk text-sm md:text-base text-white/80 mt-4 relative z-10"
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
          className="flex flex-wrap gap-3 mt-7 relative z-10"
        >
          <motion.a href="#portafolio" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="font-label text-xs uppercase tracking-widest px-6 py-3 rounded-full font-bold"
            style={{ background: "var(--amber)", color: "var(--ink)" }}>
            {t.cta1}
          </motion.a>
          <motion.a href="mailto:oscar.amayoral@gmail.com" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="font-label text-xs uppercase tracking-widest px-6 py-3 rounded-full font-bold text-white/60 border border-white/15 hover:border-white/30 transition-colors">
            {t.cta2}
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
          className="mt-8 pt-6 border-t border-white/8 relative z-10"
        >
          <p className="font-label text-xs uppercase tracking-widest text-white/50 mb-2">{t.clientsLabel}</p>
          <div className="flex flex-wrap gap-x-3 sm:gap-x-5 gap-y-1.5 mb-4">
            {clients[lang].map(c => (
              <span key={c} className="font-grotesk text-sm text-white/75">{c}</span>
            ))}
          </div>
          <p className="font-label text-xs uppercase tracking-widest text-white/50 mb-2">{t.industriesLabel}</p>
          <div className="flex flex-wrap gap-x-3 sm:gap-x-4 gap-y-1.5">
            {industries[lang].map(ind => (
              <span key={ind} className="font-grotesk text-sm text-white/75">{ind}</span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* RIGHT — photo + stats overlay */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="hidden md:block relative md:w-72 lg:w-80 shrink-0"
      >
        {/* Photo */}
        <Image
          src="/oscar.jpg"
          alt="Oscar Arredondo"
          fill
          className="object-cover object-top"
          priority
        />

        {/* Gradient overlay bottom — stats */}
        <div
          className="absolute inset-x-0 bottom-0 flex flex-col gap-4 px-6 pb-6 pt-16"
          style={{ background: "linear-gradient(to top, rgba(24,24,27,0.95) 60%, transparent)" }}
        >
          <div className="flex items-end justify-center gap-8">
            <HeroStat value={10} label={t.statYrs} />
            <div className="w-px h-8 bg-white/15" />
            <HeroStat value={8} label={t.statInd} />
          </div>
        </div>

        {/* Amber tag top-right */}
        <motion.div
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}
          className="absolute top-4 right-4"
        >
          <span className="font-label text-xs uppercase tracking-widest px-3 py-1.5 rounded-full font-bold"
            style={{ background: "var(--amber)", color: "var(--ink)" }}>
            {t.available}
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
