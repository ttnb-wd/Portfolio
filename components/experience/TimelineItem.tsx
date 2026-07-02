"use client";
import type { Experience } from "./experience";
import { motion } from "framer-motion";

type TimelineItemProps = {
  item: Experience;
};

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
    >
      {/* Timeline Dot */}
      <div className="absolute left-0 top-2 flex h-6 w-6 items-center justify-center rounded-full border-4 border-[#09090B] bg-cyan-400 shadow-[0_0_35px_rgba(34,211,238,1)]">
        <div className="h-2 w-2 rounded-full bg-white" />
      </div>

      {/* Card */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(34,211,238,0.08)]">
        <span className="text-sm font-semibold tracking-wider text-cyan-400">
          {item.year}
        </span>

        <h3 className="mt-2 text-2xl font-bold text-white">
          {item.title}
        </h3>

        <p className="mt-4 leading-7 text-zinc-400">
          {item.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}