import Link from "next/link";

/**
 * Reusable Button component.
 *
 * @param {"primary" | "secondary" | "outline"} variant
 * @param {string} href   – If provided, renders as <Link>
 * @param {string} size   – "sm" | "md" | "lg"
 */
export default function Button({
  children,
  variant = "primary",
  href,
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-secondary text-white shadow-md hover:bg-secondary/90 focus:ring-secondary",
    secondary:
      "bg-accent text-white shadow-md hover:bg-accent/90 focus:ring-accent",
    outline:
      "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white focus:ring-secondary",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
