import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { articles, getArticleBySlug, getRelatedArticles } from "@/lib/articles";
import { formatEnglishDateTime, formatUrduDateTime } from "@/lib/format";
import { CategoryPill } from "@/components/CategoryPill";
import { LanguageSeam } from "@/components/LanguageSeam";
import { NewsCard } from "@/components/NewsCard";
import { ShareButtons } from "@/components/ShareButtons";

const SITE_URL = "https://khabarx.vercel.app";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};
  const url = `${SITE_URL}/news/${article.slug}`;
  return {
    title: article.englishTitle,
    description: article.seoDescription,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.englishTitle,
      description: article.seoDescription,
      url,
      images: [{ url: article.featuredImage }],
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
    },
    twitter: {
      card: "summary_large_image",
      title: article.englishTitle,
      description: article.seoDescription,
      images: [article.featuredImage],
    },
  };
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const related = getRelatedArticles(article);
  const url = `${SITE_URL}/news/${article.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.englishTitle,
    image: [article.featuredImage],
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    description: article.seoDescription,
    author: { "@type": "Organization", name: article.author },
    publisher: {
      "@type": "Organization",
      name: "KHABARX",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      {
        "@type": "ListItem",
        position: 2,
        name: article.category,
        item: `${SITE_URL}/category/${article.category.toLowerCase()}`,
      },
      { "@type": "ListItem", position: 3, name: article.englishTitle, item: url },
    ],
  };

  return (
    <article className="mx-auto max-w-content px-4 sm:px-6 py-8 sm:py-12">
      {/* Structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />

      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-5 text-sm text-ink/50 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-green">Home</Link>
        <span aria-hidden="true">/</span>
        <Link href={`/category/${article.category.toLowerCase()}`} className="hover:text-green">
          {article.category}
        </Link>
        <span aria-hidden="true">/</span>
        <span className="text-ink/70 truncate max-w-[16rem]">{article.englishTitle}</span>
      </nav>

      {/* Category + English headline */}
      <div className="mb-4">
        <CategoryPill category={article.category} />
      </div>
      <h1 className="font-display text-3xl sm:text-[2.75rem] font-semibold leading-[1.08] text-ink">
        {article.englishTitle}
      </h1>
      <p className="mt-2 font-urdu text-lg text-ink/55" dir="rtl">
        {article.urduTitle}
      </p>

      {/* Byline / dates */}
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-ink/60 border-y border-line py-3">
        <span>
          By <span className="font-medium text-ink/80">{article.author}</span>
        </span>
        <span className="text-line-strong" aria-hidden="true">•</span>
        <time dateTime={article.publishedAt} className="font-mono text-xs uppercase tracking-wide">
          Published {formatEnglishDateTime(article.publishedAt)}
        </time>
        {article.updatedAt !== article.publishedAt && (
          <>
            <span className="text-line-strong" aria-hidden="true">•</span>
            <time dateTime={article.updatedAt} className="font-mono text-xs uppercase tracking-wide">
              Updated {formatEnglishDateTime(article.updatedAt)}
            </time>
          </>
        )}
      </div>

      {/* Featured image */}
      <figure className="mt-6">
        <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-paper-dim">
          <Image
            src={article.featuredImage}
            alt={article.imageAlt}
            fill
            priority
            sizes="(min-width: 768px) 42rem, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-2 text-sm text-ink/50 flex justify-between gap-4">
          <span>{article.imageCaption}</span>
          <span className="shrink-0 text-ink/35">{article.imageCredit}</span>
        </figcaption>
      </figure>

      {/* English article */}
      <section aria-labelledby="english-heading" className="mt-8">
        <h2 id="english-heading" className="sr-only">English</h2>
        <p className="text-lg text-ink/80 leading-relaxed font-medium mb-5">{article.englishSummary}</p>
        <div className="space-y-5">
          {article.englishBody.map((para, i) => (
            <p key={i} className="text-[1.05rem] leading-[1.85] text-ink/85 max-w-content">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* The seam — divider between English and Urdu editions */}
      <div id="urdu">
        <LanguageSeam />
      </div>

      {/* Urdu article */}
      <section aria-labelledby="urdu-heading" dir="rtl" className="urdu">
        <h2 id="urdu-heading" className="urdu-heading text-2xl sm:text-3xl font-bold text-ink mb-4">
          {article.urduTitle}
        </h2>
        <p className="text-xl text-ink/80 font-medium mb-5">{article.urduSummary}</p>
        <div className="space-y-5">
          {article.urduBody.map((para, i) => (
            <p key={i} className="text-xl leading-[2.2] text-ink/85">
              {para}
            </p>
          ))}
        </div>
      </section>

      {/* Sources */}
      <section aria-labelledby="sources-heading" className="mt-10 pt-6 border-t border-line">
        <h2 id="sources-heading" className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45 mb-3">
          Sources
        </h2>
        <ul className="space-y-1.5">
          {article.sources.map((s, i) => (
            <li key={i} className="text-sm text-ink/70">
              {s.label} <span className="text-ink/40">— {s.publisher}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Share */}
      <div className="mt-8">
        <ShareButtons url={url} title={article.englishTitle} />
      </div>

      {/* Related news */}
      {related.length > 0 && (
        <section aria-labelledby="related-heading" className="mt-14 pt-8 border-t border-line">
          <h2 id="related-heading" className="font-display text-xl font-semibold text-ink mb-5">
            Related News
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {related.map((a) => (
              <NewsCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
