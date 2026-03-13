/**
 * Section title with pill badge label and optional subtitle.
 */
export default function SectionTitle({
  title,
  subtitle,
  label,
  align = "center",
  className = "",
}) {
  const alignClasses = {
    center: "text-center items-center",
    left: "text-left items-start",
    right: "text-right items-end",
  };

  return (
    <div className={`mb-14 flex flex-col ${alignClasses[align]} ${className}`}>
      {/* Pill badge — only shown when label explicitly provided */}
      {label && (
        <span className="mb-4 inline-flex items-center rounded-full bg-secondary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-secondary dark:bg-secondary/15">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-heading font-bold text-text leading-tight tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 max-w-2xl text-textLight text-lg leading-relaxed ${
          align === "center" ? "mx-auto" : ""
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
