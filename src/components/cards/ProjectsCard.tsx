"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { ImageIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { cardVariants } from "../BentoGrid";
import { useLanguage } from "@/context/LanguageContext";

type Project = {
  title: { es: string; en: string };
  desc: { es: string; en: string };
  tools: string[];
  images?: string[];
};

const projects: Project[] = [
  {
    title: { es: "Dashboard KPIs", en: "KPIs Dashboard" },
    desc: {
      es: "Panel ejecutivo con KPIs operativos: volumen, tasa de resolución, tiempos y tendencias.",
      en: "Executive dashboard with operational KPIs: volume, resolution rate, timing and trends.",
    },
    tools: ["Claude Code", "Next.js", "Supabase"],
    images: ["/screenshots/alfresco-dashboard-1.png", "/screenshots/alfresco-dashboard-2.png"],
  },
  {
    title: { es: "Blueprint de leads en Zoho CRM", en: "Zoho CRM lead blueprint" },
    desc: {
      es: "Automatización del ciclo completo: captura, asignación, seguimiento y cierre.",
      en: "Full lead cycle automation: capture, assignment, follow-up, close.",
    },
    tools: ["Zoho CRM", "Deluge", "Email"],
    images: ["/screenshots/zoho-blueprint-1.png", "/screenshots/zoho-blueprint-2.png"],
  },
  {
    title: { es: "Zaps de operación interna", en: "Internal ops Zaps" },
    desc: {
      es: "Webhooks que conectan formularios, CRM y notificaciones a Slack y correo.",
      en: "Webhooks connecting forms, CRM and Slack/email notifications.",
    },
    tools: ["Zapier", "Webhooks", "Slack"],
    images: ["/screenshots/zapier-list.png"],
  },
  {
    title: { es: "Weavy.ai / Figma Wave", en: "Weavy.ai / Figma Wave" },
    desc: {
      es: "Flujos de creación de contenido audiovisual conectando nodos de imagen, video y texto.",
      en: "Audiovisual content workflows connecting image, video and text nodes.",
    },
    tools: ["Weavy.ai", "Figma Wave", "AI"],
    images: ["/screenshots/weavy-1.png", "/screenshots/weavy-2.png"],
  },
];

const labels = {
  es: { eyebrow: "Proyectos", sub: "Capturas de trabajos recientes" },
  en: { eyebrow: "Projects", sub: "Screenshots from recent work" },
};

function Lightbox({ images, alt, startIdx, onClose }: { images: string[]; alt: string; startIdx: number; onClose: () => void }) {
  const [idx, setIdx] = useState(startIdx);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + images.length) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [images.length, onClose]);

  if (!mounted) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  const content = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={handleBackdropClick}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(10,10,12,0.92)", backdropFilter: "blur(8px)" }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center cursor-pointer z-10"
        style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
      >
        <X size={18} color="white" />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={() => setIdx((i) => (i - 1 + images.length) % images.length)}
            aria-label="Previous"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer z-10"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <ChevronLeft size={20} color="white" />
          </button>
          <button
            onClick={() => setIdx((i) => (i + 1) % images.length)}
            aria-label="Next"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full flex items-center justify-center cursor-pointer z-10"
            style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
          >
            <ChevronRight size={20} color="white" />
          </button>
        </>
      )}

      <div className="relative" style={{ width: "min(96vw, 1800px)", height: "min(88vh, 1100px)" }}>
        <AnimatePresence initial={false}>
          <motion.div
            key={images[idx]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image src={images[idx]} alt={alt} fill className="object-contain rounded-xl" sizes="96vw" priority />
          </motion.div>
        </AnimatePresence>
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              aria-label={`Slide ${i + 1}`}
              className="rounded-full transition-all cursor-pointer"
              style={{
                width: i === idx ? 22 : 8,
                height: 8,
                background: i === idx ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
      )}
    </motion.div>
  );

  return createPortal(content, document.body);
}

function Thumbnail({ images, alt }: { images?: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);
  const { lang } = useLanguage();

  useEffect(() => {
    if (!images || images.length <= 1 || open) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % images.length), 4000);
    return () => clearInterval(id);
  }, [images, open]);

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-[16/10] w-full" style={{ background: "var(--ink-2)" }}>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
          <ImageIcon size={22} color="rgba(255,255,255,0.35)" strokeWidth={1.5} />
          <span className="font-label text-[10px] uppercase tracking-widest text-white/35">
            {lang === "es" ? "Captura pendiente" : "Screenshot pending"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="relative aspect-[16/10] w-full overflow-hidden cursor-zoom-in group"
        style={{ background: "var(--ink-2)" }}
      >
        <AnimatePresence initial={false}>
          <motion.div
            key={images[idx]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image src={images[idx]} alt={alt} fill className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]" sizes="(max-width: 768px) 100vw, 33vw" />
          </motion.div>
        </AnimatePresence>

        {images.length > 1 && (
          <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setIdx(i); }}
                aria-label={`Slide ${i + 1}`}
                className="rounded-full transition-all cursor-pointer"
                style={{
                  width: i === idx ? 18 : 6,
                  height: 6,
                  background: i === idx ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)",
                }}
              />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {open && <Lightbox images={images} alt={alt} startIdx={idx} onClose={() => setOpen(false)} />}
      </AnimatePresence>
    </>
  );
}

export default function ProjectsCard() {
  const { lang } = useLanguage();
  const t = labels[lang];

  return (
    <motion.div
      id="proyectos"
      variants={cardVariants}
      className="md:col-span-3 rounded-[20px] overflow-hidden"
      style={{ background: "var(--paper)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="px-6 pt-5 pb-5 flex items-center justify-between relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute right-0 top-0 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "rgba(16,185,129,0.08)", transform: "translate(30%, -30%)" }} />
        <p className="font-label text-[15px] uppercase tracking-widest text-white relative z-10">{t.eyebrow}</p>
        <span className="font-label text-[15px] uppercase tracking-widest text-white relative z-10">{t.sub}</span>
      </div>

      <div className="p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {projects.map((p, i) => (
          <motion.div
            key={p.title.es}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, type: "spring", stiffness: 300, damping: 24 }}
            whileHover={{ y: -3, boxShadow: "0 10px 28px rgba(0,0,0,0.08)" }}
            className="rounded-2xl overflow-hidden flex flex-col"
            style={{ background: "#FFFFFF", border: "1px solid rgba(15,23,42,0.07)" }}
          >
            <Thumbnail images={p.images} alt={p.title[lang]} />

            <div className="p-4 flex flex-col gap-2 flex-1">
              <p className="font-display font-bold text-ink text-base leading-tight">{p.title[lang]}</p>
              <p className="font-grotesk text-sm text-ink/65 leading-snug">{p.desc[lang]}</p>
              <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                {p.tools.map((tool) => (
                  <span key={tool} className="font-label text-[10px] uppercase tracking-wide text-ink/70 bg-ink/6 px-2 py-1 rounded-md">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
