"use client";

import { useEffect } from "react";

// Global scroll-reveal driver. Observes any element with [data-reveal] and
// reveals it once when it scrolls into view. Containers with
// [data-reveal-stagger] reveal their direct children in sequence.
// Respects prefers-reduced-motion (handled in CSS) and degrades gracefully.
export default function ScrollReveal() {
  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal], [data-reveal-stagger]")
    );

    // No IO support or reduced motion → just show everything.
    if (reduce || typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => {
        el.classList.add("is-revealed");
        if (el.hasAttribute("data-reveal-stagger")) {
          Array.from(el.children).forEach((c) =>
            (c as HTMLElement).classList.add("is-revealed")
          );
        }
      });
      return;
    }

    const reveal = (el: HTMLElement) => {
      if (el.hasAttribute("data-reveal-stagger")) {
        const kids = Array.from(el.children) as HTMLElement[];
        const step = Number(el.dataset.revealStep ?? 90);
        kids.forEach((kid, i) => {
          kid.style.transitionDelay = `${i * step}ms`;
          kid.classList.add("is-revealed");
        });
      } else {
        el.classList.add("is-revealed");
      }
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );

    targets.forEach((el) => io.observe(el));

    // Safety net: anything already in view on load reveals immediately.
    requestAnimationFrame(() => {
      targets.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) reveal(el);
      });
    });

    return () => io.disconnect();
  }, []);

  return null;
}
