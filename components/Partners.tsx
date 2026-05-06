"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  ExternalLink,
  Handshake,
  Star,
  ArrowRight,
  Shield,
  Zap,
  Globe,
} from "lucide-react";
import GlowOrb from "./ui/GlowOrb";
import SectionBadge from "./ui/SectionBadge";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Partner {
  name: string;
  category: string;
  tier: "platinum" | "gold" | "silver";
  description: string;
  website: string;
  logoText: string; // Stylised text logo (replace with next/image in production)
  color: string;
  accentColor: string;
  borderColor: string;
}

interface MarqueePartner {
  name: string;
  logoText: string;
  color: string;
}

// ─── Partner Data ─────────────────────────────────────────────────────────────

const FEATURED_PARTNERS: Partner[] = [
  {
    name: "Microsoft",
    category: "Cloud & Productivity",
    tier: "platinum",
    description:
      "Certified Microsoft Solutions Partner delivering Azure, Microsoft 365, and Dynamics implementations across enterprise clients.",
    website: "https://microsoft.com",
    logoText: "Microsoft",
    color: "text-blue-400",
    accentColor: "rgba(96,165,250,0.3)",
    borderColor: "border-blue-500/30",
  },
  {
    name: "Amazon Web Services",
    category: "Cloud Infrastructure",
    tier: "platinum",
    description:
      "AWS Select Partner with certified architects delivering cloud migrations, serverless architecture, and managed cloud operations.",
    website: "https://aws.amazon.com",
    logoText: "AWS",
    color: "text-amber-400",
    accentColor: "rgba(244,169,0,0.3)",
    borderColor: "border-amber-500/30",
  },
  {
    name: "Google Cloud",
    category: "Data & AI Platform",
    tier: "platinum",
    description:
      "Google Cloud Partner specialising in BigQuery, Vertex AI, and GKE deployments for data-driven enterprises.",
    website: "https://cloud.google.com",
    logoText: "Google Cloud",
    color: "text-emerald-400",
    accentColor: "rgba(52,211,153,0.3)",
    borderColor: "border-emerald-500/30",
  },
  {
    name: "Cisco",
    category: "Networking & Security",
    tier: "gold",
    description:
      "Cisco Authorised Partner delivering enterprise networking, cybersecurity, and unified communications solutions.",
    website: "https://cisco.com",
    logoText: "Cisco",
    color: "text-violet-400",
    accentColor: "rgba(139,92,246,0.3)",
    borderColor: "border-violet-500/30",
  },
  {
    name: "Oracle",
    category: "Enterprise Database",
    tier: "gold",
    description:
      "Oracle Partner Network member delivering database management, ERP integration, and cloud infrastructure services.",
    website: "https://oracle.com",
    logoText: "Oracle",
    color: "text-rose-400",
    accentColor: "rgba(251,113,133,0.3)",
    borderColor: "border-rose-500/30",
  },
  {
    name: "Salesforce",
    category: "CRM & Automation",
    tier: "gold",
    description:
      "Salesforce Partner delivering CRM implementations, Sales Cloud, Service Cloud, and marketing automation solutions.",
    website: "https://salesforce.com",
    logoText: "Salesforce",
    color: "text-sky-400",
    accentColor: "rgba(56,189,248,0.3)",
    borderColor: "border-sky-500/30",
  },
];

// ─── Marquee Row Data ─────────────────────────────────────────────────────────

const MARQUEE_ROW_1: MarqueePartner[] = [
  { name: "Microsoft", logoText: "Microsoft", color: "text-blue-400" },
  { name: "AWS", logoText: "Amazon Web Services", color: "text-amber-400" },
  { name: "Google Cloud", logoText: "Google Cloud", color: "text-emerald-400" },
  { name: "Cisco", logoText: "Cisco", color: "text-violet-400" },
  { name: "Oracle", logoText: "Oracle", color: "text-rose-400" },
  { name: "Salesforce", logoText: "Salesforce", color: "text-sky-400" },
  { name: "HubSpot", logoText: "HubSpot", color: "text-orange-400" },
  { name: "SAP", logoText: "SAP", color: "text-teal-400" },
];

const MARQUEE_ROW_2: MarqueePartner[] = [
  { name: "IBM", logoText: "IBM", color: "text-blue-300" },
  { name: "Dell Technologies", logoText: "Dell Technologies", color: "text-sky-400" },
  { name: "VMware", logoText: "VMware", color: "text-indigo-400" },
  { name: "Fortinet", logoText: "Fortinet", color: "text-red-400" },
  { name: "Zoom", logoText: "Zoom", color: "text-blue-400" },
  { name: "Atlassian", logoText: "Atlassian", color: "text-blue-500" },
  { name: "HashiCorp", logoText: "HashiCorp", color: "text-violet-400" },
  { name: "Datadog", logoText: "Datadog", color: "text-purple-400" },
];

