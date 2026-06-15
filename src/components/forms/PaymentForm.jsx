"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Field } from "@/components/forms/FormControls";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Copy,
  Check,
  QrCode,
  ShieldCheck,
  Lock,
} from "lucide-react";

const ACCESS_KEY = process.env.NEXT_PUBLIC_MAIL_SERVICE_API_KEY;
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";
const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/CuDZVFVw5My75dvz4Twrzy";

const UPI_ID = "7522814847@axl";
const PAYEE_NAME = "Hamsa Institute of Occult Science";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[+\d][\d\s-]{7,}$/;

/**
 * Reusable UPI payment + transaction-ID confirmation block.
 * Props:
 *  - programName: string  (auto-filled course/program)
 *  - defaultAmount?: string
 */
export function PaymentForm({ programName = "", lockedAmount = "" }) {
  const initialForm = {
    fullName: "",
    email: "",
    phone: "",
    amount: "",
    transactionId: "",
  };

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [serverMessage, setServerMessage] = useState("");
  const [copied, setCopied] = useState(false);

  // If a button locked the amount (e.g. ₹511 / ₹199), use it; else user-entered.
  const effectiveAmount = lockedAmount || form.amount;

  // UPI link + QR carry the amount so it auto-fills in the UPI app on scan.
  const amountParam =
    effectiveAmount && Number(effectiveAmount) > 0 ? `&am=${effectiveAmount}` : "";
  const upiLink = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(PAYEE_NAME)}${amountParam}&cu=INR`;
  const qrSrc = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(upiLink)}`;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const copyUpi = async () => {
    try {
      await navigator.clipboard.writeText(UPI_ID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  const validate = () => {
    const next = {};
    if (!form.fullName.trim()) next.fullName = "Full name is required.";
    if (!form.email.trim() || !EMAIL_RE.test(form.email)) next.email = "Enter a valid email.";
    if (!form.phone.trim() || !PHONE_RE.test(form.phone)) next.phone = "Enter a valid phone number.";
    if (!effectiveAmount || Number(effectiveAmount) <= 0) next.amount = "Enter the amount paid.";
    if (!form.transactionId.trim()) next.transactionId = "Enter your transaction / UTR ID.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) {
      document.querySelector("[data-error='true']")?.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    setStatus("submitting");
    setServerMessage("");

    if (!ACCESS_KEY) {
      setStatus("error");
      setServerMessage("Form is not configured. Please contact us directly.");
      return;
    }

    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: "New Payment Confirmation — HIOS",
          from_name: "HIOS Payment",
          Name: form.fullName,
          Email: form.email,
          Phone: form.phone,
          Program: programName || "Not specified",
          "Amount Paid": `₹${effectiveAmount}`,
          "UPI ID (Payee)": UPI_ID,
          "Transaction / UTR ID": form.transactionId,
          botcheck: "",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setServerMessage(
          "Thank you! We have received your payment details. Your enrollment will be confirmed after verification."
        );
        setForm(initialForm);
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
      <div className="max-w-xl mx-auto rounded-2xl border border-emerald-500/30 bg-emerald-950/20 backdrop-blur-md p-8 md:p-10 text-center">
        <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-4" />
        <h3 className="heading-serif text-2xl text-white mb-2">Payment Submitted!</h3>
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
          Submit another payment
        </button>
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8 items-start">
      {/* UPI pay */}
      <div className="rounded-2xl border border-amber-500/25 bg-amber-950/15 backdrop-blur-md p-6 space-y-5">
        <div className="flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold">
          <QrCode className="w-4 h-4" />
          Scan &amp; Pay
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-5">
          <div className="rounded-xl overflow-hidden border-2 border-amber-400/40 bg-white p-2 shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={qrSrc} alt="UPI QR code" width={140} height={140} className="w-[140px] h-[140px]" />
          </div>

          <div className="w-full space-y-3">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-amber-200/60 font-semibold mb-1">UPI ID</p>
              <div className="flex items-center gap-2 rounded-lg bg-slate-950/60 border border-amber-500/20 px-3 py-2">
                <span className="text-amber-50 font-mono text-sm flex-1 break-all">{UPI_ID}</span>
                <button type="button" onClick={copyUpi} aria-label="Copy UPI ID" className="shrink-0 text-amber-300 hover:text-amber-200 transition-colors">
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && <p className="text-[11px] text-emerald-400 mt-1">Copied!</p>}
            </div>

            <a
              href={upiLink}
              className="inline-flex items-center justify-center gap-2 w-full h-10 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 text-sm font-bold transition-all"
            >
              Pay via UPI App
            </a>
          </div>
        </div>

        <ol className="space-y-2 text-sm text-amber-100/70 list-decimal list-inside">
          <li>Scan the QR or pay to the UPI ID above.</li>
          <li>Copy the transaction / UTR ID from your UPI app.</li>
          <li>Fill the form and paste the transaction ID to confirm.</li>
        </ol>

        <div className="flex items-center gap-2 text-xs text-amber-200/60">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Enrollment confirmed after payment verification.
        </div>
      </div>

      {/* Confirmation form */}
      <form
        onSubmit={handleSubmit}
        noValidate
        className="rounded-2xl border border-amber-500/25 bg-amber-950/10 backdrop-blur-md p-6 md:p-7 space-y-5"
      >
        <div>
          <h3 className="heading-serif text-2xl text-white mb-1">Confirm Your Payment</h3>
          <p className="text-amber-100/60 text-sm">Enter your details and transaction ID after paying.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <Field label="Full Name *" name="fullName" placeholder="Your full name" value={form.fullName} onChange={handleChange} error={errors.fullName} />
          <Field label="Email Address *" name="email" type="email" placeholder="you@example.com" value={form.email} onChange={handleChange} error={errors.email} />
        </div>

        <Field label="Phone / WhatsApp *" name="phone" type="tel" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} error={errors.phone} />

        <div className="grid sm:grid-cols-2 gap-5">
          {lockedAmount ? (
            <div className="flex flex-col gap-1.5">
              <label className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold">
                Amount Paid (₹) *
              </label>
              <div className="w-full rounded-xl bg-slate-950/60 border border-amber-500/20 px-4 py-2.5 flex items-center justify-between cursor-not-allowed">
                <span className="text-amber-50 font-semibold">₹{lockedAmount}</span>
                <Lock className="w-4 h-4 text-amber-300/60 shrink-0" />
              </div>
            </div>
          ) : (
            <Field label="Amount Paid (₹) *" name="amount" type="number" placeholder="e.g. 511" value={form.amount} onChange={handleChange} error={errors.amount} />
          )}
          <Field label="Transaction / UTR ID *" name="transactionId" placeholder="e.g. 4012XXXXXXX" value={form.transactionId} onChange={handleChange} error={errors.transactionId} />
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
            <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Submitting...</>
          ) : (
            <><Send className="w-4 h-4 mr-2" />Confirm Payment</>
          )}
        </Button>
      </form>
    </div>
  );
}
