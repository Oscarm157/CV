"use client";

import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Send, X, Sparkles } from "lucide-react";
import { useChat } from "@/context/ChatContext";
import { useVariant } from "@/context/VariantContext";
import { useLanguage } from "@/context/LanguageContext";

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;

interface TurnstileApi {
  render: (el: HTMLElement, opts: { sitekey: string; callback: (t: string) => void; "expired-callback"?: () => void; size?: string; theme?: string }) => string;
  reset: (id: string) => void;
  remove: (id: string) => void;
}
declare global {
  interface Window { turnstile?: TurnstileApi }
}

type Msg = { role: "user" | "assistant"; content: string };

const copy = {
  es: {
    title: "Pregúntale a mi CV",
    sub: "Chat con IA sobre la experiencia de Oscar",
    placeholder: "Escribe tu pregunta…",
    examples: ["¿Tiene experiencia con web scraping?", "¿Qué automatizaciones ha construido?", "¿Cómo aplica IA en marketing?"],
    note: "Respuestas generadas con IA (Claude) a partir del CV. Puede equivocarse.",
    errGeneric: "Algo falló. Intenta de nuevo en un momento.",
    errRate: "Llegaste al límite de preguntas por hoy. Escríbele a oscar.amayoral@gmail.com.",
    errVerify: "No se pudo verificar que eres humano. Recarga e intenta de nuevo.",
  },
  en: {
    title: "Ask my CV",
    sub: "AI chat about Oscar's experience",
    placeholder: "Type your question…",
    examples: ["Does he have web scraping experience?", "What automations has he built?", "How does he apply AI to marketing?"],
    note: "Answers are AI-generated (Claude) from the CV. It can be wrong.",
    errGeneric: "Something failed. Try again in a moment.",
    errRate: "You hit today's question limit. Email oscar.amayoral@gmail.com.",
    errVerify: "Couldn't verify you're human. Reload and try again.",
  },
};

