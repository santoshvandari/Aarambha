"use client";

import {useRef} from "react";
import {useEffect, useState} from "react";
import Button from "./Button";
import {LuMoveRight, LuSparkles} from "react-icons/lu";
import {motion} from "framer-motion";
import Image from "next/image";
import {useTheme} from "next-themes";

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
  const {theme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- hydration guard for theme-aware rendering
    setMounted(true);
  }, []);

  const isDark = mounted && theme === "dark";

  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (btn) btn.style.transform = "translate(0px, 0px)";
  };

  const container = {
    hidden: {},
    show: {transition: {staggerChildren: 0.1, delayChildren: 0.05}},
  };
  const item = {
    hidden: {opacity: 0, y: 24},
    show: {
      opacity: 1,
      y: 0,
      transition: {duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94]},
    },
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background dark:bg-heroDark text-text dark:text-white py-28 border-b border-border dark:border-white/10">
      {isDark ? (
        <div className="absolute inset-0">
          <Image
            src={backgroundImage}
            alt="Aarambha community volunteers"
            fill
            className="object-cover opacity-100"
            priority
          />
          <div className="absolute inset-0 bg-heroDark/70" />
          <div
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
      ) : (
        <div className="absolute inset-0 bg-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(13,148,136,0.12),transparent_55%)]" />
        </div>
      )}

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-6xl w-full px-6"
      >
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-surface dark:bg-white/12 px-4 py-2 text-sm font-medium text-text dark:text-white/90 border border-border dark:border-white/25"
          >
            <LuSparkles className="h-3.5 w-3.5 text-accent" />
            Nonprofit Social Club
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-text dark:text-white leading-[1.1] tracking-tight"
          >
            {title}
          </motion.h1>

          {/* Tagline — clean secondary color, not gradient */}
          <motion.p
            variants={item}
            className="mt-3 text-2xl sm:text-3xl font-heading font-semibold text-secondary tracking-tight"
          >
            {tagline}
          </motion.p>

          {/* Description */}
          <motion.p
            variants={item}
            className="mt-6 text-base sm:text-lg text-textLight dark:text-white/85 leading-relaxed max-w-2xl mx-auto"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="inline-block"
            >
              <Button
                ref={btnRef}
                href={ctaHref}
                variant="primary"
                size="lg"
                className="transition-transform duration-200 ease-out shadow-lg shadow-secondary/20"
              >
                {ctaText}
                <LuMoveRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <Button
              href={secondaryCtaHref}
              variant="ghost"
              size="lg"
              className="border border-border text-text hover:bg-muted hover:border-border dark:border-white/25 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/35"
            >
              {secondaryCtaText}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-16 flex items-center justify-center gap-8 sm:gap-12"
          >
            {[
              {value: "500+", label: "Volunteers"},
              {value: "50+", label: "Programs"},
              {value: "10K+", label: "Lives Impacted"},
            ].map((stat, i) => (
              <div
                key={stat.label}
                className="flex items-center gap-8 sm:gap-12"
              >
                {i > 0 && (
                  <div className="h-8 w-px bg-border dark:bg-white/25 -ml-4 sm:-ml-6" />
                )}
                <div>
                  <p className="text-2xl sm:text-3xl font-heading font-bold text-text dark:text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-textLight dark:text-white/85 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
}
