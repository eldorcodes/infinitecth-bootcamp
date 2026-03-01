"use client";

import { useLanguage } from "@/lib/LanguageContext";

const content = {
  en: {
    title: "Pricing (Tashkent)",
    note: "Classes are held offline, 2 days per week, 2 hours per session.",

    standardGroup: {
      name: "Standard Group",
      subtitle: "Max 10 students",
      whoFor: "Best for beginners and students aiming for a junior mobile developer role.",
      price: "1,000,000 UZS / month",
      badge: "Most Popular",
      items: [
        "Group of up to 10 students",
        "6-month mobile app program",
        "Build real mobile apps",
        "Publish apps to App Store & Google Play",
        "Monetization basics (paid apps & AdMob)",
        "Same curriculum as Mentorship Bootcamp",
        "Offline classroom sessions",
      ],
    },

    mentorshipGroup: {
      name: "Mentorship Group",
      subtitle: "Max 6 students",
      whoFor: "Best for students who want faster progress and closer guidance.",
      price: "1,500,000 UZS / month",
      badge: "Limited Seats",
      items: [
        "Small group (up to 6 students)",
        "6-month mobile app program",
        "Build real mobile apps",
        "Publish apps to App Store & Google Play",
        "Monetization basics (paid apps & AdMob)",
        "Monthly 1-on-1 code review",
        "Individual app idea guidance",
        "App Store rejection review together",
        "Offline classroom sessions",
      ],
    },
  },

  uz: {
    title: "Narxlar (Toshkent)",
    note: "Mashg‘ulotlar offline tarzda, haftasiga 2 kun, har safar 2 soatdan o‘tkaziladi.",

    standardGroup: {
      name: "Asosiy guruh",
      subtitle: "Maksimal 10 kishi",
      whoFor: "Yangi boshlovchilar va ishga kirishni maqsad qilganlar uchun mos.",
      price: "1,000,000 UZS / oy",
      badge: "Eng ko‘p tanlanadi",
      items: [
        "10 kishigacha guruh",
        "6 oylik mobil ilova dasturi",
        "Real mobil ilovalar yaratish",
        "App Store va Google Play’ga joylash",
        "Monetizatsiya asoslari (pullik ilovalar va AdMob)",
        "Mentorlik guruhi bilan bir xil dastur",
        "Ofisda offline mashg‘ulotlar",
      ],
    },

    mentorshipGroup: {
      name: "Mentorlik guruhi",
      subtitle: "Maksimal 6 kishi",
      whoFor: "Tezroq rivojlanish va shaxsiy yo‘naltirishni xohlaganlar uchun.",
      price: "1,500,000 UZS / oy",
      badge: "Cheklangan joylar",
      items: [
        "Kichik guruh (6 kishigacha)",
        "6 oylik mobil ilova dasturi",
        "Real mobil ilovalar yaratish",
        "App Store va Google Play’ga joylash",
        "Monetizatsiya asoslari (pullik ilovalar va AdMob)",
        "Oyiga 1 marta individual code review",
        "Ilova g‘oyasi bo‘yicha shaxsiy maslahat",
        "App Store rad javoblarini birga tahlil qilish",
        "Ofisda offline mashg‘ulotlar",
      ],
    },
  },
};

export default function Pricing() {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section id="pricing" className="py-28 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          {t.title}
        </h2>

        <p className="text-center text-gray-400 mb-16">
          {t.note}
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* STANDARD = HIGHLIGHT */}
          <PriceCard {...t.standardGroup} highlight />
          <PriceCard {...t.mentorshipGroup} />
        </div>

        <p className="text-center text-gray-400 text-sm mt-10">
          💳 Oldindan to‘liq to‘lov — <span className="text-white font-semibold">10% chegirma</span>
        </p>
      </div>
    </section>
  );
}

function PriceCard({
  name,
  subtitle,
  whoFor,
  price,
  items,
  badge,
  highlight,
}: {
  name: string;
  subtitle: string;
  whoFor: string;
  price: string;
  items: string[];
  badge?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl p-8 border transition ${
        highlight
          ? "border-white shadow-2xl bg-black"
          : "border-white/20 bg-black"
      }`}
    >
      {badge && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
          {badge}
        </div>
      )}

      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-1 text-sm text-gray-400">{subtitle}</p>
      <p className="mt-2 text-sm text-gray-300 italic">{whoFor}</p>

      <p className="mt-4 text-2xl font-bold">{price}</p>

      <ul className="mt-6 space-y-3 text-gray-300 text-sm">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}