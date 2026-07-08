import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import { Footer } from "@/components/Footer/Footer";
import { TerraGuideWidget } from "@/components/TerraGuideWidget/TerraGuideWidget";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: {
    default: "Travel Yatra — Discover the World",
    template: "%s | Travel Yatra",
  },
  description:
    "Travel Yatra is an AI-powered exploration platform designed for curious travelers who want to discover extraordinary places, meaningful experiences, and unforgettable adventures.",
  keywords: [
    "travel exploration",
    "adventure travel",
    "AI trip planner",
    "custom expeditions",
    "nature travel",
    "Travel Yatra",
  ],
  openGraph: {
    title: "Travel Yatra — Discover the World",
    description:
      "Travel Yatra is an AI-powered exploration platform designed for curious travelers who want to discover extraordinary places.",
    type: "website",
    locale: "en_US",
    siteName: "Travel Yatra",
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Yatra — Discover the World",
    description:
      "Travel Yatra is an AI-powered exploration platform designed for curious travelers who want to discover extraordinary places.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <TerraGuideWidget />
      </body>
    </html>
  );
}
