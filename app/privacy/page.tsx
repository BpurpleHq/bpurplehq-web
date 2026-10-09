import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Bpurple Technology",
  description:
    "Learn how Bpurple Technology collects, uses, stores, and protects personal data.",
};

const sections = [
  { id: "who-we-are", label: "Who We Are" },
  { id: "scope", label: "Who This Policy Covers" },
  { id: "data-collected", label: "Personal Data We Collect" },
  { id: "purposes", label: "Why We Use Your Data" },
  { id: "sharing", label: "Who We Share Data With" },
  { id: "transfers", label: "Transfers Outside Nigeria" },
  { id: "retention", label: "How Long We Keep Data" },
  { id: "rights", label: "Your Rights" },
  { id: "cookies", label: "Cookies" },
  { id: "security", label: "How We Protect Your Data" },
  { id: "third-party-links", label: "Third-Party Links" },
  { id: "changes", label: "Changes to This Policy" },
  { id: "contact", label: "Contact Us" },
];

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-700">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-8 lg:py-16">
        <header className="mb-10 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-10">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-violet-700">
            Bpurple Technology
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-500">
            Last updated: 9 October 2026
          </p>

          <div className="mt-8 rounded-2xl border border-emerald-200 bg-emerald-50 p-5 sm:p-6">
            <h2 className="font-semibold text-emerald-950">
              Our privacy promise in brief
            </h2>
            <p className="mt-2 leading-7 text-emerald-900">
              We collect only what we need, use it only for the reasons we tell
              you, keep it safe, and never sell it. You can ask us to show,
              correct, or delete your information at any time.
            </p>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-[250px_minmax(0,1fr)]">
          <aside className="h-fit rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 lg:sticky lg:top-8">
            <p className="mb-3 text-sm font-semibold text-slate-950">
              On this page
            </p>
            <nav aria-label="Privacy policy sections">
              <ul className="space-y-1">
                {sections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition hover:bg-violet-50 hover:text-violet-800"
                    >
                      {section.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="min-w-0 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-10">
            <Section id="who-we-are" title="1. Who We Are">
              <p>
                This website,{" "}
                <a
                  className="text-violet-700 underline underline-offset-4"
                  href="https://www.bpurplehq.org"
                >
                  www.bpurplehq.org
                </a>
                , is operated by Bpurple Technology, a technology and training
                company headquartered in Nigeria (“Bpurple”, “we”, “us”, or
                “our”). We offer technology solutions, corporate training
                through our Academy, and STACK NextGen, a digital and data
                literacy programme.
              </p>
              <p className="mt-4">
                For the personal data described in this policy, we act as the
                data controller under the Nigeria Data Protection Act 2023
                (“NDPA”) and applicable regulations and directives issued by
                the Nigeria Data Protection Commission (“NDPC”), including the
                General Application and Implementation Directive (“GAID”).
              </p>
              <p className="mt-4">
                Privacy contact: Data Protection Officer,{" "}
                <EmailLink>privacy@bpurplehq.org</EmailLink>.
              </p>
            </Section>

            <Section id="scope" title="2. Who This Policy Covers">
              <p>
                This policy applies to visitors to our website, people who
                contact us, and people who sign up for STACK NextGen.
              </p>
            </Section>

            <Section id="data-collected" title="3. What Personal Data We Collect">
              <h3 className="mb-2 font-semibold text-slate-900">
                Information you give us
              </h3>
              <ul className="list-disc space-y-2 pl-5">
                <li>
                  Sign-up and enquiry forms, including the STACK NextGen “Join
                  the cohort” form: full name, phone number, and email address.
                </li>
                <li>
                  Messages you send through our contact form, email, or
                  WhatsApp.
                </li>
                <li>
                  Programme participation records, including attendance,
                  completion status, assessment results, and certificate
                  records.
                </li>
              </ul>

              <h3 className="mb-2 mt-6 font-semibold text-slate-900">
                Information collected automatically
              </h3>
              <p>
                When you visit our website, our systems and service providers
                may collect technical data such as your IP address, browser and
                device type, pages visited, and time spent. See Section 9 for
                information about cookies.
              </p>
            </Section>

            <Section id="purposes" title="4. Why We Use Your Data and Our Lawful Basis">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[680px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-900">
                      <th className="py-3 pr-4 font-semibold">Purpose</th>
                      <th className="py-3 pr-4 font-semibold">Data used</th>
                      <th className="py-3 font-semibold">Lawful basis</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="py-4 pr-4">
                        Registering you for STACK NextGen or other training,
                        confirming your place, and communicating programme
                        details.
                      </td>
                      <td className="py-4 pr-4">Name, phone, email</td>
                      <td className="py-4">Consent</td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4">
                        Delivering the programme, tracking completion, and
                        issuing certificates.
                      </td>
                      <td className="py-4 pr-4">
                        Name, contact details, participation records
                      </td>
                      <td className="py-4">
                        Performance of the programme you signed up for;
                        legitimate interests in running it properly.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4">
                        Responding to enquiries and requests.
                      </td>
                      <td className="py-4 pr-4">
                        Name, contact details, message content
                      </td>
                      <td className="py-4">
                        Legitimate interests in answering you; consent where
                        applicable.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4">
                        Sending news, programme updates, or offers about our
                        services.
                      </td>
                      <td className="py-4 pr-4">Name, email, phone</td>
                      <td className="py-4">
                        Consent, which you can withdraw at any time. We do not
                        send marketing to learners under 18.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4">
                        Keeping the website secure and understanding how it is
                        used.
                      </td>
                      <td className="py-4 pr-4">Technical data</td>
                      <td className="py-4">
                        Legitimate interests; consent for non-essential cookies.
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4 pr-4">
                        Meeting legal and regulatory obligations, and handling
                        complaints or disputes.
                      </td>
                      <td className="py-4 pr-4">Any relevant data</td>
                      <td className="py-4">
                        Legal obligation; legitimate interests.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="mt-5">
                We will not use your personal data for a new purpose that is
                incompatible with the purpose we told you about without first
                informing you and, where required, obtaining your consent.
              </p>
              <p className="mt-4">
                We will only publish learner names, photos, or work—for example,
                to recognise top performers or feature showcase events—where we
                have an appropriate lawful basis and, where required, your
                consent.
              </p>
            </Section>

            <Section id="sharing" title="5. Who We Share Your Data With">
              <p>We do not sell your personal data. We share it only where necessary and only with:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Messaging platforms. If you contact us via WhatsApp, Meta
                  processes your messages under its own terms and privacy
                  policy.
                </li>
                <li>
                  Regulators, courts, and law enforcement, where required by
                  law or to protect rights and safety.
                </li>
              </ul>
            </Section>

            <Section id="transfers" title="6. Transfers Outside Nigeria">
              <p>
                Some of our service providers may store or process data outside
                Nigeria. Where that happens, we take steps to ensure your data
                receives a level of protection that is adequate under the NDPA,
                using measures such as contractual safeguards. We transfer only
                the data needed.
              </p>
            </Section>

            <Section id="retention" title="7. How Long We Keep Your Data">
              <p>We keep personal data only as long as needed for the purposes described above:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>
                  Sign-up and programme records: for the duration of the
                  programme and up to 6 months afterwards.
                </li>
                <li>
                  Marketing preferences: until you withdraw consent, plus a
                  minimal record that you opted out so we can respect your
                  choice.
                </li>
              </ul>
              <p className="mt-4">
                When the retention period ends, we securely delete or anonymise
                the data unless the law requires us to keep it longer.
              </p>
            </Section>

            <Section id="rights" title="8. Your Rights">
              <p>Under the NDPA, you have the right to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-5">
                <li>Be informed about how your data is used.</li>
                <li>Access your personal data and obtain a copy.</li>
                <li>Have inaccurate or incomplete data corrected.</li>
                <li>
                  Have your data deleted where there is no good reason for us
                  to keep it.
                </li>
                <li>
                  Restrict or object to our processing, including for direct
                  marketing.
                </li>
                <li>
                  Receive your data in a structured, commonly used,
                  machine-readable format (data portability).
                </li>
                <li>
                  Withdraw consent at any time, as easily as it was given.
                </li>
                <li>
                  Not be subject to a decision based solely on automated
                  processing that significantly affects you.
                </li>
                <li>
                  Lodge a complaint with the{" "}
                  <a
                    className="text-violet-700 underline underline-offset-4"
                    href="https://ndpc.gov.ng"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Nigeria Data Protection Commission
                  </a>
                  .
                </li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, contact us using the details
                in Section 1. We may need to verify your identity first, and
                will respond within 30 days. We do not charge a fee unless a
                request is clearly unfounded or excessive.
              </p>
              <p className="mt-4">
                We would appreciate the chance to resolve any concern before
                you approach the NDPC, but you are free to contact them at any
                time.
              </p>
            </Section>

            <Section id="cookies" title="9. Cookies and Similar Technologies">
              <p>
                Our website uses cookies and similar technologies to make it
                work and to understand how it is used. Essential cookies help
                keep the site secure and functioning. You can manage or delete
                cookies through your browser settings. Blocking some cookies
                may affect how the site works.
              </p>
            </Section>

            <Section id="security" title="10. How We Protect Your Data">
              <p>
                We apply appropriate technical and organisational measures,
                including encrypted connections (HTTPS), need-to-know access
                controls, secure hosting, staff confidentiality and data
                protection training, and agreements with service providers. No
                system is completely secure, but we work to reduce risk and
                review our controls regularly.
              </p>
              <p className="mt-4">
                If a personal data breach is likely to put your rights and
                freedoms at risk, we will notify the NDPC within 72 hours of
                becoming aware of it and inform affected individuals directly
                where the risk is high.
              </p>
            </Section>

            <Section id="third-party-links" title="11. Links to Other Websites">
              <p>
                Our website may link to third-party sites, such as social media
                and WhatsApp. We are not responsible for their privacy
                practices, so we encourage you to read their policies.
              </p>
            </Section>

            <Section id="changes" title="12. Changes to This Policy">
              <p>
                We may update this policy from time to time to reflect changes
                in our services or the law. The “Last updated” date at the top
                shows the latest version.
              </p>
            </Section>

            <Section id="contact" title="13. Contact Us">
              <p>
                If you have questions about this policy or how we handle
                personal data, contact our Data Protection Officer at{" "}
                <EmailLink>privacy@bpurplehq.org</EmailLink>.
              </p>
            </Section>
          </article>
        </div>
      </div>
    </main>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-8 border-b border-slate-100 py-8 first:pt-0 last:border-b-0 last:pb-0"
    >
      <h2 className="mb-4 text-xl font-bold tracking-tight text-slate-950 sm:text-2xl">
        {title}
      </h2>
      <div className="leading-7">{children}</div>
    </section>
  );
}

function EmailLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      className="text-violet-700 underline underline-offset-4"
      href="mailto:privacy@bpurplehq.org"
    >
      {children}
    </a>
  );
}