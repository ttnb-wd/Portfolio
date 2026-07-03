"use client";

import { motion } from "framer-motion";
import type { BaseComponentProps } from "@/types";

export default function Floating({ children, className = "" }: BaseComponentProps) {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}