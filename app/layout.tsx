import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import WhatsAppButton from "@/components/floating/whatsapp-button";
import LocalBusinessSchema from "@/components/seo/local-business-schema";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shubhradentalcare.vercel.app"),

  title: {
    default: "Dr. Shubhra Dental Care | Dentist in Bareilly",
    template: "%s | Dr. Shubhra Dental Care",
  },

  description:
    "Advanced dental care in Bareilly including dental implants, root canal treatment, teeth whitening, braces, pediatric dentistry and cosmetic dentistry.",

  keywords: [
    "Dentist in Bareilly",
    "Dental Clinic Bareilly",
    "Dr Shubhra Dental Care",
    "Root Canal Bareilly",
    "Dental Implants Bareilly",
    "Teeth Whitening",
    "Braces",
    "Pediatric Dentist",
    "Cosmetic Dentistry",
  ],

  authors: [{ name: "Dr. Shubhra Dental Care" }],

  creator: "Dr. Shubhra Dental Care",

  publisher: "Dr. Shubhra Dental Care",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shubhradentalcare.vercel.app",
    siteName: "Dr. Shubhra Dental Care",

    title: "Dr. Shubhra Dental Care | Trusted Dentist in Bareilly",

    description:
      "Providing advanced, ethical and compassionate dental care in Bareilly. Book your appointment today.",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dr. Shubhra Dental Care",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Dr. Shubhra Dental Care",

    description:
      "Trusted Dental Clinic in Bareilly for complete family dental care.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}>

  <LocalBusinessSchema />

  <Navbar />

  {children}

  <WhatsAppButton />

 

</body>
    </html>
  );
}