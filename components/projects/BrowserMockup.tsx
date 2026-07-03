"use client";

import { motion } from "framer-motion";
import { Search, Lock, Wifi } from "lucide-react";

export default function BrowserMockup() {
  return (
    <div className="group relative overflow-hidden rounded-t-3xl border border-slate-200 bg-white shadow-xl">

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/8 blur-3xl" />
      </div>

      {/* Browser Header */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-4">

        {/* macOS Buttons */}
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-red-400" />
          <div className="h-3 w-3 rounded-full bg-yellow-400" />
          <div className="h-3 w-3 rounded-full bg-green-400" />
        </div>

        {/* URL */}
        <div className="hidden w-[280px] items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-1.5 md:flex shadow-sm">

          <Lock className="h-3.5 w-3.5 text-emerald-500" />

          <Search className="h-3.5 w-3.5 text-slate-400" />

          <span className="flex-1 truncate text-[11px] text-slate-500">
            https://shinhtet.dev
          </span>

          <Wifi className="h-3.5 w-3.5 text-blue-500" />

        </div>

        {/* Live Badge */}
        <div className="hidden lg:flex items-center gap-2 rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1">

          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

          <span className="text-[10px] font-medium text-emerald-700">
            LIVE
          </span>

        </div>
      </div>

      {/* Preview */}
      <motion.div
        whileHover={{
          scale: 1.035,
        }}
        transition={{
          duration: 0.35,
        }}
        className="relative overflow-hidden bg-slate-50"
      >
        {/* Shine */}
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

        <div className="space-y-7 p-7">

          {/* Hero */}
          <motion.div
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            className="h-7 w-2/3 rounded-full bg-gradient-to-r from-blue-200 to-blue-100"
          />

          {/* Paragraph */}
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: i * 0.15,
                }}
                className={`h-3 rounded-full bg-slate-200 ${
                  i === 2
                    ? "w-5/6"
                    : i === 3
                    ? "w-2/3"
                    : "w-full"
                }`}
              />
            ))}
          </div>

          {/* Dashboard */}
          <div className="grid grid-cols-3 gap-4">

            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-blue-200 bg-blue-50 p-4 shadow-sm"
            >
              <div className="h-3 w-10 rounded-full bg-blue-300" />
              <div className="mt-4 h-10 rounded-xl bg-blue-100" />
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="h-3 w-10 rounded-full bg-slate-300" />
              <div className="mt-4 h-10 rounded-xl bg-slate-100" />
            </motion.div>

            <motion.div
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <div className="h-3 w-10 rounded-full bg-slate-300" />
              <div className="mt-4 h-10 rounded-xl bg-slate-100" />
            </motion.div>

          </div>

          {/* Bottom Chips */}
          <div className="flex flex-wrap gap-2">

            <div className="h-8 w-20 rounded-full bg-blue-100 border border-blue-200" />

            <div className="h-8 w-16 rounded-full bg-slate-100 border border-slate-200" />

            <div className="h-8 w-14 rounded-full bg-slate-100 border border-slate-200" />

          </div>

        </div>
      </motion.div>
    </div>
  );
}