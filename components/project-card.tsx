import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { type Project } from "@/lib/projects";
import { Badge } from "./ui/badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-brand-400/40 hover:bg-brand-500/[0.04] sm:p-6"
    >
      <div className="mb-3 flex items-center justify-between sm:mb-4">
        <Badge>{project.category}</Badge>
        <ArrowUpRight
          size={18}
          className="text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-500 sm:hidden"
        />
        <ArrowUpRight
          size={20}
          className="hidden text-slate-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-500 sm:block"
        />
      </div>

      <h3 className="text-base font-semibold sm:text-lg">{project.title}</h3>
      <p className="mt-1.5 flex-1 text-xs text-slate-500 dark:text-slate-400 sm:mt-2 sm:text-sm">
        {project.tagline}
      </p>

      {project.metrics && project.metrics.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-3 sm:mt-4 sm:gap-4">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <span className="text-base font-bold text-brand-500 sm:text-lg">
                {m.value}
              </span>
              <span className="ml-1 text-xs text-slate-500 dark:text-slate-400">
                {m.label}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
        {project.stack.slice(0, 5).map((tech) => (
          <span
            key={tech}
            className="rounded-md border border-white/10 bg-white/5 px-1.5 py-0.5 font-mono text-[10px] text-slate-500 dark:text-slate-400 sm:px-2 sm:text-[11px]"
          >
            {tech}
          </span>
        ))}
        {project.stack.length > 5 && (
          <span className="font-mono text-[10px] text-slate-400 sm:text-[11px]">
            +{project.stack.length - 5}
          </span>
        )}
      </div>
    </Link>
  );
}
