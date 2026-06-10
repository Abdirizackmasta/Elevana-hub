import Navbar from "@/components/layout/Nav";
import PageWrapper from "@/components/layout/PageWrapper";
import "./globals.css";
import Footer from "@/components/layout/Footer";
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
      <body className={`${syne.variable} ${dmSans.variable}`}>
        <PageWrapper>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}