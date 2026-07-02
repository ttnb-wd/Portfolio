import Container from "@/components/shared/Container";
import AnimatedSkillsGrid from "@/components/skills/AnimatedSkillsGrid";

export default function Skills() {
  return (
    <section id="skills" className="bg-[#09090B] py-32">
      <Container>
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
            My Skills
          </span>

          <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
            Technologies I Use
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
            I build modern, responsive, and scalable web applications using
            cutting-edge technologies, AI-assisted workflows, and industry best
            practices.
          </p>
        </div>

        <AnimatedSkillsGrid />
      </Container>
    </section>
  );
}