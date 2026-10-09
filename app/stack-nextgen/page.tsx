

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

// ADDED: consent settings. Update the version whenever the Privacy Notice changes.
const PRIVACY_NOTICE_VERSION = "2026-10-v1";
const PRIVACY_NOTICE_URL = "/privacy"; // TODO: publish the notice at this path
const PRIVACY_CONTACT_EMAIL = "privacy@bpurplehq.org"; // TODO: confirm real address

const CURRICULUM = [
  {
    num: "1",
    name: "Foundation",
    // weeks: "Week 1",
    hook: "Know who you are online - Understanding your digital identity, before someone else decides for you.",
    advanced: false,
  },
  {
    num: "2",
    name: "Systems",
    // weeks: "Week 2",
    hook: "See how the internet and cloud actually work.",
    advanced: false,
  },
  {
    num: "3",
    name: "Trusted",
    // weeks: "Week 3",
    hook: "Learn the law that protects your data and how to use it.",
    advanced: false,
  },
  {
    num: "4",
    name: "Secure",
    // weeks: "Week 4",
    hook: "Learn to catch a scam before it catches you, fake alerts, phishing links, SIM-swap fraud.",
    advanced: false,
  },
  {
    num: "5",
    name: "Intelligence",
    // weeks: "Week 5",
    hook: "Responsive use of AI, tell a real video from a deepfake, use AI without losing your data or your judgement.",
    advanced: false,
  },
  {
    num: "6",
    name: "Build",
    // weeks: "Week 6",
    hook: "Turn what you've learned into something you can teach.",
    advanced: false,
  },
  {
    num: "7",
    name: "Sovereign Cloud",
    // weeks: "Week 7 · Advanced",
    hook: "Fundamentals into Nigeria's Sovereign Cloud and the careers it's creating.",
    advanced: true,
  },
];

const LEARNER_BENEFITS = [
  "Career head start: Get an early introduction to in-demand fields like cybersecurity, data protection, and cloud computing.",
  "Zero-barrier entry: Join the cohort at no cost, so anyone can start learning immediately.",
  "Practical, Nigeria-focused skills: Work through real-life scenarios like fake bank alerts, SMS and email phishing attempts, and deepfake scams instead of abstract theory.",
  "Recognised achievement: Earn a completion certificate, with top performers gaining recognition to showcase your skills.",
  "Confidence to handle real online threats: Individuals gain practical skills to identify and respond to common scams.",
];

const TEACHER_BENEFITS = [
  // "Ready-made 60-minute lesson plans — no prep from scratch",
  // "Full facilitator scripts, timing guides, and answer keys included",
  // "\"Certified STACK Facilitator\" training and certificate",
  // "TrustMark recognition for your school",
  // "Be part of the first cohort of a national digital-safety programme",
  "Coming Soon!!",

  // - **Ready-to-deliver digital safety curriculum:** The school gains a complete, plug-and-play 60-minute lesson framework that can be integrated into existing timetables without extra development work.
  // - **Consistent, high-quality delivery across classes:** Standardised facilitator scripts, timing guides, and answer keys ensure every session runs smoothly and uniformly, regardless of which staff member leads it.
  // - **Enhanced staff capacity as an institutional asset:** By having teachers trained and certified as "STACK Facilitators," the school builds internal expertise that strengthens its overall teaching capability in digital safety.
  // - **Official TrustMark recognition for the institution:** The school itself receives TrustMark status, which can be used in communications with parents, regulators, and partners to demonstrate a verified commitment to digital safety.
  // - **Pioneer positioning in a national programme:** As part of the first cohort, the school can brand itself as an early adopter and leader in national digital-safety education initiatives.
  // - **Improved student outcomes and safety culture:** Students gain practical, Nigeria-relevant digital safety skills (e.g., spotting fake alerts, phishing, deepfakes), contributing to a safer, more responsible school community.
  // - **Pathways to competitions and external visibility:** Students can progress to represent the school at the national STACK Olympiad, giving the institution additional opportunities for recognition and prestige.
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  school: string;
  state: string;
  classLevel: string;
  subjectRole: string;
};

const emptyForm: FormState = {
  fullName: "",
  email: "",
  phone: "",
  school: "",
  state: "",
  classLevel: "",
  subjectRole: "",
};

