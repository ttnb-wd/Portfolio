export default function ProjectPlaceholder() {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-t-3xl bg-gradient-to-br from-slate-100 via-slate-50 to-white border border-slate-200">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:40px_40px] opacity-40" />

      {/* Glow */}
      <div className="absolute h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-blue-200 bg-blue-50 text-5xl">
          🚀
        </div>

        <h3 className="text-xl font-semibold text-slate-900">
          Preview Coming Soon
        </h3>

        <p className="mt-2 text-center text-sm text-slate-600">
          Screenshot will be added
          <br />
          after deployment
        </p>
      </div>
    </div>
  );
}