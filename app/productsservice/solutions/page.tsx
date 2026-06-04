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
  <section className={`${bgColor} py-16 lg:py-24`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className={`flex flex-col ${imageFirst ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-16`}>
        
        {/* Image */}
        <motion.div
          className="w-full lg:w-1/2"
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
              className="w-full h-auto object-cover"
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
      <section className="pt-20 pb-16 bg-gradient-to-br from-[#0F0C29] via-[#1a0533] to-[#0D0D1A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
          >
            Technology Solutions That <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">Drive Real Results</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-xl text-gray-300"
          >
            Sovereign Cloud • Data Resilience • Training • Consulting • Solutions
          </motion.p>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Cloud, title: "Sovereign Cloud Services", desc: "Migration, optimization, and managed cloud solutions." },
              { icon: Shield, title: "Data Resilience & Backup", desc: "Enterprise backup, recovery, and disaster protection with Veeam." },
              { icon: Database, title: "Data Storage & Management", desc: "Secure, scalable, and high-performance data solutions." },
              { icon: Users, title: "Training & Workforce Development", desc: "Future-ready tech training and certification programs." },
              { icon: Code2, title: "Custom Development", desc: "Bespoke web, mobile, and enterprise applications." },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
                className="p-8 border border-gray-100 rounded-3xl hover:border-purple-200 hover:shadow-xl transition-all group"
              >
                <service.icon className="w-12 h-12 text-purple-600 mb-6" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Veeam Partnership Spotlight */}
      <ServiceSection
        title="Enterprise-Grade Data Resilience"
        subtitle="Delivering Global standards locally"
        content="As a trusted partner, we deliver best-in-class backup, recovery, and data management solutions. Protect your critical data against ransomware, human error, and disasters with automated, AI-powered protection."
        imageSrc="/cyber.png" 
        imageAlt="V Partnership"
        features={[
          "Ransomware protection & rapid recovery",
          "Cloud & hybrid backup strategies",
          "Automated disaster recovery orchestration",
          "Compliance-ready solutions (NDPC, NITDA, ISO, etc.)",
        ]}
        ctaText="Explore Veeam Solutions"
        bgColor="bg-gradient-to-br from-purple-50 to-violet-50"
      />

      {/* Cloud Services */}
      <ServiceSection
        title="Cloud Services & Migration"
        content="Seamlessly migrate to the cloud and optimize your infrastructure with our expert cloud consulting and management services. We support AWS, Azure, Google Cloud, and multi-cloud environments."
        imageSrc="/image7.jpg"
        imageAlt="Cloud Services"
        features={[
          "Cloud strategy and assessment",
          "Migration and modernization",
          "Managed cloud operations",
          "Cost optimization and governance",
        ]}
        imageFirst={true}
      />

      {/* Data Storage */}
      <ServiceSection
        title="Secure Data Storage Solutions"
        content="High-performance, scalable, and secure data storage solutions designed for today’s data-intensive businesses."
        imageSrc="/frame2.png"
        imageAlt="Data Storage"
        features={[
          "On-premise, cloud & hybrid storage",
          "Data lifecycle management",
          "High availability and redundancy",
          "Performance optimization",
        ]}
      />

      {/* Training & Consulting */}
      <ServiceSection
        title="Technology Training & Consulting"
        content="Empower your workforce with industry-relevant skills and strategic technology consulting that drives digital transformation."
        imageSrc="/frame1.png"
        imageAlt="Training and Consulting"
        imageFirst={true}
        features={[
          "Customized corporate training programs",
          "AI, Cloud, Cybersecurity & Data Science",
          "Certification preparation",
          "Digital transformation consulting",
        ]}
      />

      {/* Custom Development */}
      <ServiceSection
        title="Custom Web & Application Development"
        content="Build powerful, scalable, and user-centric digital solutions tailored to your exact business requirements."
        imageSrc="/frame444.jpeg"
        imageAlt="Web and App Development"
        features={[
          "Custom web and mobile applications",
          "Enterprise software solutions",
          "Modern, responsive, and secure platforms",
          "Seamless integration with existing systems",
        ]}
      />

      {/* Why bPurple */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Partner with Us?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12">
            We combine deep technical expertise with a client-first approach to deliver measurable business outcomes.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              "Global Partnership",
              "Experienced Cloud & Data Experts",
              "End-to-End Service Delivery",
              "Proven Track Record",
              "Flexible Engagement Models",
              "Ongoing Support & Training",
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-sm">
                <CheckCircle2 className="w-8 h-8 text-purple-600 mx-auto mb-4" />
                <p className="font-medium text-gray-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-gradient-to-br from-[#0F0C29] via-[#1a0533] to-[#0D0D1A] py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
            Ready to Secure, Scale, and Transform Your Business?
          </h2>
          <p className="mt-6 text-xl text-gray-300">
            Let’s discuss how our Cloud, Data, and Technology solutions can help you achieve your goals.
          </p>
          <div className="mt-10">
            <Link href="/contact">
              <button className="group inline-flex items-center gap-3 bg-white text-gray-900 font-semibold px-10 py-5 rounded-full text-lg hover:bg-gray-100 transition-all duration-300">
                Talk to Our Experts
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;


