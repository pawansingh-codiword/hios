"use client";

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";

const CONTACT_PHONE = "9682930862";

const EMAILS = [
  { label: "General", address: "info@indianoccult.com" },
  { label: "Enquiries", address: "contact@indianoccult.com" },
  { label: "Support", address: "support@indianoccult.com" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-slate-950 pb-24">
      {/* Header */}
      <section className="container mx-auto px-4 md:px-6 pt-12 md:pt-16 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInUp}
          className="max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs md:text-sm font-semibold uppercase tracking-wider mb-5">
            <Sparkles className="w-4 h-4" />
            Get in Touch
          </div>
          <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
            Connect with{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
              HIOS
            </span>
          </h1>
          <p className="mt-5 text-amber-100/70 text-base md:text-lg leading-relaxed">
            Have a question about our courses or sadhanas? Our team is here to
            guide your spiritual journey.
          </p>
        </motion.div>
      </section>

      {/* Contact info + Form */}
      <section className="container mx-auto px-4 md:px-6 mt-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left: contact details */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href={`tel:${CONTACT_PHONE}`}
              className="group flex items-start gap-4 p-5 rounded-2xl border border-amber-500/25 bg-amber-950/15 backdrop-blur-md hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/15 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-600/40 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-amber-300/80 font-semibold mb-1">
                  Call Us
                </p>
                <p className="text-white font-semibold text-lg">
                  +91 {CONTACT_PHONE}
                </p>
                <p className="text-amber-100/60 text-xs mt-1">
                  Tap to call directly
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-amber-500/25 bg-amber-950/15 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-600/40">
                <Mail className="w-5 h-5 text-slate-950" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-amber-300/80 font-semibold mb-2">
                  Email Us
                </p>
                <ul className="space-y-1.5">
                  {EMAILS.map((e) => (
                    <li key={e.address} className="flex items-baseline gap-2">
                      <span className="text-[10px] uppercase tracking-wider text-amber-300/60 w-16 shrink-0">
                        {e.label}
                      </span>
                      <a
                        href={`mailto:${e.address}`}
                        className="text-white font-medium break-all hover:text-amber-300 transition-colors"
                      >
                        {e.address}
                      </a>
                    </li>
                  ))}
                </ul>
                <p className="text-amber-100/60 text-xs mt-2">
                  We reply within 24 hours
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/91${CONTACT_PHONE}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 rounded-2xl border border-amber-500/25 bg-amber-950/15 backdrop-blur-md hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/15 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-600/40 group-hover:scale-110 transition-transform">
                <MessageCircle className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-amber-300/80 font-semibold mb-1">
                  WhatsApp
                </p>
                <p className="text-white font-semibold text-lg">
                  +91 {CONTACT_PHONE}
                </p>
                <p className="text-amber-100/60 text-xs mt-1">
                  Chat with our counsellor
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-amber-500/25 bg-amber-950/15 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-600/40">
                <Clock className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-amber-300/80 font-semibold mb-1">
                  Working Hours
                </p>
                <p className="text-white font-semibold">
                  Mon — Sat · 10:00 AM to 7:00 PM
                </p>
                <p className="text-amber-100/60 text-xs mt-1">
                  Sunday — by appointment
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-2xl border border-amber-500/25 bg-amber-950/15 backdrop-blur-md">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-600/40">
                <MapPin className="w-5 h-5 text-slate-950" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-amber-300/80 font-semibold mb-1">
                  Visit Us
                </p>
                <p className="text-white font-semibold">
                  Hamsa Institute of Occult Science
                </p>
                <p className="text-amber-100/60 text-sm mt-1">
                  New Delhi, India
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="lg:col-span-3"
          >
            <ContactForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
