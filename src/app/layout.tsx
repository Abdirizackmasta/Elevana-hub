import Navbar from "@/components/layout/Nav";
import PageWrapper from "@/components/layout/PageWrapper";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <PageWrapper>
          <Navbar />
          <main className="pt-20">{children}</main>
          <Footer />
        </PageWrapper>
      </body>
    </html>
  );
}