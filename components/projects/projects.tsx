import type { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Modern developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Includes animations, modal previews, and responsive UI.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/projects/portfolio.png",
    github: "https://github.com/yourname/portfolio",
    live: "https://your-portfolio.vercel.app",
    status: "completed",
    featured: true,
  },

  {
    title: "AI Calendar App",
    description:
      "Smart calendar application with AI-powered scheduling, reminders, and modern UI experience.",
    tech: ["Next.js", "Supabase", "AI", "TypeScript"],
    image: "/projects/calendar.png",
    github: "#",
    live: "#",
    status: "in-progress",
    featured: false,
  },

  {
    title: "Dashboard UI System",
    description:
      "Reusable admin dashboard UI with analytics cards, charts, and responsive layout system.",
    tech: ["React", "Tailwind", "Charts"],
    image: "/projects/dashboard.png",
    github: "#",
    live: "#",
    status: "coming-soon",
    featured: false,
  },
];