import Image from "next/image";
import Link from "next/link";
import { getAllSortedByDate, getArticlesByCategory, Category } from "@/lib/articles";
import { formatEnglishDateTime } from "@/lib/format";
import { NewsCard } from "@/components/NewsCard";
import { CategoryPill } from "@/components/CategoryPill";

const RAILS: { category: Category; heading: string; urHeading: string }[] = [
  { category: "Pakistan", heading: "Pakistan", urHeading: "پاکستان" },
  { category: "World", heading: "World", urHeading: "دنیا" },
  { category: "Business", heading: "Business", urHeading: "کاروبار" },
  { category: "Technology", heading: "Technology & AI", urHeading: "ٹیکنالوجی" },
  { category: "Sports", heading: "Sports / Cricket", urHeading: "کھیل" },
];

export default function HomePage() {
  const all = getAllSortedByDate();
  const [lead, ...rest] = all;
  const latest = rest.slice(0, 4);

  return (
    <div className="mx-auto max-w-shell px-4 sm:px-6 py-8 sm:py-10">
      {/* Lead story */}
      <section aria-labelledby="lead-story-heading" className="mb-14">
        <h2 id="lead-story-heading" className="sr-only">Top story</h2>
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-10">
          <Link href={`/news/${lead.slug}`} className="lg:col-span-3 relative block aspect-[16/10] lg:aspect-[4/3] overflow-hidden rounded-sm bg-paper-dim">
            <Image
              src={lead.featuredImage}
              alt={lead.imageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 60vw, 100vw"
              className="object-cover"
            />
          </Link>
          <div className="lg:col-span-2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-3">
              <CategoryPill category={lead.category} />
              <time dateTime={lead.publishedAt} className="font-mono text-[11px] text-ink/50 uppercase tracking-wide">
                {formatEnglishDateTime(lead.publishedAt)}
              </time>
            </div>
            <Link href={`/news/${lead.slug}`}>
              <h1 className="font-display text-3xl sm:text-4xl font-semibold leading-[1.1] text-ink hover:text-green transition-colors">
                {lead.englishTitle}
              </h1>
            </Link>
            <p className="mt-3 text-ink/70 leading-relaxed">{lead.englishSummary}</p>

            <div className="my-4 flex items-center gap-3">
              <span className="h-px flex-1 bg-line-strong" style={{ borderTop: "1px dashed #3A4560" }} />
              <span className="font-mono text-[10px] tracking-[0.14em] uppercase text-brass-deep bg-brass-soft border border-brass/40 rounded-full px-2.5 py-1">
                اردو
              </span>
              <span className="h-px flex-1 bg-line-strong" style={{ borderTop: "1px dashed #3A4560" }} />
            </div>

            <Link href={`/news/${lead.slug}#urdu`}>
              <h2 className="font-urdu text-2xl leading-snug text-ink hover:text-green transition-colors" dir="rtl">
                {lead.urduTitle}
              </h2>
            </Link>
            <p className="font-urdu mt-2 text-ink/70" dir="rtl">{lead.urduSummary}</p>

            <Link
              href={`/news/${lead.slug}`}
              className="mt-5 inline-flex w-fit items-center gap-2 text-sm font-medium text-green hover:text-green-deep"
            >
              Read full story — English &amp; Urdu
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Latest news */}
      <section aria-labelledby="latest-heading" className="mb-16">
        <div className="flex items-baseline justify-between mb-5 border-b border-line pb-3">
          <h2 id="latest-heading" className="font-display text-xl font-semibold text-ink">
            Latest News
          </h2>
          <span className="font-urdu text-sm text-ink/50" dir="rtl">تازہ ترین</span>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
          {latest.map((a) => (
            <NewsCard key={a.slug} article={a} size="compact" />
          ))}
        </div>
      </section>

      {/* Category rails */}
      {RAILS.map((rail) => {
        const items = getArticlesByCategory(rail.category).slice(0, 3);
        if (items.length === 0) return null;
        return (
          <section key={rail.category} aria-labelledby={`rail-${rail.category}`} className="mb-16">
            <div className="flex items-baseline justify-between mb-5 border-b border-line pb-3">
              <Link href={`/category/${rail.category.toLowerCase()}`} className="group">
                <h2 id={`rail-${rail.category}`} className="font-display text-xl font-semibold text-ink group-hover:text-green transition-colors">
                  {rail.heading}
                </h2>
              </Link>
              <Link
                href={`/category/${rail.category.toLowerCase()}`}
                className="font-urdu text-sm text-ink/50 hover:text-green"
                dir="rtl"
              >
                مزید {rail.urHeading} ›
              </Link>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {items.map((a) => (
                <NewsCard key={a.slug} article={a} />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
