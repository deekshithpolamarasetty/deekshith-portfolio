import { cn } from "@/lib/utils";

/**
 * Skeleton loader. Shape-matches the final content it replaces.
 * Uses the `.skeleton` shimmer defined in globals.css (reduced-motion aware).
 */
export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("skeleton rounded-xl", className)} aria-hidden />;
}

/** Card-shaped skeleton matching the bordered surface pattern used site-wide. */
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6",
        className,
      )}
      aria-hidden
    >
      <Skeleton className="h-6 w-24 rounded-full" />
      <Skeleton className="mt-4 h-5 w-3/4" />
      <Skeleton className="mt-2.5 h-4 w-full" />
      <Skeleton className="mt-2 h-4 w-2/3" />
      <div className="mt-5 flex gap-2">
        <Skeleton className="h-5 w-14 rounded-md" />
        <Skeleton className="h-5 w-16 rounded-md" />
        <Skeleton className="h-5 w-12 rounded-md" />
      </div>
    </div>
  );
}
