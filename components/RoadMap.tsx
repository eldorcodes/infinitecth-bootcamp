"use client";

import { useLanguage } from "@/lib/LanguageContext";

const roadmapContent = {
  en: {
    title: "6-Month Mobile App Launch Roadmap",
    months: [
      {
        title: "Month 1",
        desc: "Programming fundamentals, JavaScript, and understanding how real mobile apps are planned and built.",
      },
      {
        title: "Month 2",
        desc: "Building user interfaces with React. Turning ideas into working app screens and flows.",
      },
      {
        title: "Month 3",
        desc: "Backend development with Node.js and Python. APIs, databases, and mobile app logic.",
      },
      {
        title: "Month 4",
        desc: "Mobile app development with React Native & Expo. Building Android and iOS apps from one codebase.",
      },
      {
        title: "Month 5",
        desc: "Publishing mobile apps to App Store & Google Play. Monetization with paid apps, subscriptions, and AdMob.",
      },
      {
        title: "Month 6",
        desc: "Launching, improving, and scaling your mobile app. Updates, analytics, and long-term app strategy.",
      },
    ],
  },
  uz: {
    title: "6 oylik mobil ilova ishga tushirish yo‘l xaritasi",
    months: [
      {
        title: "1-oy",
        desc: "Dasturlash asoslari, JavaScript va real mobil ilovalar qanday rejalashtirilishi va yaratilishini tushunish.",
      },
      {
        title: "2-oy",
        desc: "React yordamida ilova interfeyslarini yaratish. G‘oyani ishlaydigan ilova ekranlariga aylantirish.",
      },
      {
        title: "3-oy",
        desc: "Node.js va Python bilan backend. API, ma’lumotlar bazasi va mobil ilova mantiqi.",
      },
      {
        title: "4-oy",
        desc: "React Native va Expo yordamida Android va iOS mobil ilovalar yaratish.",
      },
      {
        title: "5-oy",
        desc: "Mobil ilovalarni App Store va Google Play’ga joylash. Monetizatsiya: pullik ilovalar, obuna va AdMob.",
      },
      {
        title: "6-oy",
        desc: "Mobil ilovani ishga tushirish, yaxshilash va kengaytirish. Yangilanishlar va uzoq muddatli strategiya.",
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {content.title}
        </h2>

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
              <p className="mt-6 text-lg font-medium">
                {m.desc}
              </p>

              {/* Progress line */}
              <div className="mt-6 h-1 w-full bg-gradient-to-r from-blue-500 to-orange-500 rounded-full opacity-70" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}