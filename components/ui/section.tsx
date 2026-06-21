import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 md:py-20 lg:py-28",
        className,
      )}
    >
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-8 max-w-2xl md:mb-12">
      {eyebrow && (
        <p className="mb-2 font-mono text-xs font-medium uppercase tracking-widest text-brand-500 sm:mb-3 sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}
