// components/AboutUs.tsx
"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
import SectionBadge from "./ui/SectionBadge";

const features = [
  "End‑to‑end technology consulting and implementation",
  "Cloud, data, and AI‑driven digital transformation",
  "Tailored corporate training programs for employees and leaders",
  "Compliance‑ready cybersecurity and governance frameworks",
];

export default function AboutUs() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      ref={ref}
      className="relative bg-gradient-to-b from-[#0F0C29] via-[#1a0533] to-[#0D0D1A]
                 py-20 lg:py-28 overflow-hidden"
    >
      {/* Light gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at top, rgba(155,89,182,0.12) 0%, transparent 50%)",
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(155,89,182,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(155,89,182,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {/* Left Text Column */}
          <motion.div className="space-y-7">
            <motion.div variants={itemVariants}>
              <SectionBadge label="Who We Are" />
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold
                         text-white leading-tight"
            >
              Over{" "}
              <span className="text-gradient">5 years delivering</span>{" "}
              technology excellence
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-brand-muted text-base sm:text-lg
                         leading-relaxed"
            >
              Bpurple Technology is a modern technology and training partner,
              helping organizations across industries build scalable systems,
              harness data‑driven insights, and upskill teams for the digital future.
              Our mission is to bridge the gap between vision and execution,
              so you can innovate faster, operate smarter, and grow sustainably.
            </motion.p>

            <motion.div variants={itemVariants}>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-purple-500/40
                                    flex items-center justify-center flex-shrink-0 mt-1">
                      <svg
                        className="w-2.5 h-2.5 text-white"
                        fill="currentColor"
                        viewBox="0 0 8 8"
                      >
                        <circle cx="4" cy="4" r="4" />
                      </svg>
                    </span>
                    <span className="text-sm sm:text-base text-white">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Right Illustration / Image Column */}
          <motion.div
            variants={itemVariants}
            className="rounded-3xl glass-card p-6 lg:p-8 border border-white/15
                       shadow-xl hover:shadow-2xl hover:border-purple-500/40
                       transition-all duration-300 hover:-translate-y-1
                       flex items-center justify-center"
          >
            <div className="w-full max-w-md aspect-square rounded-2xl
                            bg-gradient-to-br from-purple-900 via-violet-900 to-amber-900
                            flex flex-col items-center justify-center p-6
                            relative overflow-hidden">
              
              
              
               <span className="text-gradient font-heading text-3xl sm:text-4xl lg:text-5xl font-bold
                         text-white leading-tight">5 years delivering</span>
             

              {/* Glowing dots inside card */}
              <div className="absolute inset-0 opacity-20">
                <div
                  className="absolute w-20 h-20 rounded-full bg-purple-400 blur-xl
                             top-6 right-6"
                />
                <div
                  className="absolute w-16 h-16 rounded-full bg-amber-400 blur-xl
                             bottom-6 left-6"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}