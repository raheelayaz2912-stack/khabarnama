import { StaticPage } from "@/components/StaticPage";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPolicyPage() {
  return (
    <StaticPage title="Privacy Policy" urTitle="پرائیویسی پالیسی">
      <p>
        This is placeholder policy text for prototype purposes. A published version should
        describe what data is collected (e.g. analytics, newsletter sign-ups, cookies), how it is
        used, how long it is retained, and how readers can exercise their rights, in line with
        applicable law.
      </p>
      <p className="font-urdu text-lg" dir="rtl">
        یہ نمونہ متن صرف پروٹو ٹائپ کے لیے ہے۔ حتمی پالیسی میں بتایا جانا چاہیے کہ کون سا ڈیٹا
        اکٹھا کیا جاتا ہے اور اسے کیسے استعمال کیا جاتا ہے۔
      </p>
    </StaticPage>
  );
}
