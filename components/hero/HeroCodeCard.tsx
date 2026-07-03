export default function HeroCodeCard() {
  return (
    <div className="group relative flex items-center justify-center">
      {/* Glow */}
      <div className="absolute -inset-4 rounded-[32px] bg-blue-500/8 blur-3xl transition-all duration-700 group-hover:scale-110" />

      {/* Card */}
      <div className="relative w-full max-w-[500px] overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-blue-300 hover:shadow-blue-100/50">

        {/* Window Header */}
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3 bg-slate-50">

          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-400" />
          </div>

          <span className="text-sm font-medium text-slate-500">
            portfolio.tsx
          </span>

          <div className="w-12" />
        </div>

        {/* Code */}
        <div className="space-y-2 bg-white p-7 font-mono text-[14px] leading-7">

          <p>
            <span className="text-pink-600">const</span>{" "}
            <span className="text-blue-600">developer</span>{" "}
            <span className="text-slate-800">=</span>{" "}
            <span className="text-slate-800">{"{"}</span>
          </p>

          <p className="pl-6">
            <span className="text-purple-600">name</span>
            <span className="text-slate-800">:</span>{" "}
            <span className="text-emerald-600">"Shin Htet Maung"</span>,
          </p>

          <p className="pl-6">
            <span className="text-purple-600">role</span>
            <span className="text-slate-800">:</span>{" "}
            <span className="text-emerald-600">"Frontend Developer"</span>,
          </p>

          <p className="pl-6">
            <span className="text-purple-600">location</span>
            <span className="text-slate-800">:</span>{" "}
            <span className="text-emerald-600">"Yangon, Myanmar"</span>,
          </p>

          <p className="pl-6">
            <span className="text-purple-600">stack</span>
            <span className="text-slate-800">:</span>{" "}
            <span className="text-slate-800">[</span>
          </p>

          <p className="pl-12 text-orange-600">"JavaScript",</p>
          <p className="pl-12 text-sky-600">"React",</p>
          <p className="pl-12 text-slate-800">"Next.js",</p>
          <p className="pl-12 text-blue-600">"TypeScript",</p>
          <p className="pl-12 text-emerald-600">"Supabase"</p>

          <p className="pl-6 text-slate-800">],</p>

          <p className="pl-6">
            <span className="text-purple-600">ai</span>
            <span className="text-slate-800">:</span>{" "}
            <span className="text-blue-600">true</span>,
          </p>

          <p>
            <span className="text-slate-800">{"};"}</span>
          </p>

          <div className="my-5 h-px bg-slate-200" />

          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-medium text-emerald-700">
              ✓ Available
            </span>

            <span className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-[11px] font-medium text-blue-700">
              🤖 AI Assisted
            </span>

            <span className="rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1.5 text-[11px] font-medium text-indigo-700">
              🚀 Open to Work
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}