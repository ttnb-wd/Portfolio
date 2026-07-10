"use client";

import { motion } from "framer-motion";
import type { BaseComponentProps } from "@/types";

export default function SoftPulse({ children, className = "" }: BaseComponentProps) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ 
        scale: [1, 1.02, 1],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
