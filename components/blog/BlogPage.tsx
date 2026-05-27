"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  Search, ArrowRight, Clock, Tag, ChevronRight,
  Sparkles, TrendingUp, BookOpen, Rss, Filter,
  Calendar, User, Eye, Heart, Share2, X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import GlowOrb from "@/components/ui/GlowOrb";
import SectionBadge from "@/components/ui/SectionBadge";
import { BLOG_POSTS, BlogPost } from "@/lib/blog-data";

// ─── Types ─────────────────────────────────────────────────────────────────────

// ─── Data ──────────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { label: "All",               icon: BookOpen,   color: "text-purple-600",  bg: "bg-purple-100",  border: "border-purple-200" },
  { label: "Cloud",             icon: TrendingUp, color: "text-sky-600",     bg: "bg-sky-100",     border: "border-sky-200" },
  { label: "AI & Data",         icon: Sparkles,   color: "text-violet-600",  bg: "bg-violet-100",  border: "border-violet-200" },
  { label: "Cybersecurity",     icon: Tag,        color: "text-rose-600",    bg: "bg-rose-100",    border: "border-rose-200" },
  { label: "Training",          icon: BookOpen,   color: "text-amber-600",   bg: "bg-amber-100",   border: "border-amber-200" },
  { label: "Digital Transform", icon: Rss,        color: "text-emerald-600", bg: "bg-emerald-100", border: "border-emerald-200" },
];

// ─── Animation Variants ────────────────────────────────────────────────────────

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

// ─── Blog Card ─────────────────────────────────────────────────────────────────

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  const [liked, setLiked] = useState(false);
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      custom={index}
      variants={fadeUp}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="group flex flex-col overflow-hidden rounded-2xl
                 bg-white/70 backdrop-blur-md border border-purple-200/60
                 hover:border-purple-400/60 hover:-translate-y-2
                 hover:shadow-xl hover:shadow-purple-200/40
                 transition-all duration-400"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 40%, rgba(248,244,255,0.8) 100%)",
          }}
        />
        {/* Category pill */}
        <span
          className={`absolute top-3 left-3 text-[10px] font-bold tracking-wider
                      uppercase px-3 py-1.5 rounded-full bg-white/90
                      backdrop-blur-sm border border-purple-200/50 ${post.categoryColor}`}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        {/* Title */}
        <h3 className="font-heading font-bold text-[#1A0533] text-base leading-snug
                       mb-2 line-clamp-2 group-hover:text-purple-800
                       transition-colors duration-300 flex-1">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-purple-700/55 text-xs leading-relaxed line-clamp-2 mb-4">
          {post.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4
                        border-t border-purple-100 mt-auto">

          <div className="flex items-center gap-2">
            <Link href={`/blog/${post.id}`}>
              <motion.button
                className="flex items-center gap-1.5 px-4 py-2 rounded-full
                           text-white text-[10px] font-semibold"
                style={{ background: "linear-gradient(135deg, #6A0DAD, #9B59B6)" }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read <ArrowRight size={11} />
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Newsletter Box ────────────────────────────────────────────────────────────

function NewsletterBox() {
  const [email, setEmail]       = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7 }}
      className="relative overflow-hidden rounded-3xl p-8 md:p-12 text-center
                 border border-purple-300/40"
      style={{
        background:
          "linear-gradient(135deg, #2D1B69 0%, #1E1145 50%, #2A1060 100%)",
      }}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      <GlowOrb size="w-64 h-64" color="bg-purple-500"
        position="-top-16 -right-16" opacity={20} blur="blur-3xl" animate />
      <GlowOrb size="w-48 h-48" color="bg-amber-400"
        position="-bottom-10 -left-10" opacity={15} blur="blur-3xl" animate={false} />

      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                        bg-purple-500/20 border border-purple-400/30
                        text-purple-300 text-xs font-bold tracking-widest
                        uppercase mb-5">
          <Rss size={11} />
          Stay Ahead of the Curve
        </div>

        <h3 className="font-heading font-bold text-white text-2xl md:text-3xl
                       leading-tight mb-3">
          Get Weekly Tech Insights{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #C084FC, #F4A900)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Delivered
          </span>
        </h3>
        <p className="text-white text-sm mb-8 max-w-md mx-auto">
          Cloud updates, AI trends, security alerts and training offers — curated
          weekly for Nigerian tech leaders.
        </p>

        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2
                         text-emerald-400 font-semibold text-sm"
            >
              <span className="w-5 h-5 rounded-full bg-emerald-400/20
                               border border-emerald-400/40 flex items-center
                               justify-center text-emerald-400 text-xs">✓</span>
              You're subscribed! Welcome to the Bpurple community.
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your work email"
                required
                className="flex-1 px-5 py-3.5 rounded-full bg-white/10
                           border border-white/20 text-white placeholder-white/35
                           text-sm focus:outline-none focus:border-purple-400/60
                           focus:bg-white/15 transition-all duration-200"
              />
              <motion.button
                type="submit"
                className="flex items-center justify-center gap-2 px-7 py-3.5
                           rounded-full text-white font-semibold text-sm
                           whitespace-nowrap"
                style={{ background: "linear-gradient(135deg, #6A0DAD, #9B59B6)" }}
                whileHover={{ scale: 1.04, boxShadow: "0 0 30px rgba(106,13,173,0.5)" }}
                whileTap={{ scale: 0.97 }}
              >
                Subscribe <ArrowRight size={15} />
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>

        <p className="text-white/30 text-[10px] mt-4">
          No spam. Unsubscribe anytime. NDPR compliant.
        </p>
      </div>
    </motion.div>
  );
}

