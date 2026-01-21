import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Restaurants from "./components/Restaurants";
import Riders from "./components/Riders";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import ScrollSetup from "./components/ScrollSetup";

export default function Home() {
  return (
    <main id="scroll-root" className="min-h-screen bg-white">
      <ScrollSetup />
      <Hero />
      <HowItWorks />
      <Restaurants />
      <Riders />
      <Testimonials />
      <CTA />
    </main>
  );
}
