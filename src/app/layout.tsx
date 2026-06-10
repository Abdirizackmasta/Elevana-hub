import Navbar from "@/components/layout/Nav";
import PageWrapper from "@/components/layout/PageWrapper";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Syne, DM_Sans } from "next/font/google";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-syne",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-dm-sans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${syne.variable} 
          ${dmSans.variable} 
          bg-[#0a0412] 
          text-white 
          overflow-x-hidden
        `}
      >
        <Navbar />

        <main className="pt-20 min-h-screen w-full">
          <PageWrapper>
            {children}
          </PageWrapper>
        </main>

        <Footer />
      </body>
    </html>
  );
}