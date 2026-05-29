"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Gift,
  Sparkles,
  Star,
  Play,
  Clock,
  User,
  Radio,
} from "lucide-react";
import { useEffect, useState } from "react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function SadhanaPage() {
  // Countdown timer (mm:ss)
  const [secondsLeft, setSecondsLeft] = useState(9 * 60 + 30);
  useEffect(() => {
    if (secondsLeft <= 0) return;
    const id = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [secondsLeft]);

  const mm = String(Math.floor(Math.max(secondsLeft, 0) / 60)).padStart(2, "0");
  const ss = String(Math.max(secondsLeft, 0) % 60).padStart(2, "0");

  // Repeating marquee item
  const MarqueeItem = () => (
    <div className="flex items-center gap-3 px-6 shrink-0">
      <Gift className="w-5 h-5 text-slate-950" />
      <span className="font-bold text-slate-950 text-sm md:text-base whitespace-nowrap">
        EARLY BIRD OFFER:
      </span>
      <span className="text-slate-950 text-sm md:text-base whitespace-nowrap">
        Get Flat 10% Discount till tonight.
      </span>
      <span className="px-3 py-1 rounded-md bg-amber-200/70 border border-amber-700/30 text-slate-950 text-xs md:text-sm font-bold tracking-wider whitespace-nowrap">
        SADHANA10
      </span>
      <Sparkles className="w-4 h-4 text-slate-950" />
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-slate-950 pb-32">
      {/* Top promo marquee */}
      <div className="relative w-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 overflow-hidden border-b border-amber-700/30">
        <div className="flex animate-marquee whitespace-nowrap py-2.5">
          {Array.from({ length: 6 }).map((_, i) => (
            <MarqueeItem key={i} />
          ))}
        </div>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 pt-10 md:pt-14">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left column */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs md:text-sm font-semibold uppercase tracking-wider">
              <BadgeCheck className="w-4 h-4" />
              Live 2-Hour Sadhana
            </div>

            <h1 className="heading-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.1] tracking-tight">
              Remove Black Magic, Evil Eye,{" "}
              <span className="block bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
                and Tantra Problems — Forever
              </span>
            </h1>

            <p className="text-amber-100/75 text-base md:text-lg leading-relaxed max-w-xl">
              Join Guruma Kiran Khullar&apos;s live 2-hour Black Magic Removal
              sadhana class where you will learn how to remove Kala Jaadu, Nazar
              aur Tantra-Badha.
            </p>

            {/* Info row */}
            <div className="grid grid-cols-3 gap-4 pt-2 border-t border-amber-500/15 pt-6">
              <InfoBlock icon={Clock} label="Duration" value="2 Hours" />
              <InfoBlock icon={User} label="Guru" value="Vikrant Jain" />
              <InfoBlock icon={Radio} label="Format" value="Live Online" />
            </div>

            {/* Register CTA */}
            <div className="pt-4">
              <Button
                size="lg"
                className="w-full sm:w-auto h-14 px-10 rounded-xl text-base bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-600/40 transition-all hover:scale-[1.02]"
              >
                Register Now - 199
              </Button>
              <p className="mt-3 flex items-center gap-2 text-sm text-amber-200/80">
                <Star
                  className="w-4 h-4 text-yellow-300"
                  fill="currentColor"
                />
                <span>
                  <span className="font-semibold text-yellow-300">12,000+</span>{" "}
                  Sadhaks already joined
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right column — faculty image (in place of video) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl shadow-amber-900/40 bg-gradient-to-br from-amber-950 via-orange-950 to-slate-950 aspect-video">
              {/* Decorative top label like the screenshot */}
              <div className="absolute top-0 left-0 right-0 z-20 p-4 md:p-6 flex items-center gap-3 bg-gradient-to-b from-slate-950/80 to-transparent">
                <div className="w-10 h-10 rounded-full bg-slate-950 border border-amber-300/60 overflow-hidden shrink-0">
                  <img
                    src="/images/logo.png"
                    alt="HIOS"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="leading-tight">
                  <p className="text-amber-50 text-sm md:text-base font-bold tracking-wide">
                    BLACK MAGIC REMOVAL SADHANA
                  </p>
                  <p className="text-amber-200/70 text-[10px] md:text-xs">
                    HIOS — Hamsa Institute of Occult Science
                  </p>
                </div>
              </div>

              {/* Faculty image fills the card */}
              <img
                src="/images/faculty1.png"
                alt="Guruma Kiran Khullar"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Warm overlay tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              {/* Big play button overlay */}
              <button
                className="absolute inset-0 flex items-center justify-center group/play"
                aria-label="Play preview"
              >
                <span className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-red-600 shadow-2xl shadow-red-900/60 transition-transform group-hover/play:scale-110">
                  <span className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-40" />
                  <Play
                    className="w-10 h-10 md:w-12 md:h-12 text-white ml-1"
                    fill="currentColor"
                  />
                </span>
              </button>

              {/* Bottom strip */}
              <div className="absolute bottom-0 left-0 right-0 z-20 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between bg-gradient-to-t from-slate-950/90 to-transparent">
                <div className="px-3 py-1.5 rounded-full bg-slate-950/80 border border-amber-300/40 text-amber-100 text-xs md:text-sm font-semibold backdrop-blur-sm">
                  ▶ Preview Sadhana
                </div>
                <p className="text-amber-200 text-sm md:text-base font-semibold heading-serif tracking-wider">
                  VIKRANT JAIN
                </p>
              </div>
            </div>

            {/* Soft glow behind */}
            <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent rounded-3xl blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* What you'll learn section */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-serif text-2xl md:text-4xl text-white text-center mb-3">
            What You&apos;ll Learn in this{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
              Sacred Sadhana
            </span>
          </h2>
          <p className="text-amber-100/60 text-center text-sm md:text-base mb-10 max-w-2xl mx-auto">
            A 2-hour deep-dive guided live by Guruma Kiran Khullar.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Identify symptoms of Kala Jaadu, Nazar, and Tantra-Badha",
              "Sacred mantras to neutralise negative energies",
              "Protective rituals you can perform at home",
              "Ancient Vedic methods of energetic cleansing",
              "How to shield your family, home, and aura",
              "Live Q&A with Guruma Kiran Khullar",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl border border-amber-500/20 bg-amber-950/10 backdrop-blur-sm"
              >
                <BadgeCheck className="w-5 h-5 text-amber-300 shrink-0 mt-0.5" />
                <p className="text-amber-100/80 text-sm md:text-base leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky bottom register bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-amber-500/30 bg-gradient-to-r from-slate-950 via-amber-950/80 to-slate-950 backdrop-blur-md shadow-2xl shadow-black/60">
        <div className="container mx-auto px-4 md:px-6 py-3 md:py-4 flex items-center justify-between gap-3">
          <div className="flex-1 min-w-0">
            <p className="text-amber-100 text-sm md:text-base font-semibold truncate">
              ✦ Yes, I want to learn Black Magic Removal Sadhana
            </p>
            <p className="text-amber-200/70 text-xs md:text-sm mt-0.5">
              Special Offer Ends In:{" "}
              <span className="font-mono font-bold text-yellow-300">
                {mm}:{ss}
              </span>
            </p>
          </div>
          <Button
            size="lg"
            className="shrink-0 h-12 md:h-14 px-5 md:px-8 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-600/40 transition-all hover:scale-[1.02]"
          >
            <Sparkles className="w-4 h-4 mr-2" />
            Register Now - 199
          </Button>
        </div>
      </div>

      {/* Marquee keyframes */}
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        :global(.animate-marquee) {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
}

function InfoBlock({ icon: Icon, label, value }) {
  return (
    <div className="flex flex-col gap-1.5">
      <div className="flex items-center gap-2 text-amber-300">
        <Icon className="w-4 h-4" />
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">
          {label}
        </span>
      </div>
      <p className="text-white font-bold text-base md:text-lg">{value}</p>
    </div>
  );
}
