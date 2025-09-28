import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";

const inter = Inter({
  subsets: ['latin'], // include characters you need
  variable: '--font-inter', // optional if you want CSS variable
  display: 'swap', // improves font loading experience
});


export const metadata: Metadata = {
  title: "Ananse AI - Cultural Wisdom Meets Tech Mentorship",
  description: "Connect with culturally-aware AI mentorship that understands both Western tech industry dynamics and African cultural contexts. Build your career while staying rooted in your heritage.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
