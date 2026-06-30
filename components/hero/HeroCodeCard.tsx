export default function HeroCodeCard() {
  return (
    <div className="group relative flex items-center justify-center">
      {/* Glow */}
      <div className="absolute -inset-6 rounded-[40px] bg-cyan-500/20 blur-3xl transition-all duration-700 group-hover:scale-110" />

      {/* Card */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
      <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/70 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-cyan-400/40 hover:shadow-cyan-500/20">

        {/* Window Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <span className="text-sm font-medium text-zinc-400">
            portfolio.tsx
          </span>

          <div className="w-14" />
        </div>

        {/* Code */}
        <div className="space-y-2 p-8 font-mono text-sm leading-7">

          <p>
            <span className="text-pink-400">const</span>{" "}
            <span className="text-cyan-400">developer</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-white">{"{"}</span>
          </p>

          <p className="pl-6">
            <span className="text-violet-400">name</span>
            <span className="text-white">:</span>{" "}
            <span className="text-emerald-400">"Shin Htet Maung"</span>,
          </p>

          <p className="pl-6">
            <span className="text-violet-400">role</span>
            <span className="text-white">:</span>{" "}
            <span className="text-emerald-400">"Frontend Developer"</span>,
          </p>

          <p className="pl-6">
            <span className="text-violet-400">location</span>
            <span className="text-white">:</span>{" "}
            <span className="text-emerald-400">"Yangon, Myanmar"</span>,
          </p>

          <p className="pl-6">
            <span className="text-violet-400">stack</span>
            <span className="text-white">:</span>{" "}
            <span className="text-white">[</span>
          </p>

          <p className="pl-12 text-yellow-400">"JavaScript",</p>
          <p className="pl-12 text-cyan-400">"React",</p>
          <p className="pl-12 text-cyan-400">"Next.js",</p>
          <p className="pl-12 text-blue-400">"TypeScript",</p>
          <p className="pl-12 text-emerald-400">"Supabase"</p>

          <p className="pl-6 text-white">],</p>

          <p className="pl-6">
            <span className="text-violet-400">ai</span>
            <span className="text-white">:</span>{" "}
            <span className="text-orange-400">true</span>,
          </p>

          <p>
            <span className="text-white">{"};"}</span>
          </p>

          {/* Divider */}
          <div className="my-6 h-px bg-white/10" />

          {/* Status */}
          <div className="flex flex-wrap gap-3">

            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-medium text-emerald-400">
              ✓ Available
            </span>

            <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium text-cyan-400">
              🤖 AI Assisted
            </span>

            <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-400">
              🚀 Open to Work
            </span>

          </div>

        </div>
      </div>
    </div>
  );
}