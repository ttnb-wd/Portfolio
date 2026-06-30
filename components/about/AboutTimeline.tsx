const timeline = [
  {
    year: "2023",
    title: "Started Web Development",
    description:
      "Began learning HTML, CSS, and JavaScript while building personal projects.",
  },
  {
    year: "2024",
    title: "Built Modern Websites",
    description:
      "Created responsive websites using React, Next.js, and Tailwind CSS.",
  },
  {
    year: "2025",
    title: "AI-Assisted Development",
    description:
      "Integrated AI tools into my workflow to improve productivity and code quality.",
  },
  {
    year: "2026",
    title: "Open for Freelance",
    description:
      "Building high-quality web applications and continuously improving my skills.",
  },
];

export default function AboutTimeline() {
  return (
    <div className="mt-16">
      <h3 className="mb-10 text-2xl font-bold text-white">
        My Journey
      </h3>

      <div className="space-y-10">
        {timeline.map((item, index) => (
          <div key={item.year} className="relative flex gap-6">
            {/* Line */}
            {index !== timeline.length - 1 && (
              <div className="absolute left-[15px] top-10 h-full w-px bg-white/10" />
            )}

            {/* Dot */}
            <div className="relative z-10 mt-1 h-8 w-8 rounded-full border border-cyan-400/30 bg-cyan-500/20" />

            {/* Content */}
            <div>
              <span className="text-sm font-semibold text-cyan-400">
                {item.year}
              </span>

              <h4 className="mt-1 text-xl font-semibold text-white">
                {item.title}
              </h4>

              <p className="mt-2 leading-7 text-zinc-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}