"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { cardVariants } from "../BentoGrid";

const jobs = [
  {
    title: "Coordinador CRM",
    company: "Atisa Group",
    period: "Jun 2024 – Presente",
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
    bullets: [
      "Marketing digital para sectores médico e industrial",
      "Estrategia digital, redes sociales y branding",
    ],
  },
  {
    title: "Fundador & Project Manager",
    company: "Kraken Mkt Studio",
    period: "Ene 2016 – Oct 2022",
    bullets: [
      "Agencia de publicidad atendiendo Automotriz, Inmobiliario, Gastronómico y Médico",
      "Clientes: Mazda, BMW, Ruba, Chef Javier Plascencia, Carl Zeiss Vision",
      "Dirección de equipo de hasta 15 personas",
    ],
  },
];

export default function ExperienceCard() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      id="experiencia"
      variants={cardVariants}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-2 bg-white rounded-[20px] p-8"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <p className="font-label text-[10px] uppercase tracking-widest text-ink/40 mb-6">
        Experiencia
      </p>

      <div ref={ref} className="relative">
        {/* Animated timeline line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-ink/8 overflow-hidden">
          <motion.div
            className="w-full bg-amber origin-top"
            initial={{ scaleY: 0 }}
            animate={inView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
            style={{ height: "100%" }}
          />
        </div>

        <div className="pl-8 flex flex-col gap-8">
          {jobs.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -12 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.4, ease: "easeOut" }}
              className="relative"
            >
              {/* Dot */}
              <div className="absolute -left-8 top-1.5 w-2 h-2 rounded-full bg-amber border-2 border-white" />

              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                <span className="font-display font-semibold text-ink text-base">
                  {job.title}
                </span>
                <span className="font-grotesk text-ink/50 text-sm">{job.company}</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-amber ml-auto">
                  {job.period}
                </span>
              </div>

              <ul className="space-y-1">
                {job.bullets.map((b) => (
                  <li key={b} className="font-grotesk text-sm text-ink/60 flex gap-2">
                    <span className="text-amber mt-0.5 shrink-0">·</span>
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
