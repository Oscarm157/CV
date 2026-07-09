"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const labels = {
  es: { exp: "Experiencia", skills: "Skills", ia: "AI Lab", contact: "Contacto", cta: "Contactar" },
  en: { exp: "Experience", skills: "Skills", ia: "AI Lab", contact: "Contact", cta: "Get in touch" },
};

export default function Nav() {
  const { lang } = useLanguage();
  const t = labels[lang];
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    const onResize = () => { if (window.innerWidth >= 768) setOpen(false); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  const links = [
    { href: "#experiencia", label: t.exp },
    { href: "#skills", label: t.skills },
    { href: "#ia", label: t.ia },
    { href: "#contacto", label: t.contact },
  ];

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-14 py-4"
        style={{ background: "rgba(239,234,224,0.85)", backdropFilter: "blur(16px)" }}
      >
        <span className="font-display font-bold text-ink text-sm tracking-tight">
          Oscar Arredondo
        </span>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-label text-xs uppercase tracking-widest text-ink/70 hover:text-ink transition-colors">
              {l.label}
            </a>
          ))}

          <motion.a
            href="mailto:oscar.amayoral@gmail.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-label text-xs uppercase tracking-widest bg-amber text-ink px-5 py-2 rounded-full font-bold"
          >
            {t.cta}
          </motion.a>
        </div>

        {/* Mobile nav */}
        <div className="flex md:hidden items-center gap-2">
          <motion.a
            href="mailto:oscar.amayoral@gmail.com"
            whileTap={{ scale: 0.96 }}
            className="font-label text-[10px] uppercase tracking-widest bg-amber text-ink px-3 py-1.5 rounded-full font-bold"
          >
            {t.cta}
          </motion.a>

          <button
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            className="w-11 h-11 flex items-center justify-center -mr-2 cursor-pointer"
          >
            <Menu size={22} color="var(--ink)" strokeWidth={2} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => { if (e.target === e.currentTarget) setOpen(false); }}
            className="fixed inset-0 z-[60] md:hidden flex flex-col items-stretch px-6 pt-6"
            style={{ background: "rgba(239,234,224,0.96)", backdropFilter: "blur(16px)" }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display font-bold text-ink text-sm tracking-tight">
                Oscar Arredondo
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-11 h-11 flex items-center justify-center -mr-2 cursor-pointer"
              >
                <X size={24} color="var(--ink)" strokeWidth={2} />
              </button>
            </div>

            <nav className="flex flex-col gap-1 mt-12">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                  className="font-display font-bold text-ink text-3xl py-3 border-b border-ink/8"
                >
                  {l.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
