const stats = [
  {
    value: "15+",
    label: "Projects",
  },
  {
    value: "3+",
    label: "Years of Experience",
  },
  {
    value: "AI",
    label: "Assistant Workflow",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-12 flex flex-wrap gap-10">
      {stats.map((item) => (
        <div key={item.label}>
          <h3 className="text-3xl font-bold text-white">
            {item.value}
          </h3>

          <p className="mt-1 text-sm text-zinc-500">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}