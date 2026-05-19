"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";

const software = [
  { name: "Webflow", emoji: "🌐" },
  { name: "WordPress", emoji: "🔵" },
  { name: "Semrush", emoji: "📈" },
  { name: "Make", emoji: "⚙️" },
  { name: "Mailchimp", emoji: "✉️" },
  { name: "Premiere", emoji: "🎬" },
  { name: "Photoshop", emoji: "🖼️" },
  { name: "Lightroom", emoji: "📷" },
  { name: "MS Clarity", emoji: "📊" },
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
        {software.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.045, type: "spring", stiffness: 400, damping: 22 }}
            whileHover={{ scale: 1.06, y: -2 }}
            className="flex flex-col items-center gap-1.5 rounded-xl p-3 cursor-default"
            style={{ background: "rgba(15,23,42,0.04)" }}
          >
            <span className="text-xl">{s.emoji}</span>
            <span className="font-label text-xs uppercase tracking-wide text-ink/50 text-center leading-tight">
              {s.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
