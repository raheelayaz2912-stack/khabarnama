import { StaticPage } from "@/components/StaticPage";

export const metadata = { title: "Corrections Policy" };

export default function CorrectionsPolicyPage() {
  return (
    <StaticPage title="Corrections Policy" urTitle="تصحیح کی پالیسی">
      <p>
        When a factual error is identified, the article is corrected and the "Updated" timestamp
        is revised to reflect the change. The original publication date is never altered.
        Significant corrections are noted within the article.
      </p>
      <p className="font-urdu text-lg" dir="rtl">
        غلطی کی نشاندہی ہونے پر مضمون کی تصحیح کی جاتی ہے اور "تازہ کاری" کا وقت اپ ڈیٹ کیا جاتا
        ہے، جبکہ اصل اشاعت کی تاریخ کبھی تبدیل نہیں کی جاتی۔
      </p>
    </StaticPage>
  );
}
