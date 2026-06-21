import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./motion/reveal";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Toolbox"
        title="Skills & Tech Stack"
        description="The technologies I use to design, build, and ship production systems."
      />
      {/* 1 col mobile, 2 col tablet, 3 col desktop */}
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
        {skillGroups.map((group, i) => {
          const Icon = group.icon;
          return (
            <Reveal key={group.title} delay={i * 0.05}>
              <div className="group h-full rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-brand-400/40 hover:bg-brand-500/[0.04] sm:p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 sm:mb-4 sm:h-11 sm:w-11">
                  <Icon size={20} />
                </div>
                <h3 className="mb-2.5 text-sm font-semibold sm:mb-3 sm:text-base">
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-slate-600 dark:text-slate-300 sm:px-2.5 sm:py-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
