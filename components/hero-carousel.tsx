'use client';

import { useState, useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation'
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import slideimg1 from '@/public/newslider3.jpg';
import slideimg4 from '@/public/newslider5.jpeg';
import slideimg3 from '@/public/newslider4.jpg';

interface Slide {
  title: string;
  subtitle: string;
  image: any; // Use 'any' for Next.js image imports
  primaryButton: string;
  secondaryButton: string;
}



const SLIDE_INTERVAL = 5000;

const slides: Slide[] = [
  {
    title: "Driving Digital Transformation",
    subtitle:
      "Transform your business by seamlessly integrating innovative technologies, streamlining operations, and aligning strategic vision with actionable solutions to achieve sustainable growth and competitive advantage.",
    image: slideimg1,
    primaryButton: "Get Started",
    secondaryButton: "Contact Us",
  },
  {
    title: "Optimising Workforce and Workflows",
    subtitle:
      "Empower your team with advanced tools and automation, fostering collaboration, boosting productivity, and preparing your organization for the dynamic demands of the modern workplace.",
    image: slideimg4,
    primaryButton: "Our Services",
    secondaryButton: "Contact Us",
  },
  {
    title: "Innovating Tomorrow, Today",
    subtitle:
      "Unlock your business's potential with state-of-the-art technology solutions, designed to drive innovation, enhance efficiency, and position your organization at the forefront of industry advancements.",
    image: slideimg3,
    primaryButton: "Our Services",
    secondaryButton: "Contact Us",
  },
];

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);

    const intervalId = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, SLIDE_INTERVAL);

    return () => {
      clearInterval(intervalId);
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative overflow-hidden bg-background" ref={emblaRef}>
      <div className="flex h-[75vh]">
        {slides.map((slide, index) => (
          <div key={index} className="flex-[0_0_100%] relative min-w-0">
            {/* Image with gradient overlay */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                className="object-cover"
                priority={index === 0} // Add priority for first image
              />
              <div className="absolute inset-0 bg-extra opacity-90" />
            </div>

             {/* Content */}
            <div className="relative h-full flex items-center z-10">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl bg-bpurpleDark backdrop-blur-md rounded-xl p-8 text-white"
                  aria-live="polite"
                >
                  <h1 className="text-4xl md:text-6xl font-bold mb-4 font-sans">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 opacity-90 font-sans">
                    {slide.subtitle}
                  </p>
                  <div className="flex gap-4">
                    <Link href="/productsservice/solutions">
                      <motion.button
                        className="cta-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {slide.primaryButton}
                      </motion.button>
                    </Link>
                    <Link href="/faq">
                      <motion.button
                        className="cta-secondary"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {slide.secondaryButton}
                      </motion.button>
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === selectedIndex
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}