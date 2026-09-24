import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/shared/Navbar";
import Footer from "@/component/shared/Footer";


const inter = Inter({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Inter',
  display: 'swap',
});



export const metadata: Metadata = {
  title: "Fit-Log",
  description: "Fit-Log Workout Library",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className={`min-h-full flex flex-col ${inter.className}  `}>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
