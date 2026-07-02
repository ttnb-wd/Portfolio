export default function BrowserMockup() {
  return (
    <div className="overflow-hidden rounded-t-3xl border-b border-white/10 bg-zinc-950">
      {/* Browser Header */}
      <div className="flex items-center gap-2 border-b border-white/10 px-5 py-4">
        <div className="h-3 w-3 rounded-full bg-red-400" />
        <div className="h-3 w-3 rounded-full bg-yellow-400" />
        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      {/* Skeleton */}
      <div className="space-y-4 p-6">
        {/* Title */}
        <div className="h-4 w-2/3 rounded-full bg-white/10" />

        {/* Description */}
        <div className="space-y-2">
          <div className="h-3 w-full rounded-full bg-white/5" />
          <div className="h-3 w-5/6 rounded-full bg-white/5" />
          <div className="h-3 w-2/3 rounded-full bg-white/5" />
        </div>

        {/* Tags */}
        <div className="flex gap-2 pt-2">
          <div className="h-7 w-16 rounded-full bg-cyan-500/10" />
          <div className="h-7 w-20 rounded-full bg-cyan-500/10" />
          <div className="h-7 w-14 rounded-full bg-cyan-500/10" />
        </div>
      </div>
    </div>
  );
}