import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import TechStack from "./TechStack";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="flex flex-col justify-center">
      <HeroBadge />

      <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
        Frontend Developer
        <br />
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-[length:2200%_200%] bg-clip-text text-transparent animate-gradient">
          Building modern web experiences
        </span>
      </h1>

      <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
        I build beautiful, fast, and scalable web applications using React,
        Next.js, TypeScript, Supabase, and AI-assisted workflows.
      </p>

      <div className="mt-10">
        <HeroButtons />
      </div>

      <div className="mt-10">
        <TechStack />
        <HeroStats />
      </div>
    </div>
  );
}