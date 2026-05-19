"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/context/LanguageContext";

const labels = {
  es: { exp: "Experiencia", skills: "Skills", ia: "AI Lab", contact: "Contacto", cta: "Contactar" },
  en: { exp: "Experience", skills: "Skills", ia: "AI Lab", contact: "Contact", cta: "Get in touch" },
};

export default function Nav() {
  const { lang, toggle } = useLanguage();
  const t = labels[lang];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 lg:px-14 py-4"
      style={{ background: "rgba(239,234,224,0.85)", backdropFilter: "blur(16px)" }}
    >
      <span className="font-display font-bold text-ink text-sm tracking-tight">
        Oscar Arredondo
      </span>
      <div className="flex items-center gap-6">
        <a href="#experiencia" className="font-label text-xs uppercase tracking-widest text-ink/50 hover:text-ink transition-colors">
          {t.exp}
        </a>
        <a href="#skills" className="font-label text-xs uppercase tracking-widest text-ink/50 hover:text-ink transition-colors">
          {t.skills}
        </a>
        <a href="#ia" className="font-label text-xs uppercase tracking-widest text-ink/50 hover:text-ink transition-colors">
          {t.ia}
        </a>
        <a href="#contacto" className="font-label text-xs uppercase tracking-widest text-ink/50 hover:text-ink transition-colors">
          {t.contact}
        </a>

        {/* Language toggle */}
        <button
          onClick={toggle}
          className="font-label text-xs uppercase tracking-widest flex items-center gap-1 cursor-pointer"
          aria-label="Toggle language"
        >
          <span className={lang === "es" ? "text-ink" : "text-ink/40"}>ES</span>
          <span className="text-ink/25">/</span>
          <span className={lang === "en" ? "text-ink" : "text-ink/40"}>EN</span>
        </button>

        <motion.a
          href="mailto:oscar.amayoral@gmail.com"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="font-label text-xs uppercase tracking-widest bg-amber text-ink px-5 py-2 rounded-full font-bold"
        >
          {t.cta}
        </motion.a>
      </div>
    </motion.nav>
  );
}
