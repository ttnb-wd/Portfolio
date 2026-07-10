"use client";

import { motion } from "framer-motion";
import type { BaseComponentProps } from "@/types";

interface BlurFadeUpProps extends BaseComponentProps {
  delay?: number;
}

export default function BlurFadeUp({ children, delay = 0, className = "" }: BlurFadeUpProps) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 24,
        filter: "blur(8px)",
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 1,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
