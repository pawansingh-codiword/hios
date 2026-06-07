"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { ContactForm } from "@/components/forms/ContactForm";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.06 },
  },
};

const filters = ["ALL", "MASTER", "MEDIUM", "BEGINNER", "EARLY ENTHUSIAST"];

const courseList = [
  {
    id: "tarot-reading",
    title: "Tarot Reading",
    level: "MEDIUM",
    tag: "DIPLOMA",
    image: "/images/tarot.png",
    description:
      "Tarot Card Reading helps you to discover deep insightful readings.",
  },
  {
    id: "vedic-astrology",
    title: "Vedic Astrology",
    level: "MASTER",
    tag: "DIPLOMA",
    image: "/images/Astrology.png",
    description:
      "Navagrahas and planetary positions create destiny — decode the cosmic blueprint.",
  },
  {
    id: "vastu-shastra",
    title: "Vastu Shastra",
    level: "MEDIUM",
    tag: "DIPLOMA",
    image: "/images/vastu.png",
    description:
      "Align your spaces with the five elements for harmony, health, and prosperity.",
  },
  {
    id: "vedic-numerology",
    title: "Vedic Numerology",
    level: "BEGINNER",
    tag: "DIPLOMA",
    image: "/images/Numerology.png",
    description:
      "Reveal the science of numbers and how they shape personal destiny.",
  },
  {
    id: "spell-casting-healing",
    title: "Spell Casting & Healing",
    level: "MEDIUM",
    tag: "DIPLOMA",
    image: "/images/spell.png",
    description:
      "Sacred rituals and intention-based healing from ancient traditions.",
  },
  {
    id: "akashic-records",
    title: "Akashic Records",
    level: "MASTER",
    tag: "DIPLOMA",
    image: "/images/akashic.png",
    description:
      "Access the cosmic library of your soul's journey across lifetimes.",
  },
  {
    id: "past-life-regression",
    title: "Past Life Regression",
    level: "MASTER",
    tag: "DIPLOMA",
    image: "/images/PastLifeRegrassion.png",
    description:
      "Guided journey into past lives to heal patterns in this lifetime.",
  },
  {
    id: "hypnosis",
    title: "Hypnosis",
    level: "MEDIUM",
    tag: "DIPLOMA",
    image: "/images/hypnosis.png",
    description:
      "Harness the subconscious mind to change beliefs and behaviours.",
  },
  {
    id: "advanced-predictive-astrology",
    title: "Advanced Predictive Astrology",
    level: "MASTER",
    tag: "DIPLOMA",
    image: "/images/Astrology.png",
    description:
      "Medium-to-Master level mastery of prediction, KP system & professional practice — guided by Ajay Kumar.",
  },
];

export default function CoursesPage() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filteredCourses =
    activeFilter === "ALL"
      ? courseList
      : courseList.filter((c) => c.level === activeFilter);

  return (
    <div className="flex flex-col min-h-screen selection:bg-amber-500 selection:text-slate-950 pb-24">
      {/* Header banner */}
      <section className="relative pt-10 pb-8 border-b border-amber-500/15">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-xs md:text-sm tracking-[0.3em] text-amber-300/80 uppercase mb-3">
            World&apos;s No. 1 Occult Science Institute
          </p>
          <h1 className="heading-serif text-3xl md:text-5xl text-white">
            Courses Offered by{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
              Hamsa Institute of Occult Science
            </span>
          </h1>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="container mx-auto px-4 md:px-6 mt-8">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={cn(
                "px-4 md:px-5 py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide transition-all",
                activeFilter === f
                  ? "bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow-lg shadow-amber-600/30"
                  : "bg-amber-950/20 text-amber-100/70 border border-amber-500/20 hover:bg-amber-600/20 hover:text-amber-100"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      {/* Course Grid */}
      <section className="container mx-auto px-4 md:px-6 mt-10">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          key={activeFilter}
        >
          {filteredCourses.map((course) => (
            <motion.div
              key={course.id}
              variants={fadeInUp}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="group relative rounded-2xl overflow-hidden border border-amber-500/20 bg-amber-950/10 backdrop-blur-md hover:border-amber-400/60 hover:shadow-2xl hover:shadow-amber-500/20 transition-all"
            >
              {/* Image header with title overlay */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                {/* warm overlay tint */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-amber-950/20 to-slate-950/80" />

                {/* Top badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-20">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 shadow">
                    {course.tag}
                  </span>
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-wider bg-yellow-300 text-slate-950 shadow">
                    {course.level}
                  </span>
                </div>

                {/* Centered title */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                  <h3 className="heading-serif text-3xl md:text-4xl text-amber-50 drop-shadow-lg leading-tight uppercase">
                    {/* {course.title} */}
                  </h3>
                  <span className="mt-2 text-xs tracking-[0.25em] text-yellow-200/90 uppercase">
                    ✦ Diploma ✦
                  </span>
                </div>
              </div>

              {/* Card body */}
              <div className="bg-amber-950/20 backdrop-blur-sm p-5 border-t border-amber-500/15">
                <h4 className="text-lg font-semibold text-white text-center mb-2">
                  {course.title}
                </h4>
                <p className="text-sm text-amber-100/60 text-center leading-relaxed mb-5 min-h-[3rem]">
                  {course.description}
                </p>
                <Link href={`/courses/${course.id}`} className="block">
                  <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-semibold rounded-xl transition-all">
                    Course Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Lead capture form */}
      <section className="container mx-auto px-4 md:px-6 mt-24">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="heading-serif text-2xl md:text-4xl text-white mb-3">
              Transform Your Life with{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400">
                Sacred Knowledge
              </span>{" "}
              at HIOS
            </h2>
            <p className="text-amber-100/60 text-sm md:text-base">
              Fill in your details and our counsellor will reach out to guide
              your spiritual journey.
            </p>
          </div>

          <ContactForm
            heading=""
            subheading=""
            className="border-amber-500/20"
          />
        </div>
      </section>
    </div>
  );
}
