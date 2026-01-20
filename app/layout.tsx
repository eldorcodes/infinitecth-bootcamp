import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata = {
  title: "InfiniTech Startup Academy | Toshkent",
  description:
    "Mobil ilovalar yaratish, ularni App Store va Google Play’ga joylash hamda monetizatsiya qilishni o‘rgatuvchi startup akademiya.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="uz">
      <body className="bg-black text-white antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}