"use client";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export default function SectionBadge({ label }: { label?: string }) {
  if (!label) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                 bg-purple-900/40 border border-purple-500/30
                 text-purple-300 text-xs font-semibold tracking-widest uppercase"
    >
      <Sparkles size={12} strokeWidth={2} />
      {label}
    </motion.div>
  );
}