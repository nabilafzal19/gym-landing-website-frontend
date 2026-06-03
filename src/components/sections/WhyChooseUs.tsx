import { whyChooseUs } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureIcon } from "@/components/icons/ProgramIcons";

export function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="py-16 sm:py-20 md:py-28"
      aria-labelledby="why-us-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Why Choose Us"
          title="The IronPulse Advantage"
          description="Six reasons members stay — and why you'll want to join them."
        />

        <h3 id="why-us-heading" className="sr-only">
          Why Choose Us
        </h3>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item) => (
            <li
              key={item.title}
              className="flex gap-5 rounded-xl border border-card-border bg-card p-6 shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-300"
            >
              <div className="shrink-0 rounded-lg bg-surface p-3 h-fit">
                <FeatureIcon name={item.icon} />
              </div>
              <div>
                <h4 className="font-display text-lg font-bold uppercase text-heading mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
