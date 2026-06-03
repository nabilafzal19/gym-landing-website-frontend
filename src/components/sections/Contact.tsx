import { siteConfig } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { WhatsAppCTA } from "@/components/ui/WhatsAppCTA";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-20 md:py-28 bg-surface"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Contact"
          title="Visit Us Today"
          description="Stop by for a tour or message us on WhatsApp — we're ready when you are."
        />

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
          <div>
            <h3 id="contact-heading" className="sr-only">
              Contact Information
            </h3>
            <ul className="space-y-6">
              <ContactItem
                icon="location"
                label="Address"
                value={siteConfig.address}
              />
              <ContactItem
                icon="phone"
                label="Phone"
                value={
                  <a
                    href={`tel:${siteConfig.phoneRaw}`}
                    className="hover:text-accent transition-colors"
                  >
                    {siteConfig.phone}
                  </a>
                }
              />
              <ContactItem
                icon="email"
                label="Email"
                value={
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-accent transition-colors"
                  >
                    {siteConfig.email}
                  </a>
                }
              />
              <ContactItem
                icon="clock"
                label="Working Hours"
                value={
                  <>
                    <p>{siteConfig.workingHours.weekdays}</p>
                    <p>{siteConfig.workingHours.weekend}</p>
                  </>
                }
              />
            </ul>
            <div className="mt-8">
              <WhatsAppCTA intent="contact" variant="primary">
                Message on WhatsApp
              </WhatsAppCTA>
            </div>
          </div>

          <div className="rounded-2xl overflow-hidden border border-card-border aspect-[4/3] sm:aspect-video lg:aspect-auto lg:min-h-[400px]">
            <iframe
              src={siteConfig.mapEmbedUrl}
              title={`${siteConfig.name} location on Google Maps`}
              className="h-full w-full min-h-[240px] sm:min-h-[300px] lg:min-h-[400px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <li className="flex gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-card border border-card-border text-accent">
        <ContactIcon name={icon} />
      </span>
      <div>
        <p className="text-sm text-muted uppercase tracking-wide">{label}</p>
        <div className="mt-1 text-heading font-medium break-words text-sm sm:text-base">{value}</div>
      </div>
    </li>
  );
}

function ContactIcon({ name }: { name: string }) {
  const cls = "h-6 w-6";
  if (name === "location")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    );
  if (name === "phone")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    );
  if (name === "email")
    return (
      <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    );
  return (
    <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
