import { StaticPage } from "@/components/StaticPage";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <StaticPage title="Contact" urTitle="رابطہ کریں">
      <p>For editorial queries, corrections, or tips, reach the newsroom at:</p>
      <p className="font-medium text-ink">newsdesk@sarhadnews.example</p>
      <p className="font-urdu text-lg" dir="rtl">
        ادارتی سوالات، تصحیح یا خبر بھیجنے کے لیے نیوز ڈیسک سے مندرجہ بالا ای میل پر رابطہ کریں۔
      </p>
    </StaticPage>
  );
}
