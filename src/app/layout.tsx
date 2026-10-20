import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "THE GROUT — Coffee, Project, Cake",
  description:
    "Kahve, mimari, mobilya tasarımı ve pastacılığı aynı yaşam kültüründe buluşturan yaratıcı kolektif. Türkiye’den, yaşamın içine.",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
