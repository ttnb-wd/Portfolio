export default function FooterTech() {
  const tech = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ];

  return (
    <div className="space-y-5">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-zinc-500">
        Built with
      </p>

      <div className="flex flex-wrap gap-3">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 transition hover:border-cyan-400/40 hover:text-cyan-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}