type SectionHeadingProps = {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-12 md:mb-16 ${alignClass}`}>
      {label && (
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">
          {label}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-heading">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-16 bg-accent ${align === "center" ? "mx-auto" : ""}`}
        aria-hidden
      />
    </div>
  );
}
