import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroButtons() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-5">

      {/* Primary */}
      <Button
        size="lg"
        className="
        group
        h-12
        rounded-xl
        bg-cyan-500
        px-7
        text-black
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-cyan-400
        hover:shadow-[0_0_40px_rgba(34,211,238,.35)]
        "
      >
        View Projects

        <ArrowRight
          className="
          ml-2
          h-4
          w-4
          transition-transform
          duration-300
          group-hover:translate-x-1
          "
        />
      </Button>

      {/* Secondary */}
      <Button
        variant="outline"
        size="lg"
        className="
        group
        h-12
        rounded-xl
        border-white/10
        bg-white/5
        px-7
        text-white
        backdrop-blur-xl
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-cyan-400/40
        hover:bg-white/10
        "
      >
        <Mail className="mr-2 h-4 w-4" />

        Contact Me
      </Button>

    </div>
  );
}