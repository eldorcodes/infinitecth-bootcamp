"use client";

import { useLanguage } from "@/lib/LanguageContext";

const TELEGRAM_LINK = "https://t.me/+kjeGKNd-5-JmYzBh";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 items-start">
          
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold tracking-wide text-white">
              InfiniTech Startup Academy
            </h3>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              {lang === "en"
                ? "A startup-focused academy where students learn how to build, publish, and monetize real mobile apps."
                : "Real mobil ilovalar yaratish, ularni App Store va Google Play’ga joylash hamda monetizatsiya qilishni o‘rgatuvchi startup akademiya."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              {lang === "en" ? "Academy" : "Akademiya"}
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#roadmap" className="hover:text-white transition">
                  {lang === "en" ? "Roadmap" : "Yo‘l xarita"}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition">
                  {lang === "en" ? "Pricing" : "Narxlar"}
                </a>
              </li>
              <li>
                <a href="#apply" className="hover:text-white transition">
                  {lang === "en" ? "Contact" : "Bog‘lanish"}
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              {lang === "en" ? "Location" : "Manzil"}
            </h4>
            <p className="text-sm text-gray-400">
              IMPACT.T Technology Hub (Coworking)
            </p>
            <p className="mt-1 text-sm text-gray-400">
              {lang === "en"
                ? "Bogiboston Street 186, Tashkent"
                : "Bog‘iboston ko‘chasi 186, Toshkent"}
            </p>
          </div>

          {/* Telegram */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              Telegram
            </h4>
            <p className="text-sm text-gray-400">
              {lang === "en"
                ? "Updates, announcements, and program news"
                : "Yangiliklar, e’lonlar va dastur ma’lumotlari"}
            </p>
            <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-blue-400 hover:text-blue-300 transition"
            >
              Join our Telegram →
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>
            © {new Date().getFullYear()} InfiniTech Startup Academy
          </span>
          <span>
            Build Mobile Apps • Launch • Monetize
          </span>
        </div>
      </div>
    </footer>
  );
}