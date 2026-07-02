import { Skeleton, SkeletonCard } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-24 sm:px-6 sm:pt-28 md:pt-32">
      <Skeleton className="h-9 w-72 max-w-full" />
      <Skeleton className="mt-4 h-5 w-full max-w-xl" />
      <div className="mt-8 grid gap-4 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}
      </div>
    </div>
  );
}
