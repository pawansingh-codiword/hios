"use client";

import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Field } from "@/components/forms/FormControls";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowRight,
  MapPin,
  Clock,
  Award,
  Megaphone,
  Share2,
  PenLine,
  Clapperboard,
  Palette,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Heart,
  GraduationCap,
  TrendingUp,
  Users,
  ChevronDown,
  Upload,
} from "lucide-react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_MAIL_SERVICE_API_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s-]{7,}$/;

const positions = [
  {
    title: "Digital Marketing Intern",
    icon: Megaphone,
    desc: "Run campaigns, SEO/SEM, and analytics for real growth.",
  },
  {
    title: "Social Media Intern",
    icon: Share2,
    desc: "Plan, create, and schedule content across platforms.",
  },
  {
    title: "Content Writing Intern",
    icon: PenLine,
    desc: "Write blogs, scripts, and copy that connects.",
  },
  {
    title: "Video Editing Intern",
    icon: Clapperboard,
    desc: "Edit reels, shorts, and course videos that engage.",
  },
  {
    title: "Graphic Design Intern",
    icon: Palette,
    desc: "Design creatives, thumbnails, and brand visuals.",
  },
];

const benefits = [
  {
    icon: Briefcase,
    title: "Flexible Work Environment",
    desc: "Work remotely on your own schedule.",
  },
  {
    icon: Sparkles,
    title: "Real Project Experience",
    desc: "Contribute to live, meaningful projects.",
  },
  {
    icon: Heart,
    title: "Mentorship",
    desc: "Guidance from experienced professionals.",
  },
  {
    icon: Award,
    title: "Internship Certificate",
    desc: "Recognised certificate on completion.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth Opportunities",
    desc: "Top performers get hired full-time.",
  },
];

const hiringSteps = [
  "Application",
  "Portfolio Review",
  "Interview",
  "Selection",
  "Onboarding",
];

const faqs = [
  {
    q: "Is this a paid internship?",
    a: "These are experience-first internships focused on learning and real project work. Stipend details, where applicable, are shared during the interview.",
  },
  {
    q: "Is the internship remote?",
    a: "Yes — all positions are fully remote. You can work from anywhere with a stable internet connection.",
  },
  {
    q: "What is the duration?",
    a: "Internships run for 3 to 6 months depending on the role and your availability.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes, every intern who successfully completes the program receives an official internship certificate.",
  },
  {
    q: "Can it lead to a full-time role?",
    a: "Absolutely. Outstanding interns are offered career growth opportunities and full-time positions.",
  },
];

const initialForm = {
  fullName: "",
  email: "",
  phone: "",
  city: "",
  position: "",
  education: "",
  portfolio: "",
  why: "",
};

