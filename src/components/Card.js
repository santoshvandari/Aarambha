/**
 * Reusable Card component for programs, features, etc.
 */
export default function Card({
  children,
  className = "",
  hover = true,
  ...props
}) {
  return (
    <div
      className={`rounded-2xl bg-surface border border-border p-6 ${
        hover
          ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-secondary/20"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
