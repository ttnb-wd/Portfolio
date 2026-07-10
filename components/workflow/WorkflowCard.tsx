"use client";

import { motion } from "framer-motion";
import type { WorkflowStep } from "@/types";

interface WorkflowCardProps {
  step: WorkflowStep;
}

export default function WorkflowCard({ step }: WorkflowCardProps) {
  const Icon = step.icon;

  return (
    <motion.div
  initial={{
    opacity: 0,
    y: 30,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.3,
  }}
  transition={{
    duration: 0.5,
  }}
  whileHover={{
    y: -6,
  }}
  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 ease-out hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50"
>
      {/* Subtle Glow */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-50/50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative z-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:border-blue-300 group-hover:bg-blue-100">
          <Icon size={32} />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-slate-900">
          {step.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}