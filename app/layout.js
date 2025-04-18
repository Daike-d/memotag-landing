import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Toaster} from "sonner";
import { NavBar } from "@/components/NavBar";
import DarkModeToggle from "@/components/DarkModeToggle";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "MemoTag"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`relative ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <>
        <NavBar/>
        <DarkModeToggle/>
        </>
        <Toaster richColors position="top-center" />
        {children}
      </body>
    </html>
  );
}
