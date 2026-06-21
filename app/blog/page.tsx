import type { Metadata } from "next";
import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/motion/reveal";
import { Badge } from "@/components/ui/badge";
import { posts } from "@/lib/blog";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description: "Notes on architecture, performance, and building SaaS.",
};

export default function BlogPage() {
  return (
    <Section className="pt-24 sm:pt-28 md:pt-32">
      <SectionHeading
        eyebrow="Writing"
        title="Blog"
        description="Notes on architecture, performance, and building production systems."
      />
      <div className="grid gap-4 sm:gap-5">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 0.05}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-brand-400/40 hover:bg-brand-500/[0.04] sm:p-6 md:flex-row md:items-center md:justify-between"
            >
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
                <h3 className="mt-2 text-base font-semibold group-hover:text-brand-500 sm:mt-3 sm:text-lg">
                  {post.title}
                </h3>
                <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 sm:mt-2 sm:text-sm">
                  {post.excerpt}
                </p>
                <p className="mt-2 font-mono text-xs text-slate-400 sm:mt-3">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}{" "}
                  &middot; {post.readingTime}
                </p>
              </div>
              <ArrowUpRight
                size={20}
                className="hidden shrink-0 text-slate-400 transition group-hover:text-brand-500 md:block"
              />
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
