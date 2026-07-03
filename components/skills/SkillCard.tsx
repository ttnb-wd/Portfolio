"use client";

import { motion } from "framer-motion";
import type { Skill } from "@/types";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({
  skill,
}: SkillCardProps) {
  const Icon = skill.icon;
  const brandColor = skill.color;

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.025,
      }}
      transition={{
        type: "spring",
        stiffness: 240,
        damping: 22,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:border-blue-300
        hover:shadow-lg
        hover:shadow-blue-100/50
        focus-within:border-blue-300
        focus-within:shadow-lg
        focus-within:shadow-blue-100/50
      "
      tabIndex={0}
      role="article"
      aria-label={`${skill.name} - ${skill.category}`}
    >
      {/* Ambient Glow */}
      <div
        className="absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-30"
        style={{
          background: `${brandColor}`,
        }}
        aria-hidden="true"
      />

      {/* Icon */}
      <div
        className="
          relative
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          border
          border-slate-200
          bg-slate-50
          transition-all
          duration-300
          group-hover:scale-110
          group-hover:border-blue-300
          group-hover:bg-blue-50
        "
        aria-hidden="true"
      >
        <Icon
          className="h-8 w-8"
          style={{
            color: brandColor,
          }}
        />
      </div>

      {/* Name */}
      <h3 className="mt-6 text-xl font-bold tracking-tight text-slate-900">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="mt-3 text-sm leading-7 text-slate-600">
        {skill.description}
      </p>

      {/* Category */}
      <span
        className="
          mt-6
          inline-flex
          rounded-full
          border
          px-3
          py-1.5
          text-xs
          font-medium
        "
        style={{
          borderColor: `${brandColor}40`,
          backgroundColor: `${brandColor}10`,
          color: brandColor,
        }}
      >
        {skill.category}
      </span>
    </motion.div>
  );
}