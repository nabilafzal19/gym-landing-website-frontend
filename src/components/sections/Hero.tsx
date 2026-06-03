import Image from "next/image";
import { siteConfig } from "@/config/site";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

const trustIndicators = [
  { value: "12+", label: "Years Experience" },
  { value: "5K+", label: "Happy Members" },
  { value: "25+", label: "Expert Trainers" },
  { value: "4.9★", label: "Member Rating" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100dvh] min-h-screen items-center pt-20 overflow-hidden bg-background"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1920&h=1080&fit=crop&q=80"
          alt="Modern gym interior with professional fitness equipment"
          fill
          priority
          className="object-cover opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24 w-full">
        <div className="max-w-2xl animate-fade-up">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-4">
            Welcome to {siteConfig.name}
          </p>
          <h1
            id="hero-heading"
            className="font-display text-3xl leading-tight sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase sm:leading-[1.1] text-heading"
          >
            Transform Your Body.{" "}
            <span className="text-accent">Transform Your Life.</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-foreground leading-relaxed max-w-xl">
            Professional trainers, modern equipment, and personalized fitness
            programs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <WhatsAppCTA intent="join" variant="primary" className="w-full sm:w-auto">
              Join Now
            </WhatsAppCTA>
            <WhatsAppCTA intent="trial" variant="outline" className="w-full sm:w-auto">
              Free Trial
            </WhatsAppCTA>
          </div>

          <ul className="mt-10 sm:mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 border-t border-card-border pt-6 sm:pt-8">
            {trustIndicators.map((item) => (
              <li key={item.label}>
                <p className="font-display text-2xl sm:text-3xl font-bold text-accent">
                  {item.value}
                </p>
                <p className="text-sm text-muted mt-1">{item.label}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
