import { StaticPage } from "@/components/StaticPage";

export const metadata = { title: "About Us" };

export default function AboutPage() {
  return (
    <StaticPage title="About Us" urTitle="ہمارے بارے میں">
      <p>
        Khabarnama is a bilingual digital publication reporting Pakistan and world news in
        English and Urdu — on the same page, side by side. Every story is independently
        researched and written for each language, rather than mechanically translated.
      </p>
      <p>
        Our newsroom covers Pakistan, Punjab, Lahore, Islamabad and the provinces, alongside
        world affairs, business, technology, sports and explainers, with a focus on original,
        verified reporting over volume.
      </p>
      <p className="font-urdu text-lg" dir="rtl">
        خبرنامہ پاکستان اور دنیا بھر کی خبریں انگریزی اور اردو میں، ایک ہی صفحے پر، شائع کرنے
        والا ایک دو لسانی ڈیجیٹل ادارہ ہے۔ ہر خبر کو دونوں زبانوں کے لیے آزادانہ طور پر تحریر کیا
        جاتا ہے، نہ کہ محض مشینی ترجمہ کیا جاتا ہے۔
      </p>
    </StaticPage>
  );
}
