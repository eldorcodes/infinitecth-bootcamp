"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <div className="flex rounded-lg border border-white/20 overflow-hidden text-xs">
      <button
        onClick={() => setLang("en")}
        className={`px-3 py-1 transition ${
          lang === "en"
            ? "bg-white text-black"
            : "text-gray-300 hover:text-white"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLang("uz")}
        className={`px-3 py-1 transition ${
          lang === "uz"
            ? "bg-white text-black"
            : "text-gray-300 hover:text-white"
        }`}
      >
        UZ
      </button>
    </div>
  );
}