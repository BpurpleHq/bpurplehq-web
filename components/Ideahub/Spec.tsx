const SPEC_ROWS = [
  {
    label: "Positioning",
    vals: [
      "Flagship LED",
      "High-End",
      "Cost-Effective",
      "Cost-Effective",
      "Entry-Level",
      "Basic",
    ],
  },
  {
    label: "Display / Size",
    vals: [
      '4K / 138" (16:9)',
      '1080p / 65"–86"',
      '1080p / 65"–86"',
      '1080p / 65"–86"',
      '1080p / 65"–86"',
      '1080p / 65"–86"',
    ],
  },
  {
    label: "Operating System",
    vals: [
      "—",
      "HarmonyOS + Windows",
      "HarmonyOS + Windows",
      "HarmonyOS + Windows",
      "Android + Windows",
      "Android + Windows",
    ],
  },
  {
    label: "Memory / Storage",
    vals: [
      "—",
      "8 GB + 64 GB",
      "8 GB + 64 GB",
      "8 GB + 64 GB",
      "4 GB + 32 GB",
      "4 GB + 32 GB",
    ],
  },
  {
    label: "Camera",
    vals: [
      "CloudLink Box req.",
      "4K Professional",
      "4K Professional",
      "None (ext. req.)",
      "4K Professional",
      "None",
    ],
  },
  {
    label: "Mic / Pickup",
    vals: ["—", "12 m", "10 m", "10 m", "10 m", "None"],
  },
  {
    label: "Speaker",
    vals: ["—", "40 W", "30 W", "30 W", "30 W", "30 W"],
  },
  {
    label: "Wireless",
    vals: [
      "—",
      "Wi-Fi 6 Dual-band",
      "Wi-Fi 6 Dual-band",
      "Wi-Fi 6 Dual-band",
      "Dual-band Wi-Fi",
      "Dual-band Wi-Fi",
    ],
  },
  {
    label: "Security",
    vals: [
      "Rock-solid protection",
      "CC EAL6+ / HarmonyOS",
      "CC EAL6+ / HarmonyOS",
      "HarmonyOS",
      "Standard",
      "Standard",
    ],
  },
] as const;

const SPEC_HEADERS = [
  "IdeaPresence 138",
  "IdeaHub S2",
  "IdeaHub B3",
  "Board 3 Pro",
  "IdeaHub B2",
  "Board 2",
] as const;

export default function Specs() {
  return (
    <section id="specs" className="bg-white px-6 py-24 md:px-16">
      <div className="mx-auto max-w-6xl">
        {/*<SectionEyebrow>Technical Specifications</SectionEyebrow>*/}
        {/*<SectionTitle>2026 Specification Overview</SectionTitle>*/}
        <p className="mb-12 mt-4 max-w-xl text-base leading-relaxed text-gray-500">
          Side-by-side comparison of the full IdeaHub eKit product family for
          informed procurement decisions.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-100 shadow-sm">
          <table className="w-full min-w-[860px] border-collapse">
            <thead>
              <tr className="bg-[#0D0F14]">
                <th className="w-40 whitespace-nowrap px-5 py-4 text-left text-[11px] font-semibold uppercase tracking-widest text-gray-400">
                  Specification
                </th>
                {SPEC_HEADERS.map((h) => (
                  <th
                    key={h}
                    className="whitespace-nowrap px-5 py-4 text-left text-[11px] font-bold uppercase tracking-wider text-white"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SPEC_ROWS.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-b border-gray-50 transition-colors hover:bg-gray-50 ${
                    i % 2 === 0 ? "bg-white" : "bg-gray-50/50"
                  }`}
                >
                  <td className="whitespace-nowrap px-5 py-4 text-[11px] font-bold uppercase tracking-widest text-gray-700">
                    {row.label}
                  </td>
                  {row.vals.map((v, vi) => (
                    <td
                      key={vi}
                      className="px-5 py-4 text-sm leading-snug text-gray-500"
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}