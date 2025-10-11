// src/app/layout.tsx
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import localFont from "next/font/local";
import type { ReactNode } from "react";

const futura = localFont({
  src: [
    { path: "../fonts/FuturaLT-Light.woff2", weight: "300", style: "normal" },
    { path: "../fonts/FuturaLT.woff2", weight: "400", style: "normal" },
    { path: "../fonts/FuturaLT-Bold.woff2", weight: "700", style: "normal" },
    { path: "../fonts/FuturaLT-Heavy.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-futura",
  display: "swap",
});

export const metadata = {
  title: "RD Digital Tech",
  description: "Websites • Automation • Analytics",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${futura.variable} antialiased`}>
        <Header />
        {/* removed pt-14 md:pt-16 */}
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}