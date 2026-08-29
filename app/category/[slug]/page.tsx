import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Category, getArticlesByCategory } from "@/lib/articles";
import { NewsCard } from "@/components/NewsCard";

const CATEGORY_MAP: Record<string, Category> = {
  pakistan: "Pakistan",
  punjab: "Punjab",
  lahore: "Lahore",
  world: "World",
  business: "Business",
  technology: "Technology",
  sports: "Sports",
};

const UR_LABEL: Record<Category, string> = {
  Pakistan: "پاکستان",
  Punjab: "پنجاب",
  Lahore: "لاہور",
  World: "دنیا",
  Business: "کاروبار",
  Technology: "ٹیکنالوجی",
  Sports: "کھیل",
};

export function generateStaticParams() {
  return Object.keys(CATEGORY_MAP).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = CATEGORY_MAP[params.slug];
  if (!category) return {};
  return {
    title: `${category} News`,
    description: `Latest ${category} news from Khabarnama, reported in English and Urdu.`,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = CATEGORY_MAP[params.slug];
  if (!category) notFound();

  const items = getArticlesByCategory(category);

  return (
    <div className="mx-auto max-w-shell px-4 sm:px-6 py-10">
      <div className="mb-8 border-b border-line pb-4 flex items-baseline justify-between">
        <h1 className="font-display text-3xl font-semibold text-ink">{category}</h1>
        <span className="font-urdu text-xl text-ink/50" dir="rtl">{UR_LABEL[category]}</span>
      </div>

      {items.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-ink/60">No articles in this section yet.</p>
          <p className="font-urdu text-ink/50 mt-1" dir="rtl">اس زمرے میں ابھی کوئی مضمون موجود نہیں۔</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((a) => (
            <NewsCard key={a.slug} article={a} />
          ))}
        </div>
      )}
    </div>
  );
}
