import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navber from "@/components/shared/Navber";
import Footer from "@/components/shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Daily News",
  description: "Bangladesh Polytechnic Institute Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navber />
        <main className="min-h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 items-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
