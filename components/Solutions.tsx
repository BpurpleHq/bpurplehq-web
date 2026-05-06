"use client";

import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Cloud,
  BarChart3,
  ShieldCheck,
  Code2,
  Lightbulb,
  RefreshCw,
  ArrowRight,
  X,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import GlowOrb from "./ui/GlowOrb";
import SectionBadge from "./ui/SectionBadge";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Solution {
  id: string;
  icon: React.ElementType;
  color: string;
  glowColor: string;
  borderColor: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  useCases: string[];
  tag: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const SOLUTIONS: Solution[] = [
  {
    id: "cloud",
    icon: Cloud,
    color: "text-violet-400",
    glowColor: "rgba(139,92,246,0.35)",
    borderColor: "border-violet-500/40",
    tag: "Infrastructure",
    title: "Cloud Infrastructure & Migration",
    shortDesc:
      "Seamlessly migrate, manage, and scale your cloud environment with zero downtime and full governance.",
    fullDesc:
      "We design, deploy, and manage enterprise-grade cloud infrastructure across AWS, Azure, and Google Cloud. Our migration-first approach ensures business continuity while modernising your legacy systems into scalable, cost-optimised architectures.",
    features: [
      "Multi-cloud architecture design & deployment",
      "Zero-downtime lift-and-shift migrations",
      "Cloud cost optimisation & FinOps audits",
      "Disaster Recovery & Business Continuity Planning",
      "24/7 cloud infrastructure monitoring",
      "Kubernetes, Docker & container orchestration",
    ],
    useCases: [
      "Enterprise migrating from on-premise data centres",
      "Startups needing scalable cloud-native architecture",
      "Organisations requiring hybrid cloud environments",
    ],
  },
  {
    id: "data",
    icon: BarChart3,
    color: "text-amber-400",
    glowColor: "rgba(244,169,0,0.35)",
    borderColor: "border-amber-500/40",
    tag: "Analytics",
    title: "Data Analytics & Business Intelligence",
    shortDesc:
      "Transform raw data into strategic intelligence with dashboards, pipelines, and predictive models.",
    fullDesc:
      "Our data team builds end-to-end analytics ecosystems — from data ingestion pipelines and warehousing to interactive BI dashboards and machine learning models that generate actionable business intelligence in real time.",
    features: [
      "ETL pipeline design and data warehouse setup",
      "Power BI, Tableau & Looker dashboard development",
      "Predictive analytics & ML model deployment",
      "Real-time data streaming with Kafka & Spark",
      "Data governance, quality & lineage management",
      "Self-service analytics platform implementation",
    ],
    useCases: [
      "Executives needing real-time business performance views",
      "Operations teams tracking KPIs and OKRs automatically",
      "Sales teams using predictive lead scoring",
    ],
  },
  {
    id: "security",
    icon: ShieldCheck,
    color: "text-emerald-400",
    glowColor: "rgba(52,211,153,0.3)",
    borderColor: "border-emerald-500/40",
    tag: "Security",
    title: "Cybersecurity & Compliance",
    shortDesc:
      "Proactively protect your digital assets with enterprise-grade security frameworks and compliance audits.",
    fullDesc:
      "We implement layered cybersecurity strategies covering endpoint protection, identity management, threat detection, and regulatory compliance (ISO 27001, NDPR, GDPR). Our security operations centre (SOC) provides round-the-clock threat intelligence.",
    features: [
      "Vulnerability assessments & penetration testing",
      "Zero-trust network architecture implementation",
      "SIEM deployment & Security Operations Centre (SOC)",
      "ISO 27001, NDPR & GDPR compliance advisory",
      "Identity & Access Management (IAM) solutions",
      "Incident response planning & tabletop exercises",
    ],
    useCases: [
      "Financial institutions requiring regulatory compliance",
      "Healthcare organisations handling sensitive patient data",
      "Enterprises recovering from or preventing data breaches",
    ],
  },
  {
    id: "software",
    icon: Code2,
    color: "text-blue-400",
    glowColor: "rgba(96,165,250,0.3)",
    borderColor: "border-blue-500/40",
    tag: "Development",
    title: "Enterprise Software Development",
    shortDesc:
      "Custom-built web, mobile, and enterprise platforms that automate workflows and delight users.",
    fullDesc:
      "From customer-facing portals to internal enterprise systems, we build robust, scalable software using modern stacks (Next.js, React, Node.js, Python). Every solution is designed mobile-first, API-first, and built to integrate seamlessly with your existing tools.",
    features: [
      "Custom web & mobile application development",
      "ERP, CRM & HRMS system design and integration",
      "API development, management & microservices",
      "Legacy software modernisation & re-platforming",
      "UI/UX design system creation",
      "DevOps CI/CD pipeline setup & automation",
    ],
    useCases: [
      "Organisations replacing outdated legacy platforms",
      "Businesses needing client-facing portals or marketplaces",
      "Teams automating manual approval and workflow processes",
    ],
  },
  {
    id: "consulting",
    icon: Lightbulb,
    color: "text-purple-400",
    glowColor: "rgba(168,85,247,0.3)",
    borderColor: "border-purple-500/40",
    tag: "Strategy",
    title: "IT Consulting & Strategy",
    shortDesc:
      "Bridge the gap between your business goals and technology investments with expert advisory.",
    fullDesc:
      "Our technology strategists embed with your leadership team to audit your current IT landscape, identify gaps, and design a phased technology roadmap aligned to your growth objectives. We speak both business and tech — fluently.",
    features: [
      "IT landscape audit & gap analysis",
      "Technology roadmap design (12 – 36 months)",
      "Digital maturity assessment & benchmarking",
      "Vendor selection, procurement & negotiation support",
      "IT governance framework establishment",
      "Board-level technology advisory and reporting",
    ],
    useCases: [
      "CEOs and CTOs seeking an independent tech audit",
      "Organisations planning major digital investments",
      "Boards needing technology risk oversight",
    ],
  },
  {
    id: "transformation",
    icon: RefreshCw,
    color: "text-rose-400",
    glowColor: "rgba(251,113,133,0.3)",
    borderColor: "border-rose-500/40",
    tag: "Transformation",
    title: "Digital Transformation Advisory",
    shortDesc:
      "End-to-end transformation programmes that rewire people, processes, and platforms for the digital era.",
    fullDesc:
      "We lead organisation-wide digital transformation initiatives — redesigning processes, upskilling teams, deploying enabling technologies, and embedding a culture of continuous innovation. Our change management approach ensures adoption, not just implementation.",
    features: [
      "Digital transformation programme design & delivery",
      "Business process re-engineering (BPR)",
      "Change management & stakeholder communication",
      "Automation & AI integration across business units",
      "Digital skills audit & upskilling programme design",
      "Transformation ROI tracking & benefit realisation",
    ],
    useCases: [
      "Traditional enterprises entering the digital economy",
      "Organisations scaling rapidly and needing process alignment",
      "Companies post-merger needing systems integration",
    ],
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const, // Add 'as const'
    },
  },
};

