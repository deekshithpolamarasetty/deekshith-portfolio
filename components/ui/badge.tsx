import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-brand-500/20 bg-brand-500/10 px-3 py-1 font-mono text-xs font-medium text-brand-500",
        className,
      )}
    >
      {children}
    </span>
  );
}
