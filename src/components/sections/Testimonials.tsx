import Image from "next/image";
import { testimonials } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-20 md:py-28 bg-surface"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Success Stories"
          title="Real Results, Real People"
          description="Hear from members who transformed their bodies and lives at IronPulse."
        />

        <h3 id="testimonials-heading" className="sr-only">
          Client Testimonials
        </h3>

        <ul className="grid gap-6 md:grid-cols-3 md:gap-8">
          {testimonials.map((t) => (
            <li
              key={t.name}
              className="rounded-2xl border border-card-border bg-card p-8 flex flex-col shadow-sm hover:border-accent/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex gap-1 mb-4" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <blockquote className="text-foreground leading-relaxed flex-grow">
                <p>&ldquo;{t.quote}&rdquo;</p>
              </blockquote>
              <footer className="mt-6 flex items-center gap-4 pt-6 border-t border-card-border">
                <Image
                  src={t.image}
                  alt=""
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <cite className="not-italic font-display font-bold uppercase text-heading text-sm">
                    {t.name}
                  </cite>
                  <p className="text-xs text-accent mt-0.5">{t.role}</p>
                </div>
              </footer>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function StarIcon() {
  return (
    <svg className="h-5 w-5 text-accent" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
