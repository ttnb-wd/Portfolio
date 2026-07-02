export type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  live: string;
};

export const projects: Project[] = [
  {
    title: "Coming Soon",
    description:
      "This project will be added soon with a live demo and source code.",
    tech: ["Next.js", "TypeScript"],
    image: "/projects/placeholder.png",
    github: "#",
    live: "#",
  },
];