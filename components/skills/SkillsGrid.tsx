"use client";

import SkillCard from "./SkillCard";
import { skills } from "./skills.client";

export default function SkillsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {skills.map((skill) => (
        <SkillCard
          key={skill.name}
          skill={skill}
        />
      ))}
    </div>
  );
}