import { useState, useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion } from 'framer-motion';


const SLIDE_INTERVAL = 5000;

const slides = [
  {
    title: "Driving Digital Transformation",
    subtitle: "Bridging the Gap Between Vision and Reality with Our Advanced Solutions",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1600",
    primaryButton: "Get Started",
    secondaryButton: "Learn More"
  },
  {
    title: "Optimising Workforce and Workflows",
    subtitle: "Prepare your team for the future of work, with cutting-edge technology",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1600",
    primaryButton: "Join Now",
    secondaryButton: "Watch Demo"
  },
  {
   
    title: "Innovating Tomorrow, Today",
    subtitle: "Empowering Businesses with Cutting-Edge Technology Solutions", 
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600",
    primaryButton: "Start Free",
    secondaryButton: "View Features"
  }
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
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/40" />
            </div>

            {/* Content */}
            <div className="relative h-full flex items-center">
              <div className="container mx-auto px-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="max-w-2xl text-white"
                >
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-8 opacity-90">
                    {slide.subtitle}
                  </p>
                
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
          />
        ))}
      </div>
    </div>
  );
}