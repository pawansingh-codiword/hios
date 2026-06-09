"use client";

import { useMemo, useState } from "react";
import { Country, State, City } from "country-state-city";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Field, SearchableSelect } from "@/components/forms/FormControls";
import {
  Sparkles,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  MessageCircle,
} from "lucide-react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_MAIL_SERVICE_API_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/CuDZVFVw5My75dvz4Twrzy";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s-]{7,}$/;

const COURSE_OPTIONS = [
  "Numerology",
  "Astrology",
  "Tarot Reading",
  "Akashic Records",
  "Past Life Regression",
  "Reiki Healing",
  "Hypnosis",
  "Vastu Shastra",
  "Spell Casting",
  "Other",
];

const JOINING_FOR_OPTIONS = [
  "Self / Personal Growth",
  "Professional Certification & Career",
  "Healing a Personal Problem",
  "To Start My Own Practice",
  "Just Exploring",
];

const HEARD_FROM_OPTIONS = [
  "Facebook Advertisement",
  "Instagram Advertisement",
  "YouTube",
  "WhatsApp",
  "Google Search",
  "Friend / Family Referral",
  "Existing Student",
  "Telegram",
  "Website",
];

const toOpts = (arr) => arr.map((v) => ({ value: v, label: v }));

const initialState = {
  fullName: "",
  mobile: "",
  whatsapp: "",
  email: "",
  age: "",
  courseOther: "",
  joiningFor: "",
  heardFrom: "",
};

