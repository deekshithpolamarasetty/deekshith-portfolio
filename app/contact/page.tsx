import type { Metadata } from "next";
import { Section, SectionHeading } from "@/components/ui/section";
import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";
import { siteConfig } from "@/lib/site";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch for opportunities, freelance work, or collaboration.",
};

export default function ContactPage() {
  const details = [
    { Icon: Mail, label: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { Icon: Phone, label: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { Icon: MapPin, label: siteConfig.location, href: undefined },
  ];

  return (
    <Section className="pt-24 sm:pt-28 md:pt-32">
      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        description="Hiring, freelance project, or just want to connect? Send a message and I'll reply soon."
      />
      {/* Stack on mobile/tablet, side-by-side on large screens */}
      <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-10">
        {/* Contact details */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-1">
            {details.map(({ Icon, label, href }) => {
              const inner = (
                <span className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-300">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                    <Icon size={18} />
                  </span>
                  <span className="break-all">{label}</span>
                </span>
              );
              return href ? (
                <a
                  key={label}
                  href={href}
                  className="block rounded-xl p-1 transition hover:text-brand-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400"
                >
                  {inner}
                </a>
              ) : (
                <div key={label} className="p-1">
                  {inner}
                </div>
              );
            })}
          </div>
          <SocialLinks />
          {/* Availability note */}
          <div className="rounded-xl border border-accent-500/20 bg-accent-500/10 p-4 text-sm text-slate-600 dark:text-slate-300">
            <span className="font-medium text-accent-500">Available now</span>{" "}
            for full-time roles and freelance projects.
          </div>
        </div>

        {/* Contact form */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </Section>
  );
}
