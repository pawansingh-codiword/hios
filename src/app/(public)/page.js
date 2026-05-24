"use client";

import { Button } from "@/components/ui/button";
import { courses } from "@/lib/data/courses";
import Link from "next/link";
import {
  ArrowRight,
  Zap,
  Shield,
  Globe,
  Cpu,
  Server,
  Database,
} from "lucide-react";
import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const countryFlags = [
  { code: "in", label: "India" },
  { code: "us", label: "USA" },
  { code: "ru", label: "Russia" },
  { code: "au", label: "Australia" },
  { code: "cn", label: "China" },
  { code: "ir", label: "Iran" },
  { code: "se", label: "Sweden" },
  { code: "ng", label: "Nigeria" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-slate-950">
      {/* Hero Section with background image */}
      <section className="relative w-full min-h-[calc(100vh-4rem)] overflow-hidden -mt-16 pt-16">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero.png"
            alt="Hamsa Institute of Occult Science"
            className="w-full h-full object-cover object-center brightness-125 contrast-110 saturate-125"
          />
          {/* Warm gradient overlay — keeps content readable, image stays vibrant */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-transparent to-slate-950/80" />
        </div>

        {/* Hero content — positioned upper-left so it doesn't overlap the image's centered title */}
        <div className="relative z-10 container mx-auto px-4 md:px-6 pt-10 md:pt-16 pb-20">
          <motion.div
            className="max-w-xl space-y-6"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-950/40 backdrop-blur-sm px-4 py-1.5 text-sm text-amber-100"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>World&apos;s No. 1 Occult Education Platform</span>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap items-center gap-4"
            >
              <Link href="/courses">
                <Button
                  size="lg"
                  className="h-13 px-7 rounded-full text-base bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-semibold shadow-lg shadow-amber-600/40 transition-all hover:scale-[1.02]"
                >
                  Explore Our Courses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>

              <Link href="/register">
                <Button
                  size="lg"
                  className="h-13 px-7 rounded-full text-base bg-yellow-300 hover:bg-yellow-200 text-slate-950 font-semibold shadow-lg shadow-yellow-400/30 transition-all hover:scale-[1.02]"
                >
                  Get Started
                </Button>
              </Link>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-13 px-7 rounded-full text-base border border-amber-400/50 bg-slate-950/60 hover:bg-amber-950/60 text-amber-100 backdrop-blur-sm transition-all hover:scale-[1.02]"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>

            {/* <motion.div variants={fadeInUp} className="pt-4 space-y-3">
              <p className="text-amber-100/90 text-base md:text-lg font-medium drop-shadow">
                Students from{" "}
                <span className="text-yellow-300 font-semibold">
                  50+ countries
                </span>{" "}
                are learning with us
              </p>
              <div className="flex flex-wrap items-center gap-3">
                {countryFlags.map((flag) => (
                  <div
                    key={flag.code}
                    title={flag.label}
                    className="w-10 h-10 rounded-full border-2 border-amber-400/50 bg-slate-900 overflow-hidden shadow-md shadow-amber-900/40 hover:scale-110 hover:border-yellow-300 transition-all"
                  >
                    <img
                      src={`https://flagcdn.com/w80/${flag.code}.png`}
                      alt={flag.label}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </motion.div> */}
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative z-10 py-24 bg-slate-950/60 backdrop-blur-md border-y border-amber-500/15">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl heading-serif bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 mb-4">
              Our Courses
            </h2>
            <p className="text-amber-100/60 max-w-2xl mx-auto">
              Unlock Your Destiny with Divine Guidance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Past-Life Regression",
                desc: "Your Soul Remembers—Reconnect Through Past Life Regression.",
              },
              {
                icon: Globe,
                title: "Akashic Records",
                desc: "Access the Soul's Library—Unlock Your Akashic Records.",
              },
              {
                icon: Cpu,
                title: "Hypnosis",
                desc: "Where the Subconscious Becomes Your Greatest Strength.",
              },
              {
                icon: Server,
                title: "Tarot Reading",
                desc: "Let the Cards Guide Your Next Move.",
              },
              {
                icon: Database,
                title: "Spell Casting and Healing",
                desc: "Ancient Rituals for Modern Healing and Manifestation.",
              },
              {
                icon: Zap,
                title: "Astrology",
                desc: "Understand Yourself Through the Language of the Universe.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.03 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 300 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl bg-amber-950/10 p-6 border border-amber-500/20 backdrop-blur-md transition-all duration-300 hover:border-amber-400/60 hover:shadow-xl hover:shadow-amber-500/20"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-300 mb-4 group-hover:bg-amber-500/30 transition-colors">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-amber-100/60 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="relative z-10 py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl heading-serif text-white mb-2">
                Available Nodes
              </h2>
              <p className="text-amber-100/60">
                Select a knowledge package to deploy.
              </p>
            </div>
            <Link
              href="/courses"
              className="text-amber-300 hover:text-yellow-200 flex items-center gap-2 font-medium"
            >
              View Full Network <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 3).map((course) => (
              <div
                key={course.id}
                className="overflow-hidden group relative rounded-2xl bg-amber-950/10 border border-amber-500/20 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-500/20"
              >
                <div className="relative h-48">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="h-full w-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="text-[10px] font-mono tracking-wider px-2 py-1 rounded-md bg-amber-950/80 border border-amber-500/40 text-amber-200">
                      NODE: {course.id.toUpperCase().slice(0, 8)}
                    </div>
                  </div>
                </div>

                <div className="relative z-20 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-amber-100/50 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>

                  <div className="flex items-center justify-between border-t border-amber-500/20 pt-4">
                    <div className="text-sm text-amber-100/70">
                      <span className="text-[10px] font-mono tracking-wider opacity-50 block mb-1">
                        Instructor
                      </span>
                      {course.instructor}
                    </div>
                    <div className="text-xl font-mono font-bold text-amber-200">
                      ₹{course.price}
                    </div>
                  </div>

                  <Button className="w-full mt-6 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-semibold shadow-md shadow-amber-600/30 rounded-xl transition-all duration-300">
                    Initialize
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
