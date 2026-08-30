export type Category =
  | "Pakistan"
  | "Punjab"
  | "Lahore"
  | "World"
  | "Business"
  | "Technology"
  | "Sports";

export interface SourceLink {
  label: string;
  publisher: string;
}

export interface Article {
  slug: string;
  category: Category;
  tags: string[];
  englishTitle: string;
  urduTitle: string;
  englishSummary: string;
  urduSummary: string;
  englishBody: string[]; // paragraphs
  urduBody: string[]; // paragraphs
  featuredImage: string;
  imageAlt: string;
  imageCaption: string;
  imageCredit: string;
  author: string;
  publishedAt: string; // ISO
  updatedAt: string; // ISO
  sources: SourceLink[];
  seoDescription: string;
}

export const articles: Article[] = [];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: Category): Article[] {
  return articles
    .filter((a) => a.category === category)
    .sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}

export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return articles
    .filter(
      (a) =>
        a.slug !== article.slug &&
        (a.category === article.category || a.tags.some((t) => article.tags.includes(t)))
    )
    .slice(0, limit);
}

export function getAllSortedByDate(): Article[] {
  return [...articles].sort((a, b) => +new Date(b.publishedAt) - +new Date(a.publishedAt));
}
