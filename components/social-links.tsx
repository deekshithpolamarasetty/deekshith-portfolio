import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SocialLinks({ className }: { className?: string }) {
  const items = [
    { href: siteConfig.links.github, label: "GitHub", Icon: Github },
    { href: siteConfig.links.linkedin, label: "LinkedIn", Icon: Linkedin },
    { href: `mailto:${siteConfig.email}`, label: "Email", Icon: Mail },
  ];
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-600 transition hover:-translate-y-0.5 hover:border-brand-400 hover:text-brand-500 dark:text-slate-300"
        >
          <Icon size={18} />
        </a>
      ))}
    </div>
  );
}
