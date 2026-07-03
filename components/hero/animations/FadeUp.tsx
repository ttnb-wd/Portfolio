"use client";

import { motion } from "framer-motion";
import type { AnimatedComponentProps } from "@/types";

export default function FadeUp({ children, delay = 0, className = "" }: AnimatedComponentProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}