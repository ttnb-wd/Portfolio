export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:80px_80px] opacity-20" />

      {/* Top Cyan */}
      <div className="absolute left-1/2 top-0 h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[160px]" />

      {/* Left Blue */}
      <div className="absolute left-[-150px] top-1/3 h-[420px] w-[420px] rounded-full bg-blue-500/20 blur-[140px]" />

      {/* Right Purple */}
      <div className="absolute right-[-150px] bottom-0 h-[420px] w-[420px] rounded-full bg-violet-500/20 blur-[140px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-[-200px] left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[180px]" />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#09090b_85%)]" />
    </div>
  );
}