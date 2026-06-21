import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site";
import { SocialLinks } from "./social-links";

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 sm:py-12 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <p className="font-mono text-base font-bold sm:text-lg">
            <span className="text-gradient">Deekshith Polamarasetty</span>
          </p>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
            {siteConfig.role} &middot; {siteConfig.location}. Building scalable,
            multi-tenant SaaS systems.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {/* Nav links grid on mobile */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 sm:flex sm:flex-wrap sm:gap-x-6">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-slate-500 transition hover:text-brand-500 dark:text-slate-400"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <SocialLinks />
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-5 sm:px-6">
        <p className="text-center text-xs text-slate-400">
          &copy; {new Date().getFullYear()} {siteConfig.name}.
        </p>
      </div>
    </footer>
  );
}
