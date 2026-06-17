"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle2, AlertCircle, Loader2, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s-]{7,}$/;

const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/CuDZVFVw5My75dvz4Twrzy";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const ACCESS_KEY = process.env.NEXT_PUBLIC_MAIL_SERVICE_API_KEY;

const initialState = {
  fullName: "",
  email: "",
  phone: "",
  message: "",
};

/**
 * Reusable, self-contained contact / lead form.
 * Posts to /api/contact which forwards to Web3Forms (key stays server-side).
 *
 * Props:
 *  - courseName?: string   auto-fills + locks the Course field (used on course pages)
 *  - heading?: string
 *  - subheading?: string
 *  - compact?: boolean     tighter spacing for modal usage
 *  - onSuccess?: () => void
 *  - className?: string
 */
export function ContactForm({
  courseName = "",
  heading = "Send us a Message",
  subheading = "Fill the form and our counsellor will reach out shortly.",
  compact = false,
  onSuccess,
  className,
}) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.email.trim()) next.email = "Email is required.";
    else if (!EMAIL_RE.test(form.email)) next.email = "Enter a valid email.";
    if (!form.phone.trim()) next.phone = "Phone number is required.";
    else if (!PHONE_RE.test(form.phone)) next.phone = "Enter a valid phone number.";
    if (!form.message.trim()) next.message = "Message is required.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setServerMessage("");

    if (!ACCESS_KEY) {
      setStatus("error");
      setServerMessage("Mail service is not configured. Please contact us directly.");
      return;
    }

    const subject = courseName
      ? `New Lead — ${courseName} | HIOS Website`
      : "New Lead — HIOS Website";

    try {
      // Web3Forms free plan accepts client-side submissions only.
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject,
          from_name: "HIOS Website",
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          course: courseName || "General Enquiry",
          message: form.message,
          botcheck: "",
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setServerMessage(
          "Thank you! Our counsellor will reach out to you shortly."
        );
        setForm(initialState);
        onSuccess?.();
      } else {
        setStatus("error");
        setServerMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setServerMessage("Network error. Please try again later.");
    }
  };

  if (status === "success") {
    return (
      <div
        className={cn(
          "rounded-2xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md p-8 text-center",
          className
        )}
      >
        <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto mb-4" />
        <h3 className="heading-serif text-2xl text-white mb-2">Download Request Submitted</h3>
        <p className="text-emerald-100/70">{serverMessage}</p>

        <a
          href={WHATSAPP_COMMUNITY}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold shadow-lg shadow-green-900/40 transition-all hover:scale-[1.02]"
        >
          <MessageCircle className="w-5 h-5" />
          Join WhatsApp Community for Booking &amp; Details
        </a>

        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm font-semibold text-amber-300 hover:text-amber-200 underline-offset-4 hover:underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={cn(
        "rounded-2xl border border-amber-500/25 bg-amber-950/10 backdrop-blur-md",
        compact ? "p-5 space-y-4" : "p-6 md:p-8 space-y-5",
        className
      )}
    >
      {(heading || subheading) && (
        <div>
          {heading && (
            <h2 className="heading-serif text-2xl md:text-3xl text-white mb-1">
              {heading}
            </h2>
          )}
          {subheading && <p className="text-amber-100/60 text-sm">{subheading}</p>}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
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

      <div className="grid md:grid-cols-2 gap-4">
        <Field
          label="Phone Number *"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          value={form.phone}
          onChange={handleChange}
          error={errors.phone}
        />
        {courseName ? (
          <Field
            label="Course"
            name="courseName"
            value={courseName}
            readOnly
            onChange={() => {}}
          />
        ) : (
          <div className="hidden md:block" />
        )}
      </div>

      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 5}
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us a little about what you're looking for..."
          className={cn(
            "w-full rounded-xl bg-slate-950/60 border text-amber-50 placeholder-amber-200/30 px-4 py-3 focus:outline-none focus:ring-2 transition resize-none",
            errors.message
              ? "border-red-500/60 focus:border-red-400/60 focus:ring-red-500/30"
              : "border-amber-500/20 focus:border-amber-400/60 focus:ring-amber-500/30"
          )}
        />
        {errors.message && (
          <p className="text-xs text-red-400">{errors.message}</p>
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
        className="w-full h-12 px-8 cursor-pointer rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-600/40 transition-all hover:scale-[1.01] disabled:opacity-70 disabled:hover:scale-100"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Download Curriculum
          </>
        )}
      </Button>
    </form>
  );
}

function Field({ label, name, type = "text", error, ...rest }) {
  return (
    <div className="flex flex-col gap-1.5">
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
        className={cn(
          "w-full rounded-xl bg-slate-950/60 border text-amber-50 placeholder-amber-200/30 px-4 py-2.5 focus:outline-none focus:ring-2 transition",
          rest.readOnly && "opacity-70 cursor-not-allowed",
          error
            ? "border-red-500/60 focus:border-red-400/60 focus:ring-red-500/30"
            : "border-amber-500/20 focus:border-amber-400/60 focus:ring-amber-500/30"
        )}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
