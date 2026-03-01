"use client";

import { useLanguage } from "@/lib/LanguageContext";

const roadmapContent = {
  en: {
    title: "6-Month Roadmap (Standard Bootcamp)",
    note:
      "This roadmap is for the Standard Bootcamp. Mentorship Bootcamp follows the same roadmap with extra 1-on-1 guidance and reviews.",
    months: [
      {
        title: "Month 1",
        desc: "Foundations: programming mindset, JavaScript essentials, Git/GitHub, and how real mobile apps are planned (features, screens, and user flows).",
      },
      {
        title: "Month 2",
        desc: "React Native fundamentals: building UI screens, navigation, forms, state, and turning ideas into a working mobile app prototype.",
      },
      {
        title: "Month 3",
        desc: "Real app features: storage, authentication basics, API integration, permissions, media/files, and building utility apps that feel production-ready.",
      },
      {
        title: "Month 4",
        desc: "React Native + Expo (production): app architecture, performance basics, error handling, and building cross-platform iOS/Android apps from one codebase.",
      },
      {
        title: "Month 5",
        desc: "Native Modules: introducing Swift (iOS) and Kotlin (Android) to extend React Native. Build and connect native features when libraries are not enough.",
      },
      {
        title: "Month 6",
        desc: "Publishing & monetization: App Store and Google Play release process, policy basics, fixing rejections, and monetizing with paid apps + AdMob. Launch strategy and long-term updates.",
      },
    ],
  },

  uz: {
    title: "6 oylik yo‘l xaritasi (Asosiy guruh)",
    note:
      "Bu yo‘l xaritasi Asosiy guruh uchun. Mentorlik guruhi shu yo‘l xaritasi bo‘yicha o‘tadi, faqat qo‘shimcha individual yo‘naltirish va tekshiruvlar bilan.",
    months: [
      {
        title: "1-oy",
        desc: "Asoslar: dasturcha fikrlash, JavaScript zarur qismlari, Git/GitHub va real mobil ilovalar qanday rejalashtirilishi (funksiyalar, ekranlar, user-flow).",
      },
      {
        title: "2-oy",
        desc: "React Native asoslari: UI ekranlar, navigation, formalar, state va g‘oyani ishlaydigan mobil ilova prototipiga aylantirish.",
      },
      {
        title: "3-oy",
        desc: "Real funksiyalar: local storage, auth asoslari, API ulash, permission’lar, media/fayllar va productionga yaqin utility ilovalar yaratish.",
      },
      {
        title: "4-oy",
        desc: "React Native + Expo (production): arxitektura, performance asoslari, xatolarni ushlash (error handling) va bitta kod bazadan iOS/Android ilovalar qurish.",
      },
      {
        title: "5-oy",
        desc: "Native Modules: Swift (iOS) va Kotlin (Android) orqali React Native’ni kengaytirish. Kutubxonalar yetarli bo‘lmaganda native funksiyalar qo‘shish.",
      },
      {
        title: "6-oy",
        desc: "Publish & monetizatsiya: App Store va Google Play’ga chiqarish, policy asoslari, rad javoblarini tuzatish, pullik ilova + AdMob bilan daromad qilish. Launch strategiya va yangilanishlar.",
      },
    ],
  },
};

export default function Roadmap() {
  const { lang } = useLanguage();
  const content = roadmapContent[lang];

  return (
    <section id="roadmap" className="py-28 bg-white text-black">
      <div className="max-w-6xl mx-auto px-6">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          {content.title}
        </h2>

        {/* Note */}
        <p className="text-center text-gray-600 mb-16">
          {content.note}
        </p>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 gap-10">
          {content.months.map((m) => (
            <div
              key={m.title}
              className="relative p-8 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg transition"
            >
              {/* Month Badge */}
              <div className="absolute -top-4 left-6 bg-black text-white text-sm font-semibold px-4 py-1 rounded-full">
                {m.title}
              </div>

              {/* Content */}
              <p className="mt-6 text-lg font-medium">{m.desc}</p>

              {/* Progress line */}
              <div className="mt-6 h-1 w-full bg-gradient-to-r from-blue-500 to-orange-500 rounded-full opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}