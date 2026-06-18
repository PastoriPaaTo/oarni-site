import type { Metadata } from "next";
import { Inter, Barlow_Condensed } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Oarni — AI-powered brand photography",
  description:
    "Oarni delivers brand-quality visuals at the speed and scale only AI can manage — without the studio, the crew, or the wait.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${barlowCondensed.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
