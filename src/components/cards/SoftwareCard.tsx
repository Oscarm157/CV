"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";

const software = [
  { name: "Webflow", emoji: "🌐", cat: "web" },
  { name: "WordPress", emoji: "🔵", cat: "web" },
  { name: "Semrush", emoji: "📈", cat: "seo" },
  { name: "Make", emoji: "⚙️", cat: "auto" },
  { name: "Mailchimp", emoji: "✉️", cat: "email" },
  { name: "Premiere", emoji: "🎬", cat: "video" },
  { name: "Photoshop", emoji: "🖼️", cat: "design" },
  { name: "Lightroom", emoji: "📷", cat: "photo" },
  { name: "MS Clarity", emoji: "📊", cat: "analytics" },
];

export default function SoftwareCard() {
  return (
    <motion.div
      id="skills"
      variants={cardVariants}
      whileHover={{ y: -3, boxShadow: "0 16px 40px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-1 bg-white rounded-[20px] overflow-hidden"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
    >
      <div className="px-6 pt-5 pb-4 border-b border-ink/6">
        <p className="font-label text-[11px] uppercase tracking-widest text-ink/40">Software</p>
      </div>
      <div className="p-5 grid grid-cols-3 gap-2">
        {software.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, scale: 0.75 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.045, type: "spring", stiffness: 450, damping: 22 }}
            whileHover={{ scale: 1.07, y: -2 }}
            className="flex flex-col items-center gap-1.5 rounded-xl p-3 cursor-default"
            style={{ background: "rgba(15,23,42,0.04)" }}
          >
            <span className="text-xl">{s.emoji}</span>
            <span className="font-label text-[11px] uppercase tracking-wide text-ink/45 text-center leading-tight">
              {s.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
