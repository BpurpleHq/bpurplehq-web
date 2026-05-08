// components/Metrics.jsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const metrics = [
  {
    id: 1,
    figure: "500+",
    title: "Professionals Trained",
    image: "/people.png",
  },
  {
    id: 2,
    figure: "10+",
    title: "Solutions Deployed",
    image: "/check.png",
  },
  {
    id: 3,
    figure: "99.9%",
    title: "Systems Secured",
    image: "/handshake.png",
  },
];

const GlowOrb = ({ className = "" }) => (
  <div
    className={`absolute w-64 h-64 rounded-full bg-gradient-to-br from-purple-500 via-violet-500 to-fuchsia-500 opacity-20 blur-3xl ${className}`}
  />
);

const Metrics = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);


  return (
    <section className="relative bg-[#0a071f] py-20 md:py-28 overflow-hidden">
      {/* Background Glow Orbs */}
      <GlowOrb className="-top-32 -left-32" />
      <GlowOrb className="top-1/3 -right-40 w-96 h-96" />
      <GlowOrb className="bottom-10 left-1/4 w-80 h-80" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent font-montserrat tracking-tight">
            Our Impact in Numbers
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-md mx-auto">
            Real results. Real growth.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {metrics.map(({ id, figure, title, image }, index) => (
            <motion.div
              key={id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              viewport={{ once: true }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-purple-500/30 transition-all duration-500 shadow-2xl"
            >
              {/* Subtle inner glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500" />

              <div className="flex items-start gap-6 relative z-10">
                {/* Icon with glow */}
                <div className="relative w-20 h-20 flex-shrink-0">
                  <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                  <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-violet-600 rounded-2xl flex items-center justify-center border border-white/20">
                    <Image
                      src={image}
                      alt={`${title} icon`}
                      fill
                      className="object-contain p-4"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="pt-1">
                  <p className="text-3xl md:text-4xl font-bold text-white font-montserrat tracking-tighter">
                    {figure}
                  </p>
                  <p className="text-xl text-gray-300 font-medium mt-3 leading-tight">
                    {title}
                  </p>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-purple-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Very subtle code pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
    </section>
  );
};

export default Metrics;