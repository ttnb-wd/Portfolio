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
    <div className="mt-10 grid grid-cols-3 gap-3 md:mt-12 md:gap-5">
      {stats.map((item) => (
        <div
          key={item.label}
          className="
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-4
            text-center
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-blue-300
            hover:bg-blue-50
            hover:shadow-[0_8px_20px_rgba(37,99,235,0.12)]
          "
        >
          <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
            {item.value}
          </h3>

          <p className="mt-2 text-xs leading-5 text-slate-600 md:text-sm">
            {item.label}
          </p>
        </div>
      ))}
    </div>
  );
}