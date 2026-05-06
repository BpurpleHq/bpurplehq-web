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

// ─── Data ─────────────────────────────────────────────────────────────────────

const CAPABILITIES = [
  {
    icon: BarChart3,
    title: "Business Intelligence",
    desc: "Real-time dashboards that turn raw data into executive decisions.",
    color: "text-violet-600",
    bg: "bg-violet-100",
    border: "border-violet-200",
    glow: "rgba(139,92,246,0.15)",
  },
  {
    icon: TrendingUp,
    title: "Predictive Analytics",
    desc: "Forecast trends and stay ahead of market shifts with AI-powered models.",
    color: "text-amber-600",
    bg: "bg-amber-100",
    border: "border-amber-200",
    glow: "rgba(244,169,0,0.15)",
  },
  {
    icon: Database,
    title: "Data Infrastructure",
    desc: "Scalable cloud data pipelines engineered for speed and reliability.",
    color: "text-purple-600",
    bg: "bg-purple-100",
    border: "border-purple-200",
    glow: "rgba(106,13,173,0.15)",
  },
  {
    icon: Target,
    title: "ROI Optimisation",
    desc: "Identify cost leakages and growth levers buried in your operations data.",
    color: "text-rose-500",
    bg: "bg-rose-100",
    border: "border-rose-200",
    glow: "rgba(244,63,94,0.12)",
  },
];

const OUTCOMES = [
  "Free data capability assessment report",
  "Actionable insights within 7 business days",
  "Custom dashboard prototypes included",
  "Dedicated data analyst assigned to your team",
  "NDPR & GDPR compliant data handling",
];

const METRICS = [
  { value: "40%", label: "Avg. cost reduction post-migration", icon: TrendingUp },
  { value: "3×",  label: "Faster reporting for our clients",    icon: Zap },
  { value: "₦15M", label: "Saved in consulting by trained teams", icon: Target },
];

// ─── Floating Stat Chip ────────────────────────────────────────────────────────

