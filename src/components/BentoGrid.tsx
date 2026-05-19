"use client";

import { motion } from "motion/react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 300, damping: 24 },
  },
};

export default function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-4 sm:px-6 pt-20 pb-10" style={{ background: "var(--cream)" }}>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.04 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-[1400px] mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
