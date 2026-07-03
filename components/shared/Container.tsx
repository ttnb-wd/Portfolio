import type { BaseComponentProps } from "@/types";

export default function Container({ children, className = "" }: BaseComponentProps) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-6 ${className}`}>
      {children}
    </div>
  );
}