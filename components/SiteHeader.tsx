"use client";

import Link from "next/link";
import { useState } from "react";
import { useLanguagePref } from "@/lib/language-context";
import { LogoMark } from "./LogoMark";

const NAV = [
  { href: "/", label: "Home", ur: "ہوم" },
  { href: "/category/pakistan", label: "Pakistan", ur: "پاکستان" },
  { href: "/category/punjab", label: "Punjab", ur: "پنجاب" },
  { href: "/category/lahore", label: "Lahore", ur: "لاہور" },
  { href: "/category/world", label: "World", ur: "دنیا" },
  { href: "/category/business", label: "Business", ur: "کاروبار" },
  { href: "/category/technology", label: "Technology", ur: "ٹیکنالوجی" },
  { href: "/category/sports", label: "Sports", ur: "کھیل" },
];

export function SiteHeader() {
  const { pref, setPref } = useLanguagePref();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur border-b border-line">
      <div className="mx-auto max-w-shell px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <LogoMark className="h-8 w-8 sm:h-9 sm:w-9" />
            <span className="flex flex-col leading-none">
              <span className="flex items-baseline gap-2">
                <span className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">
                  KHABARX
                </span>
                <span className="font-urdu text-lg sm:text-xl text-brass leading-none" dir="rtl">
                  خبر ایکس
                </span>
              </span>
              <span className="hidden sm:block font-mono text-[9px] tracking-[0.22em] uppercase text-ink/40 mt-1">
                News · Now · Everywhere
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6 font-body text-[0.925rem]" aria-label="Main navigation">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-ink/80 hover:text-green transition-colors"
              >
                {pref === "en" ? item.label : item.ur}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 sm:gap-4">
            <Link
              href="/search"
              aria-label="Search"
              className="p-2 rounded-full hover:bg-paper-dim text-ink/80 hover:text-green transition-colors"
            >
              <SearchIcon />
            </Link>

            <div
              role="group"
              aria-label="Preferred display language for story previews"
              className="hidden sm:flex items-center rounded-full border border-line-strong overflow-hidden text-sm font-medium"
            >
              <button
                type="button"
                onClick={() => setPref("en")}
                aria-pressed={pref === "en"}
                className={`px-3 py-1.5 transition-colors ${
                  pref === "en" ? "bg-green text-white" : "text-ink/70 hover:bg-paper-dim"
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setPref("ur")}
                aria-pressed={pref === "ur"}
                className={`px-3 py-1.5 font-urdu transition-colors ${
                  pref === "ur" ? "bg-green text-white" : "text-ink/70 hover:bg-paper-dim"
                }`}
              >
                اردو
              </button>
            </div>

            <button
              type="button"
              className="lg:hidden p-2 rounded-full hover:bg-paper-dim text-ink"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-line bg-paper">
          <nav className="mx-auto max-w-shell px-4 py-3 flex flex-col" aria-label="Mobile navigation">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 border-b border-line/70 last:border-b-0 text-ink/85"
              >
                {pref === "en" ? item.label : <span className="font-urdu" dir="rtl">{item.ur}</span>}
              </Link>
            ))}
            <div className="flex items-center gap-2 pt-3">
              <span className="text-xs uppercase tracking-wide text-ink/50 font-mono">Preview in</span>
              <button onClick={() => setPref("en")} className={`text-sm px-2.5 py-1 rounded-full border ${pref === "en" ? "bg-green text-white border-green" : "border-line-strong"}`}>English</button>
              <button onClick={() => setPref("ur")} className={`text-sm px-2.5 py-1 rounded-full border font-urdu ${pref === "ur" ? "bg-green text-white border-green" : "border-line-strong"}`}>اردو</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
      <path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function MenuIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
