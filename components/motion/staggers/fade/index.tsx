"use client";

import type { Variants } from "motion/react";

import * as m from "motion/react-m";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 150,
      damping: 19,
      mass: 1.2,
    },
  },
};

function Container({ children, className }: React.HTMLProps<HTMLDivElement>) {
  return (
    <m.div variants={container} initial="hidden" animate="show" className={className}>
      {children}
    </m.div>
  );
}

function Item({ children }: { children: React.ReactNode }) {
  return <m.div variants={item}>{children}</m.div>;
}

export { Container, Item };
