"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cardVariants } from "../BentoGrid";

const jobs = [
  {
    title: "Coordinador CRM",
    company: "Atisa Group",
    period: "Jun 2024 – Presente",
    color: "var(--emerald)",
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
    color: "var(--amber)",
    bullets: [
      "Marketing digital sectores médico e industrial",
      "Estrategia, redes sociales, publicidad y branding",
    ],
  },
  {
    title: "Fundador & PM",
    company: "Kraken Mkt Studio",
    period: "Ene 2016 – Oct 2022",
    color: "var(--amber)",
    bullets: [
      "Agencia B.C.: Automotriz, Inmobiliario, Gastronómico, Médico",
      "Mazda, BMW, Mini Cooper, Ruba, Chef Javier Plascencia, Carl Zeiss",
      "Equipo de hasta 15 personas",
    ],
  },
];

export default function ExperienceCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <motion.div
      id="experiencia"
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-2 bg-white rounded-[20px] overflow-hidden"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
    >
      {/* Header */}
      <div className="px-7 pt-6 pb-4 border-b border-ink/6 flex items-center justify-between">
        <p className="font-label text-[11px] uppercase tracking-widest text-ink/40">Experiencia</p>
        <span className="font-label text-[11px] uppercase tracking-widest text-ink/25">2016 – Presente</span>
      </div>

      <div ref={ref} className="relative px-7 py-5">
        {/* Timeline line */}
        <div className="absolute left-7 top-5 bottom-5 w-px bg-ink/8">
          <motion.div
            className="w-full origin-top"
            style={{ background: "var(--amber)", height: "100%" }}
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : {}}
            transition={{ duration: 1.1, ease: "easeInOut", delay: 0.3 }}
          />
        </div>

        <div className="pl-7 flex flex-col gap-6">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.13, duration: 0.4 }}
              className="relative"
            >
              {/* Dot */}
              <div
                className="absolute -left-7 top-1 w-2 h-2 rounded-full border-2 border-white z-10"
                style={{ background: job.color }}
              />

              <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5 mb-2">
                <span className="font-display font-semibold text-ink text-base">
                  {job.title}
                </span>
                <span className="font-grotesk text-sm text-ink/40">· {job.company}</span>
                <span
                  className="font-label text-[11px] uppercase tracking-widest ml-auto"
                  style={{ color: job.color }}
                >
                  {job.period}
                </span>
              </div>

              <ul className="space-y-0.5">
                {job.bullets.map((b) => (
                  <li key={b} className="font-grotesk text-sm text-ink/55 flex gap-2 leading-snug">
                    <span className="text-amber mt-0.5 shrink-0 text-xs">▸</span>
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
