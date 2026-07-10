"use client";

import { motion } from "framer-motion";
import { projects } from "./projects";
import ProjectCard from "./ProjectCard";
import { staggerContainerSlow } from "@/lib/animations";

export default function ProjectsGrid() {
  return (
    <motion.div
      variants={staggerContainerSlow}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="
        mx-auto
        grid
        max-w-7xl
        grid-cols-1
        gap-6
        md:grid-cols-2
        lg:gap-7
        xl:grid-cols-3
        xl:gap-8
      "
    >
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}
    </motion.div>
  );
}