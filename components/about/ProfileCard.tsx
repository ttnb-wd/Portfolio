import { MapPin, Code2 } from "lucide-react";

export default function ProfileCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
      {/* Avatar */}
      <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-4xl font-bold text-white">
        SH
      </div>

      <h3 className="mt-6 text-center text-2xl font-bold text-white">
        Shin Htet Maung
      </h3>

      <p className="mt-2 text-center text-zinc-400">
        Frontend Developer
      </p>

      <div className="mt-8 space-y-4">
        <div className="flex items-center gap-3 text-zinc-300">
          <MapPin className="h-5 w-5 text-cyan-400" />
          Yangon, Myanmar
        </div>

        <div className="flex items-center gap-3 text-zinc-300">
          <Code2 className="h-5 w-5 text-cyan-400" />
          AI Assisted Workflow
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-emerald-500/20 bg-emerald-500/10 py-3 text-center text-sm font-medium text-emerald-400">
        🟢 Available for Freelance
      </div>
    </div>
  );
}