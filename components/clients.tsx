import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import { 
  SiMeta, 
  SiAmazon, 
  SiIntel, 
  SiOracle 
} from 'react-icons/si';

const logos = [
  { icon: SiMeta, name: 'Meta' },
  { icon: SiAmazon, name: 'Amazon' },
  { icon: SiIntel, name: 'Intel' },
  { icon: SiOracle, name: 'Oracle' },
];

export default function ClientLogos() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: true,
    containScroll: 'trimSnaps',
    align: 'start',
  });

  useEffect(() => {
    if (!emblaApi) return;

    // Auto-scroll every 20ms for smooth continuous movement
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 1500);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  return (
    <section className="py-5 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-center mb-4">Industry Leaders</h2>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {/* Duplicate logos for seamless infinite scroll */}
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="flex-[0_0_25%] min-w-0 flex items-center justify-center px-4"
              >
                <logo.icon className="w-20 h-20 text-muted-foreground/60 hover:text-primary transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}