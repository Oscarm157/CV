"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";
import { useLanguage } from "@/context/LanguageContext";

const jobs = {
  es: [
    {
      title: "Coordinador CRM",
      company: "Atisa Group",
      period: "Jun 2024 – Presente",
      accentColor: "#10B981",
      bullets: [
        "<strong>Diagnóstico y adopción de IA</strong>: identificación de casos de uso, capacitación y acompañamiento",
        "Acompañamiento a las direcciones para identificar casos de uso de IA con impacto real en sus áreas",
        "Desarrollo de agentes y automatizaciones para atención y filtrado de leads, integrando <strong>APIs y SQL</strong>",
        "Dashboard de seguimiento construido para el CEO: KPIs por dirección y proyección de horas ahorradas",
        "Diseño de blueprints de automatización para el ciclo completo de leads en <strong>Zoho CRM</strong>",
        "Coordinación y capacitación del equipo de ventas y 2 analistas de CRM; campañas de SEO, paid media y email marketing",
      ],
    },
    {
      title: "Consultor Freelance",
      company: "Independiente",
      period: "Ene 2023 – May 2024",
      accentColor: "#F59E0B",
      bullets: [
        "Marketing digital sectores médico e industrial",
        "Estrategia, redes sociales, publicidad y branding",
        "Desarrollo de sitios web para clientes independientes",
      ],
    },
    {
      title: "Fundador · Director Creativo",
      company: "Kraken Mkt Studio",
      period: "Ene 2016 – Oct 2022",
      accentColor: "#F59E0B",
      bullets: [
        "Agencia creativa B.C.: Automotriz, Inmobiliario, Gastronómico, Médico",
        "Dirección creativa de campañas audiovisuales, branding y contenido digital",
        "Gestión de leads, SEO y estrategia en redes para marcas regionales y nacionales",
        "Clientes: Mazda, BMW, Mini Cooper, Carl Zeiss, Chef Javier Plascencia",
        "Dirigí un equipo de hasta 12 personas: creativos, fotógrafos y community managers",
      ],
    },
  ],
  en: [
    {
      title: "CRM Manager",
      company: "Atisa Group",
      period: "Jun 2024 – Present",
      accentColor: "#10B981",
      bullets: [
        "<strong>AI diagnosis and adoption</strong>: use-case identification, training and support",
        "Advising leadership on identifying AI use cases with real impact in their departments",
        "Building agents and automations for lead response and filtering, integrating <strong>APIs and SQL</strong>",
        "Built a tracking dashboard for the CEO: KPIs by department and projected hours saved",
        "Designing automation blueprints for the full lead cycle in <strong>Zoho CRM</strong>",
        "Leading and training the sales team and 2 CRM analysts; SEO, paid media, and email marketing campaigns",
      ],
    },
    {
      title: "Freelance Consultant",
      company: "Independent",
      period: "Jan 2023 – May 2024",
      accentColor: "#F59E0B",
      bullets: [
        "Digital marketing for medical and industrial sectors",
        "Strategy, social media, advertising, and branding",
        "Website development for independent clients",
      ],
    },
    {
      title: "Founder · Creative Director",
      company: "Kraken Mkt Studio",
      period: "Jan 2016 – Oct 2022",
      accentColor: "#F59E0B",
      bullets: [
        "Creative agency in Baja California: Automotive, Real Estate, Food & Beverage, Medical",
        "Creative direction for video campaigns, branding, and digital content",
        "Lead management, SEO, and social strategy for regional and national brands",
        "Clients: Mazda, BMW, Mini Cooper, Carl Zeiss, Chef Javier Plascencia",
        "Led a team of up to 12: creatives, photographers, and community managers",
      ],
    },
  ],
};

const labels = {
  es: { eyebrow: "Experiencia", range: "2016 – Presente" },
  en: { eyebrow: "Experience", range: "2016 – Present" },
};

export default function ExperienceCard() {
  const { lang } = useLanguage();
  const t = labels[lang];
  const jobList = jobs[lang];

  return (
    <motion.div
      id="experiencia"
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 14px 36px rgba(0,0,0,0.09)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-8 rounded-[20px] overflow-hidden"
      style={{ background: "var(--paper)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      {/* Header dark */}
      <div className="px-6 pt-5 pb-5 flex items-center justify-between relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute right-0 top-0 w-56 h-56 rounded-full pointer-events-none"
          style={{ background: "rgba(16,185,129,0.08)", transform: "translate(30%, -30%)" }} />
        <p className="font-label text-[15px] uppercase tracking-widest text-white relative z-10">{t.eyebrow}</p>
        <span className="font-label text-[15px] uppercase tracking-widest text-white relative z-10">{t.range}</span>
      </div>

      {/* Timeline */}
      <div className="relative px-6 py-6">
        {/* Static timeline line */}
        <div className="absolute left-6 top-6 bottom-6 w-px bg-ink/8" />

        <div className="pl-7 md:pl-8 flex flex-col gap-5 md:gap-7">
          {jobList.map((job, i) => (
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
                <span className="font-grotesk text-sm text-ink/80">· {job.company}</span>
                <span className="font-label text-xs uppercase tracking-widest md:ml-auto basis-full md:basis-auto" style={{ color: job.accentColor }}>
                  {job.period}
                </span>
              </div>

              <ul className="space-y-1">
                {job.bullets.map((b) => (
                  <li key={b} className="font-grotesk text-sm text-ink/80 flex gap-2 leading-snug">
                    <span className="text-amber shrink-0 text-xs mt-0.5">▸</span>
                    <span dangerouslySetInnerHTML={{ __html: b }} />
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
