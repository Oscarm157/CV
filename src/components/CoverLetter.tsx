"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Download, ArrowLeft } from "lucide-react";

const parrafos = [
  {
    t: "Experiencia en el sector salud",
    p: "Me interesa la posición de Gerente de Marketing en Kiitos. Llevo más de diez años en marketing digital y buena parte de ese tiempo trabajando con clínicas de salud en Tijuana, una de las ciudades líderes en turismo médico del país. He trabajado con doctores y clínicas de bariatría y control de peso como My New Body y Stop Obesity, y de medicina regenerativa como Novastem y Progencell, así que conozco de cerca cómo se capta y se le da seguimiento a un paciente, incluido el que viaja para atenderse.",
  },
  {
    t: "Marketing digital e IA",
    p: "Manejo la captación de pacientes de punta a punta: campañas de publicidad pagada en Meta y Google, junto con SEO y contenido orgánico, enfocadas en llenar la agenda de este tipo de clínicas. Uso IA todos los días para ejecutar más rápido: construí un bot que capta y califica prospectos y un agente de voz que atiende llamadas y las registra en el CRM.",
  },
  {
    t: "Liderazgo y disponibilidad",
    p: "He liderado equipos: fundé y llevé una agencia con un equipo de hasta doce personas entre creativos, fotógrafos y community managers, y hoy coordino ventas y analistas de CRM. Puedo dirigir la estrategia y también ejecutarla de forma directa. Me interesó la opción remota y de medio tiempo: encaja con lo que busco ahora, reservar tiempo para seguir formándome en IA y programación. Puedo empezar pronto.",
  },
];

const encaje: { req: string; ev: string }[] = [
  { req: "Sector salud en Tijuana", ev: "Bariatría, control de peso y medicina regenerativa con clínicas como My New Body, Stop Obesity, Novastem y Progencell, en una ciudad líder en turismo médico." },
  { req: "Captación de pacientes", ev: "Publicidad en Meta y Google Ads, SEO y contenido orgánico para atraer y dar seguimiento a pacientes." },
  { req: "Experiencia y liderazgo", ev: "10+ años en marketing, 7 dirigiendo mi propia agencia y hoy coordinando equipo de ventas y CRM." },
  { req: "IA en el día a día", ev: "Bot de captación de leads, agente de voz con CRM y herramientas de IA para contenido." },
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
        <div className="px-8 sm:px-14 py-10 sm:py-12 print:px-10 print:py-7">
          {/* Encabezado */}
          <header className="print-avoid">
            <div>
              <p className="font-label text-[11px] uppercase tracking-widest text-ink/50 mb-3">
                Carta de presentación
              </p>
              <h1
                className="font-display font-black tracking-tighter text-ink leading-[0.9]"
                style={{ fontSize: "clamp(1.6rem, 4.5vw, 2.5rem)", letterSpacing: "-0.04em" }}
              >
                Oscar Arredondo
              </h1>
              <p className="font-grotesk text-sm sm:text-base text-ink/70 mt-3">
                Marketing en Salud · Estrategia Digital · IA aplicada
              </p>
            </div>

            <div className="mt-5 print:mt-3.5 flex flex-wrap gap-x-4 gap-y-1.5 font-grotesk text-sm text-ink/70">
              <span>oscar.amayoral@gmail.com</span>
              <span className="text-ink/25">·</span>
              <span>+52 664-731-26-95</span>
              <span className="text-ink/25">·</span>
              <span>Tijuana, B.C.</span>
              <span className="text-ink/25">·</span>
              <span>31 años</span>
              <span className="text-ink/25">·</span>
              <span>Disponible · remoto / híbrido</span>
            </div>

            <div className="h-[3px] w-full mt-6 print:mt-4 rounded-full" style={{ background: "var(--amber)" }} />
          </header>

          {/* Destinatario */}
          <p className="font-label text-[11px] uppercase tracking-widest text-ink/50 mt-8 mb-6 print:mt-4 print:mb-3 print-avoid">
            Para Kiitos · Vacante Gerente de Marketing
          </p>

          {/* Cuerpo */}
          <div className="flex flex-col gap-5 print:gap-3">
            {parrafos.map((item, i) => (
              <div key={i} className="print-avoid">
                <h3 className="font-label text-[11px] uppercase tracking-widest text-ink/45 mb-1.5 print:mb-1">
                  {item.t}
                </h3>
                <p className="font-grotesk text-[15px] sm:text-base text-ink/85 leading-relaxed print:text-[13.5px] print:leading-[1.5]">
                  {item.p}
                </p>
              </div>
            ))}
          </div>

          {/* Cómo encajo con el puesto */}
          <section className="mt-9 print:mt-4 print-avoid">
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
          <footer className="mt-10 pt-6 print:mt-4 print:pt-3 border-t border-ink/10 print-avoid flex items-end justify-between gap-6">
            <div>
              <p className="font-grotesk text-[15px] text-ink/85 leading-relaxed mb-4 print:mb-2.5">
                Quedo atento y espero que podamos colaborar. Con gusto lo platicamos con más detalle.
              </p>
              <p className="font-grotesk text-sm text-ink/60">Atentamente,</p>
              <p className="font-display font-bold text-ink text-xl mt-1">Oscar Arredondo</p>
              <p className="font-grotesk text-sm text-ink/60 mt-1">
                oscar.amayoral@gmail.com · +52 664-731-26-95 · Tijuana, B.C.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-center gap-1.5">
              <img
                src="/qr-cv.png"
                alt="¡Chatea con mi CV!"
                className="w-[92px] h-[92px] print:w-[80px] print:h-[80px]"
              />
              <span className="font-label text-[10px] uppercase tracking-widest text-ink/60 text-center leading-tight">
                ¡Chatea con mi CV!
              </span>
            </div>
          </footer>
        </div>
      </motion.article>
    </main>
  );
}
