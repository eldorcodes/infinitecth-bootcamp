"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "uz";

const DEFAULT_LANGUAGE: Language = "uz";

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
}>({
  lang: DEFAULT_LANGUAGE,
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(DEFAULT_LANGUAGE);
  const [mounted, setMounted] = useState(false);

  // Load saved language or use default
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved === "en" || saved === "uz") {
      setLang(saved);
    } else {
      setLang(DEFAULT_LANGUAGE);
    }
    setMounted(true);
  }, []);

  // Persist language
  useEffect(() => {
    if (mounted) {
      localStorage.setItem("lang", lang);
    }
  }, [lang, mounted]);

  if (!mounted) return null; // prevent hydration mismatch

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}