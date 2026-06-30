import HeroBackground from "@/components/hero/HeroBackground";
import HeroContent from "@/components/hero/HeroContent";
import HeroCodeCard from "@/components/hero/HeroCodeCard";
import Container from "@/components/shared/Container";
import FadeUp from "@/components/hero/animations/FadeUp";
import Floating from "@/components/hero/animations/Floating";
import ScrollIndicator from "@/components/hero/ScrollIndicator";
import MouseParallax from "@/components/hero/animations/MouseParallax";
import CursorGlow from "@/components/hero/animations/CursorGlow";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#09090B] pt-28"
    >
      <HeroBackground />
      <CursorGlow />
      <Container className="relative z-10 flex min-h-[85vh] items-center">
        <div className="grid w-full items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeUp delay={0.1}>
            <HeroContent />
          </FadeUp>
          <FadeUp delay={0.3}>
            <MouseParallax>
              <Floating>
                <HeroCodeCard />
              </Floating>
            </MouseParallax>
          </FadeUp>
        </div>
      </Container>
      <ScrollIndicator />
    </section>
  );
}