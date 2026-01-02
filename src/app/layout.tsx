// src/app/layout.tsx
import "@/styles/globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { ReactNode } from "react";
import { Outfit } from "next/font/google";

// One simple, modern font for the whole site
const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"], // light → bold
});

export const metadata = {
  title: "RD Digital Tech",
  description: "Websites • Automation • Analytics",
  metadataBase: new URL("https://rddigitaltech.ca"),
  openGraph: {
    title: "RD Digital Tech",
    description: "Websites • Automation • Analytics",
    url: "https://rddigitaltech.ca",
    siteName: "RD Digital Tech",
    images: [{ url: "/og.png", width: 1200, height: 630 }],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RD Digital Tech",
    description: "Websites • Automation • Analytics",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}