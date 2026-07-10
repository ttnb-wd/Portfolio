"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  ClipboardList,
  Bot,
  Code2,
  Bug,
  Rocket,
} from "lucide-react";

const workflow = [
  { icon: Lightbulb, title: "Idea" },
  { icon: ClipboardList, title: "Planning" },
  { icon: Bot, title: "AI Assistance" },
  { icon: Code2, title: "Development" },
  { icon: Bug, title: "Testing" },
  { icon: Rocket, title: "Deployment" },
];

export default function AIWorkflow() {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 ease-out hover:border-blue-300 hover:shadow-xl hover:shadow-blue-100/50 md:mt-16 md:p-8"
    >
      <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
        AI-Assisted Workflow
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
        AI helps me speed up research, planning, debugging, and repetitive
        tasks while I stay responsible for architecture, implementation, and
        final engineering decisions.
      </p>

      <div className="mt-10 space-y-5">
        {workflow.map((step, index) => {
          const Icon = step.icon;

          return (
            <div
              key={step.title}
              className="group"
            >
              <div className="flex items-center gap-4 rounded-2xl p-2 transition-all duration-300 hover:bg-blue-50">
                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-blue-300 bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-100">
                  <Icon className="h-5 w-5" />
                </div>

                <span className="text-base font-medium text-slate-900 md:text-lg">
                  {step.title}
                </span>
              </div>

              {index !== workflow.length - 1 && (
                <div className="ml-[22px] mt-2 h-6 w-px bg-gradient-to-b from-blue-300 to-transparent" />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 to-sky-50 p-5">
        <p className="text-sm leading-7 italic text-blue-700">
          "I use AI to improve productivity and code quality—not to replace
          problem solving, critical thinking, or software engineering
          fundamentals."
        </p>
      </div>
    </motion.div>
  );
}
