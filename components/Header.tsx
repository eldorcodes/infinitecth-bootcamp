"use client";

import Image from "next/image";
import LanguageToggle from "./LanguageToggle";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo + Brand */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="InfiniTech Coding Bootcamp"
            width={36}
            height={36}
            priority
          />
          <span className="text-lg font-bold tracking-wide">
            InfiniTech
          </span>
        </div>

        {/* Navigation + Language */}
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-6 text-sm text-gray-300">
            <a href="#roadmap" className="hover:text-white">Roadmap</a>
            <a href="#pricing" className="hover:text-white">Pricing</a>
            <a href="#apply" className="hover:text-white">Apply</a>
          </nav>

          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}