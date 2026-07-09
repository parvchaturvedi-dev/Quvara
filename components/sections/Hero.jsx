"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { site } from "@/lib/siteData";

const HeroNetwork = dynamic(() => import("./HeroNetwork"), { ssr: false });

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 bg-grid opacity-60"
        style={{
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 75%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-[62%] lg:block"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 44%)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 44%)",
        }}
      >
        <HeroNetwork />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pb-32 sm:pt-28">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.span
            variants={item}
            className="inline-flex items-center rounded-full border border-line bg-surface px-3.5 py-1.5 text-xs font-medium tracking-wide text-muted"
          >
            Agentic AI · ERP · Oracle APEX
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            AI-native ERP,{" "}
            <span className="text-faint">tailored to every business.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            {site.description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-paper transition-transform duration-200 hover:scale-[1.03] active:scale-95 sm:w-auto"
            >
              Book a consultation
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#product"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-line-strong px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-surface sm:w-auto"
            >
              See our product
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
