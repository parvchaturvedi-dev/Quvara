"use client";

import { useRef, useEffect } from "react";
import { ArrowRight, Check } from "lucide-react";
import InvoiceMockup from "./InvoiceMockup";
import { product } from "@/lib/siteData";

export default function Product() {
  const triggerRef = useRef(null); // section — drives the ScrollTrigger
  const stageRef = useRef(null); // full-viewport pinned stage
  const textRef = useRef(null); // left column
  const cardRef = useRef(null); // mockup wrapper (moves + scales)
  const contentRef = useRef(null); // inner mockup content (fades during zoom)
  const overlayRef = useRef(null); // white cover for the final blend

  useEffect(() => {
    let mm;
    let cancelled = false;

    (async () => {
      const { default: gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      mm = gsap.matchMedia();

      // The cinematic pin runs on large screens only; mobile keeps normal flow.
      mm.add("(min-width: 1024px)", () => {
        // zoom into the InvoiceIQ logo (upper-left of the card)
        gsap.set(cardRef.current, { transformOrigin: "24% 22%" });

        const rect = cardRef.current.getBoundingClientRect();
        const dx = window.innerWidth / 2 - (rect.left + rect.width / 2);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top top",
            end: "+=200%",
            scrub: 1,
            pin: stageRef.current,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1) left text drifts away; card eases to center and grows a touch
        tl.to(textRef.current, { autoAlpha: 0, x: -50, ease: "power2.in", duration: 0.3 }, 0);
        tl.to(cardRef.current, { x: dx, scale: 1.35, ease: "power2.inOut", duration: 0.35 }, 0);

        // 2) zoom in hard toward the logo until the white card fills the screen
        tl.to(cardRef.current, { scale: 18, ease: "power2.in", duration: 0.65 }, 0.35);
        tl.to(contentRef.current, { autoAlpha: 0, ease: "power1.in", duration: 0.3 }, 0.55);

        // 3) white fully covers → seamless blend into the next section
        tl.to(overlayRef.current, { autoAlpha: 1, ease: "none", duration: 0.2 }, 0.82);
      });

      // Mobile: a scroll-scrubbed zoom into the card (no pin — reliable on phones)
      mm.add("(max-width: 1023px)", () => {
        gsap.set(cardRef.current, { transformOrigin: "50% 38%" });
        gsap.fromTo(
          cardRef.current,
          { scale: 0.9 },
          {
            scale: 1.35,
            ease: "none",
            scrollTrigger: {
              trigger: triggerRef.current,
              start: "top 82%",
              end: "bottom 18%",
              scrub: 1,
            },
          }
        );
      });
    })();

    return () => {
      cancelled = true;
      if (mm) mm.revert();
    };
  }, []);

  return (
    <section id="product" ref={triggerRef} className="relative bg-paper">
      <div
        ref={stageRef}
        className="relative flex items-center overflow-hidden py-20 sm:py-28 lg:min-h-screen lg:py-0"
      >
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div ref={textRef}>
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-faint">
              <span className="h-px w-6 bg-line-strong" aria-hidden />
              {product.kicker}
            </span>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              {product.name}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted sm:text-lg">
              {product.summary}
            </p>
            <ul className="mt-7 space-y-3">
              {product.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-transform duration-200 hover:scale-[1.03] active:scale-95"
            >
              Request a demo
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div ref={cardRef} className="will-change-transform">
            <InvoiceMockup contentRef={contentRef} />
          </div>
        </div>

        <div
          ref={overlayRef}
          className="pointer-events-none absolute inset-0 bg-paper opacity-0"
          aria-hidden
        />
      </div>
    </section>
  );
}
