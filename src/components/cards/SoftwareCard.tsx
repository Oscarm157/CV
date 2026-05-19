"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";
import { SiWebflow, SiWordpress, SiSemrush, SiZapier, SiMailchimp, SiZoho, SiGithub, SiVercel, SiSupabase, SiClaude, SiReplicate } from "react-icons/si";
import { BarChart3, Database, Webhook, Bot } from "lucide-react";

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
  name: string;
  color: string;
  Icon?: React.ComponentType<{ size?: number; color?: string }>;
  Custom?: React.ComponentType;
};

const software: SoftwareItem[] = [
  { name: "Claude",     Icon: SiClaude,     color: "#CC785C" },
  { name: "Webflow",    Icon: SiWebflow,    color: "#4353FF" },
  { name: "WordPress",  Icon: SiWordpress,  color: "#21759B" },
  { name: "Zapier",     Icon: SiZapier,     color: "#FF4A00" },
  { name: "Zoho CRM",   Icon: SiZoho,       color: "#E42527" },
  { name: "Semrush",    Icon: SiSemrush,    color: "#FF642D" },
  { name: "GitHub",     Icon: SiGithub,     color: "#24292E" },
  { name: "Vercel",     Icon: SiVercel,     color: "#18181B" },
  { name: "Supabase",   Icon: SiSupabase,   color: "#3ECF8E" },
  { name: "Replicate",  Icon: SiReplicate,  color: "#000000" },
  { name: "SQL",        Icon: Database,     color: "#F59E0B" },
  { name: "APIs",       Icon: Webhook,      color: "#9999FF" },
  { name: "Weavy.ai",   Icon: Bot,          color: "#6D00CC" },
  { name: "Mailchimp",  Icon: SiMailchimp,  color: "#FFE01B" },
  { name: "MS Clarity", Icon: BarChart3,    color: "#008272" },
  { name: "Premiere",   Custom: AdobePr,    color: "#9999FF" },
  { name: "Photoshop",  Custom: AdobePs,    color: "#31A8FF" },
  { name: "Lightroom",  Custom: AdobeLr,    color: "#74B8F5" },
];

export default function SoftwareCard() {
  return (
    <motion.div
      id="skills"
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 14px 36px rgba(0,0,0,0.09)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-1 bg-white rounded-[20px]"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <div className="px-6 pt-5 pb-4 border-b border-ink/6">
        <p className="font-label text-xs uppercase tracking-widest text-ink/40">Software</p>
      </div>
      <div className="p-5 grid grid-cols-3 gap-2.5">
        {software.map(({ name, Icon, Custom, color }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, type: "spring", stiffness: 400, damping: 22 }}
            whileHover={{ scale: 1.07, y: -2 }}
            className="flex flex-col items-center gap-2 rounded-xl p-3 cursor-default"
            style={{ background: "rgba(15,23,42,0.04)" }}
          >
            {Custom ? <Custom /> : Icon ? <Icon size={22} color={color} /> : null}
            <span className="font-label text-xs uppercase tracking-wide text-ink/75 text-center leading-tight">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
