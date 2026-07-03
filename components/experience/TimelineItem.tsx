"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/types";

interface TimelineItemProps {
  item: Experience;
}

export default function TimelineItem({
  item,
}: TimelineItemProps) {
  return (
    <motion.div
      className="relative pl-16"
      initial={{
        opacity: 0,
        y: 40,
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
        duration: 0.6,
      }}
      role="article"
      aria-label={`${item.title} - ${item.year}`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-4 border-slate-50 bg-blue-600 shadow-lg shadow-blue-500/40" aria-hidden="true">
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>

      {/* Card */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-lg hover:shadow-blue-100/50">
        <span className="text-sm font-semibold tracking-wider text-blue-600">
          {item.year}
        </span>

        <h3 className="mt-2 text-2xl font-bold text-slate-900">
          {item.title}
        </h3>

        <p className="mt-4 leading-7 text-slate-600">
          {item.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2" role="list" aria-label="Technologies used">
          {item.stack.map((tech) => (
            <span
              key={tech}
              role="listitem"
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}