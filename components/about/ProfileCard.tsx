"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Download } from "lucide-react";

export default function ProfileCard() {
  return (
    <motion.div
      whileHover={{
        y: -6,
        scale: 1.015,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-lg transition-all duration-500 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50"
    >
      {/* Ambient Glow */}
      <div className="absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-blue-500/8 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* Glass Reflection */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-60" />

      {/* Avatar */}
      <motion.div
        whileHover={{ scale: 1.06 }}
        transition={{ duration: 0.3 }}
        className="relative mx-auto"
      >
        <div className="absolute inset-0 rounded-full bg-blue-400/20 blur-xl" />

        <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-blue-300 bg-gradient-to-br from-blue-600 via-blue-500 to-blue-700 text-4xl font-bold text-white shadow-lg shadow-blue-500/30">
          SH
        </div>
      </motion.div>

      {/* Name */}
      <h3 className="mt-6 text-center text-2xl font-bold tracking-tight text-slate-900">
        Shin Htet Maung
      </h3>

      <p className="mt-2 text-center text-sm text-slate-600">
        Frontend Developer
      </p>

      {/* Info */}
      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50">
          <MapPin className="h-5 w-5 text-blue-600" />
          <span className="text-sm text-slate-700">
            Yangon, Myanmar
          </span>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 p-3 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50">
          <Code2 className="h-5 w-5 text-blue-600" />
          <span className="text-sm text-slate-700">
            AI Assisted Workflow
          </span>
        </div>
      </div>

      {/* Status */}
      <div className="mt-6 rounded-xl border border-emerald-300 bg-emerald-50 py-3 text-center text-sm font-semibold text-emerald-700">
        🟢 Available for Freelance
      </div>

      {/* Download */}
      <a
        href="/Shin-Htet-Maung-CV.pdf"
        download
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-blue-300 bg-blue-50 px-5 py-3 font-medium text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-100 hover:text-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white"
      >
        <Download className="h-5 w-5 transition-transform duration-300 group-hover:translate-y-0.5" />
        Download CV
      </a>
    </motion.div>
  );
}