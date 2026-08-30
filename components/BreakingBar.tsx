import { getAllSortedByDate } from "@/lib/articles";
import Link from "next/link";

export function BreakingBar() {
  const latest = getAllSortedByDate().slice(0, 5);
  if (latest.length === 0) return null;
  const items = [...latest, ...latest]; // duplicate for a seamless loop

  return (
    <div className="bg-green text-white">
      <div className="mx-auto max-w-shell flex items-stretch overflow-hidden">
        <div className="flex-none flex items-center gap-2 bg-green-deep px-3 sm:px-4 py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brass animate-pulse" aria-hidden="true" />
          <span className="font-mono text-[11px] tracking-[0.16em] uppercase whitespace-nowrap">
            Breaking
          </span>
        </div>
        <div className="relative flex-1 overflow-hidden py-2">
          <div className="ticker-track animate-ticker whitespace-nowrap">
            {items.map((a, i) => (
              <Link
                key={`${a.slug}-${i}`}
                href={`/news/${a.slug}`}
                className="text-sm px-6 hover:underline underline-offset-4 decoration-brass"
              >
                {a.englishTitle}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
