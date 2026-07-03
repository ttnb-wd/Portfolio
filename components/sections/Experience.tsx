import Container from "@/components/shared/Container";
import ExperienceHeader from "@/components/experience/ExperienceHeader";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-50 py-32"
    >
      <Container>
        <ExperienceHeader />
        <ExperienceTimeline />
      </Container>
    </section>
  );
}