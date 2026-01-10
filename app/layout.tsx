import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";

export const metadata = {
  title: "InfiniTech Coding Bootcamp | Tashkent",
  description: "Build apps. Get hired. Earn money.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black text-white antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}