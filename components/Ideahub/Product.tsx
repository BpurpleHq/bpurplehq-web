"use client";


import SpecsModal from "./Specmodals";
import Image from "next/image";
import {
  useState,
  useCallback,
  useEffect,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from "react";


const PRODUCTS = [
  {
    badge: "",
    badgeColor: "bg-amber-100 text-amber-700 border border-amber-300",
    name: "IdeaHub S2",
    size: '65" / 75" / 86"',
    position: "Flagship LED",
    image: "/s3.jpg",
    highlights: [
      "Cool-running COB display technology",
      "Full-link 4K 60 fps professional video",
      "Rock-solid security protection",
      "Immersive audiovisual experience",
    ],
    scenario:
      "Large meeting rooms, lecture halls, command centers, exhibition halls, IOC",
  },
  // {
  //   badge: "High-End",
  //   badgeColor: "bg-purple-50 text-red-600 border border-red-200",
  //   name: "IdeaHub S2",
  //   size: '65" / 75" / 86"',
  //   position: "High-End",
  //   image: "/s2.jpg",
  //   highlights: [
  //     "1080p cloud & on-premises meeting",
  //     "BYOM + Intelligent Tracking + Acoustic Baffle",
  //     "Dual-band Wi-Fi 6 for direct projection",
  //     "Dual mirror and control",
  //   ],
  //   scenario: "Executive rooms, small to medium-sized meeting rooms",
  // },
  {
    badge: "",
    badgeColor: "bg-purple-50 border",
    name: "IdeaHub B3",
    size: '65" / 75" / 86"',
    position: "Cost-Effective",
    image: "/b3.jpg",
    highlights: [
      "BYOM (Bring Your Own Meeting)",
      "AI-powered communication",
      "Smart office collaboration",
      "Dual-band Wi-Fi 6 for projection",
    ],
    scenario: "Regular meeting rooms, open discussion areas, store halls",
  },
  {
    badge: "",
    badgeColor: "bg-gray-100 text-gray-600 border border-gray-200",
    name: "IdeaHub S3",
    size: '65" / 75" / 86"',
    position: "Reimagine Workplaces",
    image: "/s3.jpg",
    highlights: [
      "1080p cloud meeting (camera required)",
      "Seamless collaboration & ultimate experience",
      "BYOM support built-in",
      "HarmonyOS + Windows (OPS required)",
    ],
    scenario:
      "Digital classrooms, collaborative classrooms, regular meeting rooms",
  },
  {
    badge: "",
    badgeColor: "bg-gray-100 text-gray-600 border border-gray-200",
    name: "IdeaHub B2",
    size: '65" / 75" / 86"',
    position: "HD Cloud Conferencing",
    image: "/id3.jpg",
    highlights: [
      "1080p HD cloud meeting",
      "25 ms low latency for smooth writing",
      "Dual-band Wi-Fi projection",
      "4K professional camera included",
    ],
    scenario: "Regular meeting rooms, open discussion areas, store halls",
  },
  // {
  //   badge: "Basic",
  //   badgeColor: "bg-gray-100 text-gray-600 border border-gray-200",
  //   name: "IdeaHub Board 2",
  //   size: '65" / 75" / 86"',
  //   position: "Interactive Teaching",
  //   image: "/75.jpg",
  //   highlights: [
  //     "4K soft light screen for better eye care",
  //     "25 ms low latency for smooth writing",
  //     "Convenient wireless projection",
  //     "Dual-band Wi-Fi for projection",
  //   ],
  //   scenario: "Digital classroom, hybrid learning, collaborative classroom",
  // },
] as const;

function ProductImage({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-violet-100 via-purple-50 to-fuchsia-100 ${className}`}
      >
        <span className="px-4 text-center text-xs font-semibold uppercase tracking-widest text-violet-400">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      className={`object-contain object-center ${className}`}
      sizes="(max-width: 768px) 100vw, 40vw"
      onError={() => setFailed(true)}
    />
  );
}


export default function Products() {
  return (
    <section id="products" className="bg-gray-50 px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
      

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1">
          {PRODUCTS.map((p) => (
            <div
              key={p.name}
              className="flex flex-col overflow-hidden rounded-xl border border-gray-100 bg-white transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[16/10] w-full bg-gradient-to-br from-violet-50 to-gray-50">
                <ProductImage src={p.image} alt={p.name} />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <span
                  className={`mb-4 self-start rounded-full px-3 py-1 text-[11px] font-bold ${p.badgeColor}`}
                >
                  {p.badge}
                </span>
                <h3 className="mb-1 text-2xl font-extrabold uppercase leading-tight text-gray-900">
                  {p.name}
                </h3>
                <p className="mb-1 text-xs tracking-wide text-gray-400">
                  {p.size}
                </p>
                <p className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-600">
                  {p.position}
                </p>
                <ul className="flex-1 space-y-2">
                  {p.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-2 block h-0.5 w-4 flex-shrink-0 bg-gray-500" />
                      {h}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 border-t border-gray-50 pt-4 text-[11px] italic leading-relaxed text-gray-400">
                  Best for: {p.scenario}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
