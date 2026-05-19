"use client";

import { motion } from "motion/react";

export default function Footer() {
  return (
    <motion.footer
      id="contacto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-ink/6"
    >
      <span className="font-display font-bold text-ink text-sm">Oscar Arredondo</span>
      <div className="flex flex-wrap items-center gap-4 sm:gap-6">
        <a
          href="mailto:oscar.amayoral@gmail.com"
          className="font-label text-xs uppercase tracking-widest text-ink/40 hover:text-amber transition-colors"
        >
          oscar.amayoral@gmail.com
        </a>
        <span className="text-ink/20">·</span>
        <a
          href="tel:6647312695"
          className="font-label text-xs uppercase tracking-widest text-ink/40 hover:text-amber transition-colors"
        >
          664 731 26 95
        </a>
        <span className="text-ink/20">·</span>
        <span className="font-label text-xs uppercase tracking-widest text-ink/20">
          Tijuana, B.C.
        </span>
      </div>
      <span className="font-label text-xs uppercase tracking-widest text-ink/20">
        © 2025
      </span>
    </motion.footer>
  );
}
