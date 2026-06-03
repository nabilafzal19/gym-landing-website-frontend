import Image from "next/image";
import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

const highlights = [
  {
    title: `${siteConfig.stats.yearsExperience}+ Years`,
    desc: "Serving our community with proven results",
  },
  {
    title: `${siteConfig.stats.certifiedTrainers} Certified Trainers`,
    desc: "Nationally accredited fitness professionals",
  },
  {
    title: "Modern Equipment",
    desc: "Premium machines and free-weight zones",
  },
  {
    title: `${siteConfig.stats.happyMembers} Members`,
    desc: "Transformations that speak for themselves",
  },
];

export function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-28 bg-surface"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="About Us"
          title="More Than a Gym — A Movement"
          description="IronPulse Fitness is where ambition meets expertise. We built this space for people who refuse to settle — beginners, athletes, and everyone in between."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden group">
            <Image
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=600&fit=crop"
              alt="Fitness enthusiasts training together at the gym"
              fill
              loading="lazy"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 ring-1 ring-inset ring-card-border rounded-2xl" />
          </div>

          <div>
            <h3 id="about-heading" className="sr-only">
              About {siteConfig.name}
            </h3>
            <p className="text-foreground leading-relaxed mb-6">
              Founded on the belief that everyone deserves access to world-class
              fitness, {siteConfig.name} combines cutting-edge facilities with
              human-centered coaching. Our mission is simple: empower you to
              become the strongest version of yourself — physically and mentally.
            </p>
            <blockquote className="border-l-4 border-accent pl-6 my-8">
              <p className="text-heading font-display text-xl uppercase tracking-wide italic">
                &ldquo;Your only limit is you. We&apos;re here to prove that wrong.&rdquo;
              </p>
            </blockquote>
            <p className="text-foreground leading-relaxed mb-8">
              From personalized program design to group energy that pushes you
              further, every detail is crafted for results. Step inside and feel
              the difference of a premium fitness experience.
            </p>
            <WhatsAppCTA intent="join" variant="primary">
              Start Your Journey
            </WhatsAppCTA>
          </div>
        </div>

        <ul className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-card-border bg-card p-6 shadow-sm hover:border-accent/50 hover:shadow-md transition-all duration-300"
            >
              <h4 className="font-display text-lg font-bold uppercase text-heading mb-2">
                {item.title}
              </h4>
              <p className="text-sm text-muted">{item.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
