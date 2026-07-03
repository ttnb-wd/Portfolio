import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import TechStack from "./TechStack";
import HeroStats from "./HeroStats";

export default function HeroContent() {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-col justify-center lg:mx-0">
      <HeroBadge />

      <h1 className="mt-6 text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl md:mt-8 md:text-6xl lg:text-7xl">
        <span className="block text-slate-900">
          Full Stack Developer
        </span>

        <span className="mt-2 block animate-gradient bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-[length:200%_200%] bg-clip-text text-transparent">
          Building modern
        </span>

        <span className="block animate-gradient bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 bg-[length:200%_200%] bg-clip-text text-transparent">
          web experiences
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-7 text-slate-600 sm:text-lg md:mt-8 md:text-xl md:leading-8">
        I build beautiful, fast, and scalable web applications using React,
        Next.js, TypeScript, Supabase, and AI-assisted workflows.
      </p>

      <div className="mt-8 md:mt-10">
        <HeroButtons />
      </div>

      <div className="mt-10 md:mt-12">
        <TechStack />
      </div>

      <div className="mt-8">
        <HeroStats />
      </div>
    </div>
  );
}