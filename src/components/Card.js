/**
 * Reusable Card component.
 * Glass effect in dark mode, soft shadow in light mode.
 * Gradient accent border on hover.
 */
export default function Card({
  children,
  className = "",
  hover = true,
  ...props
}) {
  return (
    <div
      className={`group/card relative rounded-2xl border p-6 overflow-hidden bg-white border-border/40 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_6px_20px_rgba(0,0,0,0.03)] dark:bg-white/[0.03] dark:border-white/10 dark:shadow-none dark:backdrop-blur-sm ${
        hover
          ? "transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 hover:border-secondary/30 dark:hover:border-secondary/20 dark:hover:bg-white/[0.06]"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
