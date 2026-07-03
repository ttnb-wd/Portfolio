export default function FooterBackToTop() {
  return (
    <a
      href="#home"
      className="text-sm text-slate-500 transition hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 rounded-md px-2 py-1"
      aria-label="Return to top of page"
    >
      Back to Top ↑
    </a>
  );
}