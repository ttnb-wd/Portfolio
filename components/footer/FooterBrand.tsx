export default function FooterBrand() {
  return (
    <div className="max-w-lg">
      {/* Eyebrow */}
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-400">
        Full Stack Developer
      </p>

      {/* Name */}
      <h2 className="text-4xl font-black tracking-tight text-white">
        Shin Htet Maung
      </h2>

      {/* Description */}
      <p className="mt-6 text-lg leading-8 text-zinc-400">
        Building modern, performant, and accessible web experiences with
        React, Next.js, TypeScript, Supabase, and AI-assisted workflows.
      </p>

      {/* Small CTA */}
      <p className="mt-6 text-sm text-zinc-500">
        Available for freelance projects, remote opportunities, and exciting
        collaborations.
      </p>
    </div>
  );
}