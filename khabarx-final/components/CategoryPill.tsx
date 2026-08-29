import Link from "next/link";

const slugify = (c: string) => c.toLowerCase();

export function CategoryPill({ category }: { category: string }) {
  return (
    <Link
      href={`/category/${slugify(category)}`}
      className="inline-flex items-center font-mono text-[11px] tracking-[0.14em] uppercase text-brass-deep border border-brass/50 bg-brass-soft px-2.5 py-1 rounded-sm hover:bg-brass/20 transition-colors"
    >
      {category}
    </Link>
  );
}
