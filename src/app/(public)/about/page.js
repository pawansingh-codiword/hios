"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Target,
  Eye,
  Heart,
  Users,
  BookOpen,
  Award,
  Globe,
  ShieldCheck,
  Flame,
  Star,
  GraduationCap,
  Compass,
  ArrowRight,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

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

const stats = [
  { value: "12,000+", label: "Active Sadhaks" },
  { value: "50+", label: "Countries" },
  { value: "15+", label: "Diploma Courses" },
  { value: "25+", label: "Master Faculty" },
];

const principles = [
  {
    icon: Heart,
    title: "Authenticity",
    desc: "Every teaching is rooted in original scriptures, oral traditions, and Guru-Shishya parampara — never diluted.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    desc: "We honour the sacred. Our practices are ethical, transparent, and aligned with dharmic principles.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    desc: "Ancient wisdom shouldn't be locked behind language, geography, or wealth. We meet seekers where they are.",
  },
  {
    icon: Flame,
    title: "Transformation",
    desc: "Knowledge that doesn't change you isn't real knowledge. Every course is designed for lived experience.",
  },
];

const differentiators = [
  {
    icon: GraduationCap,
    title: "Certified Diploma Programmes",
    desc: "Government-recognised certifications that open professional doors in counselling, healing, and consultancy.",
  },
  {
    icon: Users,
    title: "Master Faculty",
    desc: "Learn from practitioners with 20+ years of lived experience — not just theory teachers.",
  },
  {
    icon: BookOpen,
    title: "Live + Recorded Sessions",
    desc: "Attend live and revisit lessons anytime. Lifetime access, mobile-friendly, multilingual.",
  },
  {
    icon: Award,
    title: "Recognised Globally",
    desc: "Featured in national media, partnered with international wellness centres across 5 continents.",
  },
  {
    icon: Compass,
    title: "Personal Guidance",
    desc: "1:1 mentor calls, peer circles, and Sadhana support — never walk the path alone.",
  },
  {
    icon: Star,
    title: "Lifetime Sangha",
    desc: "Join a global community of seekers, healers, and consultants who support each other for life.",
  },
];