// ─── Main BlogPage Component ───────────────────────────────────────────────────

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery]       = useState("");
  const [searchOpen, setSearchOpen]         = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const filtered = BLOG_POSTS.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="relative overflow-hidden">

      {/* ══════════════════════════════════════════
          HERO — Blog Header
      ══════════════════════════════════════════ */}
      <section className="relative overflow-hidden pt-32 pb-24">

        {/* Light lavender background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #F8F4FF 0%, #EDE8FA 35%, #F3EEFF 65%, #EAE3F8 100%)",
          }}
        />

        {/* Square grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(106,13,173,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(106,13,173,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-25"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(106,13,173,0.2) 1px, transparent 1px)`,
            backgroundSize: "56px 56px",
          }}
        />

        <GlowOrb size="w-[500px] h-[500px]" color="bg-purple-300"
          position="-top-24 -right-24" opacity={20} blur="blur-3xl" animate />
        <GlowOrb size="w-[400px] h-[400px]" color="bg-violet-200"
          position="-bottom-16 -left-16" opacity={24} blur="blur-3xl" animate={false} />

        <div
          ref={heroRef}
          className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <motion.h1
            className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl
                       text-[#1A0533] leading-[1.08] mt-6 mb-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Tech Insights for the{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #6A0DAD, #9B59B6, #F4A900)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Modern Enterprise
            </span>
          </motion.h1>

          <motion.p
            className="text-purple-700/60 text-lg leading-relaxed max-w-2xl mx-auto mb-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.65 }}
          >
            Cloud, AI, cybersecurity, and digital transformation — written by
            practitioners for Nigerian and African business leaders.
          </motion.p>
        </div>

        {/* Wave into body */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1440 55" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-full" preserveAspectRatio="none">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,55 L0,55 Z" fill="#F3EEFF" />
          </svg>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          BODY
      ══════════════════════════════════════════ */}
      <div
        className="relative"
        style={{
          background:
            "linear-gradient(180deg, #F3EEFF 0%, #EDE8FA 40%, #E8E0F5 100%)",
        }}
      >
        {/* Persistent grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(106,13,173,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(106,13,173,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          
          {/* ── Articles Grid ── */}
          <div className="mb-6 flex items-center gap-3">
            <span className="font-heading font-bold text-[#1A0533] text-xl">
              {activeCategory === "All" && !searchQuery
                ? "Latest Articles"
                : searchQuery
                ? `Results for "${searchQuery}"`
                : activeCategory}
            </span>
            <span className="flex-1 h-px bg-purple-200/60" />
            <span className="text-xs text-purple-500/60 font-medium">
              {filtered.length} article{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>

          <AnimatePresence mode="wait">
            {filtered.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center py-24 gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-purple-100 border border-purple-200
                                flex items-center justify-center">
                  <Search size={24} className="text-purple-400" />
                </div>
                <p className="text-purple-700/60 font-semibold text-lg">
                  No articles found
                </p>
                <p className="text-purple-500/40 text-sm">
                  Try a different category or search term
                </p>
                <button
                  onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                  className="mt-2 px-6 py-2.5 rounded-full text-sm font-semibold
                             text-white bg-gradient-to-r from-purple-700 to-violet-600"
                >
                  Clear filters
                </button>
              </motion.div>
            ) : (
              <motion.div
                key={activeCategory + searchQuery}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filtered.map((post, i) => (
                  <BlogCard key={post.id} post={post} index={i} />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* ── Newsletter ── */}
          <div className="mt-20">
            <NewsletterBox />
          </div>
        </div>

        {/* Bottom wave into dark footer */}
        <div className="pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg"
            className="w-full" preserveAspectRatio="none">
            <path d="M0,20 C480,60 960,0 1440,35 L1440,60 L0,60 Z" fill="#0D0D1A" />
          </svg>
        </div>
      </div>
    </main>
  );
}