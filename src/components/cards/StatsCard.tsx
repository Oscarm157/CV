"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, animate } from "motion/react";
import { cardVariants } from "../BentoGrid";

function CountUp({ to, label }: { to: number; label: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const c = animate(motionVal, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => { if (ref.current) ref.current.textContent = Math.round(v).toString(); },
    });
    return c.stop;
  }, [inView, to, motionVal]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-1.5 py-5">
      <span
        ref={ref}
        className="font-display font-black leading-none text-ink tabular-nums"
        style={{ fontSize: "clamp(2.8rem, 5vw, 4.5rem)" }}
      >0</span>
      <span className="font-label text-[9px] uppercase tracking-widest text-ink/50 text-center px-2">{label}</span>
    </div>
  );
}

export default function StatsCard() {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 16px 40px rgba(245,158,11,0.25)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-1 rounded-[20px] overflow-hidden relative"
      style={{ background: "var(--amber)", boxShadow: "0 2px 12px rgba(245,158,11,0.15)" }}
    >
      {/* Decorative circles */}
      <div className="absolute top-[-40px] right-[-40px] w-[160px] h-[160px] rounded-full bg-white/15 pointer-events-none" />
      <div className="absolute bottom-[-30px] left-[-30px] w-[120px] h-[120px] rounded-full bg-black/6 pointer-events-none" />

      <div className="relative z-10 px-5 pt-5">
        <p className="font-label text-[10px] uppercase tracking-widest text-ink/50">En cifras</p>
      </div>

      <div className="relative z-10 flex flex-col divide-y divide-ink/10">
        <CountUp to={9} label="Años de experiencia" />
        <CountUp to={15} label="Personas en equipo" />
        <CountUp to={8} label="Industrias atendidas" />
      </div>
    </motion.div>
  );
}
