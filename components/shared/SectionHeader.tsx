interface SectionHeaderProps {
  badge: string;
  title: string;
  description: string;
  badgeVariant?: "uppercase" | "pill";
}

export default function SectionHeader({
  badge,
  title,
  description,
  badgeVariant = "pill",
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {badgeVariant === "uppercase" ? (
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-600">
          {badge}
        </span>
      ) : (
        <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
          {badge}
        </span>
      )}

      <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
        {title}
      </h2>

      <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}
