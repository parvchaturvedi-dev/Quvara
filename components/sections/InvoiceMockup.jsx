"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const base = [52, 68, 40, 46, 74, 100, 60];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

const legend = [
  { label: "Completed", shade: "#0a0a0a" },
  { label: "Paid", shade: "#8a8a8a" },
  { label: "Pending", shade: "#cccccc" },
];

/**
 * Monochrome mockup echoing the real InvoiceIQ dashboard.
 * Bars and the headline value fluctuate on a loop for a live feel.
 * `contentRef` lets a parent fade the inner content during the zoom scene.
 */
export default function InvoiceMockup({ contentRef }) {
  const [heights, setHeights] = useState(base);
  const [value, setValue] = useState(21.8);

  useEffect(() => {
    const id = setInterval(() => {
      setHeights(base.map((b) => {
        const delta = (Math.random() * 2 - 1) * 12;
        return Math.round(Math.max(22, Math.min(100, b + delta)));
      }));
      setValue(Math.round((21.8 + (Math.random() * 2 - 1) * 0.6) * 10) / 10);
    }, 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="rounded-2xl border border-line bg-paper p-5 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.35)] sm:p-6">
      <div ref={contentRef}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg viewBox="0 0 64 64" className="h-7 w-7" aria-hidden>
              <rect width="64" height="64" rx="16" fill="#0a0a0a" />
              <circle cx="29" cy="28" r="12.5" fill="none" stroke="#fff" strokeWidth="5" />
              <circle cx="41" cy="40" r="5.5" fill="#fff" />
            </svg>
            <span className="font-display text-sm font-semibold text-ink">
              InvoiceIQ
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-1.5 text-xs text-muted">
            <Download className="h-3.5 w-3.5" />
            Export
          </span>
        </div>

        <div className="mt-6">
          <p className="text-xs text-faint">Annual Processed Value</p>
          <p className="mt-1 font-display text-3xl font-bold tracking-tight text-ink tabular-nums">
            ₹{value.toFixed(1)}L
          </p>
          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
            {legend.map((l) => (
              <span key={l.label} className="flex items-center gap-1.5 text-xs text-muted">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: l.shade }}
                />
                {l.label}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6 flex h-40 items-end gap-2 sm:gap-3">
          {months.map((m, i) => (
            <div key={m} className="flex flex-1 flex-col items-center gap-2">
              <div className="flex h-40 w-full items-end">
                <motion.div
                  className="relative w-full overflow-hidden rounded-md bg-ink"
                  initial={{ height: 0 }}
                  animate={{ height: `${heights[i]}%` }}
                  transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="absolute inset-x-0 top-0 h-2/5 bg-[#c9c9c9]" />
                  <span className="absolute inset-x-0 top-2/5 h-[3px] bg-[#8a8a8a]" />
                </motion.div>
              </div>
              <span className="text-[10px] text-faint">{m}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
