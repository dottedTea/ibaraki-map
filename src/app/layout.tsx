import type { Metadata } from "next";
import { Noto_Sans_JP, Yuji_Syuku } from "next/font/google";
import "./globals.css";

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
});

const yujiSyuku = Yuji_Syuku({
  variable: "--font-yuji-syuku",
  weight: "400",
});

export const metadata: Metadata = {
  title: "さしまっぷ",
  description:
    "茨城ご当地VTuber「茶芝間ティー（さしまてぃー）」による、茨城県の観光スポット紹介マップです。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSansJP.variable} ${yujiSyuku.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
