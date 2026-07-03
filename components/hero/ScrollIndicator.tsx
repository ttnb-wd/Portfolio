"use client";

import { motion } from "framer-motion";

export default function ScrollIndicator() {
  return (
    <motion.a
      href="#about"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
      className="absolute bottom-4 left-1/2 -translate-x-1/2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-lg"
      aria-label="Scroll down to About section"
    >
      <div className="flex flex-col items-center gap-3">
        <span className="text-xs uppercase tracking-[0.3em] text-slate-500">
          Scroll
        </span>

        <div className="flex h-12 w-7 justify-center rounded-full border border-slate-300 bg-white shadow-sm" aria-hidden="true">
          <motion.div
            animate={{
              y: [4, 20, 4],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
            }}
            className="mt-2 h-2 w-2 rounded-full bg-blue-600"
          />
        </div>
      </div>
    </motion.a>
  );
}