export default function RegisterPage() {
  const [form, setForm] = useState(initialState);
  const [courses, setCourses] = useState([]); // multi-select
  const [country, setCountry] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");

  const countryOptions = useMemo(
    () => Country.getAllCountries().map((c) => ({ value: c.isoCode, label: c.name })),
    []
  );
  const stateOptions = useMemo(
    () =>
      country
        ? State.getStatesOfCountry(country).map((s) => ({
            value: s.isoCode,
            label: s.name,
          }))
        : [],
    [country]
  );
  const cityOptions = useMemo(
    () =>
      country && stateCode
        ? City.getCitiesOfState(country, stateCode).map((c) => ({
            value: c.name,
            label: c.name,
          }))
        : [],
    [country, stateCode]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const toggleCourse = (opt) => {
    setCourses((prev) =>
      prev.includes(opt) ? prev.filter((c) => c !== opt) : [...prev, opt]
    );
    if (errors.courses) setErrors((er) => ({ ...er, courses: undefined }));
  };

  const clearErr = (key) => setErrors((er) => ({ ...er, [key]: undefined }));

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.mobile.trim() || !PHONE_RE.test(form.mobile))
      next.mobile = "Enter a valid mobile number.";
    if (!form.whatsapp.trim() || !PHONE_RE.test(form.whatsapp))
      next.whatsapp = "Enter a valid WhatsApp number.";
    if (!form.email.trim() || !EMAIL_RE.test(form.email))
      next.email = "Enter a valid email.";
    if (!country) next.country = "Select your country.";
    if (stateOptions.length > 0 && !stateCode) next.state = "Select your state.";
    if (cityOptions.length > 0 && !city) next.city = "Select your city.";
    if (courses.length === 0) next.courses = "Select at least one course.";
    if (courses.includes("Other") && !form.courseOther.trim())
      next.courseOther = "Please specify the course.";
    if (!form.joiningFor) next.joiningFor = "Select an option.";
    if (!form.heardFrom) next.heardFrom = "Select an option.";
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

    const countryName =
      countryOptions.find((c) => c.value === country)?.label || "";
    const stateName =
      stateOptions.find((s) => s.value === stateCode)?.label || "";
    const courseList = courses
      .map((c) => (c === "Other" ? `Other: ${form.courseOther}` : c))
      .join(", ");

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: `New Registration — HIOS`,
          from_name: "HIOS Registration",
          "Full Name": form.fullName,
          "Mobile Number": form.mobile,
          "WhatsApp Number": form.whatsapp,
          Email: form.email,
          Age: form.age || "Not provided",
          Country: countryName,
          State: stateName,
          City: city,
          "Courses Interested In": courseList,
          "Joining For": form.joiningFor,
          "Heard About Us From": form.heardFrom,
          botcheck: "",
        }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setServerMessage(
          "Thank you for registering! Our counsellor will reach out to you shortly."
        );
        setForm(initialState);
        setCourses([]);
        setCountry("");
        setStateCode("");
        setCity("");
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
      <div className="container mx-auto px-4 md:px-6 py-20">
        <div className="max-w-xl mx-auto rounded-2xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md p-8 md:p-10 text-center">
          <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
          <h1 className="heading-serif text-3xl text-white mb-2">
            Registration Received!
          </h1>
          <p className="text-emerald-100/75">{serverMessage}</p>
          <a
            href={WHATSAPP_COMMUNITY}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-7 inline-flex items-center justify-center gap-2 w-full h-12 rounded-xl bg-[#25D366] hover:bg-[#1ebe57] text-white font-bold shadow-lg shadow-green-900/40 transition-all hover:scale-[1.02]"
          >
            <MessageCircle className="w-5 h-5" />
            Join WhatsApp Community for Booking &amp; Details
          </a>
          <button
            type="button"
            onClick={() => setStatus("idle")}
            className="mt-4 text-sm font-semibold text-amber-300 hover:text-amber-200 underline-offset-4 hover:underline"
          >
            Submit another registration
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-slate-950 pb-24">
      {/* Two-column: info + form */}
      <section className="container mx-auto px-4 md:px-6 pt-12 md:pt-16">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-start">
          {/* Left — information */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs md:text-sm font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Admission Form
            </div>
            <h1 className="heading-serif text-4xl md:text-5xl text-white leading-tight tracking-tight">
              Register for{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
                HIOS Courses
              </span>
            </h1>
            <p className="text-amber-100/70 text-sm md:text-base">
              Fill in your details and our counsellor will reach out to guide
              your spiritual journey — every step of the way.
            </p>

            <ul className="space-y-3 pt-2">
              {[
                "Certified diploma — recognised on completion",
                "Learn directly from experienced gurus & mentors",
                "Live + recorded sessions with lifetime access",
                "Free counselling to choose the right course",
                "Join a global community of seekers & healers",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-amber-100/85 text-sm md:text-base">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_COMMUNITY}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-amber-500/25 bg-amber-950/20 px-4 py-3 text-sm text-amber-100 hover:border-amber-400/50 transition-colors"
            >
              <MessageCircle className="w-5 h-5 text-[#25D366]" />
              Prefer chat? Join our WhatsApp Community
            </a>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-amber-500/25 bg-amber-950/10 backdrop-blur-md p-6 md:p-8 space-y-6"
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
              label="Mobile Number *"
              name="mobile"
              type="tel"
              placeholder="+91 98765 43210"
              value={form.mobile}
              onChange={handleChange}
              error={errors.mobile}
            />
            <Field
              label="WhatsApp Number *"
              name="whatsapp"
              type="tel"
              placeholder="+91 98765 43210"
              value={form.whatsapp}
              onChange={handleChange}
              error={errors.whatsapp}
            />
          </div>

          {/* Country / State / City — searchable */}
          <div className="grid md:grid-cols-3 gap-5">
            <SearchableSelect
              label="Country *"
              placeholder="Select country"
              value={country}
              error={errors.country}
              options={countryOptions}
              onChange={(v) => {
                setCountry(v);
                setStateCode("");
                setCity("");
                clearErr("country");
              }}
            />
            <SearchableSelect
              label="State *"
              placeholder={
                !country
                  ? "Select country first"
                  : stateOptions.length === 0
                  ? "No states"
                  : "Select state"
              }
              value={stateCode}
              error={errors.state}
              disabled={!country || stateOptions.length === 0}
              options={stateOptions}
              onChange={(v) => {
                setStateCode(v);
                setCity("");
                clearErr("state");
              }}
            />
            <SearchableSelect
              label="City *"
              placeholder={
                !stateCode
                  ? "Select state first"
                  : cityOptions.length === 0
                  ? "No cities"
                  : "Select city"
              }
              value={city}
              error={errors.city}
              disabled={!stateCode || cityOptions.length === 0}
              options={cityOptions}
              onChange={(v) => {
                setCity(v);
                clearErr("city");
              }}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <Field
              label="Age"
              name="age"
              type="number"
              placeholder="Your age"
              value={form.age}
              onChange={handleChange}
            />
          </div>

          {/* Courses — multi-select checkboxes */}
          <div data-error={!!errors.courses}>
            <p className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold mb-3">
              Which course(s) are you interested in? *{" "}
              <span className="text-amber-300/50 normal-case tracking-normal">
                (select one or more)
              </span>
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {COURSE_OPTIONS.map((opt) => {
                const active = courses.includes(opt);
                return (
                  <label
                    key={opt}
                    className={cn(
                      "flex items-center gap-2 rounded-xl border px-3 py-2.5 text-sm cursor-pointer transition-all",
                      active
                        ? "border-amber-400/70 bg-amber-500/15 text-amber-100"
                        : "border-amber-500/20 bg-slate-950/40 text-amber-100/70 hover:border-amber-400/40"
                    )}
                  >
                    <input
                      type="checkbox"
                      checked={active}
                      onChange={() => toggleCourse(opt)}
                      className="accent-amber-500"
                    />
                    {opt}
                  </label>
                );
              })}
            </div>
            {courses.includes("Other") && (
              <input
                name="courseOther"
                value={form.courseOther}
                onChange={handleChange}
                placeholder="Please specify the course"
                className={cn(
                  "mt-3 w-full rounded-xl bg-slate-950/60 border text-amber-50 placeholder-amber-200/30 px-4 py-2.5 focus:outline-none focus:ring-2 transition",
                  errors.courseOther
                    ? "border-red-500/60 focus:ring-red-500/30"
                    : "border-amber-500/20 focus:border-amber-400/60 focus:ring-amber-500/30"
                )}
              />
            )}
            {(errors.courses || errors.courseOther) && (
              <p className="text-xs text-red-400 mt-2">
                {errors.courses || errors.courseOther}
              </p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            <SearchableSelect
              label="Are you joining for? *"
              placeholder="Select an option"
              value={form.joiningFor}
              error={errors.joiningFor}
              options={toOpts(JOINING_FOR_OPTIONS)}
              onChange={(v) => {
                setForm((f) => ({ ...f, joiningFor: v }));
                clearErr("joiningFor");
              }}
            />
            <SearchableSelect
              label="How did you hear about us? *"
              placeholder="Select an option"
              value={form.heardFrom}
              error={errors.heardFrom}
              options={toOpts(HEARD_FROM_OPTIONS)}
              onChange={(v) => {
                setForm((f) => ({ ...f, heardFrom: v }));
                clearErr("heardFrom");
              }}
            />
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
            className="w-full h-12 px-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-600/40 transition-all hover:scale-[1.01] disabled:opacity-70 disabled:hover:scale-100"
          >
            {status === "submitting" ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Submit Registration
              </>
            )}
          </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
