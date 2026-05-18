"use client";

import { courses } from "@/lib/data/courses";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Filter, ArrowRight } from "lucide-react";

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

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-blue-500 selection:text-white pb-30">
      <div className="container px-4 md:px-6 relative z-10 pt-8 md:pt-14">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl heading-serif bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300"
          >
            Knowledge Network
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-blue-200/70 text-lg">
            Select a node to begin your data ingestion.
          </motion.p>

          {/* Search/Filter Bar */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-stretch sm:items-center
             gap-3 max-w-md mx-auto mt-6 sm:mt-8 px-4 sm:px-0"
          >
            <div className="search-container flex items-center w-full relative">
              <Search className="search-icon absolute left-3 w-4 h-4 text-blue-300/70" />
              <input
                type="text"
                placeholder="Search modules..."
                className="search-input w-full pl-10 pr-4 py-2.5
                 rounded-xl bg-white/5 border border-blue-500/20
                 text-blue-100 placeholder-blue-300/40
                 focus:outline-none focus:border-blue-400/50
                 focus:ring-2 focus:ring-blue-500/30
                 transition"
              />
            </div>

            <button
              className="btn-control flex items-center justify-center
               w-full sm:w-auto px-4 py-2.5
               rounded-xl border border-blue-500/30
               bg-blue-600/20 hover:bg-blue-600/40
               text-blue-300
               transition-all duration-300"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </button>
          </motion.div>
        </motion.div>

        {/* Course Grid */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {courses.map((course) => (
            <motion.div
              key={course.id}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="glass-card overflow-hidden group relative
                            border border-blue-500/20
                            transition-colors duration-300
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
                    NODE: {course.id.split("-").pop().toUpperCase().slice(0, 4)}
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

                <Link href={`/courses/${course.id}`}>
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
                    View Data <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
