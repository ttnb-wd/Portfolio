import Container from "@/components/shared/Container";
import ProjectsHeader from "@/components/projects/ProjectsHeader";
import ProjectsGrid from "@/components/projects/ProjectsGrid";

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-50 py-32"
    >
      <Container>
        <ProjectsHeader />
        <ProjectsGrid />
      </Container>
    </section>
  );
}