import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./motion/reveal";
import { experience } from "@/lib/data";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function About() {
  return (
    <Section id="about">
      <SectionHeading
        eyebrow="About"
        title="Engineering systems that scale"
        description="I'm a Full Stack Software Engineer with 4+ years building scalable, distributed, multi-tenant SaaS. I specialize in microservices, event-driven architecture, and cloud infrastructure, with a track record of shipping production systems for 15+ enterprise clients."
      />

      {/* "What I bring" card above timeline on all sizes; side-by-side on large screens */}
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
        <Reveal>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6">
            <h3 className="font-semibold">What I bring</h3>
            <ul className="mt-3 space-y-2.5 text-sm text-slate-500 dark:text-slate-400 sm:mt-4 sm:space-y-3">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                End-to-end ownership &mdash; from architecture to production.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                Performance-first mindset (40% API gains, 80% faster
                onboarding).
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                Multi-tenant SaaS with strict data isolation and RBAC/SSO.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                Clean architecture and pragmatic system design.
              </li>
            </ul>
            <Button
              href={siteConfig.links.resume}
              variant="outline"
              size="sm"
              className="mt-5 w-full justify-center sm:mt-6 sm:w-auto"
            >
              <Download size={16} /> Download Resume
            </Button>
          </div>
        </Reveal>

        {/* Experience timeline */}
        <div className="relative space-y-6 before:absolute before:left-[7px] before:top-2 before:h-full before:w-px before:bg-white/10 sm:space-y-8">
          {experience.map((job, i) => (
            <Reveal key={job.role + job.period} delay={i * 0.08}>
              <div className="relative pl-7 sm:pl-8">
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-brand-500 bg-[rgb(var(--background))]" />
                <div className="flex flex-col gap-0.5 sm:flex-row sm:flex-wrap sm:items-baseline sm:justify-between sm:gap-x-4">
                  <h3 className="text-sm font-semibold sm:text-base">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-brand-500">
                    {job.period}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                  {job.company} &middot; {job.location}
                </p>
                <ul className="mt-2.5 space-y-1.5 text-xs text-slate-500 dark:text-slate-400 sm:mt-3 sm:space-y-2 sm:text-sm">
                  {job.points.map((p, idx) => (
                    <li key={idx} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
