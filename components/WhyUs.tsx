"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Clock,
  BadgeDollarSign,
  Award,
  Target,
  TrendingUp,
  Users,
  Zap,
  Globe,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import GlowOrb from "./ui/GlowOrb";
import SectionBadge from "./ui/SectionBadge";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Feature {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  bgColor: string;
  borderColor: string;
  glowColor: string;
  points: string[];
}

interface Metric {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES: Feature[] = [
  {
    icon: Clock,
    title: "Save Your Time",
    description:
      "We hit the ground running with proven delivery frameworks, pre-built accelerators, and agile sprints — cutting your time-to-value by up to 60% compared to traditional vendors.",
    color: "text-violet-400",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    glowColor: "rgba(139,92,246,0.4)",
    points: [
      "Rapid onboarding within 48 hours",
      "Pre-built solution accelerators",
      "Agile delivery in 2-week sprints",
    ],
  },
  {
    icon: BadgeDollarSign,
    title: "Affordable & Transparent Pricing",
    description:
      "No hidden fees. No bloated retainers. Our flexible engagement models — project-based, retainer, or outcome-based — are designed to maximise ROI for organisations of every size.",
    color: "text-amber-400",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    glowColor: "rgba(244,169,0,0.4)",
    points: [
      "Clear, itemised cost breakdowns",
      "Flexible monthly or project billing",
      "ROI-focused engagement models",
    ],
  },
  {
    icon: Award,
    title: "Expert-Led Training",
    description:
      "Every trainer on our platform holds active industry certifications and brings real-world project experience. No theory-only instructors — only practitioners who have shipped production systems.",
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    glowColor: "rgba(52,211,153,0.4)",
    points: [
      "50+ certified industry practitioners",
      "Hands-on labs and live projects",
      "Post-training mentorship & support",
    ],
  },
  {
    icon: Target,
    title: "Results-Focused Execution",
    description:
      "We tie every engagement to measurable outcomes — KPIs agreed at kick-off, tracked throughout delivery, and reported with full transparency. Your success is literally our KPI.",
    color: "text-rose-400",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
    glowColor: "rgba(251,113,133,0.4)",
    points: [
      "KPI-driven project governance",
      "Real-time delivery dashboards",
      "Monthly impact reporting",
    ],
  },
  {
    icon: Zap,
    title: "Future-Ready Technology",
    description:
      "We build on modern, battle-tested stacks and stay ahead of the curve on AI, cloud, and data trends — ensuring the solutions we deliver today won't become liabilities tomorrow.",
    color: "text-blue-400",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    glowColor: "rgba(96,165,250,0.4)",
    points: [
      "AI-augmented development practices",
      "Cloud-native architecture by default",
      "Regular technology refresh cycles",
    ],
  },
  {
    icon: Globe,
    title: "Local Expertise, Global Standards",
    description:
      "Headquartered in Nigeria, we understand the unique regulatory, infrastructure, and market dynamics of Africa — while applying global delivery standards and best practices.",
    color: "text-purple-400",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    glowColor: "rgba(168,85,247,0.4)",
    points: [
      "Deep African market understanding",
      "ISO & international compliance ready",
      "Multi-timezone delivery capability",
    ],
  },
];

const METRICS: Metric[] = [
  { icon: Users, value: 20, suffix: "+", label: "Enterprise Clients", color: "text-violet-400" },
  { icon: TrendingUp, value: 98, suffix: "%", label: "Client Satisfaction", color: "text-amber-400" },
  { icon: Award, value: 4000, suffix: "+", label: "Professionals Trained", color: "text-emerald-400" },
  { icon: Clock, value: 60, suffix: "%", label: "Faster Time-to-Value", color: "text-rose-400" },
];

// ─── Animated Counter Hook ────────────────────────────────────────────────────

function useCountUp(target: number, isInView: boolean, duration = 2000) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!isInView || started.current) return;
    started.current = true;

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [isInView, target, duration]);

  return count;
}

// ─── Metric Card ──────────────────────────────────────────────────────────────

function MetricCard({ metric, isInView }: { metric: Metric; isInView: boolean }) {
  const { icon: Icon, value, suffix, label, color } = metric;
  const count = useCountUp(value, isInView, 2200);

  return (
    <div className="flex flex-col items-center gap-2 py-6 px-4">
      <Icon size={22} className={`${color} mb-1`} strokeWidth={1.8} />
      <span className={`font-heading font-bold text-3xl sm:text-4xl ${color}`}>
        {count.toLocaleString()}
        {suffix}
      </span>
      <span className="text-brand-muted text-sm text-center">{label}</span>
    </div>
  );
}

// ─── Feature Card ─────────────────────────────────────────────────────────────

