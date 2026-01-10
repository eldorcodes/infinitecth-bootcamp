"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { lang } = useLanguage();

  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold tracking-wide text-white">
              InfiniTech
            </h3>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              {lang === "en"
                ? "A full-stack web & mobile coding bootcamp focused on real apps, real skills, and real income."
                : "Haqiqiy ilovalar, real ko‘nikmalar va daromadga yo‘naltirilgan full-stack dasturlash bootcampi."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              {lang === "en" ? "Program" : "Dastur"}
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
                  {lang === "en" ? "Apply" : "Ariza"}
                </a>
              </li>
            </ul>
          </div>

          {/* Location / Trust */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">
              {lang === "en" ? "Location" : "Joylashuv"}
            </h4>
            <p className="text-sm text-gray-400">
              Tashkent, Uzbekistan
            </p>
            <p className="mt-2 text-sm text-gray-400">
              Web • Mobile • Full-Stack
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>
            © {new Date().getFullYear()} InfiniTech Coding Bootcamp
          </span>
          <span>
            Build Apps • Get Hired • Earn Money
          </span>
        </div>
      </div>
    </footer>
  );
}