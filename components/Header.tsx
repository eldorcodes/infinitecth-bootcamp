"use client";

import { useState } from "react";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "@/lib/LanguageContext";

const navLabels = {
  en: {
    roadmap: "Roadmap",
    pricing: "Pricing",
    contact: "Contact",
  },
  uz: {
    roadmap: "Yo‘l xarita",
    pricing: "Narxlar",
    contact: "Bog‘lanish",
  },
};

export default function Header() {
  const { lang } = useLanguage();
  const t = navLabels[lang];
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/splash-icon.png"
            alt="InfiniTech Startup Academy"
            width={36}
            height={36}
            priority
          />
          <span className="text-lg font-bold tracking-wide text-white">
            InfiniTech
          </span>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-300 items-center">
          <a href="#roadmap" className="hover:text-white transition">
            {t.roadmap}
          </a>
          <a href="#pricing" className="hover:text-white transition">
            {t.pricing}
          </a>
          <a href="#apply" className="hover:text-white transition">
            {t.contact}
          </a>
          <LanguageToggle />
        </nav>

        {/* Mobile actions */}
        <div className="flex md:hidden items-center gap-4">
          <LanguageToggle />
          <button
            onClick={() => setOpen(!open)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Hamburger / Close icon */}
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 bg-white transition ${
                  open ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 bg-white transition ${
                  open ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur border-t border-white/10">
          <nav className="flex flex-col px-6 py-6 gap-4 text-gray-300">
            <a
              href="#roadmap"
              onClick={() => setOpen(false)}
              className="hover:text-white"
            >
              {t.roadmap}
            </a>
            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="hover:text-white"
            >
              {t.pricing}
            </a>
            <a
              href="#apply"
              onClick={() => setOpen(false)}
              className="hover:text-white"
            >
              {t.contact}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}