"use client";

import React, { useState, useEffect } from 'react';
import { motion, Variants } from 'framer-motion';
import Image from "next/image";
import slideimg1 from '@/public/newslider1.jpg';


interface HeroProps {
  // Add props if needed
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero: React.FC<HeroProps> = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['AI Innovation..', 'Technology Solutions..', 'Future Skills..'];



  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 3000); // Change word every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 hero-gradient overflow-hidden">
      {/* WebGL Particle Background */}

      {/* Content */}
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4 max-w-4xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        aria-live="polite"
      >
        Empowering Africa with{' '}
        <motion.span
          key={words[currentWordIndex]}
          variants={wordVariants}
          initial="hidden"
          animate="visible"
          className="text-lavender inline-block"
        >
          {words[currentWordIndex]}
        </motion.span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-2xl mb-6 max-w-2xl relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Democratizing access to AI, cloud, and automation with trusted solutions
        for enterprises, institutions, and individuals to thrive in the digital
        economy.
      </motion.p>
      <motion.p
        className="text-lg md:text-xl mb-8 italic relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        Transforming businesses, communities, and futures across Africa and beyond.
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-4 mb-12 relative z-10">
        <motion.a
          href="/productsservice/solutions"
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Explore Our Solutions
        </motion.a>
        <motion.a
          href="/faq"
          className="cta-secondary"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
      </div>

      {/* Partner Logos */}
   {/* <motion.div
        className="flex gap-8 items-center relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6, staggerChildren: 0.2 }}
      >
        <motion.img
          src="/newlogo.png"
          alt="Palo Alto Networks"
          className="h-12 glow"
          loading="lazy"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src="/handshake.png"
          alt="Huawei"
          className="h-12 glow"
          loading="lazy"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
      </motion.div>*/}

      {/* Background Image */}
      <Image
        src= {slideimg1}
        alt="African tech professionals collaborating"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
        loading="lazy"
      />
    </section>
  );
};

export default Hero;