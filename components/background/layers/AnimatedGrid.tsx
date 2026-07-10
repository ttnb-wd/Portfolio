"use client";

import { motion } from "framer-motion";

export default function AnimatedGrid() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, #635BFF 1px, transparent 1px),
            linear-gradient(to bottom, #635BFF 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          willChange: "transform",
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}
