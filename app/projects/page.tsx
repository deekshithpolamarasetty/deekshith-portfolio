import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Production systems and case studies: multi-tenant SaaS, API gateways, and full-stack apps.",
};

export default function ProjectsPage() {
  const sorted = [...projects].sort((a, b) => a.rank - b.rank);
  return (
    <Section className="pt-24 sm:pt-28 md:pt-32">
      <SectionHeading
        eyebrow="Portfolio"
        title="Projects & Case Studies"
        description="A deeper look at the systems I've designed and shipped. Tap any project for the full case study."
      />
      {/* 1 col mobile, 2 col md, 3 col lg */}
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {sorted.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.05}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
