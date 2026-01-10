import "./globals.css";

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
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}