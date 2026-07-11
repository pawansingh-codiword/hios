"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Accessible FAQ accordion + FAQPage JSON-LD for rich results.
 * Props: items = [{ q, a }], heading?
 */
export function FAQ({ items = [], heading = "Frequently Asked Questions" }) {
  const [open, setOpen] = useState(0);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="container mx-auto px-4 md:px-6 mt-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 text-amber-300 text-xs uppercase tracking-widest font-semibold mb-3">
            <Sparkles className="w-4 h-4" />
            FAQs
          </div>
          <h2 className="heading-serif text-3xl md:text-4xl text-white">{heading}</h2>
        </div>

        <div className="space-y-3">
          {items.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={faq.q}
                className="rounded-xl border border-amber-500/20 bg-amber-950/10 backdrop-blur-md overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-3 p-5 text-left"
                >
                  <span className="text-white font-semibold">{faq.q}</span>
                  <ChevronDown
                    className={cn("w-5 h-5 text-amber-300 shrink-0 transition-transform", isOpen && "rotate-180")}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-amber-100/70 leading-relaxed">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
