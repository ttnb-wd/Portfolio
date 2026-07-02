export type Experience = {
  year: string;
  title: string;
  description: string;
  stack: string[];
};

export const experiences: Experience[] = [
  {
    year: "2023",
    title: "Started Web Development",
    description:
      "Began learning the fundamentals of web development, including HTML, CSS, and JavaScript.",
    stack: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2024",
    title: "Built Modern Frontend Projects",
    description:
      "Created responsive websites and interactive user interfaces using React and Tailwind CSS.",
    stack: ["React", "Tailwind CSS"],
  },
  {
    year: "2025",
    title: "Learning Full Stack Development",
    description:
      "Focused on building scalable applications with Next.js, TypeScript, and Supabase.",
    stack: ["Next.js", "TypeScript", "Supabase"],
  },
  {
    year: "2026",
    title: "Building AI-powered Applications",
    description:
      "Developing modern applications with AI-assisted workflows, performance optimization, and clean UI design.",
    stack: ["AI", "Next.js", "Performance"],
  },
];