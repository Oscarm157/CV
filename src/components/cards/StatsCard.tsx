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
    <div className="flex-1 flex flex-col items-center justify-center gap-2 py-6">
      <span ref={ref} className="font-display font-black leading-none text-ink tabular-nums"
        style={{ fontSize: "clamp(2rem, 3vw, 2.8rem)" }}>
        0
      </span>
      <span className="font-label text-xs uppercase tracking-widest text-ink/55 text-center px-3">{label}</span>
    </div>
  );
}

export default function StatsCard() {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 14px 40px rgba(245,158,11,0.22)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-1 rounded-[20px] overflow-hidden relative"
      style={{ background: "var(--amber)", boxShadow: "0 2px 12px rgba(245,158,11,0.15)" }}
    >
      {/* One single circle, top-right */}
      <div className="absolute top-[-60px] right-[-60px] w-[200px] h-[200px] rounded-full pointer-events-none"
        style={{ background: "rgba(255,255,255,0.12)" }} />

      <div className="relative z-10 px-6 pt-5">
        <p className="font-label text-xs uppercase tracking-widest text-ink/50">En cifras</p>
      </div>

      <div className="relative z-10 flex flex-col divide-y divide-ink/10">
        <CountUp to={9} label="+9 Años de experiencia" />
        <CountUp to={8} label="+8 Industrias atendidas" />
      </div>
    </motion.div>
  );
}
