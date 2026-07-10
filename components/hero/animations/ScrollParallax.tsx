"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { BaseComponentProps } from "@/types";

interface ScrollParallaxProps extends BaseComponentProps {
  speed?: number;
}

export default function ScrollParallax({ 
  children, 
  speed = 0.5, 
  className = "" 
}: ScrollParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
