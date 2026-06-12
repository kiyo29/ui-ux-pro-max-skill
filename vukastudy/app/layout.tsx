import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "VukaStudy — Past Papers. Real Results.",
  description:
    "VukaStudy helps Grade 12 students across South Africa master the CAPS curriculum with 500+ past papers, progress tracking, and plans from R49/month. Vuka and Grind.",
  keywords: [
    "matric",
    "CAPS",
    "past papers",
    "Grade 12",
    "South Africa",
    "exam prep",
    "VukaStudy",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-vuka-dark font-sans text-white antialiased">
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
