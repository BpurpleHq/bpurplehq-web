"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  BarChart3, Database, TrendingUp, Zap, Target,
  ArrowRight, CheckCircle2, Play, X, Sparkles,
  LineChart, PieChart, Activity, ChevronRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GlowOrb from "./ui/GlowOrb";
import SectionBadge from "./ui/SectionBadge";

// ─── Data ─────────────────────────────────────────────────────────────────


// ─── Main Component ────────────────────────────────────────────────────────────

export default function DataDiscovery() {
  const sectionRef  = useRef<HTMLElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const isInView    = useInView(sectionRef, { once: true, margin: "-80px" });
  const ctaInView   = useInView(ctaRef,     { once: true, margin: "-60px" });
  const [showVideo, setShowVideo] = useState(false);

  return (
    <>
      
      {/* ══════════════════════════════════════════════
          SECTION 2 — CTA "Ready to Take the Leap"
      ══════════════════════════════════════════════ */}
      <section
        className="relative overflow-hidden py-28"
        style={{ background: "#100830" }}
      >
        {/* Animated gradient orbs */}
        <GlowOrb size="w-[600px] h-[600px]" color="bg-purple-700"
          position="-top-40 left-1/2 -translate-x-1/2" opacity={20}
          blur="blur-3xl" animate />
        <GlowOrb size="w-[300px] h-[300px]" color="bg-amber-500"
          position="-bottom-16 right-16" opacity={12} blur="blur-3xl" animate={false} />
        <GlowOrb size="w-[250px] h-[250px]" color="bg-violet-600"
          position="-bottom-16 left-16" opacity={15} blur="blur-3xl" animate={false} />

        {/* Square grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />

        {/* Diagonal shimmer lines */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg, rgba(255,255,255,0.6) 0px,
              rgba(255,255,255,0.6) 1px, transparent 1px, transparent 28px)`,
          }}
        />

        <div ref={ctaRef}
          className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Eyebrow badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                       bg-purple-500/15 border border-purple-400/30
                       text-purple-300 text-xs font-bold tracking-widest uppercase mb-8"
            initial={{ opacity: 0, y: -14 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Sparkles size={12} />
            Ready to Transform?
          </motion.div>

          {/* Headline */}
          <motion.h2
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl
                       text-white leading-tight mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Take the Leap Into{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #C084FC, #A855F7, #F4A900)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your Data Future
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Join 20+ organisations that trust Bpurple Technology for cutting-edge solutions - Intell3igent Systems,
            Training, Cloud and Data infrastructure, systems built for the African enterprise.
          </motion.p>

          {/* Video preview strip */}
          {/**/}

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.55, duration: 0.6 }}
          >
            <Link href="/contact">
              <motion.button
                className="group relative flex items-center gap-3 px-10 py-4
                           rounded-full text-white font-bold text-base overflow-hidden
                           shadow-xl shadow-purple-900/50"
                style={{ background: "linear-gradient(135deg, #6A0DAD, #9B59B6)" }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 50px rgba(106,13,173,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent
                                 via-white/15 to-transparent -translate-x-full
                                 group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative">Start Your Transformation</span>
                <motion.span className="relative"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}>
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>
            </Link>

            <Link href="/productsservice/solutions">
              <motion.button
                className="flex items-center gap-2 px-10 py-4 rounded-full
                           font-semibold text-base text-white/80
                           border border-white/20 bg-white/5
                           hover:border-amber-400/50 hover:text-white
                           transition-all duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Services
                <ChevronRight size={16} />
              </motion.button>
            </Link>
          </motion.div>

          {/* Trust strip */}
        
        </div>

        {/* Bottom wave out */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-full" preserveAspectRatio="none">
            <path d="M0,20 C480,60 960,0 1440,35 L1440,60 L0,60 Z" fill="#0D0D1A" />
          </svg>
        </div>
      </section>

    </>
  );
}