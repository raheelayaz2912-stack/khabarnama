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

export const metadata: Metadata = {
  metadataBase: new URL("https://khabarx.vercel.app"),
  title: {
    default: "KHABARX | خبر ایکس — Pakistan News in English & Urdu",
    template: "%s | KHABARX",
  },
  description:
    "Bilingual Pakistan and world news. Every story, reported once, told in English and Urdu, side by side.",
  openGraph: {
    type: "website",
    siteName: "KHABARX",
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
