"use client";

import { useState, type FormEvent } from "react";
import { Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import styles from "./page.module.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

type Role = "learner" | "teacher";

// Update the version whenever the Privacy Notice changes.
const PRIVACY_NOTICE_VERSION = "2026-10-v1";
// Prefix for same-site URLs when the site is served under a sub-path
// (set NEXT_PUBLIC_BASE_PATH=/stack-nextgen in the environment; empty when served from the root).
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const PRIVACY_NOTICE_URL = `${BASE}/privacy`; // TODO: publish the notice at this path

/* ---------------- Content ---------------- */

type Layer = {
  n: number;
  name: string;
  tagline: string;
  open: boolean;
  note: string;
  who: string;
  learn: string[];
  outcome: string;
};

const LAYERS: Layer[] = [
  {
    n: 1,
    name: "Foundations",
    tagline: "Where every learner starts.",
    open: true,
    note: "Free during our pilot",
    who: "Anyone beginning their tech journey: school leavers, curious learners, and groups supported by sponsors.",
    learn: [
      "Your digital identity and footprint",
      "How the internet and the cloud really work",
      "Your data rights and how to protect your privacy",
      "Spotting fraud and cyber-scams",
      "AI literacy and responsible use of AI",
      "Nigeria's sovereign cloud and the careers it creates",
    ],
    outcome: "A safe, confident and informed digital citizen, ready to go deeper.",
  },
  {
    n: 2,
    name: "Associate",
    tagline: "Learn the fundamentals by doing.",
    open: false,
    note: "Outline. Details confirmed as the layer opens",
    who: "Learners who have completed Foundations and want practical technical skills.",
    learn: [
      "Hands-on basics of data, systems and the web",
      "Guided mini-projects built on Nigerian scenarios",
      "Cohort learning with mentor check-ins",
      "A first portfolio piece you can show",
    ],
    outcome: "Practical fundamentals and the confidence to start building.",
  },
  {
    n: 3,
    name: "Practitioner",
    tagline: "Apply skills to real work.",
    open: false,
    note: "Outline. Details confirmed as the layer opens",
    who: "Learners ready to work on realistic tasks and team projects.",
    learn: [
      "Applied projects based on real workplace problems",
      "Working in teams and using professional tools",
      "Guidance from STACK Fellows",
      "Building a portfolio that tells your story",
    ],
    outcome: "The ability to contribute on real tasks, not just follow lessons.",
  },
  {
    n: 4,
    name: "Specialist",
    tagline: "Go deep in one direction.",
    open: false,
    note: "Tracks to be announced",
    who: "Practitioners who want to specialise in a chosen area of technology.",
    learn: [
      "Choose a focused track, such as data, AI, cloud or security",
      "Deeper, project-led study in your track",
      "Security and responsible-use thinking built in",
      "Mentoring from experienced practitioners",
    ],
    outcome: "Depth in one area, and a clear professional direction.",
  },
  {
    n: 5,
    name: "Architect",
    tagline: "Design, govern and lead.",
    open: false,
    note: "Outline. Details confirmed as the layer opens",
    who: "Specialists ready to design whole systems and lead others.",
    learn: [
      "Designing systems end to end",
      "Governance, security and responsible AI at system level",
      "Leading teams and mentoring the next cohort",
      "Capstone work with real-world context",
    ],
    outcome: "Someone who can build, govern and lead, and who brings others up too.",
  },
];

const CURRICULUM = [
  {
    num: "1",
    name: "Identity (Digital You)",
    hook: "Know who you are online. Understand your digital identity before someone else decides for you.",
    advanced: false,
  },
  { num: "2", name: "Systems", hook: "See how the internet and cloud actually work.", advanced: false },
  { num: "3", name: "Trusted", hook: "Learn the law that protects your data and how to use it.", advanced: false },
  {
    num: "4",
    name: "Secure",
    hook: "Learn to catch a scam before it catches you: fake alerts, phishing links, SIM-swap fraud.",
    advanced: false,
  },
  {
    num: "5",
    name: "Intelligence",
    hook: "Use AI responsibly. Tell a real video from a deepfake, and use AI without losing your data or your judgement.",
    advanced: false,
  },
  { num: "6", name: "Build", hook: "Turn what you have learned into something you can teach.", advanced: false },
  {
    num: "7",
    name: "Sovereign Cloud",
    hook: "From fundamentals into Nigeria's sovereign cloud, to building innovative solutions in local contexts.",
    advanced: true,
  },
];

const STATS = [
  { num: "1300+", label: "people trained in digital skills and empowerment" },
  { num: "700+", label: "trained across data, AI and digital literacy" },
  { num: "~100", label: "young Nigerians trained across all six geopolitical zones through strategic partnerships" },
  { num: "3000+", label: "learners registered across all programmes" },
];

const PILLARS = [
  { tag: "Secure", title: "Security literacy", text: "Spot fraud patterns before they cost you money or your identity." },
  { tag: "Trusted", title: "Data privacy", text: "Know your data rights, and how to act when they are broken." },
  { tag: "Aware", title: "AI literacy", text: "Use AI tools responsibly, and recognise deepfakes and misinformation." },
  { tag: "Build Local", title: "Cloud", text: "Cloud fundamentals and the players in Nigeria, taught through case studies." },
];

const MOVES = [
  { title: "A story you recognise", text: "Every lesson starts with a Nigerian scene: a POS stand, a campus ATM queue, a shop in Aba." },
  { title: "The idea, explained simply", text: "Plain language first. The technical term comes after you already understand it." },
  { title: "Practise it", text: "Short activities that turn the idea into a habit or a skill." },
  { title: "Use it in your everyday life", text: "Apply it to your own phone, your own business, your own school or community." },
];

const CAST = [
  { name: "Tola", role: "University student, Ibadan", note: "Building a freelance design business." },
  { name: "Mama Nkechi", role: "Provisions shop owner, Aba", note: "Runs a POS terminal." },
  { name: "Emeka", role: "Phone repairer and POS agent", note: "Quick with tech, sometimes takes shortcuts." },
  { name: "Hajiya Amina", role: "Retired teacher, Kano", note: "Just got her first smartphone." },
  { name: "Osas", role: "Bank fraud analyst", note: "The one who knows how scams work." },
];

const LEARNER_BENEFITS = [
  "Career head start: Get an early introduction to in-demand fields like cybersecurity, data protection, and cloud computing.",
  "Zero-barrier entry: Join the cohort at no cost, so anyone can start learning immediately.",
  "Practical, Nigeria-focused skills: Work through real-life scenarios like fake bank alerts, SMS and email phishing attempts, and deepfake scams instead of abstract theory.",
  "Recognised achievement: Earn a completion certificate, with top performers gaining recognition to showcase your skills.",
  "Confidence to handle real online threats: Gain practical skills to identify and respond to common scams.",
];

const INSTITUTION_BENEFITS = [
  "Trained teachers and STACK Fellows: Lessons are led by trained teachers, with forward-deployed STACK Fellows beside them.",
  "Lagos first: We are starting with fee-paying private schools in Lagos.",
  "Nigeria-relevant digital safety: Students learn to spot fake alerts, phishing and deepfakes, supporting a safer school community.",
  "Governance-first: We teach responsible, secure use of AI and data.",
];

const DELIVERY = [
  { title: "Trained teachers and STACK Fellows", text: "In schools, learning is led by trained teachers with forward-deployed STACK Fellows beside them." },
  { title: "Governance-first", text: "We teach people to use AI and data responsibly, securely and ethically, not just to use them." },
  {
    title: "Experience behind it",
    text: "Built by a team with 10+ years of experience, in partnership with industry experts.",
  },
];

const FAQ = [
  {
    q: "Is STACK-NextGen free?",
    a: "The pilot is free. We are planning to work with fee-paying private schools, starting in Lagos. Foundations is sponsor-led and ongoing.",
  },
  {
    q: "Who can join?",
    a: "Any Nigerian, with no age limit. If you are in secondary school, university, or out of school, you are welcome.",
  },
  {
    q: "How are lessons taught?",
    a: "Through Nigerian stories in simple language. You meet the same characters across lessons, so ideas stick and stay relevant.",
  },
  {
    q: "What happens after Foundations?",
    a: "Foundations leads into Associate, Practitioner, Specialist and Architect. We will share details for each layer as it opens.",
  },
  {
    q: "Will I get a certificate?",
    a: "Learners earn a completion certificate, with top performers gaining recognition. We will confirm what each later layer offers as it opens.",
  },
  {
    q: "How can my school get involved?",
    a: "Tell us in the sign-up form or reach out to the team. We will talk through how STACK-NextGen can work in your school.",
  },
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
};

const emptyForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
};

