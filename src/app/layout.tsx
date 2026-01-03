// src/app/layout.tsx
import "@/styles/globals.scss";
import type { ReactNode } from "react";
import { Outfit } from "next/font/google";

import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "RD Digital Tech",
  description: "Websites • Automation • Analytics",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <Header />
        <main id="app-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}