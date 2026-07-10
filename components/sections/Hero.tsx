import Container from "@/components/shared/Container";
import HeroContent from "@/components/hero/HeroContent";
import HeroCodeCard from "@/components/hero/HeroCodeCard";
import ScrollIndicator from "@/components/hero/ScrollIndicator";
import HeroBackground from "@/components/hero/HeroBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate z-0 overflow-hidden bg-[#FAFAFB] pt-28 md:pt-32"
    >
      {/* BACKGROUND */}
      <HeroBackground />

      {/* LIGHT LAYERS (depth system) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-indigo-200/20 blur-[140px]" />
        <div className="absolute right-[-200px] top-1/3 h-[500px] w-[500px] rounded-full bg-sky-200/20 blur-[140px]" />
        <div className="absolute bottom-[-200px] left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-200/15 blur-[160px]" />
      </div>

      <Container className="relative z-10 flex min-h-[100svh] items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">

          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <HeroContent />
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center">

            {/* CARD FLOAT FIELD */}
            <div className="
              relative
              transition-all duration-700 ease-out
              hover:-translate-y-6
              hover:scale-[1.05]
              hover:rotate-[0.6deg]
              hover:shadow-2xl
              will-change-transform
            ">
              <div className="relative z-20">
                <HeroCodeCard />
              </div>
            </div>

          </div>

        </div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}