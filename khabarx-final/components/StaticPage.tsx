import { ReactNode } from "react";

export function StaticPage({
  title,
  urTitle,
  children,
}: {
  title: string;
  urTitle: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-content px-4 sm:px-6 py-12">
      <div className="mb-8 border-b border-line pb-4">
        <h1 className="font-display text-3xl font-semibold text-ink">{title}</h1>
        <p className="font-urdu text-lg text-ink/50 mt-1" dir="rtl">{urTitle}</p>
      </div>
      <div className="prose-content space-y-4 text-ink/80 leading-relaxed">{children}</div>
    </div>
  );
}