function scrollToSignup() {
  document.getElementById("signup")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ---------------- Page ---------------- */

export default function StackNextGenLanding() {
  const [role] = useState<Role>("learner");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState<FormState>(emptyForm);
  // Consent must be an affirmative action, so it starts unticked.
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [activeLayer, setActiveLayer] = useState(0);

  // Single source of truth for "is the form allowed to submit".
  const consentComplete = privacyConsent;
  const layer = LAYERS[activeLayer];

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitError("");

    const payload = {
      role,
      ...form,
      fullName: form.fullName.trim(),
      email: form.email.trim(),
      phone: form.phone.trim(),

      // The API route rejects any signup without these.
      consentComplete,
      noticeVersion: PRIVACY_NOTICE_VERSION,
    };

    if (!payload.fullName || !payload.email || !payload.phone) {
      setSubmitError("Please complete all required fields.");
      return;
    }

    if (!consentComplete) {
      setSubmitError("Please tick the consent box below to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(`${BASE}/api/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || "We could not submit your signup. Please try again.");
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className={`${styles.page} ${display.variable} ${body.variable}`} style={{ fontFamily: "var(--font-body)" }}>
      {/* Nav */}
      <nav className={styles.nav} aria-label="Main">
        <a href="#top" className={styles.navMark} aria-label="STACK-NextGen home">
          <b>S</b>
          STACK<span>-NextGen</span>
        </a>
        <div className={styles.navLinks}>
          <a href="#journey">Journey</a>
          <a href="#curriculum">Foundations</a>
          <a href="#how">How we teach</a>
          <a href="#benefits">Benefits</a>
          <a href="#faq">FAQ</a>
        </div>
        <a href="#signup" className={styles.navCta}>
          Join STACK
        </a>
      </nav>

      {/* Hero */}
      <header id="top" className={styles.heroWrap}>
        <div className={styles.hero}>
          <div className={styles.heroText}>
            <p className={styles.heroEyebrow}>Bpurple Technology LTD</p>
            <h1>
              Learn technology through <em>stories you recognise.</em>
            </h1>
            <p className={styles.heroLead}>
              STACK-NextGen takes Nigerians from digital foundations to architect level, one clear layer at a time. Real local stories, simple language, and
              lessons on AI, cloud, data privacy and fraud.
            </p>
            <div className={styles.heroActions}>
              <button className={styles.btnPrimary} onClick={scrollToSignup}>
                Join STACK
              </button>
              <a href="#journey" className={styles.btnSecondary}>
                Explore the five layers
              </a>
            </div>
            <p className={styles.heroNote}>The pilot is free. Foundations is open now.</p>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <span className={styles.startTag}>Start here</span>
            <div className={styles.bars}>
              {LAYERS.map((l) => (
                <div key={l.n} className={`${styles.bar} ${l.n === 1 ? styles.barOn : ""}`} style={{ height: `${28 + l.n * 14}%` }}>
                  {l.n}
                </div>
              ))}
            </div>
            <div className={styles.barNames}>
              {LAYERS.map((l) => (
                <span key={l.n}>{l.name}</span>
              ))}
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className={styles.stats}>
        {STATS.map((s) => (
          <div key={s.num} className={styles.statItem}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* About */}
      <section id="about" className={styles.section}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutCopy}>
            <h2>What STACK-NextGen is</h2>
            <p>
              STACK-NextGen is Bpurple Technology&apos;s school for the next generation of Nigerian technologists. It is built around security, data privacy,
              cloud and AI literacy, and it runs entirely on Nigerian scenarios: NIN and BVN slips leaked on WhatsApp Status, fake links, fake bank alerts at the
              market, and deepfakes of public figures.
            </p>
            <p>
              Five layers carry you from Foundations to Architect. You start with what keeps you safe, then build skills you can use, and grow into someone who
              can design and lead.
            </p>
          </div>

          <div className={styles.pillarList}>
            {PILLARS.map((p) => (
              <div key={p.tag} className={styles.pillarRow}>
                <span className={styles.pillarTag}>{p.tag}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Five layers */}
      <section id="journey" className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>The journey</p>
          <h2>Five layers. One clear path.</h2>
          <p>Each layer builds on the one before. Pick a layer to see who it is for and what you will gain.</p>
        </div>

        <div className={styles.stairs} role="tablist" aria-label="Layers">
          {LAYERS.map((l, i) => (
            <button
              key={l.n}
              type="button"
              role="tab"
              aria-selected={i === activeLayer}
              aria-controls="layer-panel"
              className={`${styles.stair} ${i === activeLayer ? styles.stairActive : ""}`}
              style={{ minHeight: `${84 + i * 22}px` }}
              onClick={() => setActiveLayer(i)}
            >
              <small>0{l.n}</small>
              <b>{l.name}</b>
            </button>
          ))}
        </div>

        <div id="layer-panel" role="tabpanel" className={styles.layerPanel} aria-live="polite">
          <h3>
            Layer {layer.n}: {layer.name}
            <span className={`${styles.badge} ${layer.open ? styles.badgeOpen : ""}`}>{layer.open ? "Open now" : "Planned"}</span>
          </h3>
          <p className={styles.layerTagline}>{layer.tagline}</p>
          <p className={styles.layerNote}>{layer.note}</p>

          <div className={styles.layerCols}>
            <div>
              <h4>What you will learn</h4>
              <ul>
                {layer.learn.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Who it is for</h4>
              <p>{layer.who}</p>
              <div className={styles.layerOut}>
                <h4>You leave with</h4>
                <p>{layer.outcome}</p>
              </div>
            </div>
          </div>

          <div className={styles.layerNav}>
            <button type="button" className={styles.btnPurple} onClick={scrollToSignup}>
              {layer.open ? "Start with Foundations" : "Hear first when this layer opens"}
            </button>
            <span className={styles.spacer} />
            <button
              type="button"
              className={styles.btnGhostDark}
              disabled={activeLayer === 0}
              onClick={() => setActiveLayer((a) => Math.max(0, a - 1))}
            >
              Previous
            </button>
            <button
              type="button"
              className={styles.btnGhostDark}
              disabled={activeLayer === LAYERS.length - 1}
              onClick={() => setActiveLayer((a) => Math.min(LAYERS.length - 1, a + 1))}
            >
              Next layer
            </button>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>Layer 1 · Open now</p>
          <h2>Your Foundations learning path</h2>
          <p>Seven modules, building from digital basics to Nigeria&apos;s national data sovereignty policy.</p>
        </div>

        <div className={styles.tableWrap}>
          <table className={styles.moduleTable}>
            <thead>
              <tr>
                <th scope="col" className={styles.colNum}>
                  Module
                </th>
                <th scope="col" className={styles.colName}>
                  Topic
                </th>
                <th scope="col">What you will learn</th>
              </tr>
            </thead>
            <tbody>
              {CURRICULUM.map((m) => (
                <tr key={m.num} className={m.advanced ? styles.advancedRow : ""}>
                  <td data-label="Module" className={styles.colNum}>
                    <span className={styles.numDot}>{m.num}</span>
                  </td>
                  <td data-label="Topic" className={styles.colName}>
                    <span className={styles.topicName}>{m.name}</span>
                    {m.advanced && <span className={styles.pathBadge}>Advanced track</span>}
                  </td>
                  <td data-label="What you will learn" className={styles.colHook}>
                    {m.hook}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* How we teach */}
      <section id="how" className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>How we teach</p>
          <h2>Stories first. Then skills.</h2>
          <p>Technology sticks when it is connected to life. Every lesson follows the same four moves.</p>
        </div>

        <ol className={styles.moves}>
          {MOVES.map((m, i) => (
            <li key={m.title} className={styles.move}>
              <span className={styles.moveNum}>{i + 1}</span>
              <h3>{m.title}</h3>
              <p>{m.text}</p>
            </li>
          ))}
        </ol>

        <h3 className={styles.castHead}>Meet the people in our stories</h3>
        <p className={styles.castLead}>You will meet the same characters across lessons. You may recognise someone you know.</p>
        <div className={styles.cast}>
          {CAST.map((c) => (
            <div key={c.name} className={styles.person}>
              <div className={styles.avatar}>{c.name.charAt(0)}</div>
              <b>{c.name}</b>
              <em>{c.role}</em>
              <p>{c.note}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHead}>
          <p className={styles.eyebrow}>Why STACK-NextGen</p>
          <h2>What you get</h2>
          <p>STACK-NextGen is built for two people in the room: the learner, and the school or institution guiding them.</p>
        </div>

        <div className={styles.benefits}>
          <div className={styles.benefitCol}>
            <h3>For individuals</h3>
            <ul>
              {LEARNER_BENEFITS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className={styles.benefitCol}>
            <h3>For schools and institutions</h3>
            <ul>
              {INSTITUTION_BENEFITS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.trust}>
          <h3>Built to deliver excellence</h3>
          <div className={styles.trustGrid}>
            {DELIVERY.map((d) => (
              <div key={d.title}>
                <b>{d.title}</b>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.faq}>
          <div className={styles.sectionHead} style={{ marginBottom: 0 }}>
            <p className={styles.eyebrow}>FAQ</p>
            <h2>Questions, answered.</h2>
          </div>
          <div className={styles.faqList}>
            {FAQ.map((item) => (
              <details key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Sign up */}
      <section id="signup" className={styles.signupSection}>
        <div className={styles.signupInner}>
          <div className={styles.signupIntro}>
            <h2>Join the cohort</h2>
            <p>Tell us a bit about yourself and we&apos;ll get you set up. Your journey starts here.</p>
          </div>

          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.successBox} role="status" aria-live="polite">
                <h3>You&apos;re on the list</h3>
                <p>
                  Thanks, {form.fullName.split(" ")[0] || "friend"}. We&apos;ll reach out at {form.email || "the email you provided"} with next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.formGrid}>
                  <div className={styles.formField}>
                    <label htmlFor="fullName">Full name</label>
                    <input
                      id="fullName"
                      autoComplete="name"
                      required
                      value={form.fullName}
                      onChange={(e) => updateField("fullName", e.target.value)}
                      placeholder="Amaka Obi"
                    />
                  </div>
                  <div className={styles.formField}>
                    <label htmlFor="phone">Phone number</label>
                    <input
                      id="phone"
                      type="tel"
                      autoComplete="tel"
                      required
                      value={form.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      placeholder="0803 123 4567"
                    />
                  </div>

                  <div className={`${styles.formField} ${styles.full}`}>
                    <label htmlFor="email">Email address</label>
                    <input
                      id="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={form.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                {/* Consent. The API route rejects signups without it. */}
                <div className={styles.consentBlock}>
                  <label className={styles.consentRow}>
                    <input type="checkbox" required checked={consentComplete} onChange={(e) => setPrivacyConsent(e.target.checked)} />
                    <span>
                      I have read and agree to the processing of my personal information in line with Bpurple privacy policy, as explained in the{" "}
                      <a href={PRIVACY_NOTICE_URL} target="_blank" rel="noopener noreferrer">
                        Privacy Notice
                      </a>
                    </span>
                  </label>
                </div>

                {submitError && (
                  <p className={styles.formError} role="alert">
                    {submitError}
                  </p>
                )}

                <button type="submit" className={styles.submitBtn} disabled={isSubmitting || !consentComplete}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      
    </div>
  );
}