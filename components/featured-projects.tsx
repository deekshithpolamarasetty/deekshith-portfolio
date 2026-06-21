import { Section, SectionHeading } from "./ui/section";
import { Reveal } from "./motion/reveal";
import { ProjectCard } from "./project-card";
import { Button } from "./ui/button";
import { featuredProjects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";

export function FeaturedProjects() {
  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Featured Projects"
        description="Production systems ranked by impact — from multi-tenant SaaS to API platforms."
      />
      {/* 1 col mobile, 2 col md+ */}
      <div className="grid gap-4 sm:gap-5 md:grid-cols-2">
        {featuredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
      <div className="mt-8 flex justify-center sm:mt-10">
        <Button href="/projects" variant="outline" className="w-full sm:w-auto">
          View all projects
          <ArrowRight size={18} />
        </Button>
      </div>
    </Section>
  );
}
