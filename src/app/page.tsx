import dynamic from "next/dynamic";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SkipLink } from "@/components/SkipLink";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Programs } from "@/components/sections/Programs";
import { Trainers } from "@/components/sections/Trainers";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";

const BMICalculator = dynamic(
  () =>
    import("@/components/sections/BMICalculator").then((m) => m.BMICalculator),
  {
    loading: () => (
      <section
        id="bmi"
        className="py-16 sm:py-20 md:py-28"
        aria-label="Loading BMI calculator"
      >
        <div className="mx-auto max-w-lg px-4 text-center text-muted text-sm">
          Loading calculator…
        </div>
      </section>
    ),
  }
);

import { ClientWidgets } from "@/components/ClientWidgets";

export default function HomePage() {
  return (
    <>
      <SkipLink />
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <About />
        <Programs />
        <Trainers />
        <WhyChooseUs />
        <Pricing />
        <BMICalculator />
        <Testimonials />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <ClientWidgets />
    </>
  );
}
