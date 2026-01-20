"use client";

import { useLanguage } from "@/lib/LanguageContext";

const heroContent = {
  uz: {
    badge: "InfiniTech Startup Academy",
    headline: "Ilovalar yarating. Ishga tushiring. Daromad oling.",
    subtitle:
      "InfiniTech Startup Academy — bu oddiy IT kurs emas. Bu yerda siz real mobil va SaaS ilovalar yaratish, ularni App Store va Google Play’ga joylash hamda o‘z mahsulotingizdan daromad olishni o‘rganasiz.",
    primaryCta: "Biz bilan bog‘laning",
    secondaryCta: "Narxlar va yo‘nalishlar",
    trustLine:
      "Mobil ilovalar • SaaS mahsulotlar • App Store & Play Store • Monetizatsiya",
  },
  en: {
    badge: "InfiniTech Startup Academy",
    headline: "Build. Launch. Monetize.",
    subtitle:
      "InfiniTech Startup Academy is not a traditional coding bootcamp. We teach how to build real mobile and SaaS apps, publish them to App Store and Google Play, and earn from your own products.",
    primaryCta: "Contact Us",
    secondaryCta: "View Pricing & Tracks",
    trustLine:
      "Mobile Apps • SaaS Products • App Store & Play Store • Monetization",
  },
};

export default function Hero() {
  const { lang } = useLanguage();
  const t = heroContent[lang];

  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-orange-500/20" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 text-center">
        {/* Badge */}
        <div className="mb-6 text-sm tracking-widest text-gray-400 uppercase">
          {t.badge}
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
          {t.headline}
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          {t.subtitle}
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#apply"
            className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-200 transition"
          >
            {t.primaryCta}
          </a>

          <a
            href="#pricing"
            className="border border-white/30 px-8 py-4 rounded-xl text-lg hover:border-white transition"
          >
            {t.secondaryCta}
          </a>
        </div>

        {/* Trust line */}
        <div className="mt-12 text-sm text-gray-400">
          {t.trustLine}
        </div>
      </div>
    </section>
  );
}