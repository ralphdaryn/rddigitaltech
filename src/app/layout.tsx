import "@/styles/globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "RD Digital Tech",
  description: "Websites • Automation • Analytics",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="pt-14 md:pt-16">{children}</main>
      </body>
    </html>
  );
}