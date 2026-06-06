import { Shield, Mail } from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy of Hamsa Institute of Occult Science — how we collect, use, and protect your personal information.",
  alternates: { canonical: "/privacy" },
};

const LAST_UPDATED = "June 2026";
const CONTACT_EMAIL = "support@indianoccult.com";

const sections = [
  {
    title: "1. Introduction",
    body: [
      "Hamsa Institute of Occult Science (“HIOS”, “we”, “us”, or “our”) respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what data we collect, how we use it, and the choices you have.",
      "By using our website and services, you agree to the practices described in this policy.",
    ],
  },
  {
    title: "2. Information We Collect",
    body: [
      "We may collect the following information when you fill a form, enquire about a course, or join our community:",
    ],
    list: [
      "Full name",
      "Email address",
      "Phone number",
      "Course of interest",
      "Any message or details you choose to share with us",
    ],
  },
  {
    title: "3. How We Use Your Information",
    body: ["The information we collect is used to:"],
    list: [
      "Respond to your enquiries and provide course details",
      "Contact you regarding bookings, schedules, and offers",
      "Improve our courses, services, and website experience",
      "Send relevant updates about classes and spiritual programs",
    ],
  },
  {
    title: "4. Sharing of Information",
    body: [
      "We do not sell, rent, or trade your personal information to third parties. Your data may be processed by trusted service providers (such as our form/email delivery service) solely to operate our website and respond to you.",
    ],
  },
  {
    title: "5. Data Security",
    body: [
      "We take reasonable technical and organisational measures to protect your information against unauthorised access, loss, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    title: "6. Cookies",
    body: [
      "Our website may use cookies and similar technologies to enhance your browsing experience and understand how visitors use our site. You can disable cookies through your browser settings, though some features may not function as intended.",
    ],
  },
  {
    title: "7. Your Rights",
    body: [
      "You may request access to, correction of, or deletion of your personal information at any time by contacting us. You can also opt out of marketing communications whenever you wish.",
    ],
  },
  {
    title: "8. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with a revised “Last updated” date.",
    ],
  },
  {
    title: "9. Contact Us",
    body: [
      "If you have any questions about this Privacy Policy or how your data is handled, please reach out to us.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-slate-950 pb-24">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-6 pt-12 md:pt-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs md:text-sm font-semibold uppercase tracking-wider mb-5">
          <Shield className="w-4 h-4" />
          Your Privacy Matters
        </div>
        <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
          Privacy{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
            Policy
          </span>
        </h1>
        <p className="mt-4 text-amber-100/60 text-sm">Last updated: {LAST_UPDATED}</p>
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 md:px-6 mt-12">
        <div className="w-full mx-auto rounded-2xl border border-amber-500/25 bg-amber-950/10 backdrop-blur-md p-6 md:p-10 space-y-10">
          {sections.map((sec) => (
            <div key={sec.title}>
              <h2 className="heading-serif text-xl md:text-2xl text-white mb-3">
                {sec.title}
              </h2>
              {sec.body.map((p, i) => (
                <p
                  key={i}
                  className="text-amber-100/70 text-sm md:text-base leading-relaxed mb-3"
                >
                  {p}
                </p>
              ))}
              {sec.list && (
                <ul className="mt-2 space-y-2">
                  {sec.list.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-amber-100/70 text-sm md:text-base"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* Contact card */}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="group flex items-center gap-4 p-5 rounded-2xl border border-amber-500/25 bg-amber-950/20 hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/15 transition-all"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-600/40 group-hover:scale-110 transition-transform">
              <Mail className="w-5 h-5 text-slate-950" />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest text-amber-300/80 font-semibold mb-1">
                Email Us
              </p>
              <p className="text-white font-semibold break-all">{CONTACT_EMAIL}</p>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
}
