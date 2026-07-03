"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 25,
    mass: 0.2,
  });

  return (
    <>
      {/* Glow */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[99999] h-[6px] w-full origin-left bg-blue-400/40 blur-sm"
        aria-hidden="true"
      />

      {/* Main Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-[100000] h-1 w-full origin-left bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600"
        role="progressbar"
        aria-label="Page scroll progress"
        aria-valuenow={Math.round(scrollYProgress.get() * 100)}
        aria-valuemin={0}
        aria-valuemax={100}
      />
    </>
  );
}