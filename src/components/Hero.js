"use client";

import {useRef} from "react";
import Button from "./Button";
import {LuMoveRight, LuSparkles} from "react-icons/lu";
import {motion} from "framer-motion";
import Image from "next/image";

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
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-primary">
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
      {/* Subtle ambient glow — only two, no gimmicks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-secondary/12 blur-[150px]" />
        <div className="absolute -bottom-40 -right-40 h-[500px] w-[500px] rounded-full bg-accent/8 blur-[150px]" />
      </div>

      {/* Dot grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-7xl w-full px-6 py-20 sm:py-28"
      >
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/[0.08] px-4 py-2 text-sm font-medium text-white/70 border border-white/[0.08]"
          >
            <LuSparkles className="h-3.5 w-3.5 text-accent" />
            Nonprofit Social Club
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={item}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-white leading-[1.1] tracking-tight"
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
            className="mt-6 text-base sm:text-lg text-white/55 leading-relaxed max-w-lg"
          >
            {description}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-4"
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
              className="border border-white/15 text-white hover:bg-white/[0.06] hover:border-white/25"
            >
              {secondaryCtaText}
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-16 flex items-center gap-8 sm:gap-12"
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
                  <div className="h-8 w-px bg-white/10 -ml-4 sm:-ml-6" />
                )}
                <div>
                  <p className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-white/35 uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom fade — short, clean transition */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
