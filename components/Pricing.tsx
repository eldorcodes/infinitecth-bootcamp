"use client";

import { useLanguage } from "@/lib/LanguageContext";

const content = {
  en: {
    title: "Pricing for Tashkent",
    standard: {
      name: "Standard",
      price: "900,000 UZS / month",
      items: [
        "Full 6-month program",
        "Group classes",
        "Certificate of completion",
      ],
    },
    pro: {
      name: "Pro (Popular)",
      price: "1,500,000 UZS / month",
      items: [
        "App publishing",
        "Monetization & AdMob",
        "Resume & interview prep",
      ],
    },
    elite: {
      name: "Elite",
      price: "2,500,000 UZS / month",
      items: [
        "1-on-1 mentoring",
        "Apps under MCHJ",
        "Business & scaling",
      ],
    },
  },

  uz: {
    title: "Toshkent uchun narxlar",
    standard: {
      name: "Standart",
      price: "900,000 UZS / oy",
      items: [
        "To‘liq 6 oylik dastur",
        "Guruh mashg‘ulotlari",
        "Bitiruv sertifikati",
      ],
    },
    pro: {
      name: "Pro (Mashhur)",
      price: "1,500,000 UZS / oy",
      items: [
        "Ilovalarni nashr qilish",
        "Monetizatsiya & AdMob",
        "Rezyume va intervyu tayyorlash",
      ],
    },
    elite: {
      name: "Elite",
      price: "2,500,000 UZS / oy",
      items: [
        "1-ga-1 mentorlik",
        "MCHJ ostida ilovalar",
        "Biznes va kengaytirish",
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
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <PriceCard {...t.standard} />
          <PriceCard {...t.pro} highlight />
          <PriceCard {...t.elite} />
        </div>
      </div>
    </section>
  );
}

function PriceCard({
  name,
  price,
  items,
  highlight,
}: {
  name: string;
  price: string;
  items: string[];
  highlight?: boolean;
}) {
  return (
    <div
      className={`relative rounded-2xl p-8 border transition ${
        highlight
          ? "border-white shadow-2xl scale-105 bg-black"
          : "border-white/20 bg-black"
      }`}
    >
      {highlight && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-4 text-2xl font-bold">{price}</p>

      <ul className="mt-6 space-y-3 text-gray-300 text-sm">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
    </div>
  );
}