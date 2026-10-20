import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Viet-Hoang Pham | Junior Software Developer",
  description: "Recruitment portfolio for Viet-Hoang Pham. Specializing in high-throughput distributed systems, event pipelines, and robust front-end web architecture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="portfolio-body">{children}</body>
    </html>
  );
}
