import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 pt-24 sm:px-6 sm:pt-28 md:pt-32">
      <Skeleton className="h-9 w-40" />
      <Skeleton className="mt-4 h-5 w-full max-w-xl" />
      <div className="mt-8 grid gap-4 sm:gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6"
          >
            <div className="flex gap-2">
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-20 rounded-full" />
            </div>
            <Skeleton className="mt-3 h-6 w-2/3" />
            <Skeleton className="mt-2 h-4 w-full" />
            <Skeleton className="mt-3 h-4 w-32" />
          </div>
        ))}
      </div>
    </div>
  );
}
