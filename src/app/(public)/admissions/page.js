"use client";

import { useMemo, useState } from "react";
import { Country, State, City } from "country-state-city";
import { occultCourses } from "@/lib/data/occult-courses";
import { Button } from "@/components/ui/button";
import { Field, TextArea, SearchableSelect } from "@/components/forms/FormControls";
import {
  Sparkles,
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
} from "lucide-react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_MAIL_SERVICE_API_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/CuDZVFVw5My75dvz4Twrzy";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s-]{7,}$/;

const courseOptions = [
  ...occultCourses.map((c) => ({ value: c.title, label: c.title })),
  { value: "Other", label: "Other" },
];

const initialForm = {
  fullName: "",
  age: "",
  email: "",
  whatsapp: "",
  altMobile: "",
  course: "",
  annualIncome: "",
  occupation: "",
  address: "",
  batchDate: "",
  regAmount: "",
};

export default function AdmissionsPage() {
  const [form, setForm] = useState(initialForm);
  const [country, setCountry] = useState("");
  const [stateCode, setStateCode] = useState("");
  const [city, setCity] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");

  const countryOptions = useMemo(
    () =>
      Country.getAllCountries().map((c) => ({ value: c.isoCode, label: c.name })),
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

  const setField = (name, value) => {
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Name is required.";
    if (!form.age || Number(form.age) <= 0) next.age = "Enter a valid age.";
    if (!form.email.trim() || !EMAIL_RE.test(form.email))
      next.email = "Enter a valid email.";
    if (!form.whatsapp.trim() || !PHONE_RE.test(form.whatsapp))
      next.whatsapp = "Enter a valid WhatsApp number.";
    if (form.altMobile && !PHONE_RE.test(form.altMobile))
      next.altMobile = "Enter a valid mobile number.";
    if (!form.course) next.course = "Select a course.";
    if (!country) next.country = "Select your country.";
    if (stateOptions.length > 0 && !stateCode) next.state = "Select your state.";
    if (cityOptions.length > 0 && !city) next.city = "Select your city.";
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

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New Admission Form — HIOS",
          from_name: "HIOS Admissions",
          Name: form.fullName,
          Age: form.age,
          Email: form.email,
          "WhatsApp Number": form.whatsapp,
          "Alternate Mobile": form.altMobile || "Not provided",
          Course: form.course,
          "Annual Income": form.annualIncome || "Not provided",
          "Occupation / Designation": form.occupation || "Not provided",
          Address: form.address || "Not provided",
          Country: countryName,
          State: stateName || "Not provided",
          City: city || "Not provided",
          "Batch Date": form.batchDate || "Not provided",
          "Registration Amount": form.regAmount || "Not provided",
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setServerMessage(
          "Thank you! Your admission form has been received. Our counsellor will contact you shortly."
        );
        setForm(initialForm);
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
            Admission Form Received!
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
            Submit another form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-slate-950 pb-24">
      <section className="container mx-auto px-4 md:px-6 pt-12 md:pt-16">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-8 lg:gap-12 items-start">
          {/* Left — info */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs md:text-sm font-semibold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              Admission Form
            </div>
            <h1 className="heading-serif text-4xl md:text-5xl text-white leading-tight tracking-tight">
              Secure Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
                Admission
              </span>
            </h1>
            <p className="text-amber-100/70 text-sm md:text-base">
              Complete your admission details below and our team will confirm
              your seat and batch. Every detail helps us serve you better.
            </p>
            <ul className="space-y-3 pt-2">
              {[
                "Confirmed seat in your chosen course",
                "Batch & schedule details shared on confirmation",
                "Certified diploma on completion",
                "Lifetime access to recordings",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-amber-100/85 text-sm md:text-base"
                >
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-300" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Right — form */}
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-2xl border border-amber-500/25 bg-amber-950/10 backdrop-blur-md p-6 md:p-8 space-y-5"
          >
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Your Name *" name="fullName" placeholder="Full name" value={form.fullName} onChange={handleChange} error={errors.fullName} />
              <Field label="Age *" name="age" type="number" placeholder="Your age" value={form.age} onChange={handleChange} error={errors.age} />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Your Email *" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} error={errors.email} />
              <Field label="WhatsApp Number *" name="whatsapp" type="tel" placeholder="+91 98765 43210" value={form.whatsapp} onChange={handleChange} error={errors.whatsapp} />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Alternate Mobile Number" name="altMobile" type="tel" placeholder="+91 98765 43210" value={form.altMobile} onChange={handleChange} error={errors.altMobile} />
              <SearchableSelect
                label="Course Name *"
                placeholder="Select a course"
                value={form.course}
                error={errors.course}
                options={courseOptions}
                onChange={(v) => setField("course", v)}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Annual Income" name="annualIncome" placeholder="e.g. ₹5,00,000" value={form.annualIncome} onChange={handleChange} />
              <Field label="Occupation / Designation" name="occupation" placeholder="e.g. Software Engineer" value={form.occupation} onChange={handleChange} />
            </div>

            <TextArea label="Address" name="address" rows={3} placeholder="Your full address" value={form.address} onChange={handleChange} />

            {/* Country / State / City — cascading searchable */}
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
                  if (errors.country) setErrors((er) => ({ ...er, country: undefined }));
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
                  if (errors.state) setErrors((er) => ({ ...er, state: undefined }));
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
                  if (errors.city) setErrors((er) => ({ ...er, city: undefined }));
                }}
              />
            </div>

            {/* Batch date (themed, click-to-open) + Registration amount */}
            <div className="grid md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="batchDate"
                  className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold"
                >
                  Batch Date
                </label>
                <input
                  id="batchDate"
                  name="batchDate"
                  type="date"
                  value={form.batchDate}
                  onChange={handleChange}
                  onClick={(e) => e.currentTarget.showPicker?.()}
                  className="w-full rounded-xl bg-slate-950/60 border border-amber-500/20 text-amber-50 px-4 py-2.5 focus:outline-none focus:border-amber-400/60 focus:ring-2 focus:ring-amber-500/30 transition cursor-pointer [color-scheme:dark]"
                />
              </div>
              <Field label="Registration Amount" name="regAmount" type="number" placeholder="e.g. 11000" value={form.regAmount} onChange={handleChange} />
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
                  Submit Admission Form
                </>
              )}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
