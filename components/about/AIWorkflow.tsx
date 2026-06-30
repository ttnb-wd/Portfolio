import {
  Lightbulb,
  ClipboardList,
  Bot,
  Code2,
  Bug,
  Rocket,
} from "lucide-react";

const workflow = [
  { icon: Lightbulb, title: "Idea" },
  { icon: ClipboardList, title: "Planning" },
  { icon: Bot, title: "AI Assistance" },
  { icon: Code2, title: "Development" },
  { icon: Bug, title: "Testing" },
  { icon: Rocket, title: "Deployment" },
];

export default function AIWorkflow() {
  return (
    <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      <h3 className="text-2xl font-bold text-white">
        AI-Assisted Workflow
      </h3>

      <p className="mt-3 text-zinc-400 leading-7">
        AI helps me speed up research, planning, debugging, and repetitive tasks
        while I stay responsible for architecture, implementation, and final decisions.
      </p>

      <div className="mt-10 space-y-5">
        {workflow.map((step, index) => {
          const Icon = step.icon;

          return (
            <div key={step.title}>
              <div className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                  <Icon className="h-5 w-5" />
                </div>

                <span className="text-lg font-medium text-white">
                  {step.title}
                </span>
              </div>

              {index !== workflow.length - 1 && (
                <div className="ml-5 mt-2 h-6 w-px bg-white/10" />
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-4">
        <p className="text-sm leading-7 text-cyan-200">
          "I use AI to improve productivity and code quality—not to replace
          problem solving, critical thinking, or software engineering fundamentals."
        </p>
      </div>
    </div>
  );
}