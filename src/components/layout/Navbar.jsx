"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Courses",
    href: "/courses",
    children: [
      { name: "Tarot Reading", href: "/courses/tarot-reading" },
      { name: "Vedic Astrology", href: "/courses/vedic-astrology" },
      { name: "Past-Life Regression", href: "/courses/past-life-regression" },
      { name: "Akashic Records", href: "/courses/akashic-records" },
      { name: "Hypnosis", href: "/courses/hypnosis" },
      { name: "Spell Casting & Healing", href: "/courses/spell-casting-healing" },
    ],
  },

  { name: "Contact Us", href: "/contact" },
  { name: "Free Master Class", href: "/master-class", highlight: true },
  { name: "Sadhana", href: "/sadhana" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-amber-500/15 bg-slate-950/70 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/50 transition-colors">
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 px-4 py-3">
        {/* Top row: Logo + Mobile toggle */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 group"
            aria-label="Hamsa Institute home"
          >
            <div className="relative w-12 h-12 lg:w-14 lg:h-14 rounded-full overflow-hidden border border-amber-400/40 shadow-md shadow-amber-900/40 group-hover:shadow-amber-500/60 transition-shadow">
              <img
                src="/images/logo.png"
                alt="Hamsa Institute of Occult Science"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-sm font-semibold text-white tracking-wide">
                HAMSA INSTITUTE
              </span>
              <span className="text-[10px] text-amber-300/90 tracking-[0.2em]">
                OF OCCULT SCIENCE
              </span>
            </div>
          </Link>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 rounded hover:bg-white/10 transition"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-wrap items-center gap-x-5 gap-y-2 ml-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const hasChildren = item.children && item.children.length > 0;

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => hasChildren && setOpenDropdown(item.name)}
                onMouseLeave={() => hasChildren && setOpenDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 text-[13px] font-semibold uppercase tracking-wide transition-colors",
                    item.highlight
                      ? "text-yellow-300 hover:text-yellow-200"
                      : isActive
                      ? "text-amber-300"
                      : "text-slate-200 hover:text-amber-300"
                  )}
                >
                  {item.name}
                  {hasChildren && <ChevronDown className="w-3.5 h-3.5" />}
                </Link>

                {/* Dropdown */}
                {hasChildren && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-0 pt-3 min-w-[220px] z-50"
                      >
                        <div className="rounded-xl border border-amber-500/25 bg-slate-950/95 backdrop-blur-md shadow-xl shadow-amber-950/40 overflow-hidden">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-slate-200 hover:bg-amber-600/20 hover:text-amber-200 transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden border-t border-amber-500/15 bg-slate-950/80 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const hasChildren = item.children && item.children.length > 0;
                const isExpanded = openDropdown === item.name;

                return (
                  <div key={item.href} className="border-b border-amber-500/15 last:border-0">
                    <div className="flex items-center justify-between">
                      <Link
                        href={item.href}
                        className={cn(
                          "flex-1 py-3 text-sm font-semibold uppercase tracking-wide transition-colors",
                          item.highlight
                            ? "text-yellow-300"
                            : isActive
                            ? "text-amber-300"
                            : "text-slate-200"
                        )}
                        onClick={() => !hasChildren && setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {hasChildren && (
                        <button
                          onClick={() =>
                            setOpenDropdown(isExpanded ? null : item.name)
                          }
                          className="p-2"
                          aria-label={`Toggle ${item.name}`}
                        >
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 text-slate-400 transition-transform",
                              isExpanded && "rotate-180"
                            )}
                          />
                        </button>
                      )}
                    </div>
                    {hasChildren && isExpanded && (
                      <div className="pb-2 pl-4 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="py-2 text-sm text-slate-300 hover:text-amber-300 transition-colors"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
