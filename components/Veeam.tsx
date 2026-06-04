"use client"
import React from "react";

const partnerBenefits = [
  {
    title: "Fast Recovery",
    description: "Restore VMs, databases, and cloud workloads in minutes, not hours.",
  },
  {
    title: "AI-Powered Detection",
    description: "Identify hidden ransomware risks and corrupt backups faster.",
  },
  {
    title: "Immutable Storage",
    description: "Protect backups from deletion, encryption, and tampering.",
  },
  {
    title: "Cloud Mobility",
    description: "Backup across on-prem, Azure, AWS, and hybrid environments.",
  },
];

const sectors = [
  {
    title: "Financial Services",
    description: "Protect regulated data, reduce downtime, and speed up recovery.",
  },
  {
    title: "Healthcare",
    description: "Safeguard patient records and maintain continuity of care.",
  },
  {
    title: "Telecoms & ISPs",
    description: "Scale backup across distributed and hybrid infrastructure.",
  },
  {
    title: "Government",
    description: "Support compliance, resilience, and data sovereignty needs.",
  },
  {
    title: "Oil & Gas",
    description: "Protect remote operations and critical industrial systems.",
  },
  {
    title: "SMBs",
    description: "Deliver managed backup with predictable cost and local support.",
  },
];

export default function HomePageVeeamSection() {
  return (
    <div className="bg-white text-[#111827]">
      <section className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-4 inline-flex items-center rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              Authorized Veeam Pro-Partner & Reseller
            </p>

            <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              There Is So Much More Data. We Protect It.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              bpurple delivers enterprise-grade backup, cyber resilience, and AI-driven data protection to Nigerian businesses that cannot afford downtime.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-md bg-[#111827] px-6 py-3 text-sm font-semibold text-white transition hover:bg-black"
              >
                Request a 14-Day POC
              </a>
              <a
                href="#solutions"
                className="rounded-md border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-800 transition hover:border-gray-400 hover:bg-gray-50"
              >
                Explore Veeam Solutions
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500">
              <span>5+ Years in Tech Services & Training</span>
              <span>Lagos-Based Support</span>
              <span>99.9% Recovery SLAs</span>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold">Enterprise Backup. Local Expertise.</h2>
            <p className="mt-3 text-gray-600">
              We combine Veeam’s proven data protection platform with bpurple’s consulting, implementation, and support experience.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {partnerBenefits.map((item) => (
                <div key={item.title} className="rounded-xl bg-white p-4 shadow-sm ring-1 ring-gray-100">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="solutions" className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Built for Nigerian Industries That Can’t Afford Downtime
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Target the sectors where backup, recovery, compliance, and cyber resilience matter most.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12">
          <div className="rounded-3xl bg-[#111827] px-6 py-12 text-white sm:px-10">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Ready to Protect Your Data?
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-gray-300">
                  Request a free ransomware resilience assessment or a 14-day proof-of-concept. Get a customized backup architecture and transparent licensing guidance.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 lg:justify-end">
                <a
                  href="#contact"
                  className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#111827] transition hover:bg-gray-100"
                >
                  Request Free Assessment
                </a>
                <a
                  href="#contact"
                  className="rounded-md border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}