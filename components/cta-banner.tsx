import { Button } from "./ui/button";
import { Reveal } from "./motion/reveal";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-24 lg:pb-28">
      <Reveal>
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-brand-600/20 via-brand-500/10 to-accent-500/20 p-8 text-center sm:rounded-3xl sm:p-10 md:p-16">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
          <div className="relative">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Let&apos;s build something great
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-500 dark:text-slate-300 sm:mt-4 sm:text-base">
              Whether you&apos;re hiring or have a product to ship, I&apos;d
              love to hear about it.
            </p>
            <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:mt-8 sm:flex-row">
              <Button href="/contact" size="lg" className="w-full sm:w-auto">
                Get in touch
                <ArrowRight size={18} />
              </Button>
              <Button
                href="/projects"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                See my work
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
