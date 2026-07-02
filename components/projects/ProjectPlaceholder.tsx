export default function ProjectPlaceholder() {
  return (
    <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-t-3xl bg-gradient-to-br from-zinc-900 via-zinc-950 to-black">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:40px_40px] opacity-10" />

      {/* Glow */}
      <div className="absolute h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl border border-cyan-500/20 bg-cyan-500/10 text-5xl">
          🚀
        </div>

        <h3 className="text-xl font-semibold text-white">
          Preview Coming Soon
        </h3>

        <p className="mt-2 text-center text-sm text-zinc-400">
          Screenshot will be added
          <br />
          after deployment
        </p>
      </div>
    </div>
  );
}