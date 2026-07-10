"use client";

import { motion } from "framer-motion";

export default function HeroCodeCard() {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group relative flex items-center justify-center"
    >
      {/* STRIPE-STYLE SOFT GLOW */}
      <div className="absolute -inset-8 rounded-[40px] bg-indigo-500/5 blur-[80px] opacity-80 transition-opacity duration-500 group-hover:opacity-100" />

      {/* MAIN CARD */}
      <div className="
        relative w-full max-w-[420px]
        overflow-hidden rounded-2xl
        border border-slate-200/80
        bg-white
        shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]
        transition-all duration-500
        group-hover:-translate-y-2
        group-hover:border-slate-300
      ">

        {/* HEADER */}
        <div className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-2.5">

          <div className="flex items-center gap-1.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          </div>

          <span className="text-[11px] font-medium text-slate-400 tracking-wide">
            portfolio.tsx
          </span>

          <div className="w-6" />
        </div>

        {/* CODE */}
        <div className="space-y-1.5 p-5 font-mono text-[13px] leading-6 text-slate-700">

          <p>
            <span className="text-pink-500">const</span>{" "}
            <span className="text-slate-900">developer</span>{" "}
            <span className="text-slate-500">=</span>{" "}
            <span className="text-slate-900">{"{"}</span>
          </p>

          <p className="pl-4">
            <span className="text-slate-500">name:</span>{" "}
            <span className="text-slate-800">"Shin Htet Maung"</span>,
          </p>

          <p className="pl-4">
            <span className="text-slate-500">role:</span>{" "}
            <span className="text-slate-800">"Frontend Developer"</span>,
          </p>

          <p className="pl-4">
            <span className="text-slate-500">location:</span>{" "}
            <span className="text-slate-800">"Yangon, Myanmar"</span>,
          </p>

          <p className="pl-4">
            <span className="text-slate-500">stack:</span>{" "}
            <span className="text-slate-500">["React", "Next.js", "TS"]</span>,
          </p>

          <p className="pl-4">
            <span className="text-slate-500">ai:</span>{" "}
            <span className="text-indigo-500">true</span>
          </p>

          <p className="text-slate-900">{"};"}</p>

          {/* DIVIDER */}
          <div className="my-3 h-px bg-slate-100" />

          {/* STATUS */}
          <div className="flex flex-wrap gap-2">

            <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[10px] font-medium text-emerald-600 border border-emerald-100">
              Available
            </span>

            <span className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] font-medium text-slate-600 border border-slate-100">
              AI Assisted
            </span>

            <span className="rounded-full bg-indigo-50 px-2.5 py-1 text-[10px] font-medium text-indigo-600 border border-indigo-100">
              Open to Work
            </span>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
