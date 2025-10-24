// components/Metrics.jsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";




// Sample metrics data (replace with actual import from '@/constants')
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

// Fallback component for empty or missing metrics
const FallbackMetrics = () => (
  <div className="bg-red-100 text-red-700 p-4 rounded-lg text-center">
    No metrics available. Please check the metrics data in '@/constants'.
  </div>
);

const Metrics = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <section
      className="bg-extra py-12 md:py-16"
      data-aos="fade-up"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <h2 className="text-4xl md:text-4xl font-bold text-bpurpleDark font-montserrat text-center mb-8">
          Our Impact in Numbers
        </h2>
        {metrics && metrics.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[1440px] mx-auto text-bpurpleDark">
            {metrics.map(({ id, figure, title, image }) => (
              <motion.div
                key={id}
                className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                role="article"
                aria-labelledby={`metric-title-${id}`}
              >
                <div className="relative w-16 h-16">
                  <Image
                    src={image}
                    alt={`${title} icon`}
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <p
                    id={`metric-title-${id}`}
                    className="text-3xl md:text-4xl font-bold text-bpurpleDark font-montserrat"
                  >
                    {figure}
                  </p>
                  <p className="text-lg text-gray-700 font-open-sans font-semibold mt-2">
                    {title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <FallbackMetrics />
        )}
      </div>
    </section>
  );
};

export default Metrics;