export default function StackNextGenLanding() {
  const [role, setRole] = useState<Role>("learner");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState<FormState>(emptyForm);
  // ADDED: consent must be an affirmative action, so both start unticked.
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [guardianConsent, setGuardianConsent] = useState(false);

  // ADDED: single source of truth for "is the form allowed to submit".
  const consentComplete = privacyConsent && (role !== "learner" || guardianConsent);

  function updateField(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function changeRole(next: Role) {
    setRole(next);
    // Clear the field that belongs to the other role so it isn't submitted
    setForm((prev) => ({ ...prev, classLevel: "", subjectRole: "" }));
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
      school: form.school.trim(),
      // ADDED: the API route rejects any signup without these.
      privacyConsent,
      guardianConsent: role === "learner" ? guardianConsent : null,
      noticeVersion: PRIVACY_NOTICE_VERSION,
    };

    if (!payload.fullName || !payload.email || !payload.phone) {
      setSubmitError("Please complete all required fields.");
      return;
    }

    if (!consentComplete) {
      setSubmitError("Please tick the consent box(es) below to continue.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(
          data?.error || "We could not submit your signup. Please try again."
        );
      }

      setSubmitted(true);
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function scrollToSignup(preselect: Role) {
    changeRole(preselect);
    document.getElementById("signup")?.scrollIntoView({ behavior: "smooth" });
  }

       return (
    <div
      className={`${styles.page} ${display.variable} ${body.variable}`}
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Nav */}
      <nav className={styles.nav}>
        {/* <div className={styles.navMark}>
          STACK
        </div> */}
        <div className={styles.navLinks}>
          {/* <a href="#about">About</a>
          <a href="#curriculum">Curriculum</a>
          <a href="#benefits">Benefits</a> */}
        </div>
        <a href="#signup" className={styles.navCta}>
          Join STACK.
        </a>
      </nav>

      {/* Hero */}
      <header className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Technology for NextGen.</h1>
          <p>
            STACK NextGen teaches Nigerians (No Age Limits) about technolog, responsible use of AI, Cloud and data privacy, how to
            recognise fraud, through real local stories,
            role-play..
          </p>
          <div className={styles.heroActions}>
            <button className={styles.btnPrimary} onClick={() => scrollToSignup("learner")}>
              Join STACK!
            </button>
            {/* <button className={styles.btnSecondary} onClick={() => scrollToSignup("teacher")}>
              Join as a teacher
            </button> */}
          </div>
        </div>

        {/* NOTE: rename these classes to match your page.module.css */}
        <div className={styles.heroVisual}>
          <div className={styles.alertCard}>
            <div className={styles.alertHeader}>Sample Lesson · Spot the fake alert</div>
            <div className={styles.alertBubble}>
              Dear customer, your account has been credited with ₦15,000. Ref: TXN-88213.
              Reply CONFIRM to release goods.
            </div>
            <div className={styles.alertFlag}>⚠ Flagged: matches fake-alert pattern</div>
            <p className={styles.alertCaption}>
              This is from <strong>Week 4</strong> of the STACK curriculum, one of 26 lessons
              built on real Nigerian fraud patterns.
            </p>
          </div>
        </div>
      </header>

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <span className={styles.statNum}>6</span>
          <span className={styles.statLabel}>Modules</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNum}>20</span>
          <span className={styles.statLabel}>Lessons</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNum}>60</span>
          <span className={styles.statLabel}>Minutes a week</span>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statNum}>0</span>
          <span className={styles.statLabel}>Tech Skill Required</span>
        </div>
      </div>

      {/* About */}
      <section id="about" className={styles.section}>
        <div className={styles.aboutGrid}>
          <div className={styles.aboutCopy}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--navy)",
                fontSize: "1.8rem",
                marginTop: 0,
              }}
            >
              What STACK NextGen is
            </h2>
            <p>
              STACK NextGen is Nigeria&apos;s first realworld-style learning programme built
              around security, data privacy, cloud and AI literacy, designed for young Nigerians weather in
              secondary schools, universities or out of school, and built entirely on Nigerian scenarios: NIN, BVN
              slips leaked on WhatsApp Status, fake links, fake bank alerts at the market,
              and deepfakes of public figures.
            </p>
            <p>
              Every lesson runs on printed worksheets, short videos, and role-play,,
              no fast internet, and no prior tech knowledge required. Just two hours a week.
            </p>
          </div>

          <div className={styles.pillarList}>
            <div className={styles.pillarRow}>
              <span className={styles.pillarTag}>Secure</span>
              <div>
                <h3>Security Literacy</h3>
                <p>Spot fraud patterns before they cost you money or your identity.</p>
              </div>
            </div>
            <div className={styles.pillarRow}>
              <span className={styles.pillarTag}>Trusted</span>
              <div>
                <h3>Data privacy</h3>
                <p>Know your data rights, and how to act when they&apos;re broken.</p>
              </div>
            </div>
            <div className={styles.pillarRow}>
              <span className={styles.pillarTag}>Aware</span>
              <div>
                <h3>AI literacy</h3>
                <p>Use AI tools responsibly, and recognise deepfakes and misinformation.</p>
              </div>
            </div>
            <div className={styles.pillarRow}>
              <span className={styles.pillarTag}>Built</span>
              <div>
                <h3>Cloud</h3>
                <p>Cloud fundamentals and players in Nigeria ( Case study driven ).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHead}>
          <h2>Your learning path</h2>
          <p>Seven modules, building from digital basics to Nigeria&apos;s national data sovereignty policy.</p>
        </div>

        <div className={styles.path}>
          {CURRICULUM.map((m) => (
            <div key={m.num} className={`${styles.pathRow} ${m.advanced ? styles.advanced : ""}`}>
              <div className={styles.pathDot}>{m.num}</div>
              <div className={styles.pathBody}>
                <h3>{m.name}</h3>
                {/* <span className={styles.pathWeeks}>{m.weeks}</span> */}
                {m.advanced && <span className={styles.pathBadge}>Advanced track</span>}
                <p className={styles.pathHook}>{m.hook}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className={styles.section} style={{ paddingTop: 0 }}>
        <div className={styles.sectionHead}>
          <h2>What you get</h2>
          <p>STACK NextGen is built for two people in the room: the student learning (an individual), and the educational institution guiding them.</p>
        </div>

        <div className={styles.benefits}>
          <div className={styles.benefitCol}>
            <h3>For Individuals</h3>
            <ul>
              {LEARNER_BENEFITS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className={styles.benefitCol}>
            <h3>For Educational Institutions</h3>
            <ul>
              {TEACHER_BENEFITS.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Sign up */}
      <section id="signup" className={styles.signupSection}>
        <div className={styles.signupInner}>
          <div className={styles.signupIntro}>
            <h2>Join the cohort</h2>
            <p>
              Tell us a bit about yourself and we&apos;ll get you set up — whether you&apos;re
              here to learn, or here to teach.
            </p>
          </div>

          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.successBox} role="status" aria-live="polite">
                <h3>You&apos;re on the list</h3>
                <p>
                  Thanks, {form.fullName.split(" ")[0] || "friend"}. We&apos;ll reach out at{" "}
                  {form.email || "the email you provided"} with next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className={styles.roleToggle}>
                  
                </div>

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


                  {/* CHANGED: was an empty "learner" div that left a blank gap in the grid. */}
                  {/* {role === "teacher" && (
                    <div className={`${styles.formField} ${styles.full}`}>
                      <label htmlFor="subjectRole">Subject / role at school</label>
                      <input
                        id="subjectRole"
                        required
                        value={form.subjectRole}
                        onChange={(e) => updateField("subjectRole", e.target.value)}
                        placeholder="e.g. Computer Studies teacher, Guidance Counsellor"
                      />
                    </div>
                  )} */}
                </div>

                {/* ADDED: consent. The API route rejects signups without it. */}
                <div className={styles.consentBlock}>
                  <label className={styles.consentRow}>
                    <input
                      type="checkbox"
                      required
                      checked={privacyConsent}
                      onChange={(e) => setPrivacyConsent(e.target.checked)}
                    />
                    <span>
                      I agree that Bpurple Technology may collect and use the
                      information in this form to manage my STACK-NextGen
                      registration and to contact me about the programme, as
                      explained in the{" "}
                      <a href={PRIVACY_NOTICE_URL} target="_blank" rel="noopener noreferrer">
                        Privacy Notice
                      </a>
                    
                    </span>
                  </label>

                  {role === "learner" && (
                    <label className={styles.consentRow}>
                      <input
                        type="checkbox"
                        required
                        checked={guardianConsent}
                        onChange={(e) => setGuardianConsent(e.target.checked)}
                      />
                      <span>
                        I am 18 or older, or my parent or guardian knows about
                        and agrees to this registration.
                      </span>
                    </label>
                  )}
                </div>

                {submitError && (
                  <p className={styles.formError} role="alert">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={isSubmitting || !consentComplete}
                >
                  {isSubmitting
                    ? "Submitting..."
                    : role === "learner"
                      ? "Submit"
                      : "Join as a teacher"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}


