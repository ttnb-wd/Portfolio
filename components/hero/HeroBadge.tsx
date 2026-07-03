import { Badge } from "@/components/ui/badge";
import { Sparkles } from "lucide-react";

export default function HeroBadge() {
  return (
    <Badge
      variant="secondary"
      className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-blue-700 shadow-sm font-medium"
    >
      <Sparkles className="mr-2 h-4 w-4 text-blue-600" />
      Available for Freelance
    </Badge>
  );
}