// ─── Partnership Tier Config ──────────────────────────────────────────────────

const TIER_CONFIG = {
  platinum: {
    label: "Platinum Partner",
    color: "text-purple-300",
    bg: "bg-purple-500/15",
    border: "border-purple-500/30",
    glow: "rgba(168,85,247,0.35)",
    icon: Star,
  },
  gold: {
    label: "Gold Partner",
    color: "text-amber-300",
    bg: "bg-amber-500/15",
    border: "border-amber-500/30",
    glow: "rgba(244,169,0,0.3)",
    icon: Shield,
  },
  silver: {
    label: "Silver Partner",
    color: "text-slate-300",
    bg: "bg-slate-500/15",
    border: "border-slate-400/30",
    glow: "rgba(148,163,184,0.3)",
    icon: Zap,
  },
};

// ─── Partner Benefits Data ────────────────────────────────────────────────────

const BENEFITS = [
  {
    icon: Globe,
    title: "Global Technology Ecosystem",
    description:
      "Access certified expertise across the world's leading cloud, data, and enterprise platforms through our extensive partner network.",
    color: "text-violet-400",
    glowColor: "rgba(139,92,246,0.3)",
    borderColor: "border-violet-500/30",
  },
  {
    icon: Shield,
    title: "Vendor-Certified Delivery",
    description:
      "Every solution we deliver is backed by official vendor certifications — giving you confidence in quality, compliance, and support escalation paths.",
    color: "text-amber-400",
    glowColor: "rgba(244,169,0,0.3)",
    borderColor: "border-amber-500/30",
  },
  {
    icon: Handshake,
    title: "Become a Technology Partner",
    description:
      "Are you a technology vendor or solutions provider? Join the Bpurple partner programme and co-deliver value to enterprise clients across Africa.",
    color: "text-emerald-400",
    glowColor: "rgba(52,211,153,0.3)",
    borderColor: "border-emerald-500/30",
  },
];

// ─── Marquee Logo Strip ───────────────────────────────────────────────────────

function LogoChip({ partner }: { partner: MarqueePartner }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="flex-shrink-0 mx-4 glass-card px-7 py-4 rounded-xl border
                 border-white/10 cursor-default select-none
                 transition-all duration-300"
      whileHover={{
        scale: 1.06,
        boxShadow: "0 0 30px rgba(106,13,173,0.3)",
        borderColor: "rgba(168,85,247,0.4)",
      }}
    >
      <span
        className={`font-heading font-bold text-base tracking-wide
                    transition-colors duration-300
                    ${hovered ? partner.color : "text-white/30"}`}
      >
        {partner.logoText}
      </span>
    </motion.div>
  );
}

function MarqueeRow({
  partners,
  direction = "left",
  speed = 35,
}: {
  partners: MarqueePartner[];
  direction?: "left" | "right";
  speed?: number;
}) {
  // Duplicate for seamless loop
  const doubled = [...partners, ...partners, ...partners];

  return (
    <div className="relative overflow-hidden py-2">
      {/* Edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #0D0D1A, transparent)",
        }}
      />
      <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(-90deg, #0D0D1A, transparent)",
        }}
      />

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

// ─── Featured Partner Card ────────────────────────────────────────────────────

function PartnerCard({
  partner,
  index,
  isInView,
}: {
  partner: Partner;
  index: number;
  isInView: boolean;
}) {
  const tier = TIER_CONFIG[partner.tier];
  const TierIcon = tier.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.1 + index * 0.1,
        duration: 0.65,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={`group relative glass-card border ${partner.borderColor}
                  p-6 overflow-hidden transition-all duration-500
                  hover:-translate-y-2`}
      whileHover={{
        boxShadow: `0 0 50px ${partner.accentColor}, 0 20px 60px rgba(0,0,0,0.4)`,
      }}
    >
      {/* Top corner glow */}
      <span
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-2xl
                   opacity-0 group-hover:opacity-40 transition-opacity duration-500
                   pointer-events-none"
        style={{ background: partner.accentColor }}
      />

      {/* Tier Badge */}
      <div className="flex items-center justify-between mb-5">
        <span
          className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full
                      text-[10px] font-bold tracking-widest uppercase
                      ${tier.color} ${tier.bg} border ${tier.border}`}
        >
          <TierIcon size={10} />
          {tier.label}
        </span>

        <motion.a
          href={partner.website}
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-0 group-hover:opacity-100 transition-opacity duration-300
                     text-brand-muted hover:text-white"
          whileHover={{ scale: 1.2 }}
          onClick={(e) => e.stopPropagation()}
        >
          <ExternalLink size={14} />
        </motion.a>
      </div>

      {/* Logo / Name */}
      <div
        className={`inline-flex items-center justify-center w-full h-16
                    rounded-xl mb-5 bg-white/5 border ${partner.borderColor}`}
        style={{ boxShadow: `0 0 20px ${partner.accentColor}` }}
      >
        <span
          className={`font-heading font-bold text-2xl tracking-tight
                      ${partner.color} transition-all duration-300`}
        >
          {partner.logoText}
        </span>
      </div>

      {/* Meta */}
      <span
        className={`inline-block text-[10px] font-semibold tracking-widest
                    uppercase mb-2 ${partner.color} opacity-70`}
      >
        {partner.category}
      </span>
      <p className="text-brand-muted text-sm leading-relaxed">
        {partner.description}
      </p>

      {/* Bottom shimmer line */}
      <span
        className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0
                   group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${partner.accentColor}, transparent)`,
        }}
      />
    </motion.div>
  );
}

// ─── Benefit Card ─────────────────────────────────────────────────────────────

function BenefitCard({
  benefit,
  index,
  isInView,
}: {
  benefit: (typeof BENEFITS)[0];
  index: number;
  isInView: boolean;
}) {
  const { icon: Icon, title, description, color, glowColor, borderColor } = benefit;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.8 + index * 0.12, duration: 0.6 }}
      className={`group glass-card border ${borderColor} p-7 transition-all
                  duration-500 hover:-translate-y-1`}
      whileHover={{ boxShadow: `0 0 40px ${glowColor}` }}
    >
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4
                    bg-white/5 border ${borderColor}`}
        style={{ boxShadow: `0 0 18px ${glowColor}` }}
      >
        <Icon size={22} className={color} strokeWidth={1.8} />
      </div>
      <h4 className="font-heading font-bold text-white text-base mb-2">{title}</h4>
      <p className="text-brand-muted text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

// ─── Main Partners Component ──────────────────────────────────────────────────

export default function Partners() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  const platinumPartners = FEATURED_PARTNERS.filter((p) => p.tier === "platinum");
  const goldPartners = FEATURED_PARTNERS.filter((p) => p.tier === "gold");

  return (
    <section
      id="partners"
      ref={sectionRef}
      className="relative py-28 overflow-hidden bg-[#0F0C29]"
    >
      {/* Background Orbs */}
      <GlowOrb
        size="w-[500px] h-[500px]"
        color="bg-purple-900"
        position="-top-32 -right-32"
        opacity={16}
        blur="blur-3xl"
        animate={false}
      />
      <GlowOrb
        size="w-[400px] h-[400px]"
        color="bg-violet-950"
        position="-bottom-24 -left-24"
        opacity={14}
        blur="blur-3xl"
        animate={false}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(155,89,182,0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(155,89,182,0.6) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
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
          <SectionBadge label="Our Partners" />

          <h2
            className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl
                       text-white mt-5 mb-5 leading-tight"
          >
            Powered by{" "}
            <span className="text-gradient">Industry Leaders</span>
          </h2>

          <p className="text-brand-muted text-lg max-w-2xl leading-relaxed">
            We partner with the world's most trusted technology vendors to
            deliver best-in-class solutions — giving you access to the full
            global technology stack through a single, trusted partner.
          </p>

          {/* Decorative divider */}
          <div className="mt-8 flex items-center gap-3">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-purple-500" />
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-purple-500" />
          </div>
        </motion.div>

        {/* ── Infinite Marquee Strips ── */}
        <motion.div
          className="mb-20 space-y-4"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {/* Row 1 — scrolls left */}
          <MarqueeRow partners={MARQUEE_ROW_1} direction="left" speed={40} />
          {/* Row 2 — scrolls right (opposite) */}
          <MarqueeRow partners={MARQUEE_ROW_2} direction="right" speed={32} />
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
            d="M0,30 C360,60 1080,0 1440,40 L1440,60 L0,60 Z"
            fill="#0D0D1A"
          />
        </svg>
      </div>
    </section>
  );
}