"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function CTA() {
  const { lang } = useLanguage();

  return (
    <section className="py-20 px-6 bg-black text-white text-center">
      <h2 className="text-3xl font-bold">
        {lang === "en"
          ? "Limited Seats Available"
          : "Joylar cheklangan"}
      </h2>

      <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
        {lang === "en"
          ? "Interested in building and launching your own mobile app? Contact us to discuss the program and next steps."
          : "Mobil ilova yaratish va ishga tushirishni xohlaysizmi? Dastur haqida gaplashish va keyingi qadamlarni bilish uchun biz bilan bog‘laning."}
      </p>

      <a
        href="#apply"
        className="inline-block mt-8 bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition"
      >
        {lang === "en"
          ? "Contact Us"
          : "Biz bilan bog‘laning"}
      </a>
    </section>
  );
}