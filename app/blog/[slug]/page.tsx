import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { getPost, posts } from "@/lib/blog";
import { Badge } from "@/components/ui/badge";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPost(params.slug);
  if (!post) return { title: "Post not found" };
  return { title: post.title, description: post.excerpt };
}

function renderBody(body: string) {
  return body.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-6 text-lg font-semibold sm:mt-8 sm:text-xl">
          {block.replace("## ", "")}
        </h2>
      );
    }
    return (
      <p
        key={i}
        className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:mt-4 sm:text-base"
      >
        {block}
      </p>
    );
  });
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <article className="mx-auto w-full max-w-3xl px-4 pb-20 pt-24 sm:px-6 sm:pb-24 sm:pt-28 md:pt-32">
      <Link
        href="/blog"
        className="inline-flex h-10 items-center gap-2 rounded-lg px-1 text-sm text-slate-500 transition hover:text-brand-500"
      >
        <ArrowLeft size={16} /> Back to blog
      </Link>

      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>

      <h1 className="mt-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
        {post.title}
      </h1>
      <p className="mt-2 font-mono text-xs text-slate-400 sm:mt-3">
        {new Date(post.date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}{" "}
        &middot; {post.readingTime}
      </p>

      <div className="mt-6 sm:mt-8">{renderBody(post.body)}</div>
    </article>
  );
}
