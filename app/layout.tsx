import type { Metadata } from "next";
import { Dosis } from "next/font/google";
import "./globals.css";
import Header from "@/components/Modules/Header";
import Footer from "@/components/Modules/Footer";

const inter = Dosis({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "B Ticket",
  description: "NextJS Bus Ticketing Website",
  icons: {
    icon: "./bu.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="text-main-text" lang="en">
      <body className={" font-Dosis"}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
