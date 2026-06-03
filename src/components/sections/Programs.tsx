import { programs } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramIcon } from "@/components/icons/ProgramIcons";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

export function Programs() {
  return (
    <section
      id="programs"
      className="py-16 sm:py-20 md:py-28"
      aria-labelledby="programs-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Programs"
          title="Train Your Way"
          description="Eight specialized programs designed for every fitness goal — from fat loss to CrossFit and everything in between."
        />

        <h3 id="programs-heading" className="sr-only">
          Fitness Programs
        </h3>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((program) => (
            <li
              key={program.id}
              className="group rounded-xl border border-card-border bg-card p-6 flex flex-col shadow-sm hover:border-accent/60 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4 rounded-lg bg-surface p-3 w-fit group-hover:bg-accent/10 transition-colors">
                <ProgramIcon name={program.icon} />
              </div>
              <h4 className="font-display text-lg font-bold uppercase text-heading mb-2">
                {program.title}
              </h4>
              <p className="text-sm text-muted leading-relaxed flex-grow mb-4">
                {program.description}
              </p>
              <WhatsAppCTA
                intent="program"
                detail={program.title}
                variant="ghost"
                className="!p-0 !justify-start text-sm"
              >
                Learn More
              </WhatsAppCTA>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
