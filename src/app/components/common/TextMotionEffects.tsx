"use client";

import { useEffect } from "react";
import { useMotionValueEvent, useScroll, useSpring } from "framer-motion";

const TEXT_SELECTOR = [
  "h1",
  "h2",
  "h3",
  "h4",
  "p",
  "li",
  ".section-label",
  ".section-title",
  ".section-body",
  ".wp-kicker",
  ".wp-copy",
  ".wp-card-title",
  ".dp-kicker",
  ".dp-copy",
  ".ep-kicker",
  ".ep-copy",
  ".xp-kicker",
  ".xp-copy",
  ".gp-kicker",
  ".gp-copy",
  ".vt-kicker",
  ".vt-copy",
  ".bp-eyebrow",
  ".bp-lead",
  ".gs-kicker",
  ".gs-copy",
].join(",");

export default function TextMotionEffects() {
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, {
    stiffness: 90,
    damping: 28,
    mass: 0.35,
  });

  useMotionValueEvent(smoothScrollY, "change", (latest) => {
    const parallax = Math.min(44, Math.max(0, latest * 0.035));
    document.documentElement.style.setProperty("--hero-parallax", `${parallax}px`);
  });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.querySelector("main");
    if (!root) return undefined;

    const elements = Array.from(root.querySelectorAll<HTMLElement>(TEXT_SELECTOR)).filter(
      (element) =>
        element.textContent?.trim() &&
        !element.closest("[data-motion-ignore='true']") &&
        !element.classList.contains("motion-ignore")
    );

    elements.forEach((element) => {
      element.classList.add("motion-text");

      if (/^H[1-4]$/.test(element.tagName) || element.className.includes("title")) {
        element.classList.add("motion-heading");
      }

      const siblings = Array.from(element.parentElement?.children ?? []).filter((sibling) =>
        (sibling as HTMLElement).classList?.contains("motion-text")
      );
      const index = Math.max(0, siblings.indexOf(element));
      element.style.setProperty("--motion-delay", `${Math.min(index, 6) * 70}ms`);
    });

    if (reduceMotion) {
      elements.forEach((element) => element.classList.add("motion-in"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("motion-in");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return null;
}
