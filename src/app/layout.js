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

const SITE_URL = "https://indianoccult.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hamsa Institute of Occult Science | Learn Astrology, Tarot & Numerology",
    template: "%s | Hamsa Institute of Occult Science",
  },
  description:
    "India's Leading Institute for Numerology, Astrology, Tarot Reading, Akashic Records, Past Life Regression, Reiki Healing and Spiritual Sciences. Learn online from expert mentors.",
  keywords: [
    "Numerology",
    "Astrology",
    "Vedic Astrology",
    "Tarot Reading",
    "Past Life Regression",
    "Akashic Records",
    "Occult Science",
    "Reiki Healing",
    "Vastu Shastra",
    "Hypnosis",
    "Spell Casting",
    "Spiritual Sciences",
    "Online Occult Courses",
  ],
  authors: [{ name: "Hamsa Institute of Occult Science" }],
  creator: "Hamsa Institute of Occult Science",
  publisher: "Hamsa Institute of Occult Science",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Hamsa Institute of Occult Science",
    title: "Hamsa Institute of Occult Science | Learn Astrology, Tarot & Numerology",
    description:
      "India's Leading Institute for Numerology, Astrology, Tarot, Akashic Records, Past Life Regression and Spiritual Sciences. Learn online from expert mentors.",
    images: [
      {
        url: "/images/hero.png",
        width: 1200,
        height: 630,
        alt: "Hamsa Institute of Occult Science",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hamsa Institute of Occult Science",
    description:
      "India's Leading Institute for Astrology, Tarot, Numerology and Spiritual Sciences. Learn online.",
    images: ["/images/hero.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/siteLogo.png",
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
