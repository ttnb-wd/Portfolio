import { CheckCircle2 } from "lucide-react";

const philosophy = [
  "Clean & Maintainable Code",
  "Responsive UI / UX",
  "Performance First",
  "Accessibility",
  "AI-Assisted Development",
  "Continuous Learning",
];

export default function TechPhilosophy() {
  return (
    <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h3 className="text-2xl font-bold text-white">
        My Development Philosophy
      </h3>

      <p className="mt-4 text-zinc-400 leading-7">
        I believe great software is not only about writing code, but also
        creating fast, accessible, and enjoyable user experiences.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {philosophy.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle2 className="h-5 w-5 text-cyan-400" />

            <span className="text-zinc-300">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}