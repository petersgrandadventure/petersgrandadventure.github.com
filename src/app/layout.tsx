import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import AnimatedBackground from "@/components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Peter's Grand Adventure | Love, Connection & Storytelling",
  description: "Bringing Love, Connection, and Storytelling to the world through the magical application of technology.",
  keywords: ["travel", "adventure", "storytelling", "technology", "lifelogging"],
  authors: [{ name: "Peter Newell" }],
  openGraph: {
    title: "Peter's Grand Adventure",
    description: "Bringing Love, Connection, and Storytelling to the world through the magical application of technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        <AnimatedBackground />
        <Navigation />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
