"use client";

import { motion } from "framer-motion";

interface MarqueePartner {
  name: string;
  logoText: string;
  color: string;
}

const MARQUEE_ROW_1: MarqueePartner[] = [
  { name: "JBits Technology", logoText: "JBits Technology", color: "text-amber-400" },
  { name: "Huawei Technology", logoText: "Huawei Technology", color: "text-emerald-400" },
  { name: "Unicloud Africa", logoText: "Unicloud Africa", color: "text-rose-400" },
  { name: "HiperDist", logoText: "HiperDist", color: "text-sky-400" },
  { name: "Flowmono", logoText: "Flowmono", color: "text-orange-400" },
  { name: "Veeam", logoText: "VEEAM", color: "text-teal-400" },

];

const MARQUEE_ROW_2: MarqueePartner[] = [
  
  { name: "Africa Leadership Institute", logoText: "Africa Leadership Institute", color: "text-blue-400" },
  { name: "Transformation College of Business and Technology", logoText: "Transformation College of Business and Technology", color: "text-violet-400" },
  { name: "Flowmono", logoText: "Flowmono", color: "text-orange-400" },
  { name: "LD-SEP", logoText: "Leadership Development-Skill Empowerment", color: "text-teal-400" },

];

function LogoChip({ partner }: { partner: MarqueePartner }) {
  return (
    <div className="flex-shrink-0 mx-3 px-6 py-1 text-sm font-bold tracking-wide text-white/40 hover:text-white/70 transition-colors duration-300">
      {partner.logoText}
    </div>
  );
}

function MarqueeRow({
  partners,
  direction = "left",
  speed = 40,
}: {
  partners: MarqueePartner[];
  direction?: "left" | "right";
  speed?: number;
}) {
  const doubled = [...partners, ...partners, ...partners];

  return (
    <div className="relative overflow-hidden py-4">
      <motion.div
        className="flex items-center w-max"
        animate={{
          x: direction === "left" ? ["0%", "-33.33%"] : ["-33.33%", "0%"],
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
      >
        {doubled.map((partner, i) => (
          <LogoChip key={`${partner.name}-${i}`} partner={partner} />
        ))}
      </motion.div>
    </div>
  );
}

const HeroMarquee = () => {
  return (
    <div className="w-full bg-transparent">
      <div className="mt-20">
        <MarqueeRow partners={MARQUEE_ROW_1} direction="left" speed={40} />
        <MarqueeRow partners={MARQUEE_ROW_2} direction="right" speed={35} />
      </div>
    </div>
  );
};

export default HeroMarquee;