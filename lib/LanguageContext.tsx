"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "uz";

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
}>({
  lang: "en",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>("en");
  const [mounted, setMounted] = useState(false);

  // Load saved language
  useEffect(() => {
    const saved = localStorage.getItem("lang") as Language | null;
    if (saved) setLang(saved);
    setMounted(true);
  }, []);

  // Save language
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