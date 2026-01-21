import { gsap } from "gsap";

export function initHeroAnimations(container: HTMLElement | null) {
  if (!container) {
    return () => {};
  }

  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    gsap.set(
      [
        "[data-hero-badge]",
        "[data-hero-title]",
        "[data-hero-copy]",
        "[data-hero-cta]",
        "[data-hero-mockup]",
      ],
      { opacity: 1, y: 0, scale: 1 }
    );
    return () => {};
  }

  const ctx = gsap.context(() => {
    const timeline = gsap.timeline({ defaults: { duration: 0.9, ease: "power3.out" } });

    timeline
      .fromTo("[data-hero-badge]", { opacity: 0, y: 16 }, { opacity: 1, y: 0 })
      .fromTo("[data-hero-title]", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.6")
      .fromTo("[data-hero-copy]", { opacity: 0, y: 20 }, { opacity: 1, y: 0 }, "-=0.6")
      .fromTo("[data-hero-cta]", { opacity: 0, y: 16 }, { opacity: 1, y: 0 }, "-=0.5")
      .fromTo(
        "[data-hero-mockup]",
        { opacity: 0, y: 30, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1 },
        "-=0.7"
      );
  }, container);

  return () => ctx.revert();
}
