"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Download } from "lucide-react";

export default function ProfileCard() {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-500/5 backdrop-blur-2xl transition-all duration-500 hover:border-cyan-400/30 hover:shadow-cyan-500/20"
    >
      {/* Glow */}
      <div className="absolute -top-24 left-1/2 h-52 w-52 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Glass Reflection */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60" />

      {/* Avatar */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.3 }}
        className="relative mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 via-sky-500 to-blue-600 text-4xl font-bold text-white shadow-lg shadow-cyan-500/30"
      >
        SH
      </motion.div>

      {/* Name */}
      <h3 className="mt-6 text-center text-2xl font-bold text-white">
        Shin Htet Maung
      </h3>

      <p className="mt-2 text-center text-zinc-400">
        Frontend Developer
      </p>

      {/* Info */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-colors duration-300 hover:border-cyan-400/20 hover:bg-cyan-500/5">
          <MapPin className="h-5 w-5 text-cyan-400" />
          <span className="text-zinc-300">Yangon, Myanmar</span>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/5 p-3 transition-colors duration-300 hover:border-cyan-400/20 hover:bg-cyan-500/5">
          <Code2 className="h-5 w-5 text-cyan-400" />
          <span className="text-zinc-300">AI Assisted Workflow</span>
        </div>
      </div>

      {/* Status */}
      <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-500/10 py-3 text-center text-sm font-medium text-emerald-400">
        🟢 Available for Freelance
      </div>

      {/* CV Button */}
      <a
        href="/Shin-Htet-Maung-CV.pdf"
        download
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 font-medium text-cyan-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-500/20 hover:text-white"
      >
        <Download className="h-5 w-5" />
        Download CV
      </a>
    </motion.div>
  );
}