import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import AnimatedSkillsGrid from "@/components/skills/AnimatedSkillsGrid";

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-50 py-32">
      <Container>
        <SectionHeader
          badge="My Skills"
          title="Technologies I Use"
          description="I build modern, responsive, and scalable web applications using cutting-edge technologies, AI-assisted workflows, and industry best practices."
        />

        <AnimatedSkillsGrid />
      </Container>
    </section>
  );
}