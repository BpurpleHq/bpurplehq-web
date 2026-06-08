"use client";

import { useRef, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  ArrowLeft, Clock, Calendar, Eye, Heart,
  Share2, Tag, ChevronRight, Sparkles, Copy, Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { BlogPost } from "@/lib/blog-data";
import GlowOrb from "@/components/ui/GlowOrb";
import SectionBadge from "@/components/ui/SectionBadge";



function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 z-50 origin-left"
      style={{
        scaleX: scrollYProgress,
        background: "linear-gradient(90deg, #6A0DAD, #9B59B6, #F4A900)",
      }}
    />
  );
}

// ─── Share Button ──────────────────────────────────────────────────────────────

// function ShareMenu({ title }: { title: string }) {
//   const [open, setOpen]     = useState(false);
//   const [copied, setCopied] = useState(false);
//   const url = typeof window !== "undefined" ? window.location.href : "";

//   const copyLink = () => {
//     navigator.clipboard.writeText(url);
//     setCopied(true);
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="relative">
//       <motion.button
//         onClick={() => setOpen((o) => !o)}
//         className="flex items-center gap-2 px-4 py-2.5 rounded-full
//                    bg-white/70 backdrop-blur-sm border border-purple-200/60
//                    text-purple-700 text-xs font-semibold
//                    hover:border-purple-400 transition-all"
//         whileHover={{ scale: 1.04 }}
//         whileTap={{ scale: 0.96 }}
//       >
//         <Share2 size={13} /> Share
//       </motion.button>

//       {open && (
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9, y: 8 }}
//           animate={{ opacity: 1, scale: 1, y: 0 }}
//           className="absolute top-12 right-0 bg-white/90 backdrop-blur-md
//                      border border-purple-200/60 rounded-2xl p-3
//                      shadow-xl shadow-purple-200/40 min-w-[180px] z-20"
//         >
//           {[
//             {
//               label: "Twitter / X",
//               icon: Twitter,
//               href: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
//               color: "text-sky-500",
//             },
//             {
//               label: "LinkedIn",
//               icon: Linkedin,
//               href: `https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
//               color: "text-blue-600",
//             },
//             {
//               label: "Facebook",
//               icon: Facebook,
//               href: `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
//               color: "text-blue-500",
//             },
//           ].map(({ label, icon: Icon, href, color }) => (
//             <a
//               key={label}
//               href={href}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-3 px-3 py-2.5 rounded-xl
//                          hover:bg-purple-50 transition-colors text-xs
//                          text-purple-800 font-medium"
//             >
//               <Icon size={14} className={color} /> {label}
//             </a>
//           ))}
//           <button
//             onClick={copyLink}
//             className="flex items-center gap-3 px-3 py-2.5 rounded-xl w-full
//                        hover:bg-purple-50 transition-colors text-xs
//                        text-purple-800 font-medium"
//           >
//             {copied ? (
//               <Check size={14} className="text-emerald-500" />
//             ) : (
//               <Copy size={14} className="text-purple-500" />
//             )}
//             {copied ? "Copied!" : "Copy Link"}
//           </button>
//         </motion.div>
//       )}
//     </div>
//   );
// }

// ─── Related Card ──────────────────────────────────────────────────────────────

function RelatedCard({ post }: { post: BlogPost }) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55 }}
    >
      <Link href={`/blog/${post.slug}`}>
        <div className="group flex gap-4 p-4 rounded-2xl bg-white/60
                        backdrop-blur-sm border border-purple-200/50
                        hover:border-purple-400/60 hover:-translate-y-1
                        hover:shadow-lg hover:shadow-purple-200/40
                        transition-all duration-300 cursor-pointer">
          <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex-1 min-w-0">
            <span className={`text-[10px] font-bold tracking-wider uppercase ${post.categoryColor}`}>
              {post.category}
            </span>
            <h4 className="font-heading font-bold text-[#1A0533] text-sm
                           leading-snug line-clamp-2 mt-0.5 mb-1
                           group-hover:text-purple-700 transition-colors">
              {post.title}
            </h4>
            {/*<span className="flex items-center gap-1 text-[10px] text-purple-500/55">
              <Clock size={9} /> {post.readTime}
            </span>*/}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

// ─── Main BlogPostPage ─────────────────────────────────────────────────────────

