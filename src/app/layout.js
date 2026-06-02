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

export const metadata = {
  title: "Hamsa Institute of Occult Science",
  description:
    "India's Leading Institute for Numerology, Astrology, Tarot Reading, Akashic Records, Past Life Regression, Reiki Healing and Spiritual Sciences.",
  keywords: [
    "Numerology",
    "Astrology",
    "Tarot",
    "Past Life Regression",
    "Akashic Records",
    "Occult Science",
    "Reiki",
    "Vastu",
  ],
    icons: {
    icon: "",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
