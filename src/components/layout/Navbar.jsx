"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GraduationCap, Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
];

export function Navbar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
      <header className="sticky top-0 z-50 w-full border-b border-blue-500/10 bg-slate-950/40 backdrop-blur-md supports-[backdrop-filter]:bg-slate-950/20 transition-colors">
  <div className="container mx-auto flex h-16 items-center justify-between px-4">
    
    {/* Logo */}
    <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white hover:text-blue-400 transition-colors">
      <GraduationCap className="h-6 w-6 text-blue-500" />
      <span>Hamsa Institute</span>
    </Link>

    {/* Desktop Nav */}
    <nav className="hidden md:flex items-center gap-6">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "text-sm font-medium transition-colors hover:text-blue-400",
            pathname === item.href ? "text-blue-400" : "text-slate-400"
          )}
        >
          {item.name}
        </Link>
      ))}
      <div className="flex items-center gap-2 ml-4">
        <Link href="/login">
          <Button variant="ghost" size="sm">Log In</Button>
        </Link>
        <Link href="/register">
          <Button size="sm">Get Started</Button>
        </Link>
      </div>
    </nav>

    {/* Mobile Menu Toggle */}
    <button
      className="md:hidden p-2 rounded hover:bg-white/10 transition"
      onClick={() => setIsOpen(!isOpen)}
      aria-label="Toggle menu"
    >
      {isOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
    </button>
  </div>

  {/* Mobile Nav */}
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "auto", opacity: 1 }}
        exit={{ height: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="md:hidden border-t border-blue-500/10 bg-slate-950/60 backdrop-blur-md"
      >
        <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-blue-400",
                pathname === item.href ? "text-blue-400" : "text-slate-400"
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="flex flex-col gap-2 mt-2">
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">Log In</Button>
            </Link>
            <Link href="/register" onClick={() => setIsOpen(false)}>
              <Button className="w-full justify-start">Get Started</Button>
            </Link>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
</header>

    );
}
