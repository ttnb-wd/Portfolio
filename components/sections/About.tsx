import Container from "@/components/shared/Container";
import AboutHeader from "@/components/about/AboutHeader";
import ProfileCard from "@/components/about/ProfileCard";
import AboutContent from "@/components/about/AboutContent";
import AboutTimeline from "@/components/about/AboutTimeline";
import TechPhilosophy from "@/components/about/TechPhilosophy";
import AIWOrkflow from "@/components/about/AIWorkflow";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#09090B] py-32"
    >
      <Container>
        <AboutHeader />

        <div className="grid gap-12 lg:grid-cols-[380px_1fr]">
          <ProfileCard />
          <div>
            <AboutContent />
            <AboutTimeline />
            <TechPhilosophy />
            <AIWOrkflow />
          </div>
        </div>
      </Container>
    </section>
  );
}