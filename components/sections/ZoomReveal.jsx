"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

/**
 * Scroll-linked "zoom in" for a block of any height — it scales up and
 * fades in as its top approaches the upper third of the viewport, then
 * holds. Good for tall category sections (unlike LayerZoom which centers
 * one screen-sized card).
 */
export default function ZoomReveal({ children, className = "" }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.32"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.25, 1]);

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { scale, opacity }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
