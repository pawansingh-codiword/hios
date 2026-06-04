"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { ContactForm } from "./ContactForm";

const STORAGE_KEY = "hios_lead_shown";
const FIRST_VISIT_DELAY_MS = 4000;

const LeadModalContext = createContext(null);

/**
 * Provides a global lead-capture modal.
 *  - Auto-opens once per visitor a few seconds after first landing.
 *  - Any component can call openLeadModal(courseName?) to open it on demand
 *    (e.g. every "Enroll Now" button).
 */
export function LeadModalProvider({ children }) {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [courseName, setCourseName] = useState("");

  const openLeadModal = useCallback((course = "") => {
    setCourseName(course);
    setOpen(true);
  }, []);

  const closeLeadModal = useCallback(() => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      /* ignore storage errors */
    }
  }, []);

  // First-visit auto-open
  useEffect(() => {
    setMounted(true);

    let alreadyShown = false;
    try {
      alreadyShown = localStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      alreadyShown = false;
    }
    if (alreadyShown) return;

    const timer = setTimeout(() => {
      setCourseName("");
      setOpen(true);
    }, FIRST_VISIT_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <LeadModalContext.Provider value={{ openLeadModal, closeLeadModal }}>
      {children}

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div
                  className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
                  onClick={closeLeadModal}
                />

                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-label="Get course details"
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 20 }}
                  transition={{ type: "spring", stiffness: 300, damping: 26 }}
                  className="relative z-10 w-full max-w-lg max-h-[92vh] overflow-y-auto rounded-2xl border border-amber-500/30 bg-slate-950/95 shadow-2xl shadow-amber-950/50"
                >
                  <button
                    type="button"
                    onClick={closeLeadModal}
                    aria-label="Close"
                    className="absolute top-3 right-3 z-20 p-2 rounded-full text-amber-200/70 hover:text-white hover:bg-white/10 transition"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div className="p-6 md:p-7">
                    <div className="text-center mb-5">
                      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-200 text-xs font-semibold uppercase tracking-wider mb-3">
                        <Sparkles className="w-4 h-4" />
                        Free Counselling
                      </div>
                      <h2 className="heading-serif text-2xl md:text-3xl text-white">
                        {courseName
                          ? `Enroll in ${courseName}`
                          : "Begin Your Spiritual Journey"}
                      </h2>
                      <p className="text-amber-100/60 text-sm mt-2">
                        Share your details and our counsellor will guide you
                        {courseName ? " through enrollment" : " to the right course"} —
                        completely free.
                      </p>
                    </div>

                    <ContactForm
                      courseName={courseName}
                      heading=""
                      subheading=""
                      compact
                      onSuccess={() => {
                        try {
                          localStorage.setItem(STORAGE_KEY, "true");
                        } catch {
                          /* ignore */
                        }
                      }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const ctx = useContext(LeadModalContext);
  if (!ctx) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return ctx;
}
