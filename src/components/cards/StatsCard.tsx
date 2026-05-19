"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useMotionValue, animate } from "motion/react";
import { cardVariants } from "../BentoGrid";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionVal = useMotionValue(0);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, to, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = Math.round(v) + suffix;
      },
    });
    return controls.stop;
  }, [inView, to, suffix, motionVal]);

  return (
    <span ref={ref} className="tabular-nums">
      0{suffix}
    </span>
  );
}

const stats = [
  { value: 9, suffix: "", label: "Años de experiencia" },
  { value: 15, suffix: "", label: "Personas en equipo" },
  { value: 8, suffix: "", label: "Industrias atendidas" },
];

export default function StatsCard() {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-1 bg-white rounded-[20px] p-8 flex flex-col justify-between gap-6"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      {stats.map((s) => (
        <div key={s.label}>
          <div
            className="font-display font-bold leading-none text-amber"
            style={{ fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
          >
            <CountUp to={s.value} suffix={s.suffix} />
          </div>
          <p className="font-label text-[10px] uppercase tracking-widest text-ink/40 mt-2">
            {s.label}
          </p>
        </div>
      ))}
    </motion.div>
  );
}
