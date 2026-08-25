"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Cloud, Database, Users, Code2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1] as const, // Add 'as const' or use a string like "easeOut"
    },
  }),
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

// More Flexible Service Section Component
const ServiceSection = ({
  title,
  subtitle,
  content,
  imageSrc,
  imageAlt,
  imageFirst = false,
  features = [],
  ctaText = "Get Started",
  ctaLink = "/contact",
  bgColor = "bg-white",
}: {
  title: React.ReactNode;
  subtitle?: string;
  content: string;
  imageSrc: string;
  imageAlt: string;
  imageFirst?: boolean;
  features?: string[];
  ctaText?: string;
  ctaLink?: string;
  bgColor?: string;
}) => (
  <section className={`${bgColor} py-8 lg:py-24`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`flex flex-col ${imageFirst ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}>
        
        {/* Image */}
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-purple-500/30 transition-all duration-500">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={700}
              height={500}
              className="w-full h-full object-cover"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/20 to-transparent" />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeInUp} className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            {title}
          </motion.h2>

          {subtitle && (
            <motion.p variants={fadeInUp} className="mt-3 text-xl text-purple-700 font-medium">
              {subtitle}
            </motion.p>
          )}

          <motion.p variants={fadeInUp} className="mt-6 text-lg text-gray-700 leading-relaxed">
            {content}
          </motion.p>

          {features.length > 0 && (
            <motion.div variants={fadeInUp} className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </motion.div>
          )}

          <motion.div variants={fadeInUp} className="mt-10">
            <Link href={ctaLink}>
              <button className="group inline-flex items-center gap-3 bg-gradient-to-r from-purple-700 to-violet-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-purple-700/50 hover:scale-105 transition-all duration-300">
                {ctaText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Page = () => {
  return (
    <main className="relative w-full overflow-hidden">
      {/* Page Intro */}
     

    
   

      {/*  Partnership Spotlight */}
      <ServiceSection
        title="Intelligent Collaboration"
        content="Our all-in-one collaboration endpoints integrate professional audio and video, flawless device collaboration and deep integration with professional conferencing systems to accelerate industry digitalization."
        imageSrc="/s3.jpg"
        imageAlt="ideahub"
        features={[
          "4K crystal clear visual and sound",
          "Open and Fast Integration",
          "Limitless Collaboration",
          "Ubiquitous intelligent interactions",
        ]}
        ctaText="Explore Devices"
        ctaLink = "/intelligent-collaboration"
        bgColor="bg-gradient-to-br from-purple-50 to-violet-50"
      />

    
    </main>
  );
};

export default Page;


