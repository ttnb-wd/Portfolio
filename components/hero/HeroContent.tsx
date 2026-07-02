import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import TechStack from "./TechStack";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center">
      <HeroBadge />

      <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight md:text-7xl">
        <span className="block text-white">
          Full Stack Developer
        </span>

        <span className="mt-2 block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-[length:2200%_200%] bg-clip-text text-transparent animate-gradient">
          Building modern
        </span>

        <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-[length:2200%_200%] bg-clip-text text-transparent animate-gradient">
          web experiences
        </span>
      </h1>

      <p className="mt-8 max-w-lg text-lg leading-8 text-zinc-400 md:text-xl">
        I build beautiful, fast, and scalable web applications using React,
        Next.js, TypeScript, Supabase, and AI-assisted workflows.
      </p>

      <div className="mt-10">
        <HeroButtons />
      </div>

      <div className="mt-12">
        <TechStack />
      </div>

      <div className="mt-8">
        <HeroStats />
      </div>
    </div>
  );
}