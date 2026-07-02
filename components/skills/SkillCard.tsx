"use client";

import { motion } from "framer-motion";
import type { Skill } from "./skills.client";

type SkillCardProps = {
  skill: Skill;
};

export default function SkillCard({
  skill,
}: SkillCardProps) {
  const Icon = skill.icon;
  const brandColor = skill.color;

  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.035,
        borderColor: brandColor,
        boxShadow: `0 0 0 1px ${brandColor}, 0 24px 80px ${brandColor}40, inset 0 0 45px ${brandColor}20`,
        backgroundImage: `radial-gradient(circle at center, ${brandColor}16, transparent 45%), radial-gradient(circle at center, ${brandColor}0, transparent 100%)`,
      }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 22,
      }}
      className="
        group
        rounded-3xl
        border
        border-white/10
        bg-white/5
        p-7
        backdrop-blur-xl
        transition-all
        duration-300
      "
      style={{
        backgroundImage: "radial-gradient(circle at center, transparent 0%, transparent 100%)",
      }}
    >
      {/* Icon */}
      <div
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-white/5
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        <Icon
          className="h-9 w-9"
          style={{
            color: skill.color,
            display: "block",
            width: 34,
            height: 34,
          }}
        />
      </div>

      {/* Name */}
      <h3 className="mt-6 text-2xl font-bold text-white">
        {skill.name}
      </h3>

      {/* Description */}
      <p className="mt-3 leading-7 text-zinc-400">
        {skill.description}
      </p>

      {/* Category */}
      <span className="mt-6 inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
        {skill.category}
      </span>
    </motion.div>
  );
}