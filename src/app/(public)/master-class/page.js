"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Play } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.08 },
  },
};

const classes = [
  {
    id: "spell-casting",
    title: "Spell Casting & Healing",
    instructor: "Dr. Kiran",
    duration: "60 min",
    description:
      "Discover the ancient art of spell casting and energy healing. Learn intention-based rituals.",
  },
  {
    id: "tarot-reading",
    title: "Tarot Reading",
    instructor: "Dr. Kiran",
    duration: "45 min",
    description:
      "Tarot Card Reading helps you to discover deep, insightful guidance through symbolic cards.",
  },
  {
    id: "past-life-regression",
    title: "Past Life Regression",
    instructor: "Guruma Neha",
    duration: "75 min",
    description:
      "Past Life Regression (PLR) helps you heal karmic patterns and reconnect with your soul memory.",
  },
  {
    id: "vedic-astrology",
    title: "Vedic Astrology",
    instructor: "Guruma Janvi Tripathi",
    duration: "60 min",
    description:
      "Decode the planetary blueprint of your life and learn how the cosmos shapes destiny.",
  },
  {
    id: "akashic-records",
    title: "Akashic Records",
    instructor: "Guruma Neha",
    duration: "60 min",
    description:
      "Access the cosmic library of your soul's journey across lifetimes and timelines.",
  },
  {
    id: "numerology",
    title: "Vedic Numerology",
    instructor: "Guruma Janvi Tripathi",
    duration: "45 min",
    description:
      "Unlock the science of numbers — reveal how your birth date shapes personality and destiny.",
  },
  {
    id: "reiki-healing",
    title: "Reiki Healing",
    instructor: "Guruma Neha",
    duration: "60 min",
    description:
      "Channel universal life-force energy through your hands for deep healing and balance.",
  },
  {
    id: "crystal-healing",
    title: "Crystal Healing",
    instructor: "Guruma Neha",
    duration: "45 min",
    description:
      "Discover how crystals and gemstones restore vibrational balance and emotional clarity.",
  },
  {
    id: "hypnosis",
    title: "Hypnosis",
    instructor: "Dr Kiran",
    duration: "60 min",
    description:
      "Harness the subconscious mind to dissolve limiting beliefs and create lasting change.",
  },
  {
    id: "advanced-predictive-astrology",
    title: "Advanced Predictive Astrology",
    instructor: "Ajay Kumar",
    duration: "60 min",
    description:
      "A Medium-to-Master level demo with 20+ years experienced astrologer Ajay Kumar — predictive techniques, KP system & professional practice.",
  },
  {
    id: "palmistry",
    title: "Palmistry",
    instructor: "Guruma Janvi Tripathi",
    duration: "45 min",
    description:
      "Discover the ancient art of reading hands — lines, mounts, and signs that reveal personality and destiny.",
  },
];

export default function MasterClassPage() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-slate-950 pb-24">
      {/* Header banner — pill style */}
      <section className="container mx-auto px-4 md:px-6 pt-12 pb-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto max-w-3xl"
        >
          <div className="flex items-center gap-3 md:gap-5 px-4 md:px-6 py-3 md:py-4 rounded-full bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 shadow-2xl shadow-amber-600/40 border border-amber-300/40">
            <div className="flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-950 border-2 border-amber-300 shadow-inner shrink-0">
              <Mail className="w-5 h-5 md:w-6 md:h-6 text-amber-300" />
            </div>
            <h1 className="heading-serif text-xl md:text-3xl lg:text-4xl text-slate-950 font-bold tracking-wide">
              HIOS <span className="opacity-50">|</span> Free Master Class
            </h1>
          </div>
        </motion.div>

        <p className="text-center text-amber-100/70 text-sm md:text-base mt-6 max-w-2xl mx-auto">
          Get a taste of our certified courses with free demo sessions led by
          our master faculty.
        </p>
      </section>

      {/* Grid of demo class cards */}
      <section className="container mx-auto px-4 md:px-6">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {classes.map((klass, i) => (
            <motion.div
              key={klass.id}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative rounded-2xl overflow-hidden border border-amber-500/20 bg-amber-950/10 backdrop-blur-md hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-500/20 transition-all"
            >
              {/* Top section: image + title overlay */}
              <div
                className={`relative h-72 overflow-hidden bg-gradient-to-br ${
                  i % 3 === 0
                    ? "from-amber-400 via-orange-400 to-yellow-300"
                    : i % 3 === 1
                    ? "from-orange-600 via-amber-600 to-orange-700"
                    : "from-amber-800 via-orange-800 to-red-900"
                }`}
              >
                {/* Decorative pattern overlay */}
                <div
                  className="absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2) 0%, transparent 50%)",
                  }}
                />

                {/* Text content */}
                <div className="absolute inset-0 p-6 flex flex-col z-10">
                  <h3 className="heading-serif text-3xl md:text-4xl font-bold leading-tight uppercase text-slate-900 drop-shadow-md max-w-[60%]">
                    {klass.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base font-bold uppercase tracking-wider text-slate-900/90">
                    Demo Class
                  </p>
                  <div className="mt-auto">
                    <p className="text-xs uppercase tracking-widest font-bold text-slate-900/80">
                      By — {klass.instructor}
                    </p>
                  </div>
                </div>

                {/* Faculty image — right aligned */}
                <img
                  src={
                    klass.instructor === "Guruma Janvi Tripathi"
                      ? "/images/GurumaJanviTripathi.jpeg"
                      : klass.instructor === "Ajay Kumar"
                      ? "/images/ajay_kumar_astrologer.png"
                      : "/images/faculty1.png"
                  }
                  alt={klass.instructor}
                  className="absolute right-0 bottom-0 h-[95%] w-auto object-contain object-bottom-right group-hover:scale-105 transition-transform duration-500"
                />

                {/* Play badge */}
                <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-950/80 border border-amber-300/60 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-amber-600/30 group-hover:scale-110 transition-transform">
                  <Play className="w-4 h-4 text-amber-300 ml-0.5" fill="currentColor" />
                </div>
              </div>

              {/* White card body */}
              <div className="bg-slate-950/40 backdrop-blur-sm p-6 border-t border-amber-500/15">
                <h4 className="heading-serif text-xl md:text-2xl font-bold text-amber-100 text-center mb-3">
                  {klass.title}
                </h4>
                <p className="text-sm text-amber-100/60 text-center leading-relaxed mb-5 min-h-[3.5rem]">
                  {klass.description}
                </p>
                <div className="flex items-center justify-center gap-2 mb-4 text-xs text-amber-200/70">
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30">
                    FREE
                  </span>
                  <span>•</span>
                  <span>{klass.duration}</span>
                </div>
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSenPcmOjpm9S3cKj4MATNN8wBE3yPhNCfTSfkOr8F0nwoHcNQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                  
                  className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-semibold rounded-xl transition-all">
                    Join Free Class
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA strip */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="rounded-2xl border border-amber-500/25 bg-gradient-to-r from-amber-950/40 via-orange-950/30 to-amber-950/40 backdrop-blur-md p-8 md:p-10 text-center">
          <h2 className="heading-serif text-2xl md:text-3xl text-white mb-3">
            Ready to Go Deeper?
          </h2>
          <p className="text-amber-100/70 mb-6 max-w-xl mx-auto">
            Loved the demo? Explore our full diploma courses and get certified.
          </p>
          <Link href="/courses">
            <Button
              size="lg"
              className="h-12 px-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-semibold shadow-lg shadow-amber-600/30 transition-all hover:scale-[1.02]"
            >
              View All Courses
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
