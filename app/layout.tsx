import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Interactive Card Details Form",
  description: "Frontend challenge solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${spaceGrotesk.variable} font-space h-full antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
