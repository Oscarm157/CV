"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Download, ArrowLeft } from "lucide-react";

const parrafos = [
  "Me interesa la posición de Gerente de Marketing en Kiitos. Llevo más de diez años en marketing digital y buena parte de ese tiempo trabajando con clínicas de salud: nutrición y control de peso con My New Body y Stop Obesity, y medicina regenerativa con Novastem y Progencell. Conozco de cerca cómo se capta y se le da seguimiento a un paciente, que es justo lo que pide el puesto.",
  "Manejo campañas de publicidad pagada en Meta y Google junto con contenido orgánico, y tomo decisiones con datos: en Atisa Group construí un dashboard de KPIs para la dirección y califico leads por score. Uso IA todos los días para ejecutar más rápido, no como adorno: construí un bot que capta y califica prospectos y un agente de voz que atiende llamadas y las registra en el CRM. Ese mismo motor de captación sirve para pacientes y también para reclutar personal, como los nutriólogos que buscan sumar.",
  "Dirijo equipos desde hace años: fundé y llevé una agencia con un equipo de hasta doce personas entre creativos, fotógrafos y community managers, y hoy coordino ventas y analistas de CRM. Puedo dirigir la estrategia y también ejecutarla de forma directa. El esquema de medio tiempo híbrido me acomoda y puedo empezar pronto.",
];

const encaje: { req: string; ev: string }[] = [
  { req: "Experiencia y liderazgo", ev: "10+ años en marketing, 7 dirigiendo mi propia agencia y coordinando equipo en Atisa Group." },
  { req: "Publicidad pagada y orgánica", ev: "Campañas en Meta y Google Ads, SEO y contenido orgánico." },
  { req: "Decisiones con datos", ev: "Dashboard de KPIs para dirección y calificación de leads por score." },
  { req: "Sector salud", ev: "Clínicas de nutrición, control de peso y medicina regenerativa: My New Body, Stop Obesity, Novastem, Progencell." },
  { req: "IA en el día a día", ev: "Bot de captación de leads, agente de voz con CRM y herramientas de IA para contenido." },
  { req: "Copywriting y ejecución", ev: "Redacción en español y capacidad de ejecutar de forma directa, no solo dirigir." },
];

export default function CoverLetter() {
  return (
    <main className="print-page min-h-screen w-full px-4 py-10 sm:py-14" style={{ background: "var(--cream)" }}>
      {/* Acciones — solo pantalla */}
      <div className="no-print max-w-[820px] mx-auto mb-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-label text-xs uppercase tracking-widest text-ink/60 hover:text-ink transition-colors flex items-center gap-2"
        >
          <ArrowLeft size={14} /> Ver CV completo
        </Link>
        <button
          type="button"
          onClick={() => window.print()}
          className="font-label text-xs uppercase tracking-widest font-bold px-5 py-3 rounded-full flex items-center gap-2 cursor-pointer"
          style={{ background: "var(--ink)", color: "#fff" }}
        >
          <Download size={15} /> Descargar PDF
        </button>
      </div>

      {/* Hoja */}
      <motion.article
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="print-sheet max-w-[820px] mx-auto rounded-[20px] overflow-hidden"
        style={{ background: "var(--paper)", boxShadow: "0 8px 40px rgba(0,0,0,0.10)" }}
      >
        <div className="px-8 sm:px-14 py-10 sm:py-12 print:px-0 print:py-0">
          {/* Encabezado */}
          <header className="print-avoid">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="font-label text-[11px] uppercase tracking-widest text-ink/50 mb-3">
                  Carta de presentación
                </p>
                <h1
                  className="font-display font-black tracking-tighter text-ink leading-[0.9]"
                  style={{ fontSize: "clamp(2rem, 6vw, 3.4rem)", letterSpacing: "-0.04em" }}
                >
                  Oscar Arredondo
                </h1>
                <p className="font-grotesk text-sm sm:text-base text-ink/70 mt-3">
                  Marketing en Salud · Estrategia Digital · IA aplicada
                </p>
              </div>
              <Image
                src="/oscar.jpg"
                alt="Oscar Arredondo"
                width={84}
                height={84}
                className="rounded-full object-cover object-top w-16 h-16 sm:w-20 sm:h-20 shrink-0"
                priority
              />
            </div>

            <div className="mt-5 print:mt-3.5 flex flex-wrap gap-x-4 gap-y-1.5 font-grotesk text-sm text-ink/70">
              <span>oscar.amayoral@gmail.com</span>
              <span className="text-ink/25">·</span>
              <span>Tijuana, B.C.</span>
              <span className="text-ink/25">·</span>
              <span>Disponible · remoto / híbrido</span>
            </div>

            <div className="h-[3px] w-full mt-6 print:mt-4 rounded-full" style={{ background: "var(--amber)" }} />
          </header>

          {/* Destinatario */}
          <p className="font-label text-[11px] uppercase tracking-widest text-ink/50 mt-8 mb-6 print:mt-5 print:mb-4 print-avoid">
            Para Kiitos · Vacante Gerente de Marketing
          </p>

          {/* Cuerpo */}
          <div className="flex flex-col gap-4 print:gap-2">
            {parrafos.map((p, i) => (
              <p
                key={i}
                className="font-grotesk text-[15px] sm:text-base text-ink/85 leading-relaxed print:text-[13.5px] print:leading-[1.5] print-avoid"
              >
                {p}
              </p>
            ))}
          </div>

          {/* Cómo encajo con el puesto */}
          <section className="mt-9 print:mt-6 print-avoid">
            <h2 className="font-label text-[12px] uppercase tracking-widest text-ink mb-4 print:mb-3">
              Cómo encajo con el puesto
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5 print:gap-y-2.5">
              {encaje.map((e) => (
                <div key={e.req} className="flex gap-2.5 print-avoid">
                  <span className="shrink-0 mt-[7px] w-1.5 h-1.5 rounded-full" style={{ background: "var(--emerald)" }} />
                  <p className="font-grotesk text-sm text-ink/85 leading-snug">
                    <span className="font-semibold text-ink">{e.req}. </span>
                    {e.ev}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Cierre */}
          <footer className="mt-10 pt-6 print:mt-5 print:pt-4 border-t border-ink/10 print-avoid">
            <p className="font-grotesk text-[15px] text-ink/85 leading-relaxed mb-4 print:mb-2.5">
              Quedo al pendiente para platicar con más detalle. Gracias por su tiempo.
            </p>
            <p className="font-grotesk text-sm text-ink/60">Atentamente,</p>
            <p className="font-display font-bold text-ink text-xl mt-1">Oscar Arredondo</p>
            <p className="font-grotesk text-sm text-ink/60 mt-1">
              oscar.amayoral@gmail.com · Tijuana, B.C.
            </p>
          </footer>
        </div>
      </motion.article>
    </main>
  );
}
