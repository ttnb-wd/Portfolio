import { projects } from "./projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsGrid() {
  return (
    <div className="grid gap-8">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          project={project}
        />
      ))}
    </div>
  );
}