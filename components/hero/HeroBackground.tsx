"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">

      {/* Light Grid */}
      <motion.div
        animate={{
          opacity: [0.12, 0.18, 0.12],
          scale: [1, 1.02, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:80px_80px]"
      />

      {/* Main Blue Glow */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-blue-500/15 blur-[170px]"
      />

      {/* Left Glow */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-150px] top-1/3 h-[420px] w-[420px] rounded-full bg-blue-400/12 blur-[150px]"
      />

      {/* Right Glow */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-150px] bottom-0 h-[420px] w-[420px] rounded-full bg-blue-300/15 blur-[150px]"
      />

      {/* Bottom Glow */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.12, 0.18, 0.12],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[-200px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-blue-400/12 blur-[180px]"
      />

      {/* Soft White Fade */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_25%,#f8fafc_90%)]" />
    </div>
  );
}