export default function ApplyJobPage() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [openFaq, setOpenFaq] = useState(0);
  const fileRef = useRef(null);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const applyFor = (title) => {
    setForm((f) => ({ ...f, position: title }));
    setErrors((er) => ({ ...er, position: undefined }));
    document
      .getElementById("apply-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.email.trim() || !EMAIL_RE.test(form.email))
      next.email = "Enter a valid email.";
    if (!form.phone.trim() || !PHONE_RE.test(form.phone))
      next.phone = "Enter a valid phone number.";
    if (!form.city.trim()) next.city = "City is required.";
    if (!form.position) next.position = "Select a position.";
    if (!form.why.trim()) next.why = "Please tell us why you want to join.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      document
        .querySelector("[data-error='true']")
        ?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    if (!ACCESS_KEY) {
      setStatus("error");
      setServerMessage("Form is not configured. Please contact us directly.");
      return;
    }

    // Multipart submission so the resume file is included
    const fd = new FormData();
    fd.append("access_key", ACCESS_KEY);
    fd.append("subject", `New Internship Application — ${form.position}`);
    fd.append("from_name", "HIOS Internship");
    fd.append("Full Name", form.fullName);
    fd.append("Email", form.email);
    fd.append("Phone", form.phone);
    fd.append("City", form.city);
    fd.append("Position Applying For", form.position);
    fd.append("Education Qualification", form.education || "Not provided");
    fd.append("LinkedIn / Portfolio", form.portfolio || "Not provided");
    fd.append("Why Join", form.why);
    fd.append("botcheck", "");
    const file = fileRef.current?.files?.[0];
    if (file) fd.append("Resume", file);

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setServerMessage(
          "Thank you for applying! Our team will review your application and get back to you soon.",
        );
        setForm(initialForm);
        if (fileRef.current) fileRef.current.value = "";
      } else {
        setStatus("error");
        setServerMessage(
          data.message || "Something went wrong. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please try again later.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-slate-950 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 pt-14 md:pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs md:text-sm font-semibold uppercase tracking-wider mb-6">
            <Briefcase className="w-4 h-4" />
            Internship Program
          </div>
          <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
            Join Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
              Internship Program
            </span>
          </h1>
          <p className="mt-5 text-amber-100/75 text-base md:text-lg leading-relaxed">
            Gain real-world experience, work on meaningful projects, and grow
            your career with Hamsa Institute.
          </p>
          <a href="#apply-form" className="inline-block mt-8">
            <Button
              size="lg"
              className="h-13 px-9 rounded-full text-base bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-600/40 transition-all hover:scale-[1.03]"
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </a>
        </motion.div>
      </section>

      {/* Open Positions */}
      <section className="container mx-auto px-4 md:px-6 mt-24">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl text-white">
            Open Internship Positions
          </h2>
          <p className="text-amber-100/60 mt-3">
            Choose a role that matches your passion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {positions.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-amber-500/20 bg-amber-950/10 backdrop-blur-md p-6 hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/15 transition-all flex flex-col"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-600/30 mb-4">
                <p.icon className="w-6 h-6 text-slate-950" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5">{p.title}</h3>
              <p className="text-amber-100/60 text-sm mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                <Tag icon={MapPin}>Remote</Tag>
                <Tag icon={Clock}>3–6 Months</Tag>
                <Tag icon={Award}>Certificate</Tag>
              </div>

              <Button
                onClick={() => applyFor(p.title)}
                className="mt-auto w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-semibold rounded-xl transition-all"
              >
                Apply
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Application Form */}
      <section
        id="apply-form"
        className="container mx-auto px-4 md:px-6 mt-24 scroll-mt-24"
      >
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-3">
              <Sparkles className="w-4 h-4" />
              Application Form
            </div>
            <h2 className="heading-serif text-3xl md:text-4xl text-white">
              Apply for Your Internship
            </h2>
          </div>

          {status === "success" ? (
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md p-8 text-center">
              <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-4" />
              <h3 className="heading-serif text-2xl text-white mb-2">
                Application Submitted!
              </h3>
              <p className="text-emerald-100/75">{serverMessage}</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 text-sm font-semibold text-amber-300 hover:text-amber-200 underline-offset-4 hover:underline"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl border border-amber-500/25 bg-amber-950/10 backdrop-blur-md p-6 md:p-8 space-y-5"
            >
              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  label="Full Name *"
                  name="fullName"
                  placeholder="Your full name"
                  value={form.fullName}
                  onChange={handleChange}
                  error={errors.fullName}
                />
                <Field
                  label="Email Address *"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  label="Phone Number *"
                  name="phone"
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />
                <Field
                  label="City *"
                  name="city"
                  placeholder="Your city"
                  value={form.city}
                  onChange={handleChange}
                  error={errors.city}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                {/* Position */}
                <div
                  className="flex flex-col gap-1.5"
                  data-error={!!errors.position}
                >
                  <label
                    htmlFor="position"
                    className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold"
                  >
                    Position Applying For *
                  </label>
                  <select
                    id="position"
                    name="position"
                    value={form.position}
                    onChange={handleChange}
                    className={cn(
                      "w-full rounded-xl bg-slate-950/60 border text-amber-50 px-4 py-2.5 focus:outline-none focus:ring-2 transition appearance-none",
                      errors.position
                        ? "border-red-500/60 focus:ring-red-500/30"
                        : "border-amber-500/20 focus:border-amber-400/60 focus:ring-amber-500/30",
                    )}
                  >
                    <option value="" className="bg-slate-900">
                      Select a position
                    </option>
                    {positions.map((p) => (
                      <option
                        key={p.title}
                        value={p.title}
                        className="bg-slate-900"
                      >
                        {p.title}
                      </option>
                    ))}
                  </select>
                  {errors.position && (
                    <p className="text-xs text-red-400">{errors.position}</p>
                  )}
                </div>

                <Field
                  label="Education Qualification"
                  name="education"
                  placeholder="e.g. B.A. / B.Tech"
                  value={form.education}
                  onChange={handleChange}
                />
              </div>

              <Field
                label="LinkedIn / Portfolio URL"
                name="portfolio"
                type="url"
                placeholder="https://linkedin.com/in/you"
                value={form.portfolio}
                onChange={handleChange}
              />

              {/* Resume upload */}
              {/* <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold">
                  Resume Upload (PDF / DOC)
                </label>
                <label className="flex items-center gap-3 rounded-xl bg-slate-950/60 border border-amber-500/20 px-4 py-3 cursor-pointer hover:border-amber-400/50 transition-colors">
                  <Upload className="w-5 h-5 text-amber-300 shrink-0" />
                  <span className="text-sm text-amber-100/70">Choose your resume file</span>
                  <input
                    ref={fileRef}
                    type="file"
                    name="resume"
                    accept=".pdf,.doc,.docx"
                    className="block w-full text-sm text-amber-100/70 file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:bg-amber-500/20 file:text-amber-200 file:text-xs file:font-semibold hover:file:bg-amber-500/30 cursor-pointer"
                  />
                </label>
              </div> */}

              {/* Why join */}
              <div className="flex flex-col gap-1.5" data-error={!!errors.why}>
                <label
                  htmlFor="why"
                  className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold"
                >
                  Why Do You Want To Join? *
                </label>
                <textarea
                  id="why"
                  name="why"
                  rows={4}
                  value={form.why}
                  onChange={handleChange}
                  placeholder="Tell us what excites you about this internship..."
                  className={cn(
                    "w-full rounded-xl bg-slate-950/60 border text-amber-50 placeholder-amber-200/30 px-4 py-3 focus:outline-none focus:ring-2 transition resize-none",
                    errors.why
                      ? "border-red-500/60 focus:ring-red-500/30"
                      : "border-amber-500/20 focus:border-amber-400/60 focus:ring-amber-500/30",
                  )}
                />
                {errors.why && (
                  <p className="text-xs text-red-400">{errors.why}</p>
                )}
              </div>

              {status === "error" && serverMessage && (
                <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-950/20 px-4 py-3 text-sm text-red-200">
                  <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{serverMessage}</span>
                </div>
              )}

              <Button
                type="submit"
                disabled={status === "submitting"}
                className="w-full h-13 px-8 rounded-xl text-base bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-600/40 transition-all hover:scale-[1.01] disabled:opacity-70 disabled:hover:scale-100"
              >
                {status === "submitting" ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" />
                    Submit Application
                  </>
                )}
              </Button>
            </form>
          )}
        </div>
      </section>

      {/* Why Join Us */}
      <section className="container mx-auto px-4 md:px-6 mt-24">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl text-white">
            Why Join Us
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl border border-amber-500/20 bg-amber-950/10 backdrop-blur-md p-6 hover:border-amber-400/50 transition-colors"
            >
              <div className="w-11 h-11 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-4">
                <b.icon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1.5">{b.title}</h3>
              <p className="text-amber-100/60 text-sm">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hiring Process Timeline */}
      <section className="container mx-auto px-4 md:px-6 mt-24">
        <div className="text-center mb-12">
          <h2 className="heading-serif text-3xl md:text-4xl text-white">
            Hiring Process
          </h2>
          <p className="text-amber-100/60 mt-3">
            From application to onboarding — here&apos;s how it works.
          </p>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {hiringSteps.map((step, i) => (
            <div
              key={step}
              className="flex md:flex-col items-center md:text-center gap-4 md:gap-3 flex-1"
            >
              <div className="flex items-center gap-4 md:flex-col md:gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center text-slate-950 font-bold shadow-lg shadow-amber-600/30 shrink-0">
                  {i + 1}
                </div>
                <p className="text-amber-100/85 font-semibold text-sm md:text-base">
                  {step}
                </p>
              </div>
              {i < hiringSteps.length - 1 && (
                <ArrowRight className="hidden md:block w-5 h-5 text-amber-400/50 shrink-0 -mt-9" />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 md:px-6 mt-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-3">
              <Sparkles className="w-4 h-4" />
              FAQs
            </div>
            <h2 className="heading-serif text-3xl md:text-4xl text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={faq.q}
                  className="rounded-xl border border-amber-500/20 bg-amber-950/10 backdrop-blur-md overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : i)}
                    className="w-full flex items-center justify-between gap-3 p-5 text-left"
                  >
                    <span className="text-white font-semibold">{faq.q}</span>
                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-amber-300 shrink-0 transition-transform",
                        open && "rotate-180",
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 text-amber-100/70 leading-relaxed">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

function Tag({ icon: Icon, children }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-amber-500/10 border border-amber-400/30 text-amber-200">
      <Icon className="w-3.5 h-3.5" />
      {children}
    </span>
  );
}
