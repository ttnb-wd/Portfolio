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
    <div className="mt-14 md:mt-16">
      <h3 className="mb-10 text-xl font-bold text-slate-900 md:text-2xl">
        My Journey
      </h3>

      <div className="space-y-10">
        {timeline.map((item, index) => (
          <div
            key={item.year}
            className="group relative flex gap-5 transition-all duration-300 hover:translate-x-1"
          >
            {/* Line */}
            {index !== timeline.length - 1 && (
              <div className="absolute left-[15px] top-10 h-full w-px bg-gradient-to-b from-slate-300 via-slate-200 to-transparent" />
            )}

            {/* Dot */}
            <div className="relative mt-1 h-8 w-8 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-blue-500/15 blur-md opacity-70 group-hover:opacity-100" />
              <div className="relative h-8 w-8 rounded-full border border-blue-300 bg-blue-50" />
            </div>

            {/* Content */}
            <div>
              <span className="text-xs font-semibold tracking-wide text-blue-600 md:text-sm">
                {item.year}
              </span>

              <h4 className="mt-1 text-lg font-semibold text-slate-900 md:text-xl">
                {item.title}
              </h4>

              <p className="mt-2 max-w-xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}