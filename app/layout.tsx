import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavWrapper from "@/components/navbar/NavWrapper";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A.G.I.E",
  description: "A.G.I.E webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-mantine-color-scheme="light">
      <body className={`${poppins.className}  antialiased`}>
        <NavWrapper />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
