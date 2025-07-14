import type { Metadata } from "next";
import YAMetrika from "@/components/general/metrics/ya-metrika";

import "./globals.css";
import { Lato } from "next/font/google";

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
    title: '"МордовКлимат" — Установка и Ремонт Кондиционеров в Саранске',
    description:
      "Установка кондиционеров и сплит-систем. Профессиональный подбор кондиционеров. Гарантия на установку до пяти лет. Проффессионалы своего дела.",
    url: "https://mordovklimat.ru/",
    siteName: "МордовКлимат",
    images: [
      {
        url: "/images/graf.jpg", // Ставь дефолтную картинку, если у товара нет изображения
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
      <head>
        {/* Мета-теги, стили, favicon и т.д. */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* noscript для пользователей без JS */}
        <noscript>
          <div>
            <img
              src="https://mc.yandex.ru/watch/94961323"
              style={{ position: "absolute", left: "-9999px" }}
              alt=""
            />
          </div>
        </noscript>
      </head>
      <body className={`${geistSans.variable} antialiased bg-[#F3F4F6]`}>
        <YAMetrika />
        {children}
      </body>
    </html>
  );
}
