"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Check } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Typewriter from "@/components/ui/Typewriter";
import { services } from "@/lib/siteData";

export default function Services() {
  const gridRef = useRef(null);
  // fires once when the row of cards scrolls into view — all three sync off this
  // once:false → typing replays each time the row re-enters the viewport
  const inView = useInView(gridRef, { amount: 0.3 });

  return (
    <Section id="services">
      <SectionHeader
        eyebrow="What we do"
        title="Three capabilities, one seamless system"
        subtitle="We don't just install software. We implement ERP, wire in autonomous AI, and support it end-to-end on Oracle APEX."
      />

      <div ref={gridRef} className="mt-14 grid gap-5 md:grid-cols-3">
        {services.map((s, i) => (
          <div
            key={s.id}
            className="group h-full rounded-2xl border border-line bg-paper p-7 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-[0_18px_50px_-24px_rgba(0,0,0,0.25)]"
          >
            <span
              className={`font-mono text-xs text-faint transition-opacity duration-500 ${
                inView ? "opacity-100" : "opacity-0"
              }`}
            >
              0{i + 1}
            </span>

            <h3 className="mt-4 min-h-[1.75rem] font-display text-xl font-semibold text-ink">
              <Typewriter text={s.title} start={inView} startDelay={450} speed={42} />
            </h3>

            <div
              className={`transition-all duration-700 delay-[1000ms] ${
                inView ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
              }`}
            >
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {s.summary}
              </p>
              <ul className="mt-6 space-y-2.5 border-t border-line pt-5">
                {s.points.map((p) => (
                  <li
                    key={p}
                    className="flex items-center gap-2.5 text-sm text-ink"
                  >
                    <Check className="h-4 w-4 shrink-0 text-ink" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
