export default function ProjectsHeader() {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-400">
        Featured Projects
      </span>

      <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
        Things I've Built
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
        A collection of modern web applications built with clean architecture,
        responsive design, and AI-assisted development workflows.
      </p>
    </div>
  );
}