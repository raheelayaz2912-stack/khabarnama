import { StaticPage } from "@/components/StaticPage";

export const metadata = { title: "Terms & Conditions" };

export default function TermsPage() {
  return (
    <StaticPage title="Terms & Conditions" urTitle="شرائط و ضوابط">
      <p>
        This is placeholder terms text for prototype purposes. A published version should cover
        acceptable use of the site, intellectual property, limitation of liability, and
        governing law.
      </p>
      <p className="font-urdu text-lg" dir="rtl">
        یہ نمونہ متن صرف پروٹو ٹائپ کے لیے ہے۔
      </p>
    </StaticPage>
  );
}
