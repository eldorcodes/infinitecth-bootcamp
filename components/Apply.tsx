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
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">
          {lang === "en"
            ? "Contact InfiniTech"
            : "InfiniTech bilan bog‘laning"}
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
          {lang === "en"
            ? "Have questions about the program or want to discuss your idea? Contact us and we’ll guide you on the next steps."
            : "Dastur haqida savollaringiz bormi yoki g‘oyangizni muhokama qilmoqchimisiz? Biz bilan bog‘laning — keyingi qadamlar bo‘yicha yo‘l ko‘rsatamiz."}
        </p>

        {/* CTA */}
        <div className="mt-10">
          <a
            href={FORM_LINKS[lang]}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-black px-10 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition"
          >
            {lang === "en"
              ? "Contact Us"
              : "Biz bilan bog‘laning"}
          </a>
        </div>

        {/* Note */}
        <p className="mt-6 text-sm text-gray-400">
          {lang === "en"
            ? "No payment required. This is an initial contact form."
            : "Hech qanday to‘lov talab qilinmaydi. Bu dastlabki aloqa shakli."}
        </p>
      </div>
    </section>
  );
}