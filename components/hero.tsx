"use client";

import Image from "next/image";
import { ArrowRight, Download, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { SocialLinks } from "./social-links";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl sm:h-96 sm:w-96" />

      {/* Mobile: column (image on top, text below). Desktop: row side-by-side */}
      <div className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col items-center justify-center gap-8 px-4 pb-16 pt-24 sm:gap-10 sm:px-6 md:flex-row md:justify-between md:gap-12 md:py-28">
        {/* Profile image — appears first on mobile (order-first), last on desktop */}
        <div className="relative shrink-0 order-first md:order-last hero-fade-in hero-delay-1">
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-brand-500/40 to-accent-500/40 blur-2xl sm:-inset-4" />
          <div className="relative h-44 w-44 overflow-hidden rounded-full border-2 border-white/20 shadow-2xl sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80">
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

        {/* Text content */}
        <div className="max-w-xl text-center md:max-w-2xl md:text-left">
          <div className="hero-fade-in hero-delay-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-500/30 bg-accent-500/10 px-3 py-1 text-xs font-medium text-accent-500 sm:px-4 sm:py-1.5 sm:text-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-500" />
              </span>
              Available for opportunities &amp; freelance
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-bold tracking-tight sm:mt-6 sm:text-5xl md:text-6xl hero-fade-in hero-delay-3">
            Hi, I&apos;m <span className="text-gradient">Deekshith</span>
          </h1>

          <p className="mt-3 text-base font-medium text-slate-600 dark:text-slate-300 sm:mt-4 sm:text-lg md:text-xl hero-fade-in hero-delay-4">
            Full Stack Software Engineer &middot; 4+ years building scalable,
            multi-tenant SaaS
          </p>

          <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:mt-4 sm:text-base hero-fade-in hero-delay-5">
            {siteConfig.tagline}
          </p>

          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400 sm:mt-6 sm:text-sm md:justify-start hero-fade-in hero-delay-5">
            <MapPin size={14} className="text-brand-500" />
            {siteConfig.location}
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:mt-8 md:justify-start hero-fade-in hero-delay-6">
            <Button href="/projects" size="lg" className="w-full sm:w-auto">
              View My Work
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
            <a
              href={siteConfig.links.resume}
              download
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-5 text-sm font-medium text-slate-600 transition hover:text-brand-500 dark:text-slate-300 sm:w-auto"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          <div className="mt-6 flex justify-center sm:mt-8 md:justify-start hero-fade-in hero-delay-7">
            <SocialLinks />
          </div>
        </div>
      </div>
    </section>
  );
}
