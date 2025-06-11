import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const geistSans = Lato({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  weight: ["100", "300", "400", "700", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mordovklimat.ru/"),
  title: {
    template: "%s | Климат под контролем",
    default: '"МордовКлимат" — Установка и Ремонт Кондиционеров в Саранске',
  },
  description:
    "Установка кондиционеров и сплит-систем. Профессиональный подбор кондиционеров. Гарантия на установку до пяти лет. Проффессионалы своего дела.",

  icons: "./favicon_io/android-chrome-192x192.png",
  openGraph: {
    title: '"Brizet" — Установка и Ремонт Кондиционеров в Саранске',
    description:
      "Установка кондиционеров и сплит-систем. Профессиональный подбор кондиционеров. Гарантия на установку до пяти лет. Проффессионалы своего дела.",
    url: "https://mordovklimat.ru/",
    siteName: "МордовКлимат",
    images: [
      {
        url: "/images/features.jpg", // Ставь дефолтную картинку, если у товара нет изображения
        width: 1200,
        height: 630,
        alt: "MordovKlimat-art",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} antialiased bg-[#F3F4F6]`}>
        {children}
      </body>
    </html>
  );
}
