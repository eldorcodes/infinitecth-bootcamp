"use client";

import { useLanguage } from "@/lib/LanguageContext";

const FORM_LINKS = {
  en: "https://forms.gle/D8oQcgGp2aPMr3aQ9",
  uz: "https://forms.gle/bLY1y2rniiwgAsS9A",
};

export default function Apply() {
  const { lang } = useLanguage();

  return (
    <section
      id="apply"
      className="py-28 bg-gradient-to-b from-black to-gray-900 text-white"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold">
          {lang === "en"
            ? "Apply to InfiniTech"
            : "InfiniTech ga ariza topshiring"}
        </h2>

        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          {lang === "en"
            ? "Join our free intro workshop to see if InfiniTech is right for you."
            : "Bepul tanishtiruv darsiga qo‘shiling va InfiniTech sizga mos kelishini bilib oling."}
        </p>

        <div className="mt-10">
          <a
            href={FORM_LINKS[lang]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition"
          >
            {lang === "en"
              ? "Apply via Free Intro Workshop"
              : "Bepul tanishtiruv darsi orqali ariza"}
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          {lang === "en"
            ? "No payment required to apply."
            : "Ariza topshirish uchun to‘lov talab qilinmaydi."}
        </p>
      </div>
    </section>
  );
}