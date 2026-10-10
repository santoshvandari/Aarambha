import { LuMoveRight } from "react-icons/lu";
import Button from "./Button";

interface CtaBlockProps {
  title: string;
  description: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export default function CtaBlock({ title, description, primary, secondary }: CtaBlockProps) {
  return (
    <section className="border-t-4 border-accent bg-cta text-ctaText">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-[1.4fr_1fr] md:items-end md:py-24">
        <div>
          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ctaMuted">{description}</p>
        </div>
        <div className="flex flex-wrap gap-4 md:justify-end">
          <Button href={primary.href} variant="primary" size="lg">
            {primary.label}
            <LuMoveRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          {secondary && (
            <Button href={secondary.href} variant="outline" size="lg">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
