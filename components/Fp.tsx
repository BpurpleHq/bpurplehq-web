"use client";

import { useEffect, useState, useRef, memo } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Cloud,
  Database,
  Shield,
  Code2,
  Users,
  ArrowRight,
} from "lucide-react";
import GlowOrb from "./ui/GlowOrb";
import Link from "next/link";
import HeroMarquee from "@/components/HeroMarq";

// ─── Floating Icons Data ─────────────────────────────────────────────────────
const FLOATING_ICONS = [
  {
    Icon: Cloud,
    label: "Cloud",
    position: "top-[18%] left-[8%]",
    delay: 0,
    duration: 5,
    size: 42,
    color: "text-purple-400",
  },
  {
    Icon: Database,
    label: "Data",
    position: "top-[30%] right-[7%]",
    delay: 1.2,
    duration: 6,
    size: 36,
    color: "text-amber-400",
  },
  {
    Icon: Shield,
    label: "Privacy",
    position: "top-[45%] right-[15%]",
    delay: 0.6,
    duration: 5.8,
    size: 38,
    color: "text-emerald-400",
  },
  {
    Icon: Code2,
    label: "AI",
    position: "top-[55%] left-[3%]",
    delay: 0.9,
    duration: 6.5,
    size: 30,
    color: "text-amber-300",
  },
  {
    Icon: Users,
    label: "Training",
    position: "bottom-[28%] right-[10%]",   // ← Moved to right side near CTA
    delay: 1.8,
    duration: 5.4,
    size: 36,
    color: "text-violet-400",
  },
];

// ─── Animation Variants ─────────────────────────────────────────────────────
const textEnter = {
  hidden: { opacity: 0, y: 32, filter: "blur(8px)" },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.12, duration: 0.7, ease: "easeOut" as const },
  }),
  exit: {
    opacity: 0,
    y: -24,
    filter: "blur(6px)",
    transition: { duration: 0.4, ease: "easeIn" as const },
  },
};

// Float Animation
// ─── Float Animation ─────────────────────────────────────────────────────
const floatAnimation = (delay: number, duration: number) => ({
  y: [0, -12, 0],
  rotate: [0, 3, -3, 0],
  transition: {
    delay,
    duration,
    repeat: Infinity,
    ease: "easeInOut" as const,        // ← Fixed with 'as const'
    repeatType: "reverse" as const,    // Added for smoother floating
  },
});

// ─── Floating Icon Component ────────────────────────────────────────────────
const FloatingIcon = memo(
  ({
    Icon,
    label,
    position,
    delay,
    duration,
    size,
    color,
  }: (typeof FLOATING_ICONS)[0]) => {
    return (
      <motion.div
        className={`absolute ${position} hidden lg:flex flex-col items-center gap-1.5 pointer-events-none select-none z-10`}
        initial={{ opacity: 0, scale: 0.6, y: 30 }}
        animate={{ opacity: 0.95, scale: 1, y: 0 }}
        transition={{ delay: delay + 0.6, duration: 0.8, ease: "easeOut" }}
      >
        {/* Icon with glow */}
        <motion.div
          animate={floatAnimation(delay, duration)}
          className={`${color} drop-shadow-[0_0_15px_currentColor]`}
        >
          <Icon size={size} strokeWidth={1.7} />
        </motion.div>

        {/* Label */}
        <span className="text-[10px] sm:text-xs text-brand-muted font-medium tracking-widest uppercase text-center">
          {label}
        </span>
      </motion.div>
    );
  }
);

FloatingIcon.displayName = "FloatingIcon";

