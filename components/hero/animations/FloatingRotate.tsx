"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { BaseComponentProps } from "@/types";

export default function FloatingRotate({ children, className = "" }: BaseComponentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={ref}
      style={{ 
        y,
        rotate,
      }}
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
