"use client";

import { motion } from "framer-motion";
import { Search, Lock } from "lucide-react";

export default function BrowserMockup() {
  return (
    <div className="relative overflow-hidden rounded-t-3xl border-b border-white/10 bg-zinc-950">

      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      {/* Browser Header */}
      <div className="flex items-center justify-between border-b border-white/10 bg-zinc-900/90 px-5 py-4">

        {/* Buttons */}
        <div className="flex gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        {/* URL */}
        <div className="hidden w-[260px] items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 md:flex">
          <Lock className="h-3 w-3 text-emerald-400" />
          <Search className="h-3 w-3 text-zinc-500" />
          <span className="truncate text-[11px] text-zinc-500">
            https://preview.local
          </span>
        </div>

        <div className="w-10" />
      </div>

      {/* Preview */}
      <motion.div
        whileHover={{
          scale: 1.04,
        }}
        transition={{
          duration: 0.4,
        }}
        className="relative overflow-hidden"
      >
        {/* Shine */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

        <div className="space-y-6 p-7">

          {/* Hero */}
          <motion.div
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="h-6 w-2/3 rounded-full bg-white/10"
          />

          {/* Lines */}
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: i * 0.2,
                }}
                className={`h-3 rounded-full bg-white/5 ${
                  i === 2
                    ? "w-5/6"
                    : i === 3
                    ? "w-2/3"
                    : "w-full"
                }`}
              />
            ))}
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-3 gap-4">

            <motion.div
              whileHover={{ y: -4 }}
              className="h-24 rounded-2xl bg-cyan-500/10"
            />

            <motion.div
              whileHover={{ y: -4 }}
              className="h-24 rounded-2xl bg-white/5"
            />

            <motion.div
              whileHover={{ y: -4 }}
              className="h-24 rounded-2xl bg-white/5"
            />

          </div>

          {/* Bottom */}
          <div className="flex gap-2">

            <div className="h-8 w-20 rounded-full bg-cyan-500/10" />

            <div className="h-8 w-16 rounded-full bg-white/5" />

            <div className="h-8 w-14 rounded-full bg-white/5" />

          </div>

        </div>
      </motion.div>
    </div>
  );
}