"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-4 left-1/2 -translate-x-1/2"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
          Scroll
        </span>

        <div className="flex h-12 w-7 justify-center rounded-full border border-white/20">
          <motion.div
            animate={{
              y: [4, 20, 4],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="mt-2 h-2 w-2 rounded-full bg-cyan-400"
          />
        </div>
      </div>
    </motion.a>
  );
}