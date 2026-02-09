"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { initScrollAnimations, initScrollTrigger } from "../animations/scrollAnimations";

export default function ScrollSetup() {
  useEffect(() => {
    const target = document.getElementById("scroll-root");
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cleanupScroll = initScrollTrigger(target);
    const cleanupAnimations = initScrollAnimations(target);

    if (prefersReducedMotion) {
      return () => {
        cleanupAnimations();
        cleanupScroll();
      };
    }

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    const syncScroll = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(syncScroll);

    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(syncScroll);
      lenis.destroy();
      cleanupAnimations();
      cleanupScroll();
    };
  }, []);

  return null;
}
