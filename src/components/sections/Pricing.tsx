import { pricingPlans } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";
import type { WhatsAppIntent } from "@/config/site";

const planIntents: Record<string, WhatsAppIntent> = {
  basic: "pricing-basic",
  standard: "pricing-standard",
  premium: "pricing-premium",
};

export function Pricing() {
  return (
    <section
      id="pricing"
      className="py-16 sm:py-20 md:py-28 bg-surface"
      aria-labelledby="pricing-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Membership"
          title="Choose Your Plan"
          description="Transparent pricing with no hidden fees. Cancel anytime with 30 days notice."
        />

        <h3 id="pricing-heading" className="sr-only">
          Membership Pricing
        </h3>

        <ul className="grid gap-6 sm:gap-8 md:grid-cols-3 max-w-5xl mx-auto lg:max-w-none">
          {pricingPlans.map((plan) => (
            <li
              key={plan.id}
              className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col ${
                plan.popular
                  ? "border-accent bg-card shadow-lg shadow-accent/10 md:scale-[1.02] lg:scale-105 z-10"
                  : "border-card-border bg-card shadow-sm"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold uppercase tracking-widest px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h4 className="font-display text-2xl font-bold uppercase text-heading">
                {plan.name}
              </h4>
              <p className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl sm:text-5xl font-bold text-accent">
                  ${plan.price}
                </span>
                <span className="text-muted">{plan.period}</span>
              </p>
              <ul className="mt-8 space-y-3 flex-grow">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm text-foreground"
                  >
                    <CheckIcon />
                    {feature}
                  </li>
                ))}
              </ul>
              <WhatsAppCTA
                intent={planIntents[plan.id]}
                variant={plan.popular ? "primary" : "outline"}
                className="mt-8 w-full"
              >
                Join Now
              </WhatsAppCTA>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CheckIcon() {
  return (
    <svg
      className="h-5 w-5 text-accent shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}
