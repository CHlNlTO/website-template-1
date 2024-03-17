import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/component/Navbar";
import { Analytics } from "@vercel/analytics/react"
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "@/components/component/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Website Template 1",
  description: "Templated website 1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