function FeatureCard({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) {
  const { icon: Icon, title, description, color, bgColor, borderColor, glowColor, points } =
    feature;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  // Alternate entrance direction: left for even, right for odd
  const xDir = index % 2 === 0 ? -30 : 30;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: xDir, y: 20 }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.65,
        delay: (index % 3) * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative glass-card border ${borderColor} p-7 overflow-hidden
                  transition-all duration-500 hover:-translate-y-2`}
      whileHover={{
        boxShadow: `0 0 50px ${glowColor}, 0 24px 60px rgba(0,0,0,0.4)`,
      }}
    >
      {/* Top-right corner radial glow on hover */}
      <span
        className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl
                   opacity-0 group-hover:opacity-30 transition-opacity duration-500
                   pointer-events-none"
        style={{ background: glowColor }}
      />

      {/* Icon Ring */}
      <div className="flex items-center gap-4 mb-5">
        <motion.div
          className={`relative w-14 h-14 rounded-2xl flex items-center justify-center
                      flex-shrink-0 ${bgColor} border ${borderColor}`}
          whileHover={{ rotate: [0, -8, 8, 0] }}
          transition={{ duration: 0.5 }}
          style={{ boxShadow: `0 0 24px ${glowColor}` }}
        >
          {/* Spinning ring */}
          <motion.span
            className={`absolute inset-0 rounded-2xl border-2 ${borderColor} opacity-0
                        group-hover:opacity-100`}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
            style={{
              background: `conic-gradient(from 0deg, ${glowColor}, transparent 60%)`,
              borderRadius: "inherit",
              mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              maskComposite: "exclude",
              WebkitMaskComposite: "destination-out",
              padding: "2px",
            }}
          />
          <Icon size={24} className={color} strokeWidth={1.8} />
        </motion.div>

        <h3 className="font-heading font-bold text-white text-lg leading-snug">
          {title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-brand-muted text-sm leading-relaxed mb-5">
        {description}
      </p>

      {/* Bullet Points */}
      <ul className="space-y-2.5">
        {points.map((point, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.08 + (index % 3) * 0.1 }}
            className="flex items-center gap-2.5 text-sm text-white/75"
          >
            <CheckCircle2 size={14} className={`${color} flex-shrink-0`} />
            {point}
          </motion.li>
        ))}
      </ul>

      {/* Bottom border shimmer */}
      <span
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0
                   group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)`,
        }}
      />
    </motion.div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });
  const metricsInView = useInView(metricsRef, { once: true, margin: "-60px" });

  return (
    <section
      id="why-us"
      ref={sectionRef}
      className="relative py-28 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0D0D1A 0%, #0F0C29 50%, #0D0D1A 100%)",
      }}
    >
      {/* Background Orbs */}
      <GlowOrb
        size="w-[450px] h-[450px]"
        color="bg-purple-900"
        position="top-0 right-0"
        opacity={14}
        blur="blur-3xl"
        animate={false}
      />
      <GlowOrb
        size="w-[350px] h-[350px]"
        color="bg-violet-900"
        position="bottom-0 left-0"
        opacity={12}
        blur="blur-3xl"
        animate={false}
      />

      {/* Radial dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(155,89,182,0.9) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          className="flex flex-col items-center text-center mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionBadge label="Why Bpurple" />

          <h2
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl
                       text-white mt-5 mb-5 leading-tight"
          >
            The Bpurple{" "}
            <span className="text-gradient">Difference</span>
          </h2>

          <p className="text-brand-muted text-lg max-w-2xl leading-relaxed">
            We are not just a vendor — we are a strategic technology partner
            committed to delivering measurable outcomes, not just deliverables.
          </p>

          {/* Decorative divider */}
          <div className="mt-8 flex items-center gap-3">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-purple-500" />
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-purple-500" />
          </div>
        </motion.div>

        {/* ── Metrics Strip ── */}
        <motion.div
          ref={metricsRef}
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0
                     divide-white/10 glass-card border border-white/10 mb-20 rounded-2xl
                     overflow-hidden"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.25, duration: 0.7 }}
        >
          {METRICS.map((metric) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              isInView={metricsInView}
            />
          ))}
        </motion.div>

        {/* ── Features Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

       

        {/* ── Bottom CTA ── */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.7 }}
        >
          <p className="text-brand-muted mb-6 text-base">
            Ready to experience the Bpurple difference firsthand?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/faq">
              <motion.button
                className="group relative flex items-center gap-3 px-8 py-4 rounded-full
                           bg-gradient-to-r from-purple-700 to-violet-600
                           text-white font-semibold text-base overflow-hidden
                           shadow-lg shadow-purple-900/40"
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(106,13,173,0.5)" }}
                whileTap={{ scale: 0.97 }}
              >
                <span
                  className="absolute inset-0 bg-gradient-to-r from-transparent
                             via-white/10 to-transparent -translate-x-full
                             group-hover:translate-x-full transition-transform duration-700"
                />
                <span className="relative">Start Your Journey</span>
                <motion.span
                  className="relative"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.8 }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>
            </Link>

            <Link href="/productsservice/solutions">
              <motion.button
                className="flex items-center gap-2 px-8 py-4 rounded-full
                           border border-purple-500/40 text-white font-semibold
                           text-base bg-white/5 hover:border-amber-400/50
                           transition-colors duration-300"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Explore Our Solutions
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Bottom wave divider */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C480,60 960,0 1440,30 L1440,60 L0,60 Z"
            fill="#0D0D1A"
          />
        </svg>
      </div>
    </section>
  );
}