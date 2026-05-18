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
import { CourseCard } from "@/components/course/CourseCard";
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-blue-500 selection:text-white">
      {/* Hero Section */}
      <section className="relative z-10 pt-24 pb-32 md:pt-32 lg:pt-48 mt-[-9rem]">
        <div className="container px-4 md:px-6 mx-auto">
          <motion.div
            className="text-center max-w-4xl mx-auto space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="hero-badge">
              <Zap className="w-4 h-4 text-y-400" />
              <span>Next-Gen Education Platform</span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-5xl md:text-7xl heading-serif bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300"
            >
              Hamsa Institute <br />
              <span className="text-4xl md:text-6xl font-light text-blue-200">
                of Occult Science
              </span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-xl text-blue-100/70 max-w-2xl mx-auto leading-relaxed"
            >
              Deploy your potential with our high-performance partial-payment
              architecture. The most scalable way to learn complex sciences.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
            >
              <Link href="/courses">
                <Button
                  size="lg"
                  className="btn-vedic-primary bg-blue-600 hover:bg-blue-500 shadow-blue-600/25"
                >
                  Start Learning
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 rounded-full border-blue-500/30 bg-blue-950/30 hover:bg-blue-900/50 text-blue-100 text-lg backdrop-blur-sm"
                >
                  System Architecture
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hosting-Style Features Grid */}
      <section className="relative z-10 py-24 bg-slate-950/50 backdrop-blur-md border-y border-blue-500/10">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl heading-serif bg-clip-text text-transparent bg-gradient-to-b from-white to-blue-200 mb-4">
              Our Courses
            </h2>
            <p className="text-blue-200/60 max-w-2xl mx-auto">
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
                desc: "Access the Soul’s Library—Unlock Your Akashic Records.",
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
                className="feature-card group relative rounded-2xl bg-white/5 p-6 
             border border-white/10 backdrop-blur-md
             transition-all duration-300
             hover:border-blue-400/50 hover:shadow-xl hover:shadow-blue-500/20"
              >
                <div className="feature-icon-container">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-blue-200/50 leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Plans / Courses */}
      <section className="relative z-10 py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl heading-serif text-white mb-2">
                Available Nodes
              </h2>
              <p className="text-blue-200/60">
                Select a knowledge package to deploy.
              </p>
            </div>
            <Link
              href="/courses"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-2 font-medium"
            >
              View Full Network <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.slice(0, 3).map((course) => (
              <div
                key={course.id}
                className="glass-card overflow-hidden group relative
             border border-blue-500/20
             transition-all duration-300 ease-out
             hover:-translate-y-2 hover:scale-[1.02]
             hover:border-blue-500/50
             hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div className="relative h-48">
                  {/* Tech Overlay for Card */}
                  <div className="tech-overlay" />
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="h-full w-full object-cover
             opacity-60 group-hover:opacity-80
             group-hover:scale-105
             transition-all duration-500"
                  />

                  <div className="absolute top-4 left-4 z-20">
                    <div className="node-badge">
                      NODE: {course.id.toUpperCase().slice(0, 8)}
                    </div>
                  </div>
                </div>

                <div className="relative z-20 p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-blue-200/50 text-sm mb-4 line-clamp-2">
                    {course.description}
                  </p>  

                  <div className="flex items-center justify-between border-t border-blue-500/20 pt-4">
                    <div className="text-sm text-blue-200/70">
                      <span className="text-mono-xs opacity-50 block mb-1">
                        Instructor
                      </span>
                      {course.instructor}
                    </div>
                    <div className="text-xl font-mono font-bold text-white">
                      ₹{course.price}
                    </div>
                  </div>

                  <Button
                    className="w-full mt-6
                          bg-blue-600/20
                          hover:bg-blue-600/40
                          hover:shadow-lg hover:shadow-blue-500/30
                          text-blue-300
                          border border-blue-500/30
                          rounded-xl
                          transition-all duration-300"
                  >
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
