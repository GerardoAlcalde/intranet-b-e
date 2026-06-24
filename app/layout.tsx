import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Intranet B&E | MVP",
  description: "Sketch de intranet para Barros & Errázuriz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={sourceSans.variable}>
      <body>{children}</body>
    </html>
  );
}
