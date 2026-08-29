"use client";

import Image from "next/image";
import Link from "next/link";
import { Article } from "@/lib/articles";
import { formatEnglishDateShort } from "@/lib/format";
import { useLanguagePref } from "@/lib/language-context";
import { CategoryPill } from "./CategoryPill";

export function NewsCard({ article, size = "default" }: { article: Article; size?: "default" | "compact" }) {
  const { pref } = useLanguagePref();
  const primaryTitle = pref === "en" ? article.englishTitle : article.urduTitle;
  const secondaryTitle = pref === "en" ? article.urduTitle : article.englishTitle;

  return (
    <article className="group flex flex-col">
      <Link href={`/news/${article.slug}`} className="block relative aspect-[16/10] overflow-hidden rounded-sm bg-paper-dim mb-3">
        <Image
          src={article.featuredImage}
          alt={article.imageAlt}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
      </Link>
      <div className="flex items-center gap-2 mb-2">
        <CategoryPill category={article.category} />
        <time dateTime={article.publishedAt} className="font-mono text-[11px] text-ink/50 uppercase tracking-wide">
          {formatEnglishDateShort(article.publishedAt)}
        </time>
      </div>
      <Link href={`/news/${article.slug}`} className="group/link">
        {pref === "ur" ? (
          <h3 className="font-urdu text-xl leading-snug text-ink group-hover/link:text-green transition-colors" dir="rtl">
            {primaryTitle}
          </h3>
        ) : (
          <h3
            className={`font-display font-medium text-ink group-hover/link:text-green transition-colors ${
              size === "compact" ? "text-base leading-snug" : "text-xl leading-snug"
            }`}
          >
            {primaryTitle}
          </h3>
        )}
        <p
          className={`mt-1 text-ink/45 truncate ${pref === "en" ? "font-urdu text-sm" : "text-sm"}`}
          dir={pref === "en" ? "rtl" : "ltr"}
        >
          {secondaryTitle}
        </p>
      </Link>
    </article>
  );
}
