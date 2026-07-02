import { Skeleton } from "@/components/ui/skeleton";

// Route-level loading UI. Shape-matches the hero + first section.
export default function Loading() {
  return (
    <div className="mx-auto flex min-h-[100dvh] max-w-6xl flex-col items-center gap-10 px-4 pb-16 pt-24 sm:px-6 md:flex-row md:items-center md:justify-between md:gap-12 md:py-24">
      <div className="w-full max-w-2xl">
        <Skeleton className="h-8 w-64 rounded-full" />
        <Skeleton className="mt-6 h-14 w-3/4" />
        <Skeleton className="mt-4 h-5 w-full max-w-xl" />
        <Skeleton className="mt-2 h-5 w-2/3 max-w-md" />
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Skeleton className="h-12 w-full rounded-full sm:w-40" />
          <Skeleton className="h-12 w-full rounded-full sm:w-32" />
        </div>
        <div className="mt-8 flex gap-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>
      <Skeleton className="h-44 w-44 shrink-0 rounded-full sm:h-56 sm:w-56 md:h-72 md:w-72 lg:h-80 lg:w-80" />
    </div>
  );
}
