"use client";
import { motion } from "framer-motion";

interface GlowOrbProps {
  size?: string;
  color?: string;
  position?: string;
  opacity?: number;
  blur?: string;
  animate?: boolean;
}

export default function GlowOrb({
  size = "w-64 h-64",
  color = "bg-purple-800",
  position = "top-0 left-0",
  opacity = 20,
  blur = "blur-3xl",
  animate = true,
}: GlowOrbProps) {
  return (
    <motion.div
      className={`absolute ${size} ${color} ${position} ${blur}
                  rounded-full pointer-events-none`}
      style={{ opacity: opacity / 100 }}
      animate={animate ? {
        scale: [1, 1.15, 1],
        opacity: [opacity / 100, (opacity + 5) / 100, opacity / 100],
      } : {}}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}