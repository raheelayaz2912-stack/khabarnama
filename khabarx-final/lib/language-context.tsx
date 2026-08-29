"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type LangPref = "en" | "ur";

interface LanguageContextValue {
  pref: LangPref;
  setPref: (p: LangPref) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [pref, setPref] = useState<LangPref>("en");
  return (
    <LanguageContext.Provider value={{ pref, setPref }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguagePref(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    // Sensible default when used outside the provider (shouldn't normally happen)
    return { pref: "en", setPref: () => {} };
  }
  return ctx;
}
