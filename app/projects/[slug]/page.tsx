import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Github, ExternalLink } from "lucide-react";
import { getProject, projects } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project not found" };
  return { title: project.title, description: project.tagline };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-4 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 md:pt-32">
      {/* Back link — larger tap target on mobile */}
      <Link
        href="/projects"
        className="inline-flex h-10 items-center gap-2 rounded-lg px-1 text-sm text-slate-500 transition hover:text-brand-500"
      >
        <ArrowLeft size={16} /> Back to projects
      </Link>

      <div className="mt-5 flex flex-wrap items-center gap-3">
        <Badge>{project.category}</Badge>
        {project.links?.live && (
          <a
            href={project.links.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-brand-500 hover:underline"
          >
            <ExternalLink size={13} />
            {project.links.live.replace("https://", "")}
          </a>
        )}
      </div>

      <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        {project.title}
      </h1>
      <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 sm:mt-3 sm:text-base md:text-lg">
        {project.tagline}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 sm:mt-6 sm:gap-6 sm:p-6">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className="text-xl font-bold text-gradient sm:text-2xl">
                {m.value}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 space-y-8 sm:mt-10 sm:space-y-10">
        <section>
          <h2 className="text-lg font-semibold sm:text-xl">The Problem</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:mt-3 sm:text-base">
            {project.problem}
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold sm:text-xl">
            Architecture & Approach
          </h2>
          <ul className="mt-2 space-y-2 sm:mt-3">
            {project.architecture.map((point, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm text-slate-500 dark:text-slate-400 sm:text-base"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold sm:text-xl">Outcome</h2>
          <ul className="mt-2 space-y-2 sm:mt-3">
            {project.outcome.map((point, i) => (
              <li
                key={i}
                className="flex gap-3 text-sm text-slate-500 dark:text-slate-400 sm:text-base"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                {point}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold sm:text-xl">Tech Stack</h2>
          <div className="mt-2 flex flex-wrap gap-2 sm:mt-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-600 dark:text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {(project.links?.live || project.links?.github) && (
          <div className="flex flex-wrap gap-3">
            {project.links?.live && (
              <Button
                href={project.links.live}
                size="sm"
                className="w-full sm:w-auto"
              >
                <ExternalLink size={16} /> Live demo
              </Button>
            )}
            {project.links?.github && (
              <Button
                href={project.links.github}
                variant="outline"
                size="sm"
                className="w-full sm:w-auto"
              >
                <Github size={16} /> Source
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
