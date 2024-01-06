import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import ActiveSectionContextProvider from "@/context/ActiveSectionContextProvider";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import ThemeSwitch from "@/components/ThemeSwitch";
import ThemeContextProvider from "@/context/ThemeContextProvider";

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
        className={`bg-gray-50 text-gray-950 relative ${inter.className}
        pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <div
          className="bg-[#86fde8] absolute top-[-6rem] right-[11rem] h-[31.25rem] 
        w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] -z-10 dark:bg-[#946263]"
        ></div>
        <div
          className="bg-[#acb6e5] absolute top-[-1rem] left-[-35rem] h-[31.25rem] 
        w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] 
        md:left-[-33rem] 
        lg:left-[-28rem] 
        xl:left-[-15rem] 
        2xl:[-5rem]
        -z-10
        dark:bg-[#676394]"
        ></div>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Toaster position="top-center" reverseOrder={false} />
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