export default function AskCVModal() {
  const { open, setOpen } = useChat();
  const variant = useVariant();
  const { lang } = useLanguage();
  const t = copy[lang];

  const [messages, setMessages] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const tokenRef = useRef<string | null>(null);
  const widgetRef = useRef<string | null>(null);
  const turnstileHost = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Cerrar con Escape + bloquear scroll de fondo
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    setTimeout(() => inputRef.current?.focus(), 100);
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open, setOpen]);

  // Cargar y montar Turnstile mientras el modal está abierto
  useEffect(() => {
    if (!open || !SITE_KEY) return;
    let cancelled = false;
    const mount = () => {
      if (cancelled || !window.turnstile || !turnstileHost.current || widgetRef.current) return;
      widgetRef.current = window.turnstile.render(turnstileHost.current, {
        sitekey: SITE_KEY,
        size: "flexible",
        theme: "dark",
        callback: (tok: string) => { tokenRef.current = tok; },
        "expired-callback": () => { tokenRef.current = null; },
      });
    };
    if (window.turnstile) {
      mount();
    } else if (!document.getElementById("cf-turnstile-script")) {
      const s = document.createElement("script");
      s.id = "cf-turnstile-script";
      s.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
      s.async = true;
      s.onload = mount;
      document.head.appendChild(s);
    } else {
      const iv = setInterval(() => { if (window.turnstile) { clearInterval(iv); mount(); } }, 200);
      return () => clearInterval(iv);
    }
    return () => {
      cancelled = true;
      if (widgetRef.current && window.turnstile) { window.turnstile.remove(widgetRef.current); widgetRef.current = null; }
      tokenRef.current = null;
    };
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, loading]);

  async function send(text: string) {
    const q = text.trim();
    if (!q || loading) return;
    setError(null);
    const next = [...messages, { role: "user" as const, content: q }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ messages: next, turnstileToken: tokenRef.current, variant }),
      });
      if (!res.ok) {
        const code = res.status;
        setError(code === 429 ? t.errRate : code === 403 ? t.errVerify : t.errGeneric);
        setMessages(messages); // revierte el user msg al fallar
        return;
      }
      const data = (await res.json()) as { reply?: string };
      setMessages([...next, { role: "assistant", content: data.reply || t.errGeneric }]);
      if (widgetRef.current && window.turnstile) window.turnstile.reset(widgetRef.current); // token nuevo para el siguiente
    } catch {
      setError(t.errGeneric);
      setMessages(messages);
    } finally {
      setLoading(false);
    }
  }

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-6"
          style={{ background: "rgba(10,10,12,0.6)", backdropFilter: "blur(4px)" }}
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ y: 40, opacity: 0, scale: 0.98 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 40, opacity: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full sm:max-w-[560px] h-[85vh] sm:h-[600px] flex flex-col rounded-t-[24px] sm:rounded-[24px] overflow-hidden"
            style={{ background: "var(--ink)" }}
          >
            {/* Header */}
            <div className="px-6 py-5 flex items-start justify-between relative overflow-hidden shrink-0" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
              <div className="absolute top-[-60px] right-[-40px] w-[180px] h-[180px] rounded-full pointer-events-none" style={{ background: "rgba(16,185,129,0.12)" }} />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-1">
                  <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 2 }}
                    className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--emerald)" }} />
                  <span className="font-label text-[11px] uppercase tracking-widest" style={{ color: "var(--emerald)" }}>AI Lab</span>
                </div>
                <h3 className="font-display font-bold text-white text-xl">{t.title}</h3>
                <p className="font-grotesk text-sm text-white/60 mt-0.5">{t.sub}</p>
              </div>
              <button onClick={() => setOpen(false)} className="relative z-10 text-white/50 hover:text-white transition-colors p-1" aria-label="Cerrar">
                <X size={22} />
              </button>
            </div>

            {/* Mensajes */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto px-6 py-5 flex flex-col gap-4">
              {messages.length === 0 && (
                <div className="flex-1 flex flex-col justify-center gap-4">
                  <div className="flex items-center gap-2 text-white/40">
                    <Sparkles size={16} style={{ color: "var(--emerald)" }} />
                    <span className="font-label text-xs uppercase tracking-widest">{lang === "es" ? "Prueba con" : "Try asking"}</span>
                  </div>
                  <div className="flex flex-col gap-2">
                    {t.examples.map((ex) => (
                      <button key={ex} onClick={() => send(ex)}
                        className="text-left font-grotesk text-sm text-white/80 px-4 py-3 rounded-xl transition-colors"
                        style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)" }}>
                        {ex}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {messages.map((m, i) => (
                <div key={i} className={m.role === "user" ? "self-end max-w-[85%]" : "self-start max-w-[90%]"}>
                  <div className="font-grotesk text-sm leading-relaxed px-4 py-3 rounded-2xl"
                    style={m.role === "user"
                      ? { background: "var(--amber)", color: "var(--ink)" }
                      : { background: "rgba(255,255,255,0.06)", color: "rgba(255,255,255,0.9)" }}>
                    {m.content}
                  </div>
                </div>
              ))}

              {loading && (
                <div className="self-start">
                  <div className="flex gap-1.5 px-4 py-3.5 rounded-2xl" style={{ background: "rgba(255,255,255,0.06)" }}>
                    {[0, 1, 2].map((d) => (
                      <motion.span key={d} className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--emerald)" }}
                        animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: d * 0.2 }} />
                    ))}
                  </div>
                </div>
              )}

              {error && <p className="font-grotesk text-sm text-center" style={{ color: "#F87171" }}>{error}</p>}
            </div>

            {/* Input */}
            <div className="px-6 pt-3 pb-5 shrink-0" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
              <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  maxLength={700}
                  placeholder={t.placeholder}
                  className="flex-1 font-grotesk text-sm text-white placeholder:text-white/35 px-4 py-3 rounded-xl outline-none"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                />
                <button type="submit" disabled={loading || !input.trim()}
                  className="shrink-0 w-11 h-11 rounded-xl flex items-center justify-center disabled:opacity-40 transition-opacity"
                  style={{ background: "var(--emerald)", color: "var(--ink)" }} aria-label="Enviar">
                  <Send size={18} />
                </button>
              </form>
              <div ref={turnstileHost} className="mt-2 empty:hidden" />
              <p className="font-grotesk text-[11px] text-white/35 mt-2 leading-snug">{t.note}</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
