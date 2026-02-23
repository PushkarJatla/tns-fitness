import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TNS Fitness | Solapur's Leading Premium Gym",
  description: "Transform your body at TNS Fitness Solapur. 3000 sq ft premium facility with certified trainers, modern equipment, and results-driven training.",
  keywords: ["Gym in Solapur", "Fitness Center Solapur", "TNS Fitness", "Personal Trainer Solapur", "Weight Loss Solapur"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
