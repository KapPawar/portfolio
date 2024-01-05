import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";

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
    <html lang="en" className="!scroll-smooth">
      <body
        className={`bg-gray-50 text-gray-950 relative h-[5000px] ${inter.className}
        pt-28 sm:pt-36`}
      >
        <div
          className="bg-[#86fde8] absolute top-[-6rem] right-[11rem] h-[31.25rem] 
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10"
        ></div>
        <div
          className="bg-[#acb6e5] absolute top-[-1rem] left-[-35rem] h-[31.25rem] 
        w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
        md:left-[-33rem] 
        lg:left-[-28rem] 
        xl:left-[-15rem] 
        2xl:[-5rem]
        -z-10"
        ></div>
        <ActiveSectionContextProvider>
          <Header />
          {children}
        </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
