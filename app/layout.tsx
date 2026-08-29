import type { Metadata } from "next";
import { Newsreader, IBM_Plex_Sans, IBM_Plex_Mono, Noto_Nastaliq_Urdu } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { BreakingBar } from "@/components/BreakingBar";
import { LanguageProvider } from "@/lib/language-context";

const display = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const body = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const urdu = Noto_Nastaliq_Urdu({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-urdu",
  display: "swap",
});

const SITE_URL = "https://khabarx.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "KHABARX | Pakistan News, Breaking News & Latest Updates",
    template: "%s | KHABARX",
  },
  description:
    "KHABARX brings the latest Pakistan news, breaking news, Lahore updates, business, technology, sports and world news in English and Urdu — every story on one page, side by side.",
  alternates: { canonical: SITE_URL },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "KHABARX",
    title: "KHABARX | Pakistan News, Breaking News & Latest Updates",
    description:
      "Bilingual Pakistan and world news. Every story, reported once, told in English and Urdu, side by side.",
    url: SITE_URL,
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: "KHABARX | Pakistan News, Breaking News & Latest Updates",
    description:
      "Bilingual Pakistan and world news. Every story, reported once, told in English and Urdu, side by side.",
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KHABARX",
  alternateName: "خبر ایکس",
  url: SITE_URL,
  logo: `${SITE_URL}/icon.svg`,
  description:
    "Bilingual Pakistan and world news publication reporting in English and Urdu.",
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "KHABARX",
  url: SITE_URL,
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable} ${urdu.variable}`}>
      <body className="font-body bg-paper text-ink antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteLd) }} />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-3 focus:left-3 focus:bg-green focus:text-white focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <LanguageProvider>
          <BreakingBar />
          <SiteHeader />
          <main id="main-content">{children}</main>
          <SiteFooter />
        </LanguageProvider>
      </body>
    </html>
  );
}
