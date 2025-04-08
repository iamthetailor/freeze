import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Freeze | Launching Soon",
  description: "Freeze | Launching Soon",
  icons: {
    icon: [
      { url: '/assets/images/Freeze-favicon.png', sizes: '32x32' },
      { url: '/assets/images/Freeze-favicon.png', sizes: '16x16' }
    ],
    shortcut: '/assets/images/Freeze-favicon.png',
    apple: '/assets/images/Freeze-favicon.png',
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
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
