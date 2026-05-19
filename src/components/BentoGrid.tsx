"use client";

import { motion } from "motion/react";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 280, damping: 22 },
  },
};

export default function BentoGrid({ children }: { children: React.ReactNode }) {
  return (
    <section className="px-4 sm:px-6 lg:px-8 pb-20">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-[1400px] mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
