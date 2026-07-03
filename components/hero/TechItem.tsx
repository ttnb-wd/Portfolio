import type { ReactNode } from "react";

interface TechItemProps {
  icon: ReactNode;
  label: string;
}

export default function TechItem({ icon, label }: TechItemProps) {
  return (
    <div
      className="
      group
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-slate-200
      bg-white
      px-1.5
      py-0.5
      shadow-sm
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-blue-300
      hover:bg-blue-50
      hover:shadow-[0_4px_12px_rgba(37,99,235,0.12)]
      "
      role="listitem"
      aria-label={label}
    >
      <span className="flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:scale-110" aria-hidden="true">
        {icon}
      </span>

      <span className="text-xs font-medium text-slate-700 group-hover:text-blue-700">
        {label}
      </span>
    </div>
  );
}