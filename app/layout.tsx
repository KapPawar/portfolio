import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kapil S. Pawar | Personal Portfolio",
  description:
    "Kapil S. Pawar is a Full-Stack developer with 5 years of experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-gray-50 text-gray-950 ${inter.className}`}>
        {children}
      </body>
    </html>
  );
}