// ─── Background Layer ───────────────────────────────────────────────────────
const BackgroundLayer = memo(({ bgY }: { bgY: any }) => {
  return (
    <motion.div className="absolute inset-0 pointer-events-none" style={{ y: bgY }}>
      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(155,89,182,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(155,89,182,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow Orbs */}
      <GlowOrb
        size="w-[600px] h-[600px]"
        color="bg-purple-800"
        position="-top-32 -right-32"
        opacity={18}
        blur="blur-3xl"
      />
      <GlowOrb
        size="w-[500px] h-[500px]"
        color="bg-violet-900"
        position="-bottom-20 -left-20"
        opacity={22}
        blur="blur-3xl"
      />
      <GlowOrb
        size="w-72 h-72"
        color="bg-amber-600"
        position="top-1/2 left-1/2 -translate-x-1/2"
        opacity={8}
        blur="blur-3xl"
        animate={false}
      />

      {/* Radial Highlight */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(106,13,173,0.12) 0%, transparent 70%)",
        }}
      />
    </motion.div>
  );
});

BackgroundLayer.displayName = "BackgroundLayer";

// ─── Main Hero Component ─────────────────────────────────────────────────────
export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [isPlaying] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0%", "-15%"]);

  // Auto slide
  useEffect(() => {
    if (!isPlaying) return;

    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4500);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPlaying]);

  const slide = HERO_SLIDES[current];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0F0C29] via-[#1a0533] to-[#0D0D1A]"
      aria-label="Hero Section"
    >
      {/* Background Layer */}
      <BackgroundLayer bgY={bgY} />

      {/* Floating Icons */}
      {FLOATING_ICONS.map((icon, index) => (
        <FloatingIcon key={index} {...icon} />
      ))}

      {/* Main Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-24 sm:pb-32 flex flex-col items-center text-center"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {/* Headline Slider */}
        <div className="mt-6 mb-6 min-h-[120px] sm:min-h-[140px] md:min-h-[160px] lg:min-h-[200px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              className="flex flex-col items-center"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.h1
                custom={0}
                variants={textEnter}
                className="font-heading font-bold tracking-tight leading-[1.1] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white px-4"
              >
                {slide.heading}
              </motion.h1>
              <motion.span
                custom={1}
                variants={textEnter}
                className="font-heading font-bold tracking-tight leading-[1.1] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gradient mt-1 block px-4"
              >
                {slide.highlight}
              </motion.span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Subtitle */}
        <div className="min-h-[60px] sm:min-h-[80px] flex items-center mb-8 sm:mb-10 max-w-xl md:max-w-2xl px-4">
          <AnimatePresence mode="wait">
            <motion.p
              key={`sub-${current}`}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
              className="text-brand-muted text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-center"
            >
              {slide.sub}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* CTA Button */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          <Link href="/productsservice/solutions" className="w-full sm:w-auto">
            <motion.button
              className="group relative flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-purple-700 to-violet-600 text-white font-semibold text-base overflow-hidden shadow-lg shadow-purple-900/40 hover:shadow-purple-700/60 transition-shadow"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative">Explore Our Solutions</span>
              <motion.span
                className="relative"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
              >
                <ArrowRight size={20} />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <HeroMarquee />
        </motion.div>
      </motion.div>

      {/* Bottom Fade & Wave */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(13,13,26,0.95))" }}
      />

      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#0D0D1A" />
        </svg>
      </div>
    </section>
  );
}

// ─── Hero Slides Data ────────────────────────────────────────────────────────
const HERO_SLIDES = [
  {
    heading: "Driving Digital",
    highlight: "Transformation",
    sub: "From cloud migration to workforce upskilling — we architect the future of your business.",
  },
  {
    heading: "Optimising Workflows",
    highlight: "With Intelligence",
    sub: "Leverage advanced data analytics and cloud infrastructure to unlock unstoppable efficiency.",
  },
  {
    heading: "Building Future-Ready",
    highlight: "Teams & Leaders",
    sub: "4,000+ professionals trained with industry-certified programs tailored to your workforce.",
  },
  {
    heading: "Backup That Gets You",
    highlight: "Back in Minutes",
    sub: "Enterprise backup and instant recovery powered by Veeam — on‑prem, cloud and hybrid.",
  },
];