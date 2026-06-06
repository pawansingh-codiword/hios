"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, MessageCircle, Users, X, MessagesSquare } from "lucide-react";

const PHONE = "919682930862";
const MESSAGE = "Hi! I'd like to know more about HIOS courses.";
const WHATSAPP_COMMUNITY = "https://chat.whatsapp.com/CuDZVFVw5My75dvz4Twrzy";

const chatHref = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
const callHref = `tel:+${PHONE}`;

const options = [
  {
    label: "Call us",
    href: callHref,
    icon: Phone,
    bg: "bg-amber-500",
    external: false,
  },
  {
    label: "Chat on WhatsApp",
    href: chatHref,
    icon: MessageCircle,
    bg: "bg-[#25D366]",
    external: true,
  },
  {
    label: "Join Community",
    href: WHATSAPP_COMMUNITY,
    icon: Users,
    bg: "bg-purple-600",
    external: true,
  },
];

export function WhatsAppFab() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanding option list */}
      <AnimatePresence>
        {open && (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { transition: { staggerChildren: 0.06 } },
              closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
            }}
            className="flex flex-col items-end gap-3"
          >
            {options.map((opt) => (
              <motion.li
                key={opt.label}
                variants={{
                  open: { opacity: 1, y: 0, scale: 1 },
                  closed: { opacity: 0, y: 12, scale: 0.8 },
                }}
                className="flex items-center gap-3"
              >
                <span className="px-3 py-1.5 rounded-lg bg-slate-950/90 text-amber-100 text-sm font-medium whitespace-nowrap border border-amber-500/30 backdrop-blur-sm shadow-lg">
                  {opt.label}
                </span>
                <a
                  href={opt.href}
                  {...(opt.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  aria-label={opt.label}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-center w-12 h-12 rounded-full ${opt.bg} text-white shadow-lg shadow-black/30 transition-transform hover:scale-110`}
                >
                  <opt.icon className="w-5 h-5" />
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      {/* Main toggle button */}
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close contact options" : "Open contact options"}
        aria-expanded={open}
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#25D366] shadow-xl shadow-green-900/40 hover:shadow-green-500/50 transition-all hover:scale-110"
      >
        {/* Pulsing ring (only when closed) */}
        {!open && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
        )}

        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <X className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="relative"
            >
              <MessagesSquare className="w-7 h-7 md:w-8 md:h-8 text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
