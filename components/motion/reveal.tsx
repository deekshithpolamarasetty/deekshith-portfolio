"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 24,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const hidden = { opacity: 0, y };
  const shown = { opacity: 1, y: 0 };
  const viewportCfg = { once: true, margin: "-80px" };
  const transitionCfg = {
    duration: 0.6,
    delay,
    ease: [0.21, 0.47, 0.32, 0.98] as const,
  };
  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={viewportCfg}
      transition={transitionCfg}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
