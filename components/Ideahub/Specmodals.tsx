"use client";

interface SpecsModalProps {
  modelId: string;
  onClose: () => void;
}

const specsData: Record<string, any> = {
  es3: {
    name: "IdeaHub ES3 / ES3 Pro",
    tagline: "Executive Series – Ultimate Meeting Experience",
    sizes: "65″ / 75″ / 86″",
    highlights: [
      "Dual 4K cameras with 5x zoom",
      "24-microphone array with 15m pickup",
      "Enterprise-grade security (CC EAL6+)",
      "AI Vision Engine + Smart Tracking",
    ],
    specs: [
      { label: "Display", value: "4K UHD (3840×2160), Soft-light, Anti-blue light" },
      { label: "Touch", value: "20+ points, ≤5ms response" },
      { label: "Writing Latency", value: "As low as 16ms" },
      { label: "Camera", value: "Dual 4K (Wide + Telephoto), 5x hybrid zoom" },
      { label: "Microphone", value: "24-array, 15m pickup, AI noise reduction" },
      { label: "Speakers", value: "High-power stereo (up to 70W on Pro)" },
      { label: "OS", value: "HarmonyOS + Optional Windows OPS" },
      { label: "Connectivity", value: "Wi-Fi 6, HDMI, USB-C, LAN" },
      { label: "Key Features", value: "BYOM, 9-pane projection, Smart Control 2.0" },
      { label: "Security", value: "End-to-end encryption, Privacy shutter" },
    ],
  },
  s3: {
    name: "IdeaHub S3 / S3 Pro",
    tagline: "Professional Series – High Performance Collaboration",
    sizes: "65″ / 75″ / 86″",
    highlights: [
      "Dual 4K cameras",
      "9-pane multi-screen sharing",
      "Smart Control 2.0",
      "Strong AI features",
    ],
    specs: [
      { label: "Display", value: "4K UHD, Soft-light panel" },
      { label: "Touch", value: "20+ points infrared touch" },
      { label: "Writing Latency", value: "16ms ultra-low latency" },
      { label: "Camera", value: "Dual 4K cameras with AI tracking" },
      { label: "Microphone", value: "High-performance array (up to 15m on higher models)" },
      { label: "Speakers", value: "Powerful stereo system" },
      { label: "OS", value: "HarmonyOS + Windows OPS optional" },
      { label: "Connectivity", value: "Wi-Fi 6 / Wi-Fi 7 (Pro), USB-C, HDMI" },
      { label: "Key Features", value: "BYOM, Ultrasonic projection, Multi-window" },
      { label: "Management", value: "IdeaManager remote management" },
    ],
  },
  s2: {
    name: "IdeaHub S2 / S2 Pro",
    tagline: "Versatile Series – Reliable Everyday Performer",
    sizes: "65″ / 75″ / 86″",
    highlights: [
      "4K professional camera",
      "Wi-Fi 6 direct projection",
      "Excellent BYOM experience",
      "16ms writing latency",
    ],
    specs: [
      { label: "Display", value: "4K UHD (3840×2160)" },
      { label: "Touch", value: "20-point infrared touch" },
      { label: "Writing Latency", value: "16ms" },
      { label: "Camera", value: "4K camera with Auto-Framing & Speaker Tracking" },
      { label: "Microphone", value: "6–12 array microphones, up to 12m pickup" },
      { label: "Speakers", value: "40W stereo" },
      { label: "OS", value: "HarmonyOS + Optional Windows" },
      { label: "Connectivity", value: "Wi-Fi 6, HDMI, USB 3.0, Type-C" },
      { label: "Key Features", value: "BYOM, Wireless projection, Multi-window" },
      { label: "Best For", value: "Corporate meeting rooms & branch offices" },
    ],
  },
  b3: {
    name: "IdeaHub B3 / Board 3 Pro",
    tagline: "Smart Value Series – Ideal for Education & Standard Rooms",
    sizes: "65″ / 75″ / 86″",
    highlights: [
      "4K Soft-light anti-blue light screen",
      "Excellent value for money",
      "BYOM + Wi-Fi 6 projection",
      "Smooth 16ms writing",
    ],
    specs: [
      { label: "Display", value: "4K Soft-light with Optical Anti-blue light" },
      { label: "Touch", value: "20-point touch" },
      { label: "Writing Latency", value: "16ms" },
      { label: "Camera", value: "4K camera (or optional external)" },
      { label: "Microphone", value: "6-array, ~10m pickup" },
      { label: "Speakers", value: "30W stereo" },
      { label: "OS", value: "HarmonyOS + Windows OPS optional" },
      { label: "Connectivity", value: "Wi-Fi 6, HDMI, USB-C, Type-A" },
      { label: "Key Features", value: "BYOM, Ultrasonic / Wi-Fi Direct projection" },
      { label: "Best For", value: "Training rooms, classrooms, open collaboration spaces" },
    ],
  },
};

export default function SpecsModal({ modelId, onClose }: SpecsModalProps) {
  const data = specsData[modelId];

  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-card border border-white/20 rounded-2xl shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-black/80 backdrop-blur-md border-b border-white/10 px-6 py-5 flex items-start justify-between">
          <div>
            <span className="inline-block px-3 py-1 text-xs rounded-full bg-lavender/20 text-lavender mb-2">
              Detailed Specifications
            </span>
            <h3 className="text-2xl font-bold">{data.name}</h3>
            <p className="text-brand-muted text-sm mt-1">{data.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white text-2xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-8">
          {/* Sizes */}
          <div>
            <p className="text-sm text-brand-muted mb-1">Available Sizes</p>
            <p className="text-lg font-semibold">{data.sizes}</p>
          </div>

          {/* Highlights */}
          <div>
            <h4 className="font-semibold mb-3">Key Highlights</h4>
            <ul className="grid sm:grid-cols-1 gap-2">
              {data.highlights.map((item: string, i: number) => (
                <li key={i} className="flex items-center gap-2 text-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-lavender" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Full Specs Table */}
          <div>
            <h4 className="font-semibold mb-4">Technical Specifications</h4>
            <div className="space-y-3">
              {data.specs.map((spec: any, i: number) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-3 border-b border-white/10 last:border-0"
                >
                  <span className="text-brand-muted text-sm">{spec.label}</span>
                  <span className="font-medium text-sm sm:text-right max-w-md">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <a
              href="#cta"
              onClick={onClose}
              className="cta-button text-center font-semibold flex-1"
            >
              Request Quote for this Model
            </a>
            <button
              onClick={onClose}
              className="cta-secondary font-semibold flex-1"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}