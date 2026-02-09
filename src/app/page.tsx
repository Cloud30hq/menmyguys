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
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-md">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#F97316]">
              Contact Us
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#1A1A1A]">
              We are here to help
            </h2>
            <p className="mt-2 text-sm text-[#5B5B5B]">
              Reach out with questions about orders, partnerships, or support.
            </p>
          </div>
          <div className="flex flex-col gap-3 text-sm text-[#1A1A1A]">
            <p className="font-semibold">Phone</p>
            <p className="text-[#5B5B5B]">07075803909</p>
            <p className="font-semibold">Email</p>
            <p className="text-[#5B5B5B]">support@menmyguys.com</p>
            <p className="font-semibold">Address</p>
            <p className="text-[#5B5B5B]">
              24, Victoria Next 3 Victoria Crest V, Harris drive, Lagos state
            </p>
          </div>
        </div>
      </section>
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
