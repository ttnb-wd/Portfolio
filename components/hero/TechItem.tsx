import { ReactNode } from "react";

type TechItemProps = {
  icon: ReactNode;
  label: string;
};

export default function TechItem({
  icon,
  label,
}: TechItemProps) {
  return (
    <div
      className="
      group
      inline-flex
      items-center
      gap-2
      rounded-full
      border
      border-white/10
      bg-white/5
      px-1.5
      py-0.5
      backdrop-blur-xl
      transition-all
      duration-300
      hover:-translate-y-1
      hover:border-cyan-400/40
      hover:bg-cyan-500/10
      hover:shadow-[0_0_20px_rgba(34,211,238,.15)]
      "
    >
      <span className="flex h-5 w-5 items-center justify-center transition-transform duration-300 group-hover:scale-110">
        {icon}
      </span>

      <span className="text-xs font-medium text-zinc-300 group-hover:text-white">
        {label}
      </span>
    </div>
  );
}