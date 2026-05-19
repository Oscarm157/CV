"use client";

import { motion } from "motion/react";

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-14 py-4"
      style={{ background: "rgba(248,247,244,0.88)", backdropFilter: "blur(16px)" }}
    >
      <span className="font-display font-700 text-ink text-sm tracking-tight">
        Oscar Arredondo
      </span>
      <div className="flex items-center gap-6">
        <a href="#experiencia" className="font-label text-[11px] uppercase tracking-widest text-ink/50 hover:text-ink transition-colors">
          Experiencia
        </a>
        <a href="#skills" className="font-label text-[11px] uppercase tracking-widest text-ink/50 hover:text-ink transition-colors">
          Skills
        </a>
        <a href="#ia" className="font-label text-[11px] uppercase tracking-widest text-ink/50 hover:text-ink transition-colors">
          AI Lab
        </a>
        <a href="#contacto" className="font-label text-[11px] uppercase tracking-widest text-ink/50 hover:text-ink transition-colors">
          Contacto
        </a>
        <motion.a
          href="mailto:oscar.amayoral@gmail.com"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="font-label text-[11px] uppercase tracking-widest bg-amber text-ink px-5 py-2 rounded-full font-bold"
        >
          Contactar
        </motion.a>
      </div>
    </motion.nav>
  );
}
