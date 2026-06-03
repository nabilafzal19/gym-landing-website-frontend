import Image from "next/image";
import { galleryImages } from "@/config/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Gallery() {
  return (
    <section
      id="gallery"
      className="py-16 sm:py-20 md:py-28"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Gallery"
          title="Inside IronPulse"
          description="Explore our facility, classes, and the energy that defines our community."
        />

        <h3 id="gallery-heading" className="sr-only">
          Gym Gallery
        </h3>

        <ul className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {galleryImages.map((img, index) => (
            <li
              key={img.src}
              className={`relative overflow-hidden rounded-xl group min-h-[140px] sm:min-h-[180px] ${
                index === 0
                  ? "col-span-2 aspect-[2/1] md:row-span-2 md:aspect-auto md:min-h-[400px]"
                  : "aspect-square"
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                loading="lazy"
                className="object-cover motion-safe:transition-transform motion-safe:duration-500 group-hover:scale-105"
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 66vw"
                    : "(max-width: 768px) 50vw, 33vw"
                }
              />
              <div className="absolute inset-0 bg-heading/0 group-hover:bg-heading/15 motion-safe:transition-colors motion-safe:duration-300" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
