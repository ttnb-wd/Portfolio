"use client";

import { motion } from "framer-motion";
import type { WorkflowStep } from "./workflow";

type WorkflowCardProps = {
  step: WorkflowStep;
};

export default function WorkflowCard({
  step,
}: WorkflowCardProps) {
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
    y: -8,
    scale: 1.02,
  }}
  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40"
>
      {/* Glow */}
      <div className="absolute inset-8 rounded-3x1 bg-cyan-500/0 blur-3xl transition-all duration-500 group-hover:bg-cyan-500/15" />

      <div className="relative z-10">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500/20">
          <Icon size={32} />
        </div>

        <h3 className="mt-6 text-2xl font-bold text-white">
          {step.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}