function StatChip({
  value, label, icon: Icon, delay, position,
}: {
  value: string; label: string;
  icon: React.ElementType; delay: number;
  position: string;
}) {
  return (
    <motion.div
      className={`absolute ${position} hidden xl:flex items-center gap-3
                  bg-white/80 backdrop-blur-md border border-purple-200/60
                  rounded-2xl px-4 py-3 shadow-lg shadow-purple-200/30
                  pointer-events-none z-20`}
      initial={{ opacity: 0, scale: 0.8, y: 16 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="w-8 h-8 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
        <Icon size={15} className="text-purple-600" strokeWidth={2} />
      </div>
      <div>
        <p className="font-heading font-bold text-[#1A0533] text-sm leading-none mb-0.5">
          {value}
        </p>
        <p className="text-purple-600/60 text-[10px] font-medium leading-tight max-w-[100px]">
          {label}
        </p>
      </div>
    </motion.div>
  );
}

// ─── Video Modal ───────────────────────────────────────────────────────────────

function VideoModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        className="fixed inset-0 bg-black/80 backdrop-blur-md z-50
                   flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          key="modal"
          className="relative w-full max-w-3xl aspect-video rounded-3xl
                     overflow-hidden border border-purple-300/30 shadow-2xl"
          initial={{ opacity: 0, scale: 0.88, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Replace src with your actual video embed */}
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Bpurple Technology Overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            allowFullScreen
          />
          <motion.button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full
                       bg-black/60 backdrop-blur-sm border border-white/20
                       flex items-center justify-center text-white
                       hover:bg-black/80 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
          >
            <X size={18} />
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

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
          SECTION 1 — Data Discovery
      ══════════════════════════════════════════════ */}
      <section
        ref={sectionRef}
        className="relative overflow-hidden py-28"
        style={{
          background:
            "linear-gradient(160deg, #2D1B69 0%, #1E1145 40%, #2A1060 70%, #1A0533 100%)",
        }}
      >
        {/* ── Background Layers ── */}
        {/* Square grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />
        {/* Grid dot intersections */}
        <div
          className="absolute inset-0 pointer-events-none opacity-40"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />

        {/* Glow orbs */}
        <GlowOrb size="w-[500px] h-[500px]" color="bg-purple-500"
          position="-top-32 -right-32" opacity={16} blur="blur-3xl" animate />
        <GlowOrb size="w-[400px] h-[400px]" color="bg-violet-600"
          position="-bottom-20 -left-20" opacity={18} blur="blur-3xl" animate={false} />
        <GlowOrb size="w-64 h-64" color="bg-amber-400"
          position="top-1/3 left-1/2 -translate-x-1/2" opacity={8}
          blur="blur-3xl" animate={false} />

        {/* Radial center glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(106,13,173,0.2) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* ── Section Header ── */}
          <motion.div
            className="flex flex-col items-center text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <SectionBadge label="Data Discovery" />
            <h2 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl
                           text-white mt-5 mb-5 leading-tight">
              Unlock the Power of{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #C084FC, #A855F7, #F4A900)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Your Data
              </span>
            </h2>
            <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
              In today's data-driven economy, your business sits on a goldmine of
              untapped insights. We help you find them, interpret them, and act on them — fast.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-purple-400" />
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-purple-400" />
            </div>
          </motion.div>

          {/* ── Two-Column Split ── */}
          <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center">

            {/* LEFT — Text */}
            <motion.div
              className="flex-1 flex flex-col gap-8"
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="text-white/70 text-lg leading-relaxed">
                Don't let guesswork or outdated methods hold you back. Our
                <span className="text-amber-300 font-semibold"> customised data
                discovery report</span> assesses your current capabilities and
                delivers a clear roadmap to maximise ROI through Bpurple's
                cloud, analytics, and AI solutions.
              </p>

              {/* Outcome checklist */}
              <ul className="space-y-3">
                {OUTCOMES.map((item, i) => (
                  <motion.li
                    key={item}
                    className="flex items-center gap-3 text-white/75 text-sm"
                    initial={{ opacity: 0, x: -16 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                  >
                    <CheckCircle2 size={16}
                      className="text-purple-300 flex-shrink-0" strokeWidth={2} />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {/* Impact Metrics */}
             {/* <div className="grid grid-cols-3 gap-4 pt-2">
                {METRICS.map(({ value, label, icon: Icon }, i) => (
                  <motion.div
                    key={label}
                    className="flex flex-col items-center text-center p-4 rounded-2xl
                               bg-white/5 border border-white/10
                               hover:border-purple-400/40 hover:-translate-y-1
                               transition-all duration-300 cursor-default"
                    initial={{ opacity: 0, y: 16 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                    whileHover={{ boxShadow: "0 0 24px rgba(168,85,247,0.2)" }}
                  >
                    <Icon size={16} className="text-amber-400 mb-2" strokeWidth={2} />
                    <span
                      className="font-heading font-bold text-xl mb-1"
                      style={{
                        background: "linear-gradient(90deg, #C084FC, #F4A900)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {value}
                    </span>
                    <span className="text-white/50 text-[10px] leading-tight">{label}</span>
                  </motion.div>
                ))}
              </div>*/}

              {/* CTA */}
              {/*<motion.div
                className="flex flex-col sm:flex-row gap-4 pt-2"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                <Link href="#contact">
                  <motion.button
                    className="group relative flex items-center gap-3 px-8 py-4
                               rounded-full text-white font-semibold text-base
                               overflow-hidden shadow-lg shadow-purple-900/50"
                    style={{
                      background: "linear-gradient(135deg, #6A0DAD, #9B59B6)",
                    }}
                    whileHover={{
                      scale: 1.04,
                      boxShadow: "0 0 40px rgba(106,13,173,0.5)",
                    }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent
                                     via-white/15 to-transparent -translate-x-full
                                     group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative">Get My Free Data Report</span>
                    <motion.span className="relative"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ repeat: Infinity, duration: 1.8 }}>
                      <ArrowRight size={18} />
                    </motion.span>
                  </motion.button>
                </Link>

                <Link href="/productsservice/solutions">
                  <motion.button
                    className="flex items-center gap-2 px-8 py-4 rounded-full
                               font-semibold text-base text-white/80
                               border border-white/20 bg-white/5
                               hover:border-purple-400/50 hover:text-white
                               transition-all duration-300"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    View Solutions
                    <ChevronRight size={16} />
                  </motion.button>
                </Link>
              </motion.div>*/}
            </motion.div>

            {/* RIGHT — Image + floating chips */}
            <motion.div
              className="relative w-full lg:w-[520px] flex-shrink-0"
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Outer glow ring */}
              <div
                className="absolute -inset-4 rounded-[2.5rem] blur-2xl opacity-30 pointer-events-none"
                style={{ background: "rgba(106,13,173,0.6)" }}
              />

              {/* Main image */}
              <div
                className="relative w-full h-[420px] lg:h-[500px] rounded-3xl overflow-hidden
                           border border-purple-400/20"
                style={{ boxShadow: "0 0 60px rgba(106,13,173,0.25)" }}
              >
                <Image
                  src="/aboutImg.png"
                  alt="Data Discovery"
                  fill
                  className="object-cover"
                />
                {/* Purple tint overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(106,13,173,0.3) 0%, transparent 55%)",
                  }}
                />


               
              </div>

              {/* Floating stat chips */}
              <StatChip value="40%" label="Cost reduction post-migration"
                icon={TrendingUp} delay={0.8} position="-top-5 -left-6" />
              <StatChip value="3×" label="Faster board reporting"
                icon={Zap} delay={1.0} position="-bottom-5 -right-6" />
            </motion.div>
          </div>

          {/* ── Capability Cards ── */}
         {/* <motion.div
            className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {CAPABILITIES.map(({ icon: Icon, title, desc, color, bg, border, glow }, i) => (
              <motion.div
                key={title}
                className={`group relative p-6 rounded-2xl border ${border}
                            bg-white/5 backdrop-blur-sm
                            hover:-translate-y-2 transition-all duration-400
                            cursor-default overflow-hidden`}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
                whileHover={{ boxShadow: `0 0 40px ${glow}` }}
              >
                {/* Corner accent */}
               {/* <span
                  className="absolute -top-8 -right-8 w-24 h-24 rounded-full
                             blur-2xl opacity-0 group-hover:opacity-50
                             transition-opacity duration-500 pointer-events-none"
                  style={{ background: glow }}
                />
                <div className={`w-12 h-12 ${bg} rounded-2xl flex items-center
                                 justify-center mb-4`}>
                  <Icon size={22} className={color} strokeWidth={1.8} />
                </div>
                <h3 className="font-heading font-bold text-white text-base mb-2">
                  {title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{desc}</p>

                {/* Bottom shimmer */}
               {/* <span
                  className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0
                             group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${glow}, transparent)`,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>*/}
        </div>

        {/* Bottom wave into CTA */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1440 70" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-full" preserveAspectRatio="none">
            <path d="M0,35 C360,70 1080,0 1440,40 L1440,70 L0,70 Z"
              fill="#100830" />
          </svg>
        </div>
      </section>

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
            Join 20+ organisations that trust Bpurple Technology for cutting-edge
            training, cloud infrastructure, data analytics, and advanced security
            systems — built for the African enterprise.
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
            <Link href="#contact">
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
          <motion.div
            className="mt-12 flex flex-wrap items-center justify-center gap-6
                       text-white/35 text-xs font-medium"
            initial={{ opacity: 0 }}
            animate={ctaInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            {[
              "✓ No commitment required",
              "✓ Free strategy session",
              "✓ Response within 24hrs",
              "✓ NDPR compliant",
            ].map((t) => (
              <span key={t} className="hover:text-white/60 transition-colors duration-200">
                {t}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Bottom wave out */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-full" preserveAspectRatio="none">
            <path d="M0,20 C480,60 960,0 1440,35 L1440,60 L0,60 Z" fill="#0D0D1A" />
          </svg>
        </div>
      </section>

      {/* ── Video Modal ── */}
      {showVideo && <VideoModal onClose={() => setShowVideo(false)} />}
    </>
  );
}