"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { SocialLinks } from "./social-links";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-70" />
      {/* Single restrained glow, tinted to the brand hue */}
      <div className="pointer-events-none absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-brand-500/10 blur-[120px]" />

      <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col items-center gap-10 px-4 pb-16 pt-24 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-12 md:py-24">
        {/* Text content, left-aligned editorial on desktop */}
        <div className="order-last max-w-2xl text-center md:order-first md:text-left">
          <div className="hero-fade-in hero-delay-1">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-1.5 text-sm font-medium text-accent-500">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
              </span>
              Available for opportunities &amp; freelance
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl hero-fade-in hero-delay-2">
            Hi, I&apos;m <span className="text-gradient">Deekshith</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500 dark:text-slate-400 sm:text-lg md:mx-0">
            <span className="hero-fade-in hero-delay-3 inline-block">
              Full Stack Software Engineer with 4+ years building scalable,
              multi-tenant SaaS platforms.
            </span>
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start hero-fade-in hero-delay-4">
            <Button href="/projects" size="lg" className="w-full sm:w-auto">
              View Work
              <ArrowRight size={18} />
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              Hire Me
            </Button>
          </div>

          <div className="mt-8 flex justify-center md:justify-start hero-fade-in hero-delay-5">
            <SocialLinks />
          </div>
        </div>

        {/* Profile image */}
        <div className="relative order-first shrink-0 md:order-last hero-fade-in hero-delay-1">
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-brand-500/25 to-accent-500/25 blur-2xl" />
          <div className="relative h-44 w-44 overflow-hidden rounded-full border border-white/15 shadow-2xl sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80">
            <Image
              src="/profile.jpg"
              alt="Deekshith Polamarasetty"
              fill
              priority
              sizes="(max-width: 640px) 176px, (max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
