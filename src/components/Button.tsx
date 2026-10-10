import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode, Ref } from 'react';
import Link from 'next/link';

type ButtonVariant = 'primary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  children?: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  Omit<ComponentPropsWithoutRef<'button'>, keyof BaseButtonProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps &
  Omit<ComponentPropsWithoutRef<typeof Link>, keyof BaseButtonProps>;

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(function Button(
  { children, variant = 'primary', size = 'md', className = '', ...props },
  ref
) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-md font-semibold transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-60';

  const variants: Record<ButtonVariant, string> = {
    primary:
      'bg-primary text-white hover:bg-slate-700 dark:bg-text dark:text-background dark:hover:bg-slate-300',
    outline:
      'border border-slate-400 text-text hover:border-text hover:bg-text hover:text-background dark:border-slate-500',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base',
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href !== undefined) {
    return (
      <Link ref={ref as Ref<HTMLAnchorElement>} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button ref={ref as Ref<HTMLButtonElement>} className={classes} {...props}>
      {children}
    </button>
  );
});

export default Button;
