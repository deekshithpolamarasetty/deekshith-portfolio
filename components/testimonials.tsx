import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./motion/reveal";
import { testimonials } from "@/lib/data";
import { Quote } from "lucide-react";

export function Testimonials() {
  return (
    <Section id="testimonials">
      <SectionHeading
        eyebrow="Testimonials"
        title="What people say"
        description="A few words from people I've worked with."
      />
      {/* 1 col on mobile, 2 col on tablet, 3 col on desktop */}
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <figure className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
              <Quote className="text-brand-500/40" size={24} />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {t.quote}
              </blockquote>
              <figcaption className="mt-4 border-t border-white/10 pt-4">
                <p className="text-sm font-semibold">{t.name}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {t.role}
                </p>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
