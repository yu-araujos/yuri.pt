import type { Metadata } from "next";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "Yuri Silva",
  description: "Full-Stack Developer | UI/UX Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
