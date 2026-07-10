"use client";

import { motion, MotionValue } from "framer-motion";

interface MouseGlowProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

export default function MouseGlow({ mouseX, mouseY }: MouseGlowProps) {
  return (
    <motion.div
      className="pointer-events-none absolute"
      style={{
        width: 500,
        height: 500,
        background: "radial-gradient(circle, rgba(99, 91, 255, 0.08) 0%, transparent 60%)",
        filter: "blur(80px)",
        x: mouseX,
        y: mouseY,
        transform: "translate(-50%, -50%)",
        willChange: "transform",
      }}
    />
  );
}
