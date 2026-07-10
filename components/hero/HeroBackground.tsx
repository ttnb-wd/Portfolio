"use client";

import { motion } from "framer-motion";

export default function HeroBackground() {
  return (
    <div
      className="
        pointer-events-none
        fixed inset-0
        -z-10
        overflow-hidden
      "
    >
      {/* NOISE */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:110px_110px] opacity-[0.2]" />

      {/* AURORA 1 */}
      <motion.div
        animate={{ x: [0, 40, -30, 0], y: [0, -30, 20, 0] }}
        transition={{ duration: 40, repeat: Infinity }}
        className="absolute left-1/2 top-[-200px] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-[180px]"
      />

      {/* AURORA 2 */}
      <motion.div
        animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
        transition={{ duration: 45, repeat: Infinity }}
        className="absolute right-[-200px] top-1/3 h-[600px] w-[600px] rounded-full bg-sky-200/20 blur-[160px]"
      />
    </div>
  );
}