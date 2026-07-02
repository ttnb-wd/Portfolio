import { experiences } from "./experience";
import TimelineItem from "./TimelineItem";

export default function ExperienceTimeline() {
  return (
    <div className="relative mx-auto mt-20 max-w-4xl">
      {/* Vertical Line */}
      <div className="absolute left-3 top-0 h-full w-px bg-gradient-to-b from-cyan-400 via-cyan-500/40 to-transparent" />

      <div className="space-y-16">
        {experiences.map((item) => (
          <TimelineItem
            key={item.year}
            item={item}
          />
        ))}
      </div>
    </div>
  );
}