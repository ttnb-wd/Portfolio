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
      className="relative overflow-x-hidden bg-slate-50 pt-24 md:pt-28"
    >
      <HeroBackground />

      <CursorGlow />

      <Container className="relative z-10 flex min-h-[100svh] items-center py-10 md:py-0">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
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