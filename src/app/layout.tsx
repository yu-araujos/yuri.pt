import type { Metadata } from "next";
import { Montserrat } from '@next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  weight: ['400', '500', '600'], 
  subsets: ['latin'], 
});

export const metadata: Metadata = {
  title: "Yuri Silva",
  description: "Yuri Silva | Full Stack Engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
