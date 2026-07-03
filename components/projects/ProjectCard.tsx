import { memo } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { SiGithub } from "react-icons/si";

import type { Project } from "@/types";
import { Button } from "@/components/ui/button";
import BrowserMockup from "./BrowserMockup";
import { fadeUp } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
}

import React from "react";

function ProjectCard({ project }: ProjectCardProps) {
  const [open, setOpen] = React.useState(false);

  const statusStyles = {
    completed:
      "border-emerald-300 bg-emerald-50 text-emerald-700",
    "in-progress":
      "border-yellow-300 bg-yellow-50 text-yellow-700",
    "coming-soon":
      "border-slate-300 bg-slate-50 text-slate-700",
  };

  const statusDot = {
    completed: "bg-emerald-500",
    "in-progress": "bg-yellow-500",
    "coming-soon": "bg-slate-500",
  };

  const statusText = {
    completed: "Completed",
    "in-progress": "In Progress",
    "coming-soon": "Coming Soon",
  };

  return (
    <>
      <motion.article
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        whileHover={{ y: -6 }}
        className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50"
      >
        {/* Status Badge */}
        <div className="absolute right-3 top-3 z-20">
          <span
            className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px] font-medium shadow-sm ${
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
          className="cursor-zoom-in scale-[0.98] origin-top focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-t-2xl"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setOpen(true);
            }
          }}
          aria-label={`Open preview for ${project.title}`}
        >
          <BrowserMockup />
        </div>

        {/* Content */}
        <div className="flex h-full flex-col p-5">
          <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-600">
            {project.title}
          </h3>

          <p className="mt-2 min-h-[72px] line-clamp-3 text-sm leading-6 text-slate-600">
            {project.description}
          </p>

          {/* Tech */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-medium text-blue-700"
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
                  aria-label={`View live demo of ${project.title}`}
                >
                  <ArrowUpRight className="mr-1 h-3 w-3" aria-hidden="true" />
                  Live Demo
                </a>
              </Button>
            ) : (
              <Button
                size="sm"
                disabled
                className="flex-1 cursor-not-allowed text-xs opacity-50"
                aria-label="Live demo coming soon"
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
                  aria-label={`View source code of ${project.title} on GitHub`}
                >
                  <SiGithub className="mr-1 h-3 w-3" aria-hidden="true" />
                  GitHub
                </a>
              </Button>
            ) : (
              <Button
                size="sm"
                variant="outline"
                disabled
                className="flex-1 cursor-not-allowed text-xs opacity-50"
                aria-label="Source code is private"
              >
                <SiGithub className="mr-1 h-3 w-3" aria-hidden="true" />
                Private
              </Button>
            )}
          </div>
        </div>
      </motion.article>

      {/* Modal */}
      {open && (
        <motion.div
          onClick={() => setOpen(false)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="relative w-full max-w-5xl"
          >
            <h2 id="project-modal-title" className="sr-only">
              {project.title} preview
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="absolute right-4 top-4 z-20 rounded-full bg-white border border-slate-200 p-2 shadow-lg transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              aria-label="Close project preview"
            >
              <X className="h-4 w-4 text-slate-700" aria-hidden="true" />
            </button>

            <BrowserMockup />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default memo(ProjectCard);