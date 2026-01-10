"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-orange-500/20" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
        <div className="mb-6 text-sm tracking-widest text-gray-400 uppercase">
          InfiniTech Coding Bootcamp
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          {t.tagline}
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          {t.subtitle}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#apply"
            className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold"
          >
            {t.join}
          </a>

          <a
            href="#pricing"
            className="border border-white/30 px-8 py-4 rounded-xl text-lg"
          >
            {t.apply}
          </a>
        </div>
      </div>
    </section>
  );
}