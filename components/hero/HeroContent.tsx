"use client";

import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import TechStack from "./TechStack";
import HeroStats from "./HeroStats";
import BlurFadeUp from "./animations/BlurFadeUp";
import StaggerText from "./animations/StaggerText";
import ScaleIn from "./animations/ScaleIn";
import SoftPulse from "./animations/SoftPulse";
import ScrollParallax from "./animations/ScrollParallax";

export default function HeroContent() {
  return (
    <ScrollParallax speed={0.2}>
      <div className="flex w-full max-w-xl flex-col justify-center lg:mx-0">

        {/* BADGE */}
        <SoftPulse>
          <HeroBadge />
        </SoftPulse>

        {/* HEADING (STRIPE STYLE FIXED) */}
        <BlurFadeUp delay={0.1}>
          <h1 className="mt-3 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]">

            <span className="block text-slate-900">
              Full Stack Developer
            </span>

            <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-violet-500 bg-clip-text text-transparent">
              Building modern
            </span>

            <span className="block bg-gradient-to-r from-indigo-500 via-sky-500 to-violet-500 bg-clip-text text-transparent">
              web experiences
            </span>

          </h1>
        </BlurFadeUp>

        {/* DESCRIPTION */}
        <div className="mt-4">
          <StaggerText
            text="I build fast, scalable and modern web applications using React, Next.js, TypeScript, Supabase and AI-assisted workflows."
            className="max-w-lg text-sm leading-6 text-slate-600 sm:text-base"
            delay={0.3}
          />
        </div>

        {/* CTA BUTTONS */}
        <ScaleIn delay={0.5}>
          <div className="mt-6">
            <HeroButtons />
          </div>
        </ScaleIn>

        {/* TECH STACK */}
        <BlurFadeUp delay={0.6}>
          <div className="mt-6 scale-[0.95] origin-left">
            <TechStack />
          </div>
        </BlurFadeUp>

        {/* STATS */}
        <BlurFadeUp delay={0.7}>
          <div className="mt-5 scale-[0.95] origin-left">
            <HeroStats />
          </div>
        </BlurFadeUp>

      </div>
    </ScrollParallax>
  );
}