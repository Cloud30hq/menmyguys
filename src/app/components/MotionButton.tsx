"use client";

import type { HTMLMotionProps } from "framer-motion";
import { motion, useReducedMotion } from "framer-motion";

type MotionButtonProps = HTMLMotionProps<"button">;

export default function MotionButton({ className, ...props }: MotionButtonProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.button
      whileHover={prefersReducedMotion ? undefined : { scale: 1.03 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
      className={className}
      {...props}
    />
  );
}
