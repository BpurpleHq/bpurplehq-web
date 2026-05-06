"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Building2,
  Landmark,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Truck,
  Banknote,
  Radio,
  ArrowRight,
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import GlowOrb from "./ui/GlowOrb";
import SectionBadge from "./ui/SectionBadge";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Client {
  name: string;
  industry: string;
  icon: React.ElementType;
  color: string;
  accentColor: string;
  borderColor: string;
  size: "large" | "medium";
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
  color: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const CLIENTS: Client[] = [
  {
    name: "First Bank Nigeria",
    industry: "Financial Services",
    icon: Banknote,
    color: "text-blue-400",
    accentColor: "rgba(96,165,250,0.25)",
    borderColor: "border-blue-500/25",
    size: "large",
  },
  {
    name: "Dangote Group",
    industry: "Conglomerate",
    icon: Building2,
    color: "text-amber-400",
    accentColor: "rgba(244,169,0,0.25)",
    borderColor: "border-amber-500/25",
    size: "large",
  },
  {
    name: "NHIS",
    industry: "Healthcare",
    icon: HeartPulse,
    color: "text-rose-400",
    accentColor: "rgba(251,113,133,0.25)",
    borderColor: "border-rose-500/25",
    size: "large",
  },
  {
    name: "Access Bank",
    industry: "Banking",
    icon: Landmark,
    color: "text-orange-400",
    accentColor: "rgba(251,146,60,0.25)",
    borderColor: "border-orange-500/25",
    size: "large",
  },
  {
    name: "Jumia Nigeria",
    industry: "E-Commerce",
    icon: ShoppingBag,
    color: "text-emerald-400",
    accentColor: "rgba(52,211,153,0.25)",
    borderColor: "border-emerald-500/25",
    size: "medium",
  },
  {
    name: "University of Lagos",
    industry: "Education",
    icon: GraduationCap,
    color: "text-violet-400",
    accentColor: "rgba(139,92,246,0.25)",
    borderColor: "border-violet-500/25",
    size: "medium",
  },
  {
    name: "DHL Nigeria",
    industry: "Logistics",
    icon: Truck,
    color: "text-yellow-400",
    accentColor: "rgba(250,204,21,0.25)",
    borderColor: "border-yellow-500/25",
    size: "medium",
  },
  {
    name: "NTA Network",
    industry: "Media & Broadcasting",
    icon: Radio,
    color: "text-sky-400",
    accentColor: "rgba(56,189,248,0.25)",
    borderColor: "border-sky-500/25",
    size: "medium",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Bpurple Technology transformed our entire IT infrastructure in under 90 days. The cloud migration was seamless — zero downtime and a 40% reduction in infrastructure costs. Their team speaks our business language, not just tech jargon.",
    author: "Adebayo Okonkwo",
    role: "Chief Information Officer",
    company: "First Bank Nigeria",
    rating: 5,
    color: "text-blue-400",
  },
  {
    quote:
      "We engaged Bpurple for a data analytics overhaul and the results exceeded every KPI we set. Real-time dashboards now drive our executive decision-making. The training they provided our internal team has been transformative.",
    author: "Ngozi Eze",
    role: "Head of Digital Strategy",
    company: "Dangote Group",
    rating: 5,
    color: "text-amber-400",
  },
  {
    quote:
      "Their cybersecurity audit uncovered 14 critical vulnerabilities our previous vendor had missed for two years. Within 6 weeks we were fully NDPR compliant. I'd recommend Bpurple to any healthcare organisation serious about data protection.",
    author: "Dr. Emeka Nwachukwu",
    role: "Director of ICT",
    company: "NHIS",
    rating: 5,
    color: "text-rose-400",
  },
  {
    quote:
      "The corporate training programme Bpurple delivered upskilled 200+ of our staff in data analytics and cloud fundamentals. Three months later we had already built internal dashboards that saved us ₦15M in external consulting fees.",
    author: "Funmilayo Adeyemi",
    role: "Head of Learning & Development",
    company: "Access Bank",
    rating: 5,
    color: "text-orange-400",
  },
];

const INDUSTRIES = [
  "Financial Services",
  "Healthcare",
  "Education",
  "E-Commerce",
  "Logistics",
  "Government",
  "Media",
  "Manufacturing",
];

// ─── Client Logo Card ─────────────────────────────────────────────────────────

function ClientCard({
  client,
  index,
  isInView,
}: {
  client: Client;
  index: number;
  isInView: boolean;
}) {
  const { icon: Icon, name, industry, color, accentColor, borderColor, size } =
    client;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 24 }}
      animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{
        delay: 0.05 * index,
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative glass-card border ${borderColor}
                  flex flex-col items-center justify-center text-center
                  overflow-hidden cursor-default select-none
                  transition-all duration-400 hover:-translate-y-2
                  ${size === "large" ? "p-8" : "p-6"}`}
      whileHover={{
        boxShadow: `0 0 40px ${accentColor}, 0 16px 50px rgba(0,0,0,0.4)`,
      }}
    >
      {/* Corner glow */}
      <span
        className="absolute -top-6 -right-6 w-24 h-24 rounded-full blur-2xl
                   opacity-0 group-hover:opacity-50 transition-opacity duration-500
                   pointer-events-none"
        style={{ background: accentColor }}
      />

      {/* Icon */}
      <motion.div
        className={`flex items-center justify-center mb-4 rounded-2xl bg-white/5
                    border ${borderColor}
                    ${size === "large" ? "w-16 h-16" : "w-12 h-12"}`}
        style={{ boxShadow: `0 0 20px ${accentColor}` }}
        whileHover={{ rotate: [0, -6, 6, 0], scale: 1.08 }}
        transition={{ duration: 0.5 }}
      >
        <Icon
          size={size === "large" ? 28 : 22}
          className={color}
          strokeWidth={1.6}
        />
      </motion.div>

      {/* Name */}
      <span
        className={`font-heading font-bold text-white leading-tight mb-1
                    ${size === "large" ? "text-base" : "text-sm"}`}
      >
        {name}
      </span>

      {/* Industry tag */}
      <span
        className={`text-[10px] font-semibold tracking-widest uppercase
                    transition-colors duration-300 ${color} opacity-60
                    group-hover:opacity-100`}
      >
        {industry}
      </span>

      {/* Bottom shimmer */}
      <span
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0
                   group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)`,
        }}
      />
    </motion.div>
  );
}

