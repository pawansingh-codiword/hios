"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

const CONTACT_PHONE = "9930215286";
const CONTACT_EMAIL = "indianoccult@gmail.com";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
  };

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

            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="group flex items-start gap-4 p-5 rounded-2xl border border-amber-500/25 bg-amber-950/15 backdrop-blur-md hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/15 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-600/40 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5 text-slate-950" />
              </div>
              <div className="min-w-0">
                <p className="text-xs uppercase tracking-widest text-amber-300/80 font-semibold mb-1">
                  Email Us
                </p>
                <p className="text-white font-semibold text-lg break-all">
                  {CONTACT_EMAIL}
                </p>
                <p className="text-amber-100/60 text-xs mt-1">
                  We reply within 24 hours
                </p>
              </div>
            </a>

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
          <motion.form
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="lg:col-span-3 rounded-2xl border border-amber-500/25 bg-amber-950/10 backdrop-blur-md p-6 md:p-8 space-y-5"
          >
            <div>
              <h2 className="heading-serif text-2xl md:text-3xl text-white mb-2">
                Send us a Message
              </h2>
              <p className="text-amber-100/60 text-sm">
                Fill the form and our counsellor will reach out shortly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <Field
                label="Your Name *"
                name="name"
                placeholder="Full name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Field
                label="Email Address *"
                name="email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <Field
                label="Phone *"
                name="phone"
                type="tel"
                placeholder="+91 98765 43210"
                value={form.phone}
                onChange={handleChange}
                required
              />
              <Field
                label="Subject"
                name="subject"
                placeholder="What can we help with?"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold">
                Your Message *
              </label>
              <textarea
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us a little about what you're looking for..."
                className="w-full rounded-xl bg-slate-950/60 border border-amber-500/20 text-amber-50 placeholder-amber-200/30 px-4 py-3 focus:outline-none focus:border-amber-400/60 focus:ring-2 focus:ring-amber-500/30 transition resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full h-13 px-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-600/40 transition-all hover:scale-[1.01]"
            >
              <Send className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </motion.form>
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type = "text", ...rest }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        {...rest}
        className="w-full rounded-xl bg-slate-950/60 border border-amber-500/20 text-amber-50 placeholder-amber-200/30 px-4 py-2.5 focus:outline-none focus:border-amber-400/60 focus:ring-2 focus:ring-amber-500/30 transition"
      />
    </div>
  );
}
