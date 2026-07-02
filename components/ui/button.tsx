import Link from "next/link";
import { cn } from "@/lib/utils";
import { type ComponentProps } from "react";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand-600 text-white hover:bg-brand-500 shadow-lg shadow-brand-600/20",
  outline:
    "border border-white/15 bg-white/5 text-slate-700 hover:border-brand-400 hover:text-brand-500 dark:text-slate-200",
  ghost: "text-slate-600 hover:text-brand-500 dark:text-slate-300",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-sm",
  lg: "h-12 px-7 text-base",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--background))] disabled:pointer-events-none disabled:opacity-50";

type ButtonAsButton = ComponentProps<"button"> & {
  href?: undefined;
  variant?: Variant;
  size?: Size;
};
type ButtonAsLink = ComponentProps<typeof Link> & {
  href: string;
  variant?: Variant;
  size?: Size;
};

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { variant = "primary", size = "md", className, ...rest } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return <Link href={href} className={classes} {...linkRest} />;
  }
  return <button className={classes} {...(rest as ButtonAsButton)} />;
}