// ─── Testimonial Slider ───────────────────────────────────────────────────────

function TestimonialSlider({ isInView }: { isInView: boolean }) {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () =>
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);

  const t = TESTIMONIALS[current];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.6, duration: 0.7 }}
      className="relative glass-card border border-purple-500/20 p-8 sm:p-10
                 overflow-hidden rounded-3xl"
      style={{
        background:
          "linear-gradient(135deg, rgba(106,13,173,0.12), rgba(13,13,26,0.7))",
      }}
    >
      {/* Bg orb */}
      <div
        className="absolute -top-16 -right-16 w-56 h-56 rounded-full
                   blur-3xl opacity-15 pointer-events-none"
        style={{ background: "rgba(106,13,173,0.8)" }}
      />

      {/* Quote icon */}
      <Quote
        size={48}
        className="text-purple-700/40 mb-6"
        strokeWidth={1}
      />

      {/* Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Stars */}
          <div className="flex items-center gap-1 mb-5">
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star
                key={i}
                size={16}
                className="text-amber-400 fill-amber-400"
              />
            ))}
          </div>

          {/* Quote text */}
          <blockquote className="text-white/85 text-base sm:text-lg leading-relaxed
                                  mb-8 max-w-3xl">
            &ldquo;{t.quote}&rdquo;
          </blockquote>

          {/* Author */}
          <div className="flex items-center gap-4">
            {/* Avatar Initial */}
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center
                          font-heading font-bold text-lg text-white flex-shrink-0
                          border border-white/20`}
              style={{
                background:
                  "linear-gradient(135deg, rgba(106,13,173,0.6), rgba(106,13,173,0.2))",
              }}
            >
              {t.author.charAt(0)}
            </div>
            <div>
              <span className={`font-heading font-bold text-white text-sm`}>
                {t.author}
              </span>
              <p className="text-brand-muted text-xs mt-0.5">
                {t.role} &mdash;{" "}
                <span className={`${t.color} font-medium`}>{t.company}</span>
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <div className="flex items-center gap-4 mt-8">
        {/* Dots */}
        <div className="flex items-center gap-2 flex-1">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 h-2 bg-gradient-to-r from-purple-500 to-amber-400"
                  : "w-2 h-2 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <motion.button
            onClick={prev}
            className="w-10 h-10 rounded-full glass-card border border-white/10
                       flex items-center justify-center text-brand-muted
                       hover:text-white hover:border-purple-500/40
                       transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
          >
            <ChevronLeft size={18} />
          </motion.button>
          <motion.button
            onClick={next}
            className="w-10 h-10 rounded-full glass-card border border-white/10
                       flex items-center justify-center text-brand-muted
                       hover:text-white hover:border-purple-500/40
                       transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
          >
            <ChevronRight size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Industry Tags ────────────────────────────────────────────────────────────

function IndustryTags({ isInView }: { isInView: boolean }) {
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-3 mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.5, duration: 0.6 }}
    >
      <span className="text-brand-muted text-sm self-center mr-2">
        Serving:
      </span>
      {INDUSTRIES.map((ind, i) => (
        <motion.span
          key={ind}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.55 + i * 0.06 }}
          className="px-4 py-1.5 rounded-full glass-card border border-white/10
                     text-xs font-medium text-white/60 hover:text-white
                     hover:border-purple-500/30 transition-all duration-200
                     cursor-default"
        >
          {ind}
        </motion.span>
      ))}
    </motion.div>
  );
}

// ─── Main TrustedBy Component ─────────────────────────────────────────────────

export default function TrustedBy() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      id="trusted-by"
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-[#0D0D1A]"
    >
      {/* Background Orbs */}
      <GlowOrb
        size="w-[500px] h-[500px]"
        color="bg-purple-900"
        position="-top-24 left-1/2 -translate-x-1/2"
        opacity={12}
        blur="blur-3xl"
        animate={false}
      />
      <GlowOrb
        size="w-[300px] h-[300px]"
        color="bg-amber-800"
        position="bottom-20 right-10"
        opacity={8}
        blur="blur-3xl"
        animate={false}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(155,89,182,0.9) 1px, transparent 1px)`,
          backgroundSize: "44px 44px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <motion.div
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionBadge label="Trusted By" />

          <h2
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl
                       text-white mt-5 mb-5 leading-tight"
          >
            Organisations That{" "}
            <span className="text-gradient">Trust Us</span>
          </h2>

          <p className="text-brand-muted text-lg max-w-2xl leading-relaxed">
            From Nigeria's largest financial institutions to fast-growing
            startups — forward-thinking organisations rely on Bpurple
            Technology to power their digital ambitions.
          </p>

          {/* Social proof pill */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-full
                       bg-purple-900/30 border border-purple-500/30"
          >
            <div className="flex -space-x-2">
              {["A", "N", "E", "F"].map((initial, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-[#0D0D1A] flex
                             items-center justify-center text-[10px] font-bold
                             text-white"
                  style={{
                    background: `linear-gradient(135deg, 
                      ${["#6A0DAD", "#F4A900", "#34D399", "#60A5FA"][i]}, 
                      rgba(13,13,26,0.6))`,
                  }}
                >
                  {initial}
                </div>
              ))}
            </div>
            <span className="text-sm text-white/80 font-medium">
              Join{" "}
              <span className="text-gradient font-bold">20+ companies</span>{" "}
              transforming with Bpurple
            </span>
          </motion.div>

          {/* Divider */}
          <div className="mt-8 flex items-center gap-3">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-purple-500" />
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-purple-500" />
          </div>
        </motion.div>

        {/* ── Client Logo Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 mb-20">
          {CLIENTS.map((client, i) => (
            <ClientCard
              key={client.name}
              client={client}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        {/* ── Industry Tags ── */}
        <IndustryTags isInView={isInView} />

        {/* ── Testimonial Slider ── */}
        <div className="mt-20">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <h3 className="font-heading font-bold text-white text-2xl sm:text-3xl">
              What Our Clients Say
            </h3>
          </motion.div>

          <TestimonialSlider isInView={isInView} />
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          className="mt-16 flex flex-col sm:flex-row items-center
                     justify-between gap-6 glass-card border border-white/10
                     p-8 rounded-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.9, duration: 0.7 }}
          style={{
            background:
              "linear-gradient(135deg, rgba(106,13,173,0.15), rgba(13,13,26,0.7))",
          }}
        >
          <div>
            <h3 className="font-heading font-bold text-white text-xl mb-1">
              Ready to join these industry leaders?
            </h3>
            <p className="text-brand-muted text-sm">
              Let's start with a free technology strategy session — no
              commitment required.
            </p>
          </div>

          <Link href="#contact">
            <motion.button
              className="group relative flex-shrink-0 flex items-center gap-3
                         px-8 py-4 rounded-full bg-gradient-to-r from-purple-700
                         to-violet-600 text-white font-semibold text-base
                         overflow-hidden shadow-lg shadow-purple-900/40"
              whileHover={{
                scale: 1.04,
                boxShadow: "0 0 40px rgba(106,13,173,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <span
                className="absolute inset-0 bg-gradient-to-r from-transparent
                           via-white/10 to-transparent -translate-x-full
                           group-hover:translate-x-full transition-transform duration-700"
              />
              <span className="relative">Get a Free Strategy Session</span>
              <motion.span
                className="relative"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
              >
                <ArrowRight size={18} />
              </motion.span>
            </motion.button>
          </Link>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0,20 C480,60 960,0 1440,35 L1440,60 L0,60 Z"
            fill="#0F0C29"
          />
        </svg>
      </div>
    </section>
  );
}