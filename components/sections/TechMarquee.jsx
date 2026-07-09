"use client";

import { useState } from "react";
import {
  siHtml5,
  siCss,
  siJavascript,
  siReact,
  siPython,
  siAngular,
  siDocker,
  siKubernetes,
  siNodedotjs,
  siExpress,
} from "simple-icons";
import { Database, Brain, LineChart, ChartScatter, TerminalSquare } from "lucide-react";

const brand = (icon, title) => ({ type: "brand", path: icon.path, title: title ?? icon.title });
const glyph = (Icon, title) => ({ type: "lucide", Icon, title });

const items = [
  brand(siHtml5, "HTML5"),
  brand(siCss, "CSS"),
  brand(siJavascript, "JavaScript"),
  brand(siReact, "React"),
  glyph(Database, "Oracle APEX"),
  brand(siPython, "Python"),
  glyph(Brain, "AI / Agents"),
  brand(siAngular, "Angular"),
  glyph(LineChart, "Matplotlib"),
  glyph(ChartScatter, "Seaborn"),
  brand(siDocker, "Docker"),
  brand(siKubernetes, "Kubernetes"),
  brand(siNodedotjs, "Node.js"),
  brand(siExpress, "Express"),
  glyph(TerminalSquare, "Terminal"),
];

function Glyph({ item }) {
  if (item.type === "brand") {
    return (
      <svg viewBox="0 0 24 24" className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden>
        <path d={item.path} fill="currentColor" />
      </svg>
    );
  }
  const Icon = item.Icon;
  return <Icon className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden strokeWidth={1.75} />;
}

export default function TechMarquee() {
  const [speed, setSpeed] = useState(1);
  const loop = [...items, ...items];

  // higher speed = shorter durations (faster scroll + livelier wave)
  const marqueeDur = Math.round((40 / speed) * 10) / 10;
  const bobDur = Math.round((2.8 / Math.max(0.6, speed)) * 100) / 100;

  return (
    <section
      aria-label={`Our technology stack: ${items.map((i) => i.title).join(", ")}`}
      className="tm-band relative overflow-hidden bg-paper py-9"
      style={{ "--tm-dur": `${marqueeDur}s`, "--tm-bob": `${bobDur}s` }}
    >
      <div className="mx-auto mb-8 flex w-full max-w-xs items-center gap-3 px-5">
        <span className="whitespace-nowrap text-[11px] font-medium uppercase tracking-wider text-faint">
          Wave speed
        </span>
        <input
          type="range"
          min="0.3"
          max="2.5"
          step="0.1"
          value={speed}
          onChange={(e) => setSpeed(parseFloat(e.target.value))}
          aria-label="Wave speed"
          className="tm-range flex-1"
        />
        <span className="w-8 text-right font-mono text-xs tabular-nums text-ink">
          {speed.toFixed(1)}×
        </span>
      </div>

      <div className="tm-mask py-6">
        <ul className="tm-track flex w-max items-center gap-5 sm:gap-7" aria-hidden>
          {loop.map((item, i) => (
            <li
              key={i}
              title={item.title}
              style={{ animationDelay: `${(i % items.length) * -0.22}s` }}
              className="tm-chip flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-paper text-ink shadow-[0_10px_28px_-16px_rgba(0,0,0,0.4)] sm:h-16 sm:w-16"
            >
              <Glyph item={item} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