export default function BlogPostPage({
  post,
  related,
}: {
  post: BlogPost;
  related: BlogPost[];
}) {
  const [liked, setLiked] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <main className="relative overflow-hidden">
      <ReadingProgress />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-28 pb-16">
        {/* Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(160deg, #F8F4FF 0%, #EDE8FA 35%, #F3EEFF 65%, #EAE3F8 100%)",
          }}
        />
        {/* Grid */}
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
        <GlowOrb size="w-[350px] h-[350px]" color="bg-violet-200"
          position="-bottom-16 -left-16" opacity={22} blur="blur-3xl" animate={false} />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/blog">
              <motion.button
                className="flex items-center gap-2 text-purple-600 text-sm font-semibold
                           hover:text-purple-800 transition-colors mb-8 group"
                whileHover={{ x: -3 }}
              >
                <ArrowLeft size={16}
                  className="group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </motion.button>
            </Link>
          </motion.div>

          {/* Category + meta */}
         {/* <motion.div
            className="flex flex-wrap items-center gap-3 mb-5"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.55 }}
          >
            <span
              className={`text-xs font-bold tracking-wider uppercase px-3 py-1.5
                          rounded-full bg-purple-100 border border-purple-200 ${post.categoryColor}`}
            >
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-purple-500/60">
              <Calendar size={11} /> {post.date}
            </span>
            <span className="flex items-center gap-1 text-xs text-purple-500/60">
              <Clock size={11} /> {post.readTime}
            </span>
            <span className="flex items-center gap-1 text-xs text-purple-500/60">
              <Eye size={11} /> {post.views} views
            </span>
          </motion.div>*/}

          {/* Title */}
          <motion.h1
            className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl
                       text-[#1A0533] leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.65 }}
          >
            {post.title}
          </motion.h1>

          {/* Excerpt */}
          <motion.p
            className="text-purple-700/65 text-lg leading-relaxed mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {post.excerpt}
          </motion.p>

          {/* Author row + actions */}
          {/*<motion.div
            className="flex flex-col sm:flex-row sm:items-center justify-between
                       gap-4 pb-8 border-b border-purple-200/50"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.55 }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br
                              from-purple-600 to-violet-700 flex items-center
                              justify-center text-white font-bold text-sm">
                B
              </div>
              <div>
                <p className="text-[#1A0533] text-sm font-semibold">{post.author}</p>
                <p className="text-purple-500/55 text-xs">{post.authorRole}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <motion.button
                onClick={() => setLiked((l) => !l)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full
                            text-xs font-semibold border transition-all duration-300 ${
                              liked
                                ? "bg-rose-50 border-rose-300 text-rose-600"
                                : "bg-white/70 border-purple-200/60 text-purple-700"
                            }`}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Heart size={13} className={liked ? "fill-rose-500 text-rose-500" : ""} />
                {liked ? post.likes + 1 : post.likes}
              </motion.button>

              <ShareMenu title={post.title} />
            </div>
          </motion.div>*/}
        </div>
      </section>

      {/* ── Hero Image ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-0 relative z-10">
        <motion.div
          className="relative w-full h-[300px] sm:h-[420px] rounded-3xl overflow-hidden
                     border border-purple-200/50 shadow-xl shadow-purple-200/40"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(106,13,173,0.15) 0%, transparent 55%)",
            }}
          />
        </motion.div>
      </div>

      {/* ── Body ── */}
      <div
        className="relative py-16"
        style={{
          background:
            "linear-gradient(180deg, #F3EEFF 0%, #EDE8FA 50%, #E8E0F5 100%)",
        }}
      >
        {/* Grid */}
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

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">

            {/* ── Article Content ── */}
            <motion.article
              ref={contentRef}
              className="flex-1 min-w-0"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              {/* Prose content */}
              <div
                className="prose prose-lg max-w-none
                           prose-headings:font-heading prose-headings:font-bold
                           prose-headings:text-[#1A0533] prose-headings:leading-snug
                           prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                           prose-p:text-purple-800/70 prose-p:leading-relaxed prose-p:mb-5
                           prose-ul:text-purple-800/70 prose-ul:space-y-2
                           prose-ol:text-purple-800/70 prose-ol:space-y-2
                           prose-li:leading-relaxed
                           prose-strong:text-[#1A0533] prose-strong:font-semibold
                           prose-a:text-purple-600 prose-a:no-underline
                           hover:prose-a:text-purple-800"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags */}
             <div className="mt-12 pt-8 border-t border-purple-200/50">
                <div className="flex items-center gap-2 flex-wrap">
                  <Tag size={14} className="text-purple-400" />
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-3 py-1.5 rounded-full
                                 bg-purple-100 text-purple-600 border border-purple-200/60
                                 hover:bg-purple-200/60 transition-colors cursor-default"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <motion.div
                className="mt-12 p-8 rounded-3xl border border-purple-300/40 text-center
                           relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, #2D1B69 0%, #1E1145 60%, #2A1060 100%)",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <GlowOrb size="w-48 h-48" color="bg-purple-500"
                  position="-top-10 -right-10" opacity={18} blur="blur-3xl" animate />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                                  bg-purple-500/20 border border-purple-400/30
                                  text-purple-300 text-xs font-bold tracking-widest
                                  uppercase mb-4">
                    <Sparkles size={11} /> Ready to Transform?
                  </div>
                  <h3 className="font-heading font-bold text-white text-xl mb-2">
                    Talk to a Bpurple Expert Today
                  </h3>
                  <p className="text-white text-sm mb-6 max-w-sm mx-auto">
                    Get a free consultation on how we can apply these insights
                    directly to your organisation.
                  </p>
                  <Link href="#contact">
                    <motion.button
                      className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full
                                 text-white font-semibold text-sm"
                      style={{ background: "linear-gradient(135deg, #6A0DAD, #9B59B6)" }}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(106,13,173,0.5)" }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Get Free Consultation
                      <ChevronRight size={15} />
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </motion.article>

            {/* ── Sidebar ── */}
            
          </div>
        </div>

        {/* Bottom wave */}
        <div className="pointer-events-none overflow-hidden mt-16">
          <svg viewBox="0 0 1440 60" fill="none"
            xmlns="http://www.w3.org/2000/svg" className="w-full"
            preserveAspectRatio="none">
            <path d="M0,20 C480,60 960,0 1440,35 L1440,60 L0,60 Z" fill="#0D0D1A" />
          </svg>
        </div>
      </div>
    </main>
  );
}
