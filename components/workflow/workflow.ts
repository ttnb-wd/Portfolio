import {
  Lightbulb,
  BrainCircuit,
  Palette,
  Code2,
  Bug,
  Rocket,
} from "lucide-react";

import type { WorkflowStep } from "@/types";

export const workflow: WorkflowStep[] = [
  {
    title: "Idea",
    description:
      "Understand the problem, gather requirements, and define the project goals.",
    icon: Lightbulb,
  },
  {
    title: "AI Planning",
    description:
      "Use AI tools to plan architecture, features, and development tasks.",
    icon: BrainCircuit,
  },
  {
    title: "UI Design",
    description:
      "Design clean, responsive interfaces with modern UI principles.",
    icon: Palette,
  },
  {
    title: "Development",
    description:
      "Build scalable applications using Next.js, TypeScript, and Supabase.",
    icon: Code2,
  },
  {
    title: "Testing",
    description:
      "Test functionality, fix bugs, and improve performance.",
    icon: Bug,
  },
  {
    title: "Deployment",
    description:
      "Deploy applications and continuously improve the user experience.",
    icon: Rocket,
  },
];