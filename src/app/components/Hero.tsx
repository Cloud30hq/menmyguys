"use client";

import { useEffect, useRef } from "react";
import { initHeroAnimations } from "../animations/heroAnimations";
import MotionButton from "./MotionButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    return initHeroAnimations(sectionRef.current);
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#FAFAFA] text-[#1A1A1A]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-[#000000]/40 blur-3xl" />
        <div className="absolute -right-20 top-24 h-72 w-72 rounded-full bg-white/70 blur-3xl" />
        <div className="absolute bottom-[-120px] left-[10%] h-60 w-60 rounded-full bg-white/60 blur-2xl" />
      </div>
      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col gap-12 px-6 pb-20 pt-28 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl">
          <div
            data-hero-badge
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#000000] shadow-[0_10px_30px_rgba(0,0,0,0.12)]"
          >
            Fast. Fresh. Delivered.
          </div>
          <h1
            data-hero-title
            className="mt-6 text-4xl font-semibold leading-tight tracking-tight text-[#1A1A1A] md:text-6xl"
          >
            Menmyguys delivers happiness in every bite.
          </h1>
          <p data-hero-copy className="mt-4 text-base leading-relaxed text-[#6B6B6B] md:text-lg">
            Discover handpicked restaurants, track riders in real time, and reorder in a tap.
            Food, groceries, and essentials arrive fast and stress-free.
          </p>
          <div data-hero-cta className="mt-8 flex flex-col gap-4 sm:flex-row">
            <MotionButton className="rounded-full bg-[#000000] px-7 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.35)] transition hover:-translate-y-0.5 hover:bg-[#000000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAFA]">
              Download the App
            </MotionButton>
            <MotionButton className="rounded-full border border-[#000000]/30 px-7 py-3 text-sm font-semibold text-[#000000] transition hover:-translate-y-0.5 hover:border-[#000000] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#000000]/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#FAFAFA]">
              Join as a Partner
            </MotionButton>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#6B6B6B]">
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2">Lagos</span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2">Abuja</span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2">Port Harcourt</span>
          </div>
        </div>
        <div data-hero-mockup className="relative mx-auto w-full max-w-sm">
          <div className="absolute -top-10 right-8 h-20 w-20 rounded-full bg-[#000000]" />
          <div className="absolute -bottom-6 left-6 h-16 w-16 rounded-full bg-white" />
          <div className="rounded-[2.5rem] border border-white/70 bg-white p-6 shadow-[0_20px_40px_rgba(15,23,42,0.12)]">
            <div className="flex h-[460px] flex-col items-center justify-center gap-4 rounded-[2rem] border border-dashed border-slate-200 bg-[#F8FAF9]">
              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                App Preview
              </span>
              <span className="text-sm text-slate-500">Phone mockup placeholder</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
