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
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.10)" }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      className="md:col-span-1 bg-white rounded-[20px] p-8"
      style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}
    >
      <p className="font-label text-[10px] uppercase tracking-widest text-ink/40 mb-5">
        Software
      </p>
      <div className="grid grid-cols-3 gap-3">
        {software.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, type: "spring", stiffness: 400, damping: 20 }}
            whileHover={{ scale: 1.06 }}
            className="flex flex-col items-center gap-1.5 bg-ink/4 rounded-xl p-3"
          >
            <span className="text-xl">{s.emoji}</span>
            <span className="font-label text-[9px] uppercase tracking-wide text-ink/50 text-center leading-tight">
              {s.name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
