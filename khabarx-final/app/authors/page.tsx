import { StaticPage } from "@/components/StaticPage";

export const metadata = { title: "Authors" };

export default function AuthorsPage() {
  return (
    <StaticPage title="Authors" urTitle="مصنفین">
      <div className="border border-line rounded-sm p-5">
        <h2 className="font-display text-xl font-semibold text-ink">News Desk</h2>
        <p className="mt-2 text-ink/70">
          "News Desk" is the byline used for stories compiled and verified collectively by the
          KHABARX editorial team, drawing on official statements, on-the-record sources and
          independent verification, rather than a single reporter's byline.
        </p>
        <p className="font-urdu text-lg mt-2" dir="rtl">
          "نیوز ڈیسک" وہ بائی لائن ہے جو خبر ایکس کی ادارتی ٹیم کی جانب سے مشترکہ طور پر مرتب اور
          تصدیق شدہ خبروں کے لیے استعمال کی جاتی ہے۔
        </p>
      </div>
    </StaticPage>
  );
}
