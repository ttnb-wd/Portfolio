export default function FooterTech() {
  const tech = [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ];

  return (
    <div className="space-y-5">
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
        Built with
      </p>

      <div className="flex flex-wrap gap-3">
        {tech.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}