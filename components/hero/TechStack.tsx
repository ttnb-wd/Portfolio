import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiSupabase,
} from "react-icons/si";

import TechItem from "./TechItem";

export default function TechStack() {
  return (
    <div className="mt-10 flex flex-wrap justify-start gap-3" role="list" aria-label="Technologies I use">

      <TechItem
        icon={<SiHtml5 className="h-3.5 w-3.5 text-orange-400" />}
        label="HTML"
      />

      <TechItem
        icon={<SiCss className="h-3.5 w-3.5 text-blue-400" />}
        label="CSS"
      />

      <TechItem
        icon={<SiJavascript className="h-3.5 w-3.5 text-yellow-400" />}
        label="JavaScript"
      />

      <TechItem
        icon={<SiReact className="h-3.5 w-3.5 text-cyan-400" />}
        label="React"
      />

      <TechItem
        icon={<SiNextdotjs className="h-3.5 w-3.5 text-white" />}
        label="Next.js"
      />

      <TechItem
        icon={<SiTypescript className="h-3.5 w-3.5 text-blue-500" />}
        label="TypeScript"
      />

      <TechItem
        icon={<SiSupabase className="h-3.5 w-3.5 text-emerald-400" />}
        label="Supabase"
      />

    </div>
  );
}