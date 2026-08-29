import { StaticPage } from "@/components/StaticPage";

export const metadata = { title: "Disclaimer" };

export default function DisclaimerPage() {
  return (
    <StaticPage title="Disclaimer" urTitle="دستبرداری">
      <p>
        Khabarnama reports the news to the best of its ability at the time of publication.
        Articles marked as unconfirmed should be treated as developing. Where a story is
        updated, the updated timestamp reflects the most recent revision.
      </p>
      <p className="font-urdu text-lg" dir="rtl">
        خبرنامہ اشاعت کے وقت اپنی بہترین صلاحیت کے مطابق خبر شائع کرتا ہے۔ غیر مصدقہ خبروں کو
        ترقی پذیر سمجھا جانا چاہیے۔
      </p>
    </StaticPage>
  );
}
