import Image from "next/image";
import { trainers } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

export function Trainers() {
  return (
    <section
      id="trainers"
      className="py-16 sm:py-20 md:py-28 bg-surface"
      aria-labelledby="trainers-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Team"
          title="Meet Your Trainers"
          description="Certified professionals dedicated to your success — combining science, experience, and motivation."
        />

        <h3 id="trainers-heading" className="sr-only">
          Trainer Profiles
        </h3>

        <ul className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {trainers.map((trainer) => (
            <li
              key={trainer.name}
              className="group rounded-2xl overflow-hidden border border-card-border bg-card shadow-sm hover:border-accent/50 hover:shadow-md transition-all duration-300"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={trainer.image}
                  alt={`${trainer.name}, ${trainer.specialization} specialist`}
                  fill
                  loading="lazy"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-5 -mt-8 relative">
                <h4 className="font-display text-xl font-bold uppercase text-heading">
                  {trainer.name}
                </h4>
                <p className="text-accent text-sm font-medium mt-1">
                  {trainer.specialization}
                </p>
                <dl className="mt-3 space-y-1 text-sm text-muted">
                  <div className="flex gap-2">
                    <dt className="text-muted">Experience:</dt>
                    <dd>{trainer.experience}</dd>
                  </div>
                  <div className="flex gap-2">
                    <dt className="text-muted">Certs:</dt>
                    <dd>{trainer.certifications}</dd>
                  </div>
                </dl>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <WhatsAppCTA intent="join" variant="primary">
            Book a Trainer Session
          </WhatsAppCTA>
        </div>
      </div>
    </section>
  );
}
