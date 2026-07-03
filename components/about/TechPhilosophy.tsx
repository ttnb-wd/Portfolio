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
    <div className="mt-14 rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-lg hover:shadow-blue-100/50">
      <h3 className="text-xl font-bold text-slate-900 md:text-2xl">
        My Development Philosophy
      </h3>

      <p className="mt-4 text-sm leading-7 text-slate-600 md:text-base md:leading-8">
        I believe great software is not only about writing code, but also
        creating fast, accessible, and enjoyable user experiences.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {philosophy.map((item) => (
          <div
            key={item}
            className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 transition-all duration-300 hover:border-blue-300 hover:bg-blue-50"
          >
            <CheckCircle2 className="h-5 w-5 text-blue-600" />

            <span className="text-sm text-slate-700">
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}