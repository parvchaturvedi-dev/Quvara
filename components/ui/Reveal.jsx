"use client";

import { motion } from "framer-motion";

/**
 * Scroll-into-view reveal. Wrap any element; it fades + rises once
 * when it enters the viewport. Pass `delay` (seconds) to stagger siblings.
 */
export default function Reveal({ children, className = "", delay = 0, y = 28 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
