"use client";

import React, { use, useMemo } from "react";
import { courses } from "@/lib/data/courses";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle,
  Clock,
  Globe,
  Shield,
  Zap,
  PlayCircle,
  Lock,
  Info,
  ChevronRight,
  Layout,
} from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function CourseDetailPage({ params }) {
  const resolvedParams = use(params);
  const course = courses.find((c) => c.id === resolvedParams.courseId);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  if (!course) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center text-white">
        <h1 className="text-2xl font-serif font-bold text-orange-400">
          Knowledge Node Not Found
        </h1>
        <Link href="/courses" className="mt-4">
          <Button
            variant="outline"
            className="border-orange-500/50 text-orange-300 hover:bg-orange-900/50"
          >
            Return to Courses
          </Button>
        </Link>
      </div>
    );
  }

  // Access Table Data based on requirements
  const accessTable = [
    { percentage: 0, fee: "0–24%", access: "0% Access", status: "Restricted" },
    {
      percentage: 25,
      fee: "25%",
      access: "20% Access",
      status: "Unlock Phase 1",
    },
    {
      percentage: 50,
      fee: "50%",
      access: "25% Access",
      status: "Unlock Phase 2",
    },
    {
      percentage: 75,
      fee: "75%",
      access: "60% Access",
      status: "Unlock Phase 3",
    },
    {
      percentage: 100,
      fee: "100%",
      access: "100% Full Access",
      status: "Complete Access",
    },
  ];

  const [selectedTier, setSelectedTier] = React.useState(accessTable[1]);

  return (
    <div className="flex flex-col min-h-screen selection:bg-orange-500/30 selection:text-white pb-20 relative font-sans text-slate-200">
      {/* Heritage Header Pattern - Keeping the Vedic accent */}
      <div className="h-1.5 w-full bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500 opacity-80" />

      <div className="container px-4 md:px-6 relative z-10 pt-8">
        <Link
          href="/courses"
          className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-orange-400 mb-8 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />{" "}
          Back to Vedic Sciences
        </Link>

        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="badge-vedic">
              <Layout className="w-3 h-3" /> Ancient Wisdom Program
            </div>

            <h1 className="text-4xl md:text-6xl heading-serif text-white leading-[1.1]">
              {course.title}
            </h1>

            <div className="h-1 w-24 bg-orange-500 rounded-full" />

            <p className="text-xl text-slate-400 leading-relaxed font-light italic">
              {course.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              {[
                {
                  icon: Globe,
                  label: "Live Interactive",
                  color: "bg-blue-900/40 border-blue-800 text-blue-300",
                },
                {
                  icon: Clock,
                  label: `${course.totalLessons} Lessons`,
                  color:
                    "bg-orange-950/40 border-orange-900/50 text-orange-300",
                },
                {
                  icon: Shield,
                  label: "Certificate",
                  color:
                    "bg-emerald-950/40 border-emerald-900/50 text-emerald-300",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 p-3 rounded-lg border ${item.color}`}
                >
                  <item.icon className="w-5 h-5 opacity-70" />
                  <span className="text-xs font-semibold">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center gap-8 border-t border-slate-800">
              <div className="text-center sm:text-left">
                <div className="text-4xl font-serif font-black text-white mb-1">
                  ₹{course.price}
                </div>
                <div className="text-mono-xs text-slate-500">
                  Enrollment Fee
                </div>
              </div>
              <Button size="lg" className="btn-vedic-primary">
                Enroll Now <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Decorative Flourish */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-2xl opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 bg-slate-900">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="object-cover w-full h-[400px] opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent flex items-end p-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-orange-600 shadow-lg flex items-center justify-center font-bold text-white text-xl">
                    {course.instructor.charAt(0)}
                  </div>
                  <div className="text-white">
                    <p className="text-mono-xs text-orange-400 font-bold">
                      Guided By
                    </p>
                    <p className="font-serif font-bold text-xl">
                      {course.instructor}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Section Splitter */}
        <div className="heritage-divider">
          <div className="heritage-divider-symbol">ॐ</div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Learning Outcomes & Curriculum */}
          <div className="lg:col-span-2 space-y-12">
            {/* Learning Outcomes */}
            <section className="glass-panel p-8 rounded-2xl">
              <h2 className="text-2xl heading-serif text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center text-orange-400 border border-orange-500/20">
                  <Zap className="w-4 h-4" />
                </div>
                Learning Manifest
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {course.learningOutcomes?.map((outcome, i) => (
                  <div
                    key={i}
                    className="flex gap-4 p-4 rounded-xl border border-slate-800 hover:bg-slate-800/50 transition-colors group"
                  >
                    <CheckCircle className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1 opacity-70 group-hover:opacity-100 transition-opacity" />
                    <p className="text-sm text-slate-300 leading-relaxed font-medium">
                      {outcome}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Curriculum Overview */}
            <section>
              <div className="flex items-end justify-between mb-8">
                <div>
                  <h2 className="text-2xl heading-serif text-white mb-2">
                    Curriculum Flow
                  </h2>
                  <p className="text-sm text-slate-500">
                    Progressive modules designed for stable learning.
                  </p>
                </div>
                <div className="status-badge status-active">
                  {course.totalLessons} Sessions
                </div>
              </div>

              <div className="space-y-6">
                {course.modules.map((module, mIdx) => (
                  <motion.div
                    key={module.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: mIdx * 0.1 }}
                    className="curriculum-module bg-white/5 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/10
                 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    {/* Module Header */}
                    <div className="curriculum-header flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                      <div className="font-serif font-bold text-slate-100 flex items-center gap-3 text-sm sm:text-base">
                        <span className="text-orange-500">0{mIdx + 1}</span>
                        {module.title}
                      </div>
                      <span className="text-mono-xs text-slate-500 text-xs sm:text-sm mt-1 sm:mt-0">
                        {module.lessons.length} Units
                      </span>
                    </div>

                    {/* Lessons */}
                    <div className="divide-y divide-slate-800">
                      {module.lessons.map((lesson) => (
                        <div
                          key={lesson.id}
                          className="curriculum-lesson flex flex-col sm:flex-row sm:justify-between sm:items-center py-3 px-2 sm:px-4
                       transition-all duration-200 hover:bg-white/5 rounded-lg"
                        >
                          <div className="flex items-center gap-4">
                            <div
                              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs border 
                            ${lesson.isFree ? "border-green-400 text-green-400" : "border-slate-700 text-slate-500"}`}
                            >
                              {lesson.isFree ? (
                                <PlayCircle className="w-4 h-4" />
                              ) : (
                                <Lock className="w-4 h-4 opacity-50" />
                              )}
                            </div>
                            <span
                              className={`text-sm ${lesson.isFree ? "font-bold text-slate-100" : "text-slate-500"}`}
                            >
                              {lesson.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-4 mt-2 sm:mt-0">
                            {lesson.isFree && (
                              <span className="status-badge bg-green-500/20 text-green-400 px-2 py-0.5 rounded-full text-xs font-mono">
                                Preview
                              </span>
                            )}
                            <span className="text-xs text-slate-500 font-mono tracking-tighter">
                              {lesson.duration}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Fee Structure & Access Rules Table */}
          <div className="space-y-8">
            {/* Progressive Access Table */}
            <section className="sticky top-24 glass-panel p-6 overflow-hidden rounded-2xl">
              {/* Accent Glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-orange-600/20 blur-2xl rounded-full" />

              <div className="flex items-center gap-3 mb-6 relative">
                <Info className="w-5 h-5 text-orange-500" />
                <h3 className="font-serif font-bold text-white">
                  Progressive Unlocking
                </h3>
              </div>

              <p className="text-xs text-slate-400 mb-6 leading-relaxed relative">
                Content access is granted incrementally based on your
                contribution. Configure your learning pace through our flexible
                fee protocol.
              </p>

              {/* Payment Tiers Selector */}
<div className="space-y-6">

  {/* Payment Tier Selector */}
  <div className="space-y-3 relative">
    <p className="text-mono-xs text-slate-500 mb-2">Select Payment Tier</p>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {accessTable
        .filter((t) => t.percentage > 0)
        .map((tier) => (
          <button
            key={tier.percentage}
            onClick={() => setSelectedTier(tier)}
            className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all
                        ${
                          selectedTier.percentage === tier.percentage
                            ? "bg-orange-600 border-orange-500 text-white shadow-lg shadow-orange-600/30 scale-[1.02]"
                            : "bg-white/5 border-white/10 text-slate-400 hover:border-orange-500/50 hover:text-slate-100"
                        }`}
          >
            <div className="flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center
                            ${
                              selectedTier.percentage === tier.percentage
                                ? "border-white"
                                : "border-slate-600"
                            }`}
              >
                {selectedTier.percentage === tier.percentage && (
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                )}
              </div>
              <span className="text-xs font-bold font-mono">{tier.fee}</span>
            </div>
          </button>
        ))}
    </div>
  </div>

  {/* Access Table */}
  <div className="data-table-container relative overflow-x-auto rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-sm">
    <table className="w-full table-auto">
      <thead className="data-table-head">
        <tr className="text-slate-400 text-xs uppercase tracking-wider border-b border-slate-700">
          <th className="data-table-cell px-4 py-2 text-left">Contribution</th>
          <th className="data-table-cell px-4 py-2 text-center">Node Access</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800">
        {accessTable.map((row, i) => (
          <tr
            key={i}
            className={`transition-colors duration-200 ${
              selectedTier.percentage === row.percentage
                ? "bg-orange-600/10"
                : "text-slate-400 hover:bg-white/5"
            }`}
          >
            <td className="data-table-cell px-4 py-2">{row.fee}</td>
            <td className="data-table-cell px-4 py-2 text-center">
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-mono ${
                  selectedTier.percentage === row.percentage
                    ? "bg-orange-500/20 text-orange-400"
                    : "bg-slate-700/20 text-slate-400"
                }`}
              >
                {row.access.split(" ")[0]}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>

  {/* Initialize Section */}
  <div className="space-y-4 pt-6 border-t border-slate-800 relative">
    <div className="flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 font-bold shrink-0 border border-orange-500/20">
        {selectedTier.percentage}%
      </div>
      <p className="text-[10px] sm:text-xs text-slate-400 italic leading-snug">
        Initialize {selectedTier.access} with a {selectedTier.fee} data contribution.
      </p>
    </div>

    <Button className="w-full sm:w-auto rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold h-14 flex flex-col items-center justify-center border border-white/20 transition-all duration-300">
      <span className="text-mono-xs text-slate-400 mb-0.5">Initialize Transfer</span>
      <span className="text-base">
        Pay Today: ₹
        {Math.ceil(course.price * (selectedTier.percentage / 100))}
      </span>
    </Button>

    <p className="text-center text-[9px] text-slate-600 font-mono">
      HAMSA_SECURE_PROTOCOL_v2.4
    </p>
  </div>
</div>

            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
