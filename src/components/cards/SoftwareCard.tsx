"use client";

import { motion } from "motion/react";
import { cardVariants } from "../BentoGrid";
import { SiWebflow, SiWordpress, SiSemrush, SiZapier, SiMailchimp, SiZoho } from "react-icons/si";
import { Video, ImageIcon, Sun, BarChart3 } from "lucide-react";

const software = [
  { name: "Webflow",    Icon: SiWebflow,   color: "#4353FF", lucide: false },
  { name: "WordPress",  Icon: SiWordpress,  color: "#21759B", lucide: false },
  { name: "Semrush",    Icon: SiSemrush,    color: "#FF642D", lucide: false },
  { name: "Zapier",     Icon: SiZapier,     color: "#FF4A00", lucide: false },
  { name: "Zoho CRM",   Icon: SiZoho,       color: "#E42527", lucide: false },
  { name: "Mailchimp",  Icon: SiMailchimp,  color: "#FFE01B", lucide: false },
  { name: "Premiere",   Icon: Video,        color: "#9999FF", lucide: true  },
  { name: "Photoshop",  Icon: ImageIcon,    color: "#31A8FF", lucide: true  },
  { name: "Lightroom",  Icon: Sun,          color: "#31A8FF", lucide: true  },
  { name: "MS Clarity", Icon: BarChart3,    color: "#008272", lucide: true  },
] as const;

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
        {software.map(({ name, Icon, color }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.045, type: "spring", stiffness: 400, damping: 22 }}
            whileHover={{ scale: 1.07, y: -2 }}
            className="flex flex-col items-center gap-2 rounded-xl p-3 cursor-default"
            style={{ background: "rgba(15,23,42,0.04)" }}
          >
            <Icon size={22} color={color} />
            <span className="font-label text-xs uppercase tracking-wide text-ink/50 text-center leading-tight">
              {name}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
