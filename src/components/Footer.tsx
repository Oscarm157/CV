"use client";

import { motion } from "motion/react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <section className="px-4 sm:px-6 pb-6">
    <motion.footer
      id="contacto"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="max-w-[1400px] mx-auto rounded-[20px] overflow-hidden"
      style={{ background: "var(--ink)" }}
    >
      <div className="px-8 md:px-12 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Left */}
        <div>
          <p className="font-label text-xs uppercase tracking-widest mb-3" style={{ color: "var(--amber)" }}>
            Contacto
          </p>
          <p className="font-display font-bold text-white text-2xl md:text-3xl leading-tight">
            ¿Hablamos?
          </p>
          <p className="font-grotesk text-sm text-white/70 mt-2">
            Abierto a nuevas oportunidades y proyectos.
          </p>
        </div>

        {/* Center — contact info */}
        <div className="flex flex-col gap-3">
          <a href="mailto:oscar.amayoral@gmail.com"
            className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors"
              style={{ background: "rgba(245,158,11,0.12)" }}>
              <Mail size={16} color="var(--amber)" />
            </div>
            <span className="font-grotesk text-sm text-white/60 group-hover:text-white transition-colors">
              oscar.amayoral@gmail.com
            </span>
          </a>
          <a href="tel:6647312695"
            className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(245,158,11,0.12)" }}>
              <Phone size={16} color="var(--amber)" />
            </div>
            <span className="font-grotesk text-sm text-white/60 group-hover:text-white transition-colors">
              664 731 26 95
            </span>
          </a>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
              style={{ background: "rgba(245,158,11,0.12)" }}>
              <MapPin size={16} color="var(--amber)" />
            </div>
            <span className="font-grotesk text-sm text-white/70">Tijuana, Baja California</span>
          </div>
        </div>

        {/* Right — CTA */}
        <motion.a
          href="mailto:oscar.amayoral@gmail.com"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="font-label text-xs uppercase tracking-widest px-8 py-4 rounded-full font-bold flex-shrink-0"
          style={{ background: "var(--amber)", color: "var(--ink)" }}
        >
          Enviar mensaje
        </motion.a>
      </div>

      {/* Bottom strip */}
      <div className="px-8 md:px-12 py-4 border-t border-white/6 flex items-center justify-between">
        <span className="font-display font-bold text-white/60 text-sm">Oscar Arredondo</span>
        <span className="font-label text-xs uppercase tracking-widest text-white/50">© 2025</span>
      </div>
    </motion.footer>
    </section>
  );
}
