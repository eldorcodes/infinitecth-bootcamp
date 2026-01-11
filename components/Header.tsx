"use client";

import Image from "next/image";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/lib/LanguageContext";

const navLabels = {
  en: {
    roadmap: "Roadmap",
    pricing: "Pricing",
    apply: "Apply",
  },
  uz: {
    roadmap: "Yo‘l xarita",
    pricing: "Narxlar",
    apply: "Ariza",
  },
};

export default function Header() {
  const { lang } = useLanguage();
  const t = navLabels[lang];

  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/splash-icon.png"
            alt="InfiniTech Coding Bootcamp"
            width={36}
            height={36}
            priority
          />
          <span className="text-lg font-bold tracking-wide text-white">
            InfiniTech
          </span>
        </div>

        {/* Navigation + Language */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#roadmap" className="hover:text-white transition">
              {t.roadmap}
            </a>
            <a href="#pricing" className="hover:text-white transition">
              {t.pricing}
            </a>
            <a href="#apply" className="hover:text-white transition">
              {t.apply}
            </a>
          </nav>

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}