const modalBackdrop = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25, delay: 0.1 } },
};

const modalPanel = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const, // Add 'as const'
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 20,
    transition: {
      duration: 0.2,
      ease: [0.25, 0.1, 0.25, 1] as const, // Add 'as const' here too
    },
  },
}

// ─── Solution Card ────────────────────────────────────────────────────────────

function SolutionCard({
  solution,
  index,
  onOpen,
}: {
  solution: Solution;
  index: number;
  onOpen: (s: Solution) => void;
}) {
  const { icon: Icon, color, glowColor, borderColor, tag, title, shortDesc } = solution;

  return (
    <motion.div
      variants={cardVariants}
      className={`group relative glass-card p-6 border ${borderColor}
                  cursor-pointer overflow-hidden
                  transition-all duration-500
                  hover:-translate-y-2`}
      style={{ "--glow": glowColor } as React.CSSProperties}
      whileHover={{
        boxShadow: `0 0 40px ${glowColor}, 0 20px 60px rgba(0,0,0,0.4)`,
      }}
      onClick={() => onOpen(solution)}
    >
      {/* Corner shimmer on hover */}
      <span
        className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-100
                   transition-opacity duration-500 pointer-events-none rounded-2xl"
        style={{
          background: `radial-gradient(circle at top left, ${glowColor}, transparent 60%)`,
        }}
      />

      {/* Tag */}
      <span
        className={`inline-block text-[10px] font-semibold tracking-widest
                    uppercase px-2.5 py-1 rounded-full mb-4 border
                    ${color} ${borderColor} bg-white/5`}
      >
        {tag}
      </span>

      {/* Icon */}
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5
                    bg-white/5 border ${borderColor}
                    group-hover:scale-110 transition-transform duration-300`}
        style={{
          boxShadow: `0 0 20px ${glowColor}`,
        }}
      >
        <Icon size={22} className={color} strokeWidth={1.8} />
      </div>

      {/* Text */}
      <h3 className="font-heading font-bold text-white text-lg leading-snug mb-3">
        {title}
      </h3>
      <p className="text-brand-muted text-sm leading-relaxed line-clamp-3">
        {shortDesc}
      </p>

      {/* Learn More */}
      <div
        className={`mt-5 flex items-center gap-2 text-sm font-medium ${color}
                    opacity-0 group-hover:opacity-100 translate-y-2
                    group-hover:translate-y-0 transition-all duration-300`}
      >
        Learn More
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
        >
          <ArrowRight size={15} />
        </motion.span>
      </div>

      {/* Bottom gradient line */}
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

// ─── Solution Modal ───────────────────────────────────────────────────────────

function SolutionModal({
  solution,
  onClose,
}: {
  solution: Solution | null;
  onClose: () => void;
}) {
  if (!solution) return null;
  const {
    icon: Icon,
    color,
    glowColor,
    borderColor,
    tag,
    title,
    fullDesc,
    features,
    useCases,
  } = solution;

  return (
    <AnimatePresence>
      {solution && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            variants={modalBackdrop}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50"
            onClick={onClose}
          />

          {/* Panel */}
          <div className="fixed inset-0 z-50 flex items-center justify-center
                          p-4 sm:p-6 pointer-events-none">
            <motion.div
              key="panel"
              variants={modalPanel}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative pointer-events-auto w-full max-w-2xl max-h-[90vh]
                         overflow-y-auto glass-card border border-white/10 p-8 shadow-2xl"
              style={{
                boxShadow: `0 0 80px ${glowColor}, 0 40px 100px rgba(0,0,0,0.6)`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Glow top corner */}
              <div
                className="absolute top-0 right-0 w-64 h-64 rounded-full
                           pointer-events-none blur-3xl opacity-20"
                style={{ background: glowColor }}
              />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 w-9 h-9 rounded-full
                           bg-white/10 hover:bg-white/20 flex items-center
                           justify-center transition-colors duration-200 z-10"
                aria-label="Close modal"
              >
                <X size={16} className="text-white" />
              </button>

              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center
                              flex-shrink-0 bg-white/5 border ${borderColor}`}
                  style={{ boxShadow: `0 0 24px ${glowColor}` }}
                >
                  <Icon size={26} className={color} strokeWidth={1.6} />
                </div>
                <div>
                  <span
                    className={`text-[10px] font-bold tracking-widest uppercase
                                ${color} opacity-80`}
                  >
                    {tag}
                  </span>
                  <h2 className="font-heading font-bold text-white text-2xl mt-0.5 leading-tight">
                    {title}
                  </h2>
                </div>
              </div>

              {/* Divider */}
              <div
                className="w-full h-px mb-6"
                style={{
                  background: `linear-gradient(90deg, ${glowColor}, transparent)`,
                }}
              />

              {/* Description */}
              <p className="text-brand-muted leading-relaxed text-base mb-8">
                {fullDesc}
              </p>

              {/* Features */}
              <div className="mb-8">
                <h3
                  className={`font-heading font-bold text-base mb-4 flex items-center gap-2 ${color}`}
                >
                  <Sparkles size={16} />
                  Key Capabilities
                </h3>
                <ul className="space-y-3">
                  {features.map((f, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                      className="flex items-start gap-3 text-sm text-white/80"
                    >
                      <CheckCircle2
                        size={16}
                        className={`${color} mt-0.5 flex-shrink-0`}
                      />
                      {f}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Use Cases */}
              <div className="mb-8">
                <h3
                  className={`font-heading font-bold text-base mb-4 flex items-center gap-2 ${color}`}
                >
                  <ChevronRight size={16} />
                  Who This Is For
                </h3>
                <div className="space-y-2">
                  {useCases.map((u, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                      className={`flex items-center gap-3 px-4 py-3 rounded-xl
                                  bg-white/5 border ${borderColor} text-sm text-white/70`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${color.replace("text", "bg")}`}
                      />
                      {u}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <motion.a
                href="#contact"
                onClick={onClose}
                className="group flex items-center justify-center gap-3 w-full py-4
                           rounded-xl font-semibold text-white text-base
                           bg-gradient-to-r from-purple-700 to-violet-600
                           hover:from-purple-600 hover:to-violet-500
                           transition-all duration-300 shadow-lg overflow-hidden relative"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r
                                 from-transparent via-white/10 to-transparent
                                 -translate-x-full group-hover:translate-x-full
                                 transition-transform duration-700" />
                <span className="relative">Request a Consultation</span>
                <ArrowRight size={18} className="relative" />
              </motion.a>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

// ─── Main Solutions Section ───────────────────────────────────────────────────

export default function Solutions() {
  const [activeModal, setActiveModal] = useState<Solution | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  // Lock body scroll when modal is open
  const openModal = (solution: Solution) => {
    setActiveModal(solution);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "";
  };

  return (
    <>
      <section
        id="solutions"
        ref={sectionRef}
        className="relative py-28 overflow-hidden bg-[#0D0D1A]"
      >
        {/* Background Elements */}
        <GlowOrb
          size="w-[500px] h-[500px]"
          color="bg-purple-900"
          position="-top-40 -left-40"
          opacity={15}
          blur="blur-3xl"
          animate={false}
        />
        <GlowOrb
          size="w-[400px] h-[400px]"
          color="bg-violet-900"
          position="-bottom-20 -right-20"
          opacity={12}
          blur="blur-3xl"
          animate={false}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(155,89,182,0.8) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            className="flex flex-col items-center text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionBadge label="Our Solutions" />

            <h2
              className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl
                         text-white mt-5 mb-5 leading-tight"
            >
              End-to-End{" "}
              <span className="text-gradient">Technology Solutions</span>
            </h2>

            <p className="text-brand-muted text-lg max-w-2xl leading-relaxed">
              From cloud infrastructure to digital transformation — we deliver
              integrated technology capabilities that accelerate your growth,
              reduce complexity, and future-proof your operations.
            </p>

            {/* Decorative line */}
            <div className="mt-8 flex items-center gap-3">
              <span className="w-16 h-px bg-gradient-to-r from-transparent to-purple-500" />
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="w-16 h-px bg-gradient-to-l from-transparent to-purple-500" />
            </div>
          </motion.div>

          {/* Cards Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {SOLUTIONS.map((solution, i) => (
              <SolutionCard
                key={solution.id}
                solution={solution}
                index={i}
                onOpen={openModal}
              />
            ))}
          </motion.div>

          {/* Bottom CTA Strip */}
         
        </div>

        {/* Top SVG Wave from Hero */}
        <div className="absolute top-0 left-0 right-0 pointer-events-none overflow-hidden rotate-180">
          <svg
            viewBox="0 0 1440 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full"
            preserveAspectRatio="none"
          >
            <path d="M0,40 C360,80 1080,0 1440,40 L1440,60 L0,60 Z" fill="#0F0C29" />
          </svg>
        </div>
      </section>

      {/* Modal — Rendered outside section for clean z-index stacking */}
      <SolutionModal solution={activeModal} onClose={closeModal} />
    </>
  );
}