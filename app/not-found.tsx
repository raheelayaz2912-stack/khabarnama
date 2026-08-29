import Link from "next/link";
import { getAllSortedByDate } from "@/lib/articles";

export default function NotFound() {
  const latest = getAllSortedByDate().slice(0, 3);

  return (
    <div className="mx-auto max-w-shell px-4 sm:px-6 py-16 text-center">
      <p className="font-mono text-sm text-brass-deep tracking-[0.14em] uppercase mb-3">404</p>
      <h1 className="font-display text-3xl sm:text-4xl font-semibold text-ink">
        This page isn't there anymore.
      </h1>
      <p className="font-urdu text-xl text-ink/60 mt-2" dir="rtl">
        یہ صفحہ اب دستیاب نہیں ہے۔
      </p>
      <p className="mt-4 text-ink/60">
        The story may have moved, or the link may be out of date. Try searching, or head back to
        the homepage.
      </p>

      <div className="mt-6 flex items-center justify-center gap-3">
        <Link href="/" className="px-5 py-2.5 rounded-full bg-green text-white text-sm font-medium hover:bg-green-deep">
          Go to homepage
        </Link>
        <Link href="/search" className="px-5 py-2.5 rounded-full border border-line-strong text-sm font-medium hover:border-green hover:text-green">
          Search the site
        </Link>
      </div>

      <div className="mt-14 text-left">
        <h2 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45 mb-4 text-center">
          Popular right now
        </h2>
        <ul className="grid sm:grid-cols-3 gap-6">
          {latest.map((a) => (
            <li key={a.slug}>
              <Link href={`/news/${a.slug}`} className="text-ink/80 hover:text-green font-medium">
                {a.englishTitle}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