const testimonials = [
  {
    quote:
      "HIOS changed how I see the world. The Tarot diploma gave me both technical mastery and spiritual depth.",
    name: "Priya Sharma",
    role: "Tarot Consultant, Mumbai",
  },
  {
    quote:
      "The Past-Life Regression course healed wounds I didn't know I carried. Forever grateful to Gurudev.",
    name: "David Chen",
    role: "Therapist, Singapore",
  },
  {
    quote:
      "I started as a curious seeker and now I'm running my own healing practice. HIOS made it possible.",
    name: "Anjali Verma",
    role: "Reiki Master, Delhi",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-slate-950 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-4 md:px-6 pt-12 md:pt-16 text-center">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-3xl mx-auto space-y-6"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs md:text-sm font-semibold uppercase tracking-wider"
          >
            <Sparkles className="w-4 h-4" />
            About Us
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="heading-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05] tracking-tight"
          >
            Awakening the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
              Divine Within
            </span>{" "}
            — Since 2010
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-amber-100/75 text-base md:text-lg leading-relaxed"
          >
            Hamsa Institute of Occult Science (HIOS) is the world&apos;s leading
            academy for Vedic astrology, tarot, healing arts, and esoteric
            sciences. We bridge timeless wisdom with modern learning — so every
            seeker can discover, learn, and transform.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats strip */}
      <section className="container mx-auto px-4 md:px-6 mt-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5"
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-amber-500/25 bg-gradient-to-br from-amber-950/30 via-orange-950/20 to-slate-950/40 backdrop-blur-md p-5 text-center"
            >
              <div className="heading-serif text-3xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400 font-bold">
                {s.value}
              </div>
              <p className="text-amber-100/70 text-xs md:text-sm uppercase tracking-wider mt-1">
                {s.label}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold">
              <Flame className="w-4 h-4" />
              Our Story
            </div>
            <h2 className="heading-serif text-3xl md:text-4xl text-white">
              From a Single Guru&apos;s Vision to a{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
                Global Spiritual Movement
              </span>
            </h2>
            <p className="text-amber-100/75 leading-relaxed">
              Hamsa Institute was founded in 2010 by a small circle of Vedic
              scholars and tantra masters with a simple conviction — that
              ancient occult sciences must be preserved, taught with integrity,
              and made accessible to anyone willing to walk the path.
            </p>
            <p className="text-amber-100/70 leading-relaxed">
              What began as 12 students in a Delhi ashram has grown into a
              global academy with sadhaks across 50+ countries. Through livestream
              classrooms, recorded diplomas, and intensive Sadhana retreats, we
              now train tomorrow&apos;s tarot readers, astrologers, healers, and
              spiritual counsellors.
            </p>
            <p className="text-amber-100/70 leading-relaxed">
              The name <em className="text-amber-300">Hamsa</em> — the celestial
              swan that separates milk from water — reflects our promise:
              authentic teaching, free from distortion.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl shadow-amber-900/40 aspect-square bg-gradient-to-br from-amber-950 via-orange-950 to-slate-950">
              <img
                src="/images/logo.png"
                alt="HIOS Logo"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <p className="heading-serif text-amber-100 text-xl md:text-2xl tracking-widest">
                  DISCOVER • LEARN • TRANSFORM
                </p>
              </div>
            </div>
            <div className="absolute -inset-4 -z-10 bg-gradient-to-br from-amber-500/25 via-orange-500/10 to-transparent rounded-3xl blur-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-amber-500/25 bg-amber-950/15 backdrop-blur-md p-7 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-600/40">
                <Target className="w-6 h-6 text-slate-950" />
              </div>
              <h3 className="heading-serif text-2xl md:text-3xl text-white">
                Our Mission
              </h3>
            </div>
            <p className="text-amber-100/75 leading-relaxed">
              To preserve, teach, and democratise the ancient occult sciences of
              India — astrology, tarot, healing, numerology, and tantra — through
              authentic, certified programmes accessible to seekers worldwide.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-amber-500/25 bg-amber-950/15 backdrop-blur-md p-7 md:p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-600/40">
                <Eye className="w-6 h-6 text-slate-950" />
              </div>
              <h3 className="heading-serif text-2xl md:text-3xl text-white">
                Our Vision
              </h3>
            </div>
            <p className="text-amber-100/75 leading-relaxed">
              A world where every soul has access to the sacred technologies of
              the rishis — empowered to heal themselves, guide others, and live
              in conscious alignment with the cosmos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Founder section */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl shadow-amber-900/40 aspect-[4/5] bg-gradient-to-br from-amber-950 via-orange-950 to-slate-950">
              <img
                src="/images/faculty1.png"
                alt="Guruma Kiran Khullar"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-amber-300 text-xs uppercase tracking-widest font-semibold mb-1">
                  Director &amp; Head Acharya
                </p>
                <p className="heading-serif text-amber-50 text-2xl">
                  Guruma Kiran Khullar
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5"
          >
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold">
              <Quote className="w-4 h-4" />
              From the Co-Founder
            </div>
            <h2 className="heading-serif text-3xl md:text-4xl text-white">
              &ldquo;The cosmos isn&apos;t out there. It&apos;s within you,
              waiting to be{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
                remembered.
              </span>
              &rdquo;
            </h2>
            <p className="text-amber-100/75 leading-relaxed">
              For over 30 years, Guruma Kiaran Khullar has trained sadhaks in
              Vedic astrology, Hypnosis, and the science of consciousness. A
              published author of seven books on Indian metaphysics, his mission
              is to revive the lost art of self-knowledge through the original
              texts.
            </p>
            <p className="text-amber-100/70 leading-relaxed">
              Under her guidance, HIOS faculty includes Vastu masters, KP
              astrologers, certified hypnotherapists, past-life regressionists,
              and crystal healers — each chosen for both lineage and integrity.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-semibold">
                25+ Years Teaching
              </span>
              {/* <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-semibold">
                7 Books Published
              </span> */}
              <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-semibold">
                Featured Globally
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Senior Faculty — Ajay Kumar (Medium & Master level) */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-5 order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold">
              <Sparkles className="w-4 h-4" />
              Senior Faculty
            </div>
            <h2 className="heading-serif text-3xl md:text-4xl text-white">
              Ajay Kumar
            </h2>
            <p className="text-amber-300 heading-serif italic text-lg">
              Senior Astrologer &amp; Mentor — Medium &amp; Master Level Programs
            </p>
            <p className="text-amber-100/75 leading-relaxed">
              With more than 30 years of dedicated practice, Ajay Kumar guides
              our advanced sadhaks through the Medium and Master level courses —
              Vedic Astrology, Akashic Records, Past-Life Regression, and more.
              His depth of experience helps serious learners move from
              foundational understanding to true professional mastery.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-semibold">
                25+ Years Experience
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-semibold">
                Medium &amp; Master Level
              </span>
              <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-semibold">
                Certified Astrologer
              </span>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-2 relative order-1 lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl shadow-amber-900/40 aspect-[4/5] bg-gradient-to-br from-amber-950 via-orange-950 to-slate-950">
              <img
                src="/images/ajay_kumar_astrologer.png"
                alt="Ajay Kumar — Senior Astrologer"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-amber-300 text-xs uppercase tracking-widest font-semibold mb-1">
                  Senior Astrologer
                </p>
                <p className="heading-serif text-amber-50 text-2xl">Ajay Kumar</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
<section className="container mx-auto px-4 md:px-6 mt-20">
  <div className="grid lg:grid-cols-5 gap-8 items-center">
    {/* Founder Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="lg:col-span-2 relative"
    >
      <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl shadow-amber-900/40 aspect-[4/5] bg-gradient-to-br from-amber-950 via-orange-950 to-slate-950">
        <img
          src="/images/GurumaJanviTripathi.jpeg"
          alt="Guruma Janvi Tripathi — Founder and Head Acharya"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-amber-300 text-xs uppercase tracking-widest font-semibold mb-1">
            Founder, Vedic Numerologist &amp; Head Acharya
          </p>

          <p className="heading-serif text-amber-50 text-2xl">
            Guruma Janvi Tripathi
          </p>
        </div>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="lg:col-span-3 space-y-5"
    >
         <div className="inline-flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold">
        <Sparkles className="w-4 h-4" />
        <span>senior, Vedic Numerologist &amp; Head Acharya</span>
      </div>

      <h2 className="heading-serif text-3xl md:text-4xl text-white">
        Guruma Janvi Tripathi
      </h2>

      <p className="text-amber-300 heading-serif italic text-lg">
        Senior Vedic Numerologist, Spiritual Mentor &amp; Numerology Teacher
      </p>

      <p className="text-amber-100/75 leading-relaxed">
        For more than 10 years, Guruma Janvi Tripathi has guided students and
        spiritual seekers in Vedic Numerology, Vedic Astrology, Palmistry and
        the science of consciousness. Her mission is to preserve and share the
        wisdom of ancient Indian knowledge in a practical, ethical and
        accessible way.
      </p>

      <p className="text-amber-100/70 leading-relaxed">
        Under her guidance, the HIOS faculty brings together experienced Vastu
        consultants, KP astrologers, hypnotherapists, past-life regression
        practitioners, tarot readers and crystal healers, each selected for
        their knowledge, experience and integrity.
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-semibold">
          10+ Years of Teaching
        </span>

        <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-semibold">
          Founder &amp; Head Acharya
        </span>

        <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-semibold">
          Global Recognition
        </span>
      </div>
    </motion.div>
  </div>
</section>

<section className="container mx-auto px-4 md:px-6 mt-20">
  <div className="grid lg:grid-cols-5 gap-8 items-center">
    {/* Reader Content */}
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="lg:col-span-3 space-y-5 order-2 lg:order-1"
    >
      <div className="inline-flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold">
        <Sparkles className="w-4 h-4" />
        Senior Angel Card &amp; Tarot Reader
      </div>

      <h2 className="heading-serif text-3xl md:text-4xl text-white">
        Ekta Tripathi
      </h2>

      <p className="text-amber-300 heading-serif italic text-lg">
        Senior Angel Card Reader, Tarot Reader &amp; Spiritual Mentor
      </p>

      <p className="text-amber-100/75 leading-relaxed">
        With more than 10 years of dedicated experience, Ekta Tripathi guides
        students through Angel Card Reading, Tarot Reading and advanced
        spiritual practices. Her intuitive approach, practical teaching style
        and compassionate guidance help learners develop confidence, clarity
        and a deeper understanding of intuitive sciences.
      </p>

      <p className="text-amber-100/70 leading-relaxed">
        She mentors students across advanced-level programs and helps them move
        from foundational learning to professional practice while maintaining
        ethical standards, sensitivity and spiritual discipline.
      </p>

      <div className="flex flex-wrap gap-3 pt-2">
        <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-semibold">
          10+ Years of Experience
        </span>

        <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-semibold">
          Angel Card Reading
        </span>

        <span className="px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-semibold">
          Tarot Reading
        </span>
      </div>
    </motion.div>

    {/* Reader Image */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="lg:col-span-2 relative order-1 lg:order-2"
    >
      <div className="relative rounded-3xl overflow-hidden border-2 border-amber-400/40 shadow-2xl shadow-amber-900/40 aspect-[4/5] bg-gradient-to-br from-amber-950 via-orange-950 to-slate-950">
        <img
          src="/images/ekta.png"
          alt="Ekta Tripathi — Senior Angel Card and Tarot Reader"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-amber-300 text-xs uppercase tracking-widest font-semibold mb-1">
            Senior Angel Card &amp; Tarot Reader
          </p>

          <p className="heading-serif text-amber-50 text-2xl">
            Ekta Tripathi
          </p>
        </div>
      </div>
    </motion.div>
  </div>
</section>


      {/* What sets us apart */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            Why HIOS
          </div>
          <h2 className="heading-serif text-3xl md:text-4xl text-white">
            What Sets{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
              Hamsa Institute
            </span>{" "}
            Apart
          </h2>
          <p className="text-amber-100/60 mt-4 max-w-2xl mx-auto">
            Six reasons why thousands of seekers choose us for their spiritual
            education.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-amber-500/20 bg-amber-950/10 backdrop-blur-md p-6 hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/15 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-4 group-hover:bg-amber-500/30 group-hover:scale-110 transition-all">
                <d.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{d.title}</h3>
              <p className="text-amber-100/60 text-sm leading-relaxed">
                {d.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Core Values */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-3">
            <Heart className="w-4 h-4" />
            Core Principles
          </div>
          <h2 className="heading-serif text-3xl md:text-4xl text-white">
            The Values That Guide Us
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {principles.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-amber-500/25 bg-gradient-to-br from-amber-950/30 via-orange-950/15 to-slate-950/30 backdrop-blur-md p-6 text-center hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/15 transition-all"
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-600/40 mb-4 group-hover:scale-110 transition-transform">
                <p.icon className="w-7 h-7 text-slate-950" />
              </div>
              <h3 className="heading-serif text-xl text-white mb-2">
                {p.title}
              </h3>
              <p className="text-amber-100/60 text-sm leading-relaxed">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-3">
            <Star className="w-4 h-4" fill="currentColor" />
            Sadhak Stories
          </div>
          <h2 className="heading-serif text-3xl md:text-4xl text-white">
            Words from Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
              Global Sangha
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-amber-500/20 bg-amber-950/10 backdrop-blur-md p-6 hover:border-amber-400/50 transition-all"
            >
              <Quote className="w-8 h-8 text-amber-400/60 mb-3" />
              <p className="text-amber-100/85 italic leading-relaxed mb-5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 text-yellow-300"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="text-white font-semibold">{t.name}</p>
              <p className="text-amber-200/60 text-xs">{t.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 md:px-6 mt-20">
        <div className="relative overflow-hidden rounded-3xl border border-amber-500/30 bg-gradient-to-br from-amber-950/40 via-orange-950/30 to-slate-950 backdrop-blur-md p-10 md:p-14 text-center">
          <div className="absolute -top-20 -right-20 w-72 h-72 bg-amber-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-orange-500/15 rounded-full blur-3xl" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="heading-serif text-3xl md:text-5xl text-white mb-4">
              Begin Your{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-300 via-yellow-300 to-orange-400">
                Spiritual Journey
              </span>{" "}
              Today
            </h2>
            <p className="text-amber-100/75 text-base md:text-lg mb-8">
              Join 12,000+ sadhaks across 50+ countries who are walking the path
              of ancient wisdom — guided, certified, and supported every step.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/courses">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-13 px-8 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-bold shadow-lg shadow-amber-600/40 transition-all hover:scale-[1.02]"
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-13 px-8 rounded-full border border-amber-400/50 bg-slate-950/60 hover:bg-amber-950/60 text-amber-100 backdrop-blur-sm transition-all hover:scale-[1.02]"
                >
                  Talk to Counsellor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
