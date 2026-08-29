import Link from "next/link";

const COLUMNS: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Sections",
    links: [
      { href: "/category/pakistan", label: "Pakistan" },
      { href: "/category/world", label: "World" },
      { href: "/category/business", label: "Business" },
      { href: "/category/technology", label: "Technology" },
      { href: "/category/sports", label: "Sports" },
    ],
  },
  {
    title: "About",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/authors", label: "Authors" },
      { href: "/editorial-policy", label: "Editorial Policy" },
      { href: "/corrections-policy", label: "Corrections Policy" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms & Conditions" },
      { href: "/disclaimer", label: "Disclaimer" },
      { href: "/sitemap.xml", label: "Sitemap" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-line bg-paper-dim">
      <div className="mx-auto max-w-shell px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-xl font-semibold text-ink">Khabarnama</span>
              <span className="font-urdu text-lg text-green" dir="rtl">خبرنامہ</span>
            </div>
            <p className="mt-3 text-sm text-ink/60 leading-relaxed max-w-[22ch]">
              One story. One image. English and Urdu, side by side.
            </p>
          </div>
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.14em] text-ink/45 mb-3">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-ink/75 hover:text-green transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 pt-6 border-t border-line flex flex-col sm:flex-row justify-between gap-3 text-xs text-ink/45">
          <p>© 2026 Khabarnama. All rights reserved.</p>
          <p className="font-urdu" dir="rtl">© ۲۰۲۶ خبرنامہ۔ جملہ حقوق محفوظ ہیں۔</p>
        </div>
      </div>
    </footer>
  );
}
