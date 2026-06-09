"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search, Check } from "lucide-react";
import { cn } from "@/lib/utils";

/** Themed text/number/date input with label + error. */
export function Field({ label, name, type = "text", error, ...rest }) {
  return (
    <div className="flex flex-col gap-1.5" data-error={!!error}>
      {label && (
        <label
          htmlFor={name}
          className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold"
        >
          {label}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        {...rest}
        className={cn(
          "w-full rounded-xl bg-slate-950/60 border text-amber-50 placeholder-amber-200/30 px-4 py-2.5 focus:outline-none focus:ring-2 transition",
          error
            ? "border-red-500/60 focus:border-red-400/60 focus:ring-red-500/30"
            : "border-amber-500/20 focus:border-amber-400/60 focus:ring-amber-500/30"
        )}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

/** Themed textarea with label + error. */
export function TextArea({ label, name, error, rows = 4, ...rest }) {
  return (
    <div className="flex flex-col gap-1.5" data-error={!!error}>
      {label && (
        <label
          htmlFor={name}
          className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold"
        >
          {label}
        </label>
      )}
      <textarea
        id={name}
        name={name}
        rows={rows}
        {...rest}
        className={cn(
          "w-full rounded-xl bg-slate-950/60 border text-amber-50 placeholder-amber-200/30 px-4 py-3 focus:outline-none focus:ring-2 transition resize-none",
          error
            ? "border-red-500/60 focus:ring-red-500/30"
            : "border-amber-500/20 focus:border-amber-400/60 focus:ring-amber-500/30"
        )}
      />
      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}

/**
 * Themed, searchable single-select dropdown.
 * Shows a search box + scrollable list (~5 rows visible).
 * Props: label, error, placeholder, disabled, value, onChange(value), options [{value,label}]
 */
export function SearchableSelect({
  label,
  error,
  placeholder = "Select",
  disabled = false,
  value,
  onChange,
  options = [],
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useRef(null);

  const selected = options.find((o) => o.value === value);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return options;
    return options.filter((o) => o.label.toLowerCase().includes(q));
  }, [query, options]);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
        setQuery("");
      }
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const choose = (val) => {
    onChange(val);
    setOpen(false);
    setQuery("");
  };

  return (
    <div className="flex flex-col gap-1.5" data-error={!!error} ref={ref}>
      {label && (
        <label className="text-xs uppercase tracking-wider text-amber-200/70 font-semibold">
          {label}
        </label>
      )}

      <div className="relative">
        <button
          type="button"
          disabled={disabled}
          onClick={() => !disabled && setOpen((o) => !o)}
          className={cn(
            "w-full flex items-center justify-between gap-2 rounded-xl bg-slate-950/60 border px-4 py-2.5 text-left transition focus:outline-none focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed",
            error
              ? "border-red-500/60 focus:ring-red-500/30"
              : "border-amber-500/20 focus:border-amber-400/60 focus:ring-amber-500/30"
          )}
        >
          <span className={cn(selected ? "text-amber-50" : "text-amber-200/30")}>
            {selected ? selected.label : placeholder}
          </span>
          <ChevronDown
            className={cn(
              "w-4 h-4 text-amber-300/70 shrink-0 transition-transform",
              open && "rotate-180"
            )}
          />
        </button>

        {open && (
          <div className="absolute z-30 mt-2 w-full rounded-xl border border-amber-500/30 bg-slate-950/95 backdrop-blur-md shadow-xl shadow-amber-950/40 overflow-hidden">
            <div className="flex items-center gap-2 px-3 py-2 border-b border-amber-500/20">
              <Search className="w-4 h-4 text-amber-300/60 shrink-0" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                className="w-full bg-transparent text-amber-50 placeholder-amber-200/30 text-sm focus:outline-none"
              />
            </div>

            <ul className="max-h-[200px] overflow-y-auto themed-scroll py-1">
              {filtered.length === 0 ? (
                <li className="px-4 py-3 text-sm text-amber-200/40">No results</li>
              ) : (
                filtered.map((o) => (
                  <li key={o.value}>
                    <button
                      type="button"
                      onClick={() => choose(o.value)}
                      className={cn(
                        "w-full flex items-center justify-between gap-2 px-4 py-2 text-sm text-left transition-colors",
                        o.value === value
                          ? "bg-amber-600/20 text-amber-100"
                          : "text-amber-100/80 hover:bg-amber-600/15 hover:text-amber-100"
                      )}
                    >
                      {o.label}
                      {o.value === value && (
                        <Check className="w-4 h-4 text-amber-300 shrink-0" />
                      )}
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>

      {error && <p className="text-xs text-red-400">{error}</p>}
    </div>
  );
}
