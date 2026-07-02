import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./motion/reveal";
import { services } from "@/lib/data";
import { Button } from "./ui/button";
import { Layers, Server, Database, Cloud, ArrowRight } from "lucide-react";

const iconMap = { Layers, Server, Database, Cloud } as const;

export function Services() {
  return (
    <Section
      id="services"
      className="border-y border-white/10 bg-brand-500/[0.03]"
    >
      <SectionHeading
        title="How I can help"
        description="Need something built? I take products from idea to production: backend, frontend, and the DevOps in between."
      />
      {/* 1 col mobile, 2 col sm+ */}
      <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
        {services.map((service, i) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <Reveal key={service.title} delay={i * 0.06}>
              <div className="flex h-full gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 sm:gap-4 sm:p-6">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500 sm:h-11 sm:w-11">
                  {Icon ? <Icon size={20} /> : null}
                </div>
                <div>
                  <h3 className="text-sm font-semibold sm:text-base">
                    {service.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 sm:mt-2 sm:text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
      <div className="mt-8 flex justify-center sm:mt-10">
        <Button href="/contact" className="w-full sm:w-auto">
          Hire Me
          <ArrowRight size={18} />
        </Button>
      </div>
    </Section>
  );
}
