import { StaticPage } from "@/components/StaticPage";

export const metadata = { title: "Editorial Policy" };

export default function EditorialPolicyPage() {
  return (
    <StaticPage title="Editorial Policy" urTitle="ادارتی پالیسی">
      <ul className="list-disc pl-5 space-y-2">
        <li>Every story is independently written for English and Urdu — not machine translated.</li>
        <li>Important claims are verified before publication; unconfirmed information is labelled as such.</li>
        <li>AI tools may assist with drafting, translation and formatting, but never invent quotes, sources, statistics or events.</li>
        <li>All AI-assisted drafts receive editorial review before publishing.</li>
        <li>Sponsored content is clearly labelled and kept separate from editorial judgement.</li>
      </ul>
      <p className="font-urdu text-lg mt-4" dir="rtl">
        ہر خبر انگریزی اور اردو کے لیے آزادانہ طور پر تحریر کی جاتی ہے، اور تمام اہم دعوے
        اشاعت سے پہلے تصدیق کیے جاتے ہیں۔
      </p>
    </StaticPage>
  );
}
