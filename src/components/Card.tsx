import type { ComponentPropsWithoutRef } from "react";

/**
 * Reusable Card component.
 * Glass effect in dark mode, soft shadow in light mode.
 * Gradient accent border on hover.
 */
interface CardProps extends ComponentPropsWithoutRef<"div"> {
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  hover = true,
  ...props
}: CardProps) {
  return (
    <div
      className={`group/card relative rounded-xl border border-border p-6 overflow-hidden bg-surface shadow-sm ${
        hover
          ? "transition-all duration-300 hover:shadow-md hover:-translate-y-1"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
