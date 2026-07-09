"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * App-wide smooth scrolling via Lenis, wired into GSAP's ticker so that
 * GSAP ScrollTrigger (pins, scrubs) stays perfectly in sync with the
 * smoothed scroll position. This is what makes the pinned "zoom" scenes
 * feel buttery, Lenis-website style.
 */
export default function SmoothScroll({ children }) {
  useEffect(() => {
    let lenis;
    let rafCb;
    let gsapRef;
    let mounted = true;

    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (!mounted) return;

      gsap.registerPlugin(ScrollTrigger);

      lenis = new Lenis({
        lerp: 0.1,
        smoothWheel: true,
        autoRaf: false, // we drive it from GSAP's ticker instead
      });

      // keep ScrollTrigger updated on every Lenis scroll frame
      lenis.on("scroll", ScrollTrigger.update);

      rafCb = (time) => lenis.raf(time * 1000);
      gsap.ticker.add(rafCb);
      gsap.ticker.lagSmoothing(0);
      gsapRef = gsap;

      // recompute trigger positions once everything is wired up
      ScrollTrigger.refresh();
    })();

    return () => {
      mounted = false;
      if (gsapRef && rafCb) gsapRef.ticker.remove(rafCb);
      if (lenis) lenis.destroy();
    };
  }, []);

  return children;
}
