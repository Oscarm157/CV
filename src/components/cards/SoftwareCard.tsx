"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";
import { SiWebflow, SiSemrush, SiZapier, SiMailchimp, SiZoho, SiGithub, SiVercel, SiSupabase, SiClaude, SiReplicate, SiMeta, SiGoogleads, SiAsana } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { BarChart3, Webhook, Bot, Terminal, Sparkles, Database, Search, ImageIcon, Film, Clapperboard } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

/* ── Adobe badge SVGs ── */
function AdobePr() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect width="22" height="22" rx="5" fill="#0A0A0A"/>
      <text x="4" y="16" fontFamily="sans-serif" fontWeight="700" fontSize="11" fill="#9999FF">Pr</text>
    </svg>
  );
}
function AdobePs() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect width="22" height="22" rx="5" fill="#001E36"/>
      <text x="3" y="16" fontFamily="sans-serif" fontWeight="700" fontSize="11" fill="#31A8FF">Ps</text>
    </svg>
  );
}
function AdobeLr() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect width="22" height="22" rx="5" fill="#001A2E"/>
      <text x="4" y="16" fontFamily="sans-serif" fontWeight="700" fontSize="11" fill="#74B8F5">Lr</text>
    </svg>
  );
}

type SoftwareItem = {
  name: { es: string; en: string } | string;
  color: string;
  Icon?: React.ComponentType<{ size?: number; color?: string }>;
  Custom?: React.ComponentType;
};

type Group = {
  label: { es: string; en: string };
  items: SoftwareItem[];
};

const groups: Group[] = [
  {
    label: { es: "IA & Agentes", en: "AI & Agents" },
    items: [
      { name: "Claude",      Icon: SiClaude,    color: "#CC785C" },
      { name: "Claude Code", Icon: Terminal,    color: "#A0522D" },
      { name: { es: "Prompt Eng.", en: "Prompt Eng." }, Icon: Sparkles, color: "#F59E0B" },
    ],
  },
  {
    label: { es: "IA Generativa / Medios", en: "Generative AI / Media" },
    items: [
      { name: "Nano Banana Pro", Icon: ImageIcon,   color: "#F59E0B" },
      { name: "Kling",           Icon: Film,        color: "#6D00CC" },
      { name: "Weavy.ai",        Icon: Bot,         color: "#6D00CC" },
      { name: "Replicate",       Icon: SiReplicate, color: "#000000" },
      { name: "ffmpeg",          Icon: Clapperboard, color: "#10B981" },
    ],
  },
  {
    label: { es: "Datos & Scraping", en: "Data & Scraping" },
    items: [
      { name: "Apify",      Icon: Bot,      color: "#FF9012" },
      { name: { es: "Web scraping", en: "Web scraping" }, Icon: Search,   color: "#2563EB" },
      { name: { es: "Google Maps", en: "Google Maps" },   Icon: Database, color: "#10B981" },
    ],
  },
  {
    label: { es: "CRM, Automatización & PM", en: "CRM, Automation & PM" },
    items: [
      { name: "Zoho CRM", Icon: SiZoho,     color: "#E42527" },
      { name: "Zapier",   Icon: SiZapier,   color: "#FF4A00" },
      { name: "Asana",    Icon: SiAsana,    color: "#F06A6A" },
    ],
  },
  {
    label: { es: "Paid & Marketing", en: "Paid & Marketing" },
    items: [
      { name: "Meta Ads",     Icon: SiMeta,      color: "#0866FF" },
      { name: "Google Ads",   Icon: SiGoogleads, color: "#4285F4" },
      { name: "LinkedIn Ads", Icon: FaLinkedin,  color: "#0A66C2" },
      { name: "Semrush",      Icon: SiSemrush,   color: "#FF642D" },
      { name: "Mailchimp",    Icon: SiMailchimp, color: "#FFE01B" },
      { name: "MS Clarity",   Icon: BarChart3,   color: "#008272" },
    ],
  },
  {
    label: { es: "Web & Dev", en: "Web & Dev" },
    items: [
      { name: "GitHub",         Icon: SiGithub,   color: "#24292E" },
      { name: "Vercel",         Icon: SiVercel,   color: "#18181B" },
      { name: "Supabase (SQL)", Icon: SiSupabase, color: "#3ECF8E" },
      { name: "Neon",           Icon: Database,   color: "#00E599" },
      { name: "APIs",           Icon: Webhook,    color: "#9999FF" },
      { name: "Webflow",        Icon: SiWebflow,  color: "#4353FF" },
    ],
  },
  {
    label: { es: "Diseño", en: "Design" },
    items: [
      { name: "Premiere",  Custom: AdobePr, color: "#9999FF" },
      { name: "Photoshop", Custom: AdobePs, color: "#31A8FF" },
      { name: "Lightroom", Custom: AdobeLr, color: "#74B8F5" },
    ],
  },
];

const labels = {
  es: "Software",
  en: "Tools",
};

export default function SoftwareCard() {
  const { lang } = useLanguage();

  return (
    <motion.div
      id="skills"
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 14px 36px rgba(0,0,0,0.09)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-4 md:row-span-2 rounded-[20px] overflow-hidden"
      style={{ background: "var(--paper)", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="px-6 pt-5 pb-5 relative overflow-hidden" style={{ background: "var(--ink)" }}>
        <div className="absolute right-0 top-0 w-40 h-40 rounded-full pointer-events-none"
          style={{ background: "rgba(245,158,11,0.08)", transform: "translate(30%, -30%)" }} />
        <p className="font-label text-[15px] uppercase tracking-widest text-white relative z-10">{labels[lang]}</p>
      </div>
      <div className="p-5 flex flex-col gap-4">
        {groups.map((group) => (
          <div key={group.label.es}>
            <p className="font-label text-[12px] font-bold uppercase tracking-widest text-ink mb-2.5">
              {group.label[lang]}
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {group.items.map(({ name, Icon, Custom, color }, i) => (
                <motion.div
                  key={typeof name === "string" ? name : name.es}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03, type: "spring", stiffness: 400, damping: 22 }}
                  whileHover={{ scale: 1.07, y: -2 }}
                  className="flex flex-col items-center gap-1.5 rounded-xl p-2.5 cursor-default"
                  style={{ background: "rgba(15,23,42,0.04)" }}
                >
                  {Custom ? <Custom /> : Icon ? <Icon size={20} color={color} /> : null}
                  <span className="font-label text-[10px] uppercase tracking-wide text-ink/75 text-center leading-tight">
                    {typeof name === "string" ? name : name[lang]}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
