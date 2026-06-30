import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <Badge
      variant="secondary"
      className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-white backdrop-blur-md"
    >
      <Sparkles className="mr-2 h-4 w-4 text-cyan-400" />
      Available for Freelance
    </Badge>
  );
}