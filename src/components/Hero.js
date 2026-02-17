import Image from "next/image";
import Button from "./Button";
import {LuMoveRight} from "react-icons/lu";

/**
 * Hero section with background image overlay.
 */
export default function Hero({
  title = "Aarambha",
  tagline = "Where Change Begins",
  description = "We are a community of passionate individuals working together to create meaningful, lasting impact in our society.",
  ctaText = "Get Involved",
  ctaHref = "/contact",
  secondaryCtaText = "Learn More",
  secondaryCtaHref = "/about",
  backgroundImage = "/hero-bg.png",
}) {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Aarambha community volunteers"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-primary/90 via-primary/75 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="animate-fade-in-up mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm text-white/80 border border-white/10">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Nonprofit Social Club
          </div>

          {/* Title */}
          <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight tracking-tight">
            {title}
          </h1>

          {/* Tagline */}
          <p className="animate-fade-in-up delay-200 mt-4 text-xl sm:text-2xl font-heading font-medium text-secondary">
            {tagline}
          </p>

          {/* Description */}
          <p className="animate-fade-in-up delay-300 mt-6 text-lg text-white/70 leading-relaxed max-w-lg">
            {description}
          </p>

          {/* CTAs */}
          <div className="animate-fade-in-up delay-400 mt-10 flex flex-wrap gap-4">
            <Button href={ctaHref} variant="primary" size="lg">
              {ctaText}
              <LuMoveRight className="ml-3" />
            </Button>
            <Button
              href={secondaryCtaHref}
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white"
            >
              {secondaryCtaText}
            </Button>
          </div>

          {/* Stats bar */}
          <div className="animate-fade-in-up delay-500 mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
            {[
              {value: "500+", label: "Volunteers"},
              {value: "50+", label: "Programs"},
              {value: "10K+", label: "Lives Impacted"},
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl sm:text-3xl font-heading font-bold text-white">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
    </section>
  );
}
