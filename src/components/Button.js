import { forwardRef } from "react";
import Link from "next/link";

/**
 * Reusable Button component.
 *
 * @param {"primary" | "secondary" | "outline" | "ghost"} variant
 * @param {string} href   – If provided, renders as <Link>
 * @param {string} size   – "sm" | "md" | "lg"
 */
const Button = forwardRef(function Button(
  { children, variant = "primary", href, size = "md", className = "", ...props },
  ref
) {
  const base =
    "group inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background";

  const variants = {
    primary:
      "bg-secondary text-white shadow-sm hover:bg-secondary/90 hover:shadow-md focus:ring-secondary",
    secondary:
      "bg-accent text-white shadow-sm hover:bg-accent/90 hover:shadow-md focus:ring-accent",
    outline:
      "border border-secondary/30 text-secondary hover:bg-secondary hover:text-white hover:border-secondary focus:ring-secondary",
    ghost:
      "text-textLight hover:bg-surface hover:text-text focus:ring-secondary shadow-none hover:shadow-none",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link ref={ref} href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref} className={classes} {...props}>
      {children}
    </button>
  );
});

export default Button;
