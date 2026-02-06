import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Restaurants from "./components/Restaurants";
import Riders from "./components/Riders";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import ScrollSetup from "./components/ScrollSetup";
import Link from "next/link";

export default function Home() {
  return (
    <main id="scroll-root" className="min-h-screen bg-[#FAFAFA]">
      <ScrollSetup />
      <Hero />
      <HowItWorks />
      <Restaurants />
      <Riders />
      <Testimonials />
      <CTA />
      <section className="border-t border-[#ECECEC] bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-4 px-6 py-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-[#1A1A1A]">Legal</p>
            <p className="text-sm text-[#5B5B5B]">
              Review how we handle data and the terms of using Menmyguys.
            </p>
          </div>
          <div className="flex items-center gap-4 text-sm font-semibold">
            <Link className="text-[#1A1A1A] hover:text-[#000000]" href="/privacy">
              Privacy Policy
            </Link>
            <span className="text-[#CFCFCF]">•</span>
            <Link className="text-[#1A1A1A] hover:text-[#000000]" href="/terms">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
