"use client";

import { useLanguage } from "@/lib/LanguageContext";

const roadmapContent = {
  en: {
    title: "6-Month Learning Roadmap",
    months: [
      { title: "Month 1", desc: "Programming fundamentals & JavaScript" },
      { title: "Month 2", desc: "React & modern frontend development" },
      { title: "Month 3", desc: "Backend with Node.js & Python" },
      { title: "Month 4", desc: "Mobile apps with React Native & Expo" },
      { title: "Month 5", desc: "App monetization & AdMob" },
      { title: "Month 6", desc: "Career, freelancing & capstone project" },
    ],
  },
  uz: {
    title: "6 oylik o‘quv yo‘l xaritasi",
    months: [
      {
        title: "1-oy",
        desc: "Dasturlash asoslari va JavaScript",
      },
      {
        title: "2-oy",
        desc: "React va zamonaviy frontend dasturlash",
      },
      {
        title: "3-oy",
        desc: "Node.js va Python yordamida backend",
      },
      {
        title: "4-oy",
        desc: "React Native va Expo bilan mobil ilovalar",
      },
      {
        title: "5-oy",
        desc: "Ilovalarni monetizatsiya qilish va AdMob",
      },
      {
        title: "6-oy",
        desc: "Karyera, frilanserlik va yakuniy loyiha",
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