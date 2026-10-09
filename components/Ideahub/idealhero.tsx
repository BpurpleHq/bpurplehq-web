"use client";

import Link from "next/link";

type HeroProps = {
  /** YouTube video ID (the part after youtu.be/) */
  videoId?: string;
  eyebrow?: string;
  headline?: string;
  highlight?: string;
  subline?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  tags?: string[];
};

export default function Hero({
  videoId = "CEjyYuQcG1o",
  eyebrow = "Smart Interactive Boards",
  headline = "Turn every room into a",
  highlight = "smart collaboration space.",
  subline = "From lecture halls to boardrooms, IdeaHub brings 4K video, wireless projection, and interactive whiteboarding into one screen, supplied, installed, and supported by Bpurple.",
//   primaryCta = { label: "Book a demo", href: "/contact" },
//   secondaryCta = { label: "Explore the range", href: "#ideahub-models" },
  tags = ["Digital classrooms", "Meeting rooms", "Lecture halls"],
}: HeroProps) {
  return (
    <section
      aria-labelledby="ideahub-hero-title"
      className="relative w-full overflow-hidden bg-[linear-gradient(135deg,#2B1245_0%,#5B2A86_100%)] text-white"
    >
      {/* soft glow behind the video */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_85%_20%,rgba(183,155,214,0.28),transparent_60%)]"
      />

      <div className="relative mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-7 px-5 pb-12 pt-10 lg:min-h-[min(80vh,720px)] lg:grid-cols-2 lg:gap-10 lg:py-20 lg:pl-14 lg:pr-8">
        {/* value caption (first on mobile, left on desktop) */}
        <div>
          <p className="mb-4 inline-block rounded-full border border-white/30 bg-white/5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.08em] text-[#B79BD6]">
            {eyebrow}
          </p>

          <h1
            id="ideahub-hero-title"
            className="mb-4 text-[clamp(2rem,4.4vw,3.6rem)] font-extrabold leading-[1.08] tracking-tight"
          >
            {headline} <span className="text-[#B79BD6]">{highlight}</span>
          </h1>

          <p className="mb-7 max-w-xl text-base leading-relaxed text-white/85 lg:text-lg">
            {subline}
          </p>

          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            {/* <Link
              href={primaryCta.href}
              className="rounded-[10px] bg-white px-6 py-3.5 text-center font-bold text-[#5B2A86] transition hover:-translate-y-0.5 hover:bg-[#F3EEF8] motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className="rounded-[10px] border-[1.5px] border-white/55 px-6 py-3.5 text-center font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {secondaryCta.label}
            </Link> */}
          </div>

          {tags.length > 0 && (
            <ul className="m-0 flex list-none flex-wrap gap-x-5 gap-y-2 p-0 text-sm text-white/80">
              {tags.map((tag) => (
                <li key={tag} className="flex items-center gap-2">
                  <span aria-hidden className="font-bold text-[#B79BD6]">
                    &#10003;
                  </span>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* video frame: half the screen on desktop, full width on mobile */}
        <div className="w-full rounded-[14px] bg-white/10 p-1.5 shadow-[0_24px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/20 lg:rounded-[18px] lg:p-2">
          <div className="relative aspect-video w-full overflow-hidden rounded-[9px] bg-[#120A1D] lg:rounded-xl">
            <iframe
              className="absolute inset-0 h-full w-full border-0"
              src={`https://www.youtube-nocookie.com/embed/${videoId}?rel=0`}
              title="IdeaHub intelligent collaboration video"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}