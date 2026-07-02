"use client";

import { workflow } from "./workflow";
import WorkflowCard from "./WorkflowCard";

export default function WorkflowSteps() {
  return (
    <div className="mx-auto grid max-w-7xl grid gap-8 md:grid-cols-2 xl:grid-cols-3">
      {workflow.map((step) => (
        <WorkflowCard
          key={step.title}
          step={step}
        />
      ))}
    </div>
  );
}