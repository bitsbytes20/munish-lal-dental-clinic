import type { Metadata } from "next";
import Navbar from "@/components/layout/navbar";
import WhatsAppButton from "@/components/floating/whatsapp-button";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Mobile from "@/components/floating/mobile";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Munish Lal Dental Clinic",
  description: "Crafting Confident Smiles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <Navbar />

        {children}

        <WhatsAppButton />
        <Mobile/>
      </body>
    </html>
  );
}