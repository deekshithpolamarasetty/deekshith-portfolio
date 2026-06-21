"use client";

import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { metrics } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(motionVal, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, value, motionVal]);

  return (
    <span
      ref={ref}
      className="text-3xl font-bold text-gradient sm:text-4xl md:text-5xl"
    >
      {display}
      {suffix}
    </span>
  );
}

export function Metrics() {
  const wrap = { opacity: 0, y: 20 };
  const wrapShown = { opacity: 1, y: 0 };
  const vp = { once: true, margin: "-60px" };
  return (
    <section className="border-y border-white/10 bg-brand-500/[0.03]">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 sm:py-14 md:grid-cols-4">
        {metrics.map((m, i) => {
          const t = { duration: 0.5, delay: i * 0.1 };
          return (
            <motion.div
              key={m.label}
              initial={wrap}
              whileInView={wrapShown}
              viewport={vp}
              transition={t}
              className="flex flex-col items-center text-center"
            >
              <Counter value={m.value} suffix={m.suffix} />
              <p className="mt-1.5 text-xs text-slate-500 dark:text-slate-400 sm:mt-2 sm:text-sm">
                {m.label}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
