# Khabarnama — Bilingual (English + Urdu) News Site

A working Next.js 14 + Tailwind CSS prototype of the bilingual news experience:
**one story, one image, English article, a divider, Urdu article — all on one page.**

## What's included

- **Homepage** (`app/page.tsx`) — lead story, Latest News grid, category rails
- **Bilingual article page** (`app/news/[slug]/page.tsx`) — the core reading
  experience: breadcrumb → category → English headline/Urdu subtitle →
  byline/dates → featured image → English article → the "seam" divider →
  full Urdu article (RTL) → sources → share buttons → related articles.
  Includes `NewsArticle` + `BreadcrumbList` JSON-LD, canonical URL, and
  Open Graph/Twitter metadata.
- **Category pages** (`app/category/[slug]/page.tsx`)
- **Client-side search** (`app/search/page.tsx`) — matches English or Urdu text
- **Header** with a working EN/اردو preview-language toggle (`lib/language-context.tsx`)
  that switches which language leads on story cards
- **Footer, 404 page, sitemap.xml, robots.txt**, and stub legal/about pages so
  nothing in the footer 404s
- **6 sample bilingual articles** in `lib/articles.ts` — original demo content
  (not scraped or machine-translated from any real outlet), covering Pakistan,
  Lahore, Business, Technology, Sports and World categories

## Design system

- **Colors**: warm paper white, near-black ink, deep green masthead/primary,
  brass/stamp gold for category labels and the language badge
- **Type**: Newsreader (display/headlines), IBM Plex Sans (body/UI), IBM Plex
  Mono (timestamps, category labels, eyebrow text), Noto Nastaliq Urdu (all
  Urdu content)
- **Signature element**: "the seam" — a dashed divider with a small stamp-style
  badge marking where the Urdu edition begins, echoing two editions bound
  together on one page (see `components/LanguageSeam.tsx` and `app/globals.css`)

## Running it locally

Requires Node.js 18.18+ (Node 20 LTS recommended).

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

> Note: `next/font/google` fetches font files at build time, so the machine
> running `npm run build` needs normal internet access to fonts.googleapis.com.
> This is standard for any Next.js site using Google Fonts and requires no
> special config beyond having internet access.

## Content model

Articles live in `lib/articles.ts` as a typed array (`Article[]`) matching the
spec's content model: slug, category, tags, English/Urdu title, summary and
body, featured image + alt/caption/credit, author, published/updated
timestamps, and sources. Swapping this for a real CMS or database later just
means replacing `getArticleBySlug` / `getArticlesByCategory` / etc. with real
data-fetching calls — the page components don't need to change.

## What's NOT included (next slices to build)

This pass covers the reader-facing homepage and article experience only, per
your last answer. Still to build from the original spec: the admin dashboard
and article editor, a real database (Postgres/Supabase), authentication,
content scheduling/autosave, a media library, AdSense placement, and
deployment config. Happy to pick any of these up next.
