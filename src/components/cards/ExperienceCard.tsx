"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";

const jobs = [
  {
    title: "Coordinador CRM",
    company: "Atisa Group",
    period: "Jun 2024 – Presente",
    accentColor: "#10B981",
    bullets: [
      "Gestión y optimización del flujo de leads en CRM",
      "Automatizaciones y dashboards para visibilidad de KPIs",
      "Análisis de datos de mercado y desempeño de vendedores",
    ],
  },
  {
    title: "Consultor Empresarial",
    company: "Independiente",
    period: "Ene 2023 – May 2024",
    accentColor: "#F59E0B",
    bullets: [
      "Marketing digital sectores médico e industrial",
      "Estrategia, redes sociales, publicidad y branding",
    ],
  },
  {
    title: "Fundador & Project Manager",
    company: "Kraken Mkt Studio",
    period: "Ene 2016 – Oct 2022",
    accentColor: "#F59E0B",
    bullets: [
      "Agencia B.C.: Automotriz, Inmobiliario, Gastronómico, Médico",
      "Clientes: Mazda, BMW, Ruba, Chef Javier Plascencia, Carl Zeiss",
      "Equipo de hasta 15 personas",
    ],
  },
];

export default function ExperienceCard() {
  return (
    <motion.div
      id="experiencia"
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 14px 36px rgba(0,0,0,0.09)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-2 bg-white rounded-[20px]"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      {/* Header */}
      <div className="px-6 pt-5 pb-4 border-b border-ink/6 flex items-center justify-between">
        <p className="font-label text-xs uppercase tracking-widest text-ink/40">Experiencia</p>
        <span className="font-label text-xs uppercase tracking-widest text-ink/25">2016 – Presente</span>
      </div>

      {/* Timeline */}
      <div className="relative px-6 py-6">
        {/* Static timeline line */}
        <div className="absolute left-6 top-6 bottom-6 w-px bg-ink/8" />

        <div className="pl-8 flex flex-col gap-7">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
              className="relative"
            >
              {/* Timeline dot */}
              <div
                className="absolute -left-8 top-[5px] w-2.5 h-2.5 rounded-full border-2 border-white z-10"
                style={{ background: job.accentColor }}
              />

              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-2">
                <span className="font-display font-semibold text-ink text-base">{job.title}</span>
                <span className="font-grotesk text-sm text-ink/40">· {job.company}</span>
                <span className="font-label text-xs uppercase tracking-widest ml-auto" style={{ color: job.accentColor }}>
                  {job.period}
                </span>
              </div>

              <ul className="space-y-1">
                {job.bullets.map((b) => (
                  <li key={b} className="font-grotesk text-sm text-ink/55 flex gap-2 leading-snug">
                    <span className="text-amber shrink-0 text-xs mt-0.5">▸</span>
                    {b}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
