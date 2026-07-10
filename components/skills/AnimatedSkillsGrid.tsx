"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { skills } from "./skills.client";

const categories = ["All", "Frontend", "Backend", "Database", "Tools", "AI"] as const;

type Category = typeof categories[number];

const tabStyles = (active: boolean) =>
  `rounded-full px-4 py-2 text-sm font-medium transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
    active
      ? "border border-blue-600 bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg shadow-blue-500/30"
      : "border border-slate-300 bg-white text-slate-700 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-sky-50 hover:text-blue-700 hover:shadow-md hover:shadow-blue-100/30"
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
            <motion.button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className={tabStyles(isActive)}
              aria-pressed={isActive}
              aria-label={`Filter skills by ${category}`}
            >
              {category}
            </motion.button>
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
