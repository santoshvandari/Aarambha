/**
 * Section title with optional subtitle.
 */
export default function SectionTitle({
  title,
  subtitle,
  align = "center",
  className = "",
}) {
  const alignClasses = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <div className={`mb-12 ${alignClasses[align]} ${className}`}>
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-primary mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-muted text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 h-1 w-16 rounded-full bg-secondary ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </div>
  );
}
