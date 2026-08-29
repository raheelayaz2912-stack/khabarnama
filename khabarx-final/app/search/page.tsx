"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { articles } from "@/lib/articles";
import { formatEnglishDateShort } from "@/lib/format";
import { CategoryPill } from "@/components/CategoryPill";

function normalize(s: string) {
  return s.toLowerCase();
}

export default function SearchPage() {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const q = normalize(query.trim());
    if (!q) return [];
    return articles.filter((a) => {
      const haystack = normalize(
        [
          a.englishTitle,
          a.urduTitle,
          a.englishSummary,
          a.urduSummary,
          a.englishBody.join(" "),
          a.urduBody.join(" "),
          a.category,
          a.tags.join(" "),
        ].join(" ")
      );
      return haystack.includes(q);
    });
  }, [query]);

  return (
    <div className="mx-auto max-w-shell px-4 sm:px-6 py-10">
      <h1 className="font-display text-3xl font-semibold text-ink mb-1">Search</h1>
      <p className="font-urdu text-ink/50 mb-6" dir="rtl">تلاش کریں — انگریزی یا اردو میں</p>

      <div className="relative max-w-xl">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search headlines, articles, categories… تلاش کریں…"
          className="w-full rounded-full border border-line-strong bg-paper px-5 py-3 text-ink placeholder:text-ink/40 focus-visible:outline-none focus:border-green"
          autoFocus
        />
      </div>

      <div className="mt-8">
        {query.trim() === "" ? (
          <p className="text-ink/50">Start typing to search across every story.</p>
        ) : results.length === 0 ? (
          <div className="py-16 text-center border border-dashed border-line-strong rounded-sm">
            <p className="text-ink/70 font-medium">No results found for “{query}”.</p>
            <p className="font-urdu text-ink/50 mt-1" dir="rtl">اس تلاش سے کوئی نتیجہ نہیں ملا۔</p>
            <Link href="/" className="inline-block mt-4 text-sm text-green hover:underline">
              Back to homepage
            </Link>
          </div>
        ) : (
          <ul className="space-y-6">
            {results.map((a) => (
              <li key={a.slug}>
                <Link href={`/news/${a.slug}`} className="flex gap-4 group">
                  <div className="relative w-28 h-20 sm:w-40 sm:h-28 shrink-0 overflow-hidden rounded-sm bg-paper-dim">
                    <Image src={a.featuredImage} alt={a.imageAlt} fill sizes="160px" className="object-cover" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <CategoryPill category={a.category} />
                      <span className="font-mono text-[11px] text-ink/45 uppercase">
                        {formatEnglishDateShort(a.publishedAt)}
                      </span>
                    </div>
                    <h2 className="font-display text-lg font-medium text-ink group-hover:text-green transition-colors truncate">
                      {a.englishTitle}
                    </h2>
                    <p className="text-sm text-ink/55 line-clamp-1">{a.englishSummary}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
