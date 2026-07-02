"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "./skills.client";

const categories = ["All", "Frontend", "Backend", "Database", "Tools", "AI"] as const;

type Category = typeof categories[number];

const tabStyles = (active: boolean) =>
  `rounded-full px-4 py-2 text-sm font-medium transition duration-200 ${
    active
      ? "border border-cyan-500 bg-cyan-500/10 text-cyan-300 shadow-sm shadow-cyan-500/10"
      : "border border-white/10 bg-white/5 text-zinc-300 hover:border-cyan-500/20 hover:bg-white/10"
  }`;

const cardVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -14 },
};

export default function AnimatedSkillsGrid() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filteredSkills = useMemo(
    () =>
      activeCategory === "All"
        ? skills
        : skills.filter((skill) => skill.category === activeCategory),
    [activeCategory]
  );

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-center gap-3">
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={tabStyles(isActive)}
              aria-pressed={isActive}
            >
              {category}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={cardVariants}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
