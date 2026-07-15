import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right" | "scale" | "fade";

const variantsFor = (dir: Direction): Variants => {
  const distance = 32;
  const base: Record<Direction, Variants> = {
    up: { hidden: { opacity: 0, y: distance }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -distance }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -distance }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: distance }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.94 }, visible: { opacity: 1, scale: 1 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  };
  return base[dir];
};

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li";
}

export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.65,
  className,
  as = "div",
}: RevealProps) {
  const MotionTag = motion[as];
  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={variantsFor(direction)}
    >
      {children}
    </MotionTag>
  );
}
