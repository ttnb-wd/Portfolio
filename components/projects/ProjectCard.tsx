"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { SiGithub } from "react-icons/si";

import { Button } from "@/components/ui/button";
import BrowserMockup from "./BrowserMockup";
import type { Project } from "./projects";

import { fadeUp } from "@/lib/animations";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = useState(false);

  const statusStyles = {
    completed:
      "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    "in-progress":
      "border-yellow-500/30 bg-yellow-500/10 text-yellow-300",
    "coming-soon":
      "border-zinc-500/30 bg-zinc-500/10 text-zinc-300",
  };

  const statusDot = {
    completed: "bg-emerald-400",
    "in-progress": "bg-yellow-400",
    "coming-soon": "bg-zinc-400",
  };

  const statusText = {
    completed: "Completed",
    "in-progress": "In Progress",
    "coming-soon": "Coming Soon",
  };

  return (
    <>
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        whileHover={{ y: -6 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:shadow-[0_20px_60px_rgba(34,211,238,0.08)]"
      >
        {/* Status Badge */}
        <div className="absolute right-3 top-3 z-20">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px] font-medium backdrop-blur-md ${
              statusStyles[project.status || "coming-soon"]
            }`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                statusDot[project.status || "coming-soon"]
              }`}
            />
            {statusText[project.status || "coming-soon"]}
          </span>
        </div>

        {/* Preview */}
        <div
          onClick={() => setOpen(true)}
          className="cursor-zoom-in scale-[0.98] origin-top"
        >
          <BrowserMockup />
        </div>

        {/* Content */}
        <div className="flex h-full flex-col p-5">
          <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-300">
            {project.title}
          </h3>

          <p className="mt-2 min-h-[72px] line-clamp-3 text-sm leading-6 text-zinc-400">
            {project.description}
          </p>

          {/* Tech */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-[10px] font-medium text-cyan-300"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-auto flex gap-2 pt-6">
            {project.live !== "#" ? (
              <Button asChild size="sm" className="flex-1 text-xs">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ArrowUpRight className="mr-1 h-3 w-3" />
                  Live Demo
                </a>
              </Button>
            ) : (
              <Button
                size="sm"
                disabled
                className="flex-1 cursor-not-allowed text-xs opacity-50"
              >
                Coming Soon
              </Button>
            )}

            {project.github !== "#" ? (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="flex-1 text-xs"
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="mr-1 h-3 w-3" />
                  GitHub
                </a>
              </Button>
            ) : (
              <Button
                size="sm"
                variant="outline"
                disabled
                className="flex-1 cursor-not-allowed text-xs opacity-50"
              >
                <SiGithub className="mr-1 h-3 w-3" />
                Private
              </Button>
            )}
          </div>
        </div>
      </motion.div>

      {/* Modal */}
      <AnimatePresence>
        {open && (
          <motion.div
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2 backdrop-blur transition hover:bg-white/20"
              >
                <X className="h-4 w-4 text-white" />
              </button>

              <BrowserMockup />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}