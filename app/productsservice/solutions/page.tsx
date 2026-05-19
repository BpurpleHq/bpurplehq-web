"use client";

import { workforceCard } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

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
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const InfoSection = ({
  title,
  content,
  imageSrc,
  imageAlt,
  bgColor = "bg-white",
  additionalContent = [],
  imageFirst = false,
  features = [],
}: {
  title: React.ReactNode;
  content: string;
  imageSrc: string;
  imageAlt: string;
  bgColor?: string;
  additionalContent?: string[];
  imageFirst?: boolean;
  features?: string[];
}) => (
  <section className={`${bgColor} py-16 lg:py-24`}>
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col ${
        imageFirst ? "lg:flex-row-reverse" : "lg:flex-row"
      } items-center gap-8 lg:gap-16`}
    >
      {/* Image */}
      <motion.div
        className="w-full lg:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        
      >
        <div className="relative overflow-hidden rounded-2xl shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-500">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={600}
            className="w-full h-auto object-cover"
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-transparent pointer-events-none" />
        </div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="w-full lg:w-1/2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
        >
          {title}
        </motion.h2>

        <motion.p
          
          className="mt-6 text-base sm:text-lg text-gray-700 leading-relaxed"
        >
          {content}
        </motion.p>

        {additionalContent.map((text, index) => (
          <motion.p
            key={index}
            
            className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed"
          >
            {text}
          </motion.p>
        ))}

        {features.length > 0 && (
          <motion.div variants={fadeInUp} className="mt-6 space-y-3">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </motion.div>
        )}

        <motion.div variants={fadeInUp} className="mt-8">
          <Link href="/contact">
            <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 to-violet-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-purple-700/50 hover:scale-105 transition-all duration-300">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

const Page = () => {
  return (
    <main className="relative w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0F0C29] via-[#1a0533] to-[#0D0D1A] pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Recover fast. Sleep easy.{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">
                  Reduce risk and meet compliance.
                </span>
              </motion.h1>
              <motion.p
                
                className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed"
              >
                AI‑driven detection, automated threat analysis and trusted recovery orchestration — protect data and accelerate your Data & AI journey.
              </motion.p>
              <motion.div className="mt-8">
                <Link href="/contact">
                  <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 to-violet-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-purple-700/50 hover:scale-105 transition-all duration-300">
                    Contact Us
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                <Image
                  src="/aboutImg.png"
                  alt="Tech training solutions"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Team as a Service */}
      <InfoSection
        title={
          <>
            <span className="text-gray-700">Data Team</span> as a Service
          </>
        }
        content="Our service is crafted to adapt to your evolving business needs, ensuring expert guidance is provided at optimal times when it will have the greatest impact. This allows your team to concentrate on key business strategies. Fuel your business growth with strategic insights and maintain a flexible, cost-effective approach to leading with data."
        imageSrc="/dataImg.svg"
        imageAlt="Data services"
        bgColor="bg-gradient-to-br from-purple-50 to-lavender-50"
        additionalContent={[
          "We enable businesses to understand their data—structured or unstructured, elevating insights to an entirely new level without worrying about data quality issues.",
        ]}
        features={[
          "Expert data analysis and insights",
          "Flexible, scalable solutions",
          "Cost-effective approach to data management",
        ]}
      />



      {/* Workforce Empowerment */}
      <InfoSection
        title={
          <>
            Prepare and{" "}
            <span className="text-purple-700">Empower</span> your labor force
            for the <span className="text-purple-700">future</span> of work.
          </>
        }
        content="The future of work is shaped by transformative trends such as automation, artificial intelligence, remote collaboration, and a shift toward skill-based employment. As industries embrace digitization and innovation, organizations must ensure their teams are agile, resilient, and equipped to handle emerging technologies and roles."
        imageSrc="/frame1.png"
        imageAlt="Workforce empowerment"
        bgColor="bg-white"
        imageFirst={true}
        additionalContent={[
          "Let bpurpleHQ help you make that team a dream come true.",
        ]}
        features={[
          "Future-ready training programs",
          "AI and automation expertise",
          "Remote collaboration tools",
        ]}
      />

      <section className="relative bg-gradient-to-br from-[#0F0C29] via-[#1a0533] to-[#0D0D1A] pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Background Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Text Content */}
            <motion.div
              className="w-full lg:w-1/2 text-center lg:text-left"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.h1
                
                className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                Empower Your Future:{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-amber-400">
                  Comprehensive Tech Training Solutions
                </span>
              </motion.h1>
              <motion.p
                
                className="mt-6 text-lg sm:text-xl text-gray-300 leading-relaxed"
              >
                Discover our cutting-edge courses, certifications, and programs
                designed to equip you with in-demand skills in data, AI, and
                beyond—crafted to shape the next generation of tech leaders.
              </motion.p>
              <motion.div className="mt-8">
                <Link href="/courses">
                  <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 to-violet-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-purple-700/50 hover:scale-105 transition-all duration-300">
                    View Courses
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Hero Image */}
            <motion.div
              className="w-full lg:w-1/2"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="relative">
                <Image
                  src="/aboutImg.png"
                  alt="Tech training solutions"
                  width={600}
                  height={600}
                  className="w-full h-auto rounded-2xl shadow-2xl"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-transparent rounded-2xl pointer-events-none" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Web & App Development */}
      <InfoSection
        title={
          <>
            Expert Web & APP{" "}
            <span className="text-purple-700">Development</span> Services
          </>
        }
        content="Elevate your online presence with our expert web development services. We design and build custom, responsive, and secure websites that meet your unique business needs and goals. Let's get started."
        imageSrc="/frame444.jpeg"
        imageAlt="Web development services"
        bgColor="bg-gradient-to-br from-purple-50 to-lavender-50"
        additionalContent={["Contact us to bring your vision to life."]}
        features={[
          "Custom web and mobile applications",
          "Responsive, modern designs",
          "Secure and scalable solutions",
        ]}
      />

      {/* Tailored Solutions */}
      <InfoSection
        title={
          <>
            Drive Your Business with{" "}
            <span className="text-purple-700">Tailored Solutions</span> for Your
            Unique Need.
          </>
        }
        content="Every business operates differently, with unique processes, priorities, and pain points. Generic tools often fall short in addressing specific needs, resulting in inefficiencies and missed opportunities. Our tailored solutions are designed to fit your operations perfectly, ensuring maximum effectiveness and a competitive edge."
        imageSrc="/frame2.png"
        imageAlt="Tailored business solutions"
        bgColor="bg-white"
        imageFirst={true}
        additionalContent={[
          "Your business deserves solutions that are as unique as your processes. Let us help you unlock new efficiencies, improve performance, and achieve your goals with tailored strategies designed for your success. Contact us to schedule a consultation to learn how we can help drive your business with amazing, customized solutions.",
          "Together, we'll take your business to the next level!",
        ]}
        features={[
          "Customized to your business processes",
          "Maximize efficiency and performance",
          "Competitive edge through innovation",
        ]}
      />

  

      {/* Transform Your Labor Force */}
      <section className="bg-gradient-to-br from-purple-50 to-lavender-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12"
          >
            Transform Your Labor Force
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
          >
            {workforceCard.map(({ id, title, content }) => (
              <motion.div
                key={id}
                
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-2"
              >
                <h4 className="font-bold text-xl text-center text-gray-900 mb-4">
                  {title}
                </h4>
                <p className="text-center text-gray-700 leading-relaxed">
                  {content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-[#0F0C29] via-[#1a0533] to-[#0D0D1A] py-20 lg:py-28">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-gray-300"
          >
            Let's discuss how our solutions can help you achieve your goals.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10"
          >
            <Link href="/faq/ask-a-question">
              <button className="group inline-flex items-center gap-2 bg-gradient-to-r from-purple-700 to-violet-600 text-white font-semibold px-10 py-5 rounded-full shadow-lg hover:shadow-purple-700/50 hover:scale-105 transition-all duration-300">
                Get in Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Page;