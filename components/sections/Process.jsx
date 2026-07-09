"use client";

import { useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import Reveal from "@/components/ui/Reveal";
import { processTracks } from "@/lib/siteData";

// Circuit geometry (SVG user units)
const COLS = [300, 480, 660, 840];
const ROWS = [90, 220, 350];
const R = 22;
const IN = { x: 100, y: 220 };
const OUT = { x: 940, y: 220 };
const VBW = 1040;
const VBH = 432;

const INK = "var(--color-ink, #0a0a0a)";
const LINE = "var(--color-line-strong, #d4d4d4)";
const MUTED = "var(--color-muted, #6b6b6b)";
const FAINT = "var(--color-faint, #a3a3a3)";
const PAPER = "var(--color-paper, #ffffff)";

// full input → track → output route (used for the base trace + flowing current)
const rowPath = (ry) => `M126 220 H200 V${ry} H860 V220 H914`;

// vertical connector with flowing current — used in the mobile layout
function VConnector({ reduce }) {
  return (
    <div className="mx-auto h-8 w-2">
      <svg viewBox="0 0 8 32" preserveAspectRatio="none" className="h-full w-full" aria-hidden>
        <line x1="4" y1="0" x2="4" y2="32" stroke={LINE} strokeWidth="2.5" />
        {!reduce && (
          <line
            x1="4"
            y1="0"
            x2="4"
            y2="32"
            stroke={INK}
            strokeWidth="2.5"
            className="circuit-flow"
          />
        )}
      </svg>
    </div>
  );
}

export default function Process() {
  const reduce = useReducedMotion();

  return (
    <Section id="process" bg="mist">
      <SectionHeader
        eyebrow="How we work"
        title="From discovery to done — and beyond"
        subtitle="Three interconnected tracks — process, data, and platform — run as one circuit, from your first input to a live, AI-native system."
      />

      <Reveal>
        {/* Desktop: horizontal circuit */}
        <div className="mt-14 hidden lg:block">
          <svg
            viewBox={`0 0 ${VBW} ${VBH}`}
            className="w-full"
            role="img"
            aria-label="Circuit diagram: an input branches into three interrelated tracks — process, data, and platform — each with four stages, converging into a live AI-ERP output."
          >
            {/* vertical cross-links = the three tracks are interrelated */}
            {COLS.map((cx) => (
              <path
                key={`x-${cx}`}
                d={`M${cx} ${ROWS[0] + R} V${ROWS[2] - R}`}
                fill="none"
                stroke={FAINT}
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
            ))}

            {/* base traces + flowing current per track */}
            {ROWS.map((ry, ri) => {
              const d = rowPath(ry);
              return (
                <g key={`trace-${ri}`}>
                  <path d={d} fill="none" stroke={LINE} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={d} fill="none" stroke={INK} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="circuit-flow" />
                  {[390, 570, 750].map((vx) => (
                    <circle key={vx} cx={vx} cy={ry} r="3" fill={MUTED} />
                  ))}
                </g>
              );
            })}

            {/* nodes + labels */}
            {processTracks.map((track, ri) => {
              const ry = ROWS[ri];
              return (
                <g key={`track-${ri}`}>
                  <text
                    x={COLS[0]}
                    y={ry - R - 15}
                    textAnchor="middle"
                    fontSize="11"
                    fontWeight="500"
                    fill={FAINT}
                    style={{ letterSpacing: "1.5px" }}
                  >
                    {track.label.toUpperCase()}
                  </text>
                  {track.stages.map((s, ci) => {
                    const cx = COLS[ci];
                    return (
                      <g key={s}>
                        <circle cx={cx} cy={ry} r={R} fill={PAPER} stroke={INK} strokeWidth="2.5" />
                        <circle cx={cx} cy={ry} r="3.5" fill={INK} />
                        <text x={cx} y={ry + R + 20} textAnchor="middle" fontSize="13" fontWeight="500" fill={INK}>
                          {s}
                        </text>
                      </g>
                    );
                  })}
                </g>
              );
            })}

            {/* flowing pulse dots (on top), skipped for reduced motion */}
            {!reduce &&
              ROWS.map((ry, ri) => (
                <g key={`pulse-${ri}`}>
                  <circle cy={ry} r="5" fill={INK}>
                    <animate attributeName="cx" from="300" to="840" dur="2.8s" begin="0s" repeatCount="indefinite" />
                  </circle>
                  <circle cy={ry} r="5" fill={INK}>
                    <animate attributeName="cx" from="300" to="840" dur="2.8s" begin="-1.4s" repeatCount="indefinite" />
                  </circle>
                </g>
              ))}

            {/* input terminal */}
            <g>
              <rect x={IN.x - 26} y={IN.y - 24} width="52" height="48" rx="11" fill={PAPER} stroke={INK} strokeWidth="2.5" />
              <text x={IN.x} y={IN.y + 5} textAnchor="middle" fontSize="13" fontWeight="600" fill={INK}>IN</text>
              <text x={IN.x} y={IN.y + R + 20} textAnchor="middle" fontSize="12" fontWeight="500" fill={INK}>Input</text>
            </g>

            {/* output terminal (the delivered system) */}
            <g>
              <rect x={OUT.x - 26} y={OUT.y - 24} width="52" height="48" rx="11" fill={INK} stroke={INK} strokeWidth="2.5" />
              <text x={OUT.x} y={OUT.y + 5} textAnchor="middle" fontSize="13" fontWeight="600" fill={PAPER}>OUT</text>
              <text x={OUT.x} y={OUT.y + R + 20} textAnchor="middle" fontSize="12" fontWeight="500" fill={INK}>Output</text>
            </g>
          </svg>
        </div>

        {/* Mobile: vertical circuit — no horizontal scroll */}
        <div className="mx-auto mt-12 max-w-sm lg:hidden">
          <div className="mx-auto w-fit rounded-xl border-2 border-ink bg-paper px-6 py-2.5 text-sm font-semibold text-ink">
            Input
          </div>
          <VConnector reduce={reduce} />

          {processTracks.map((track, ti) => (
            <div key={track.label}>
              {ti > 0 && <VConnector reduce={reduce} />}
              <div className="rounded-2xl border border-line bg-paper p-5">
                <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-faint">
                  {track.label}
                </p>
                <div className="relative mt-4">
                  <span
                    className="absolute left-2 top-3 bottom-3 w-px bg-line"
                    aria-hidden
                  />
                  <ul className="space-y-3">
                    {track.stages.map((s) => (
                      <li key={s} className="relative flex items-center gap-3">
                        <span className="relative z-10 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 border-ink bg-paper">
                          <span className="h-1.5 w-1.5 rounded-full bg-ink" />
                        </span>
                        <span className="text-sm text-ink">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          <VConnector reduce={reduce} />
          <div className="mx-auto w-fit rounded-xl bg-ink px-6 py-2.5 text-sm font-semibold text-paper">
            Output
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
