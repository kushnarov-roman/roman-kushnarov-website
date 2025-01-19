import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import GlowEffect from "@/components/layout/GlowEffect";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Roman Kushnarov",
  description:
    "Roman Kushnarov is a software engineer who builds impressive, impactful products and digital experiences for the web.",
  icons: {
    icon: [
      { rel: "icon", url: "/favicon-16x16.png", sizes: "16x16" },
      { rel: "icon", url: "/favicon-32x32.png", sizes: "32x32" },
      { rel: "icon", url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/android-chrome-192x192.png", sizes: "192x192" },
      { rel: "icon", url: "/android-chrome-512x512.png", sizes: "512x512" },
    ],
  },
  openGraph: {
    title: "Roman Kushnarov",
    description:
      "Roman Kushnarov is a software engineer creating innovative and inclusive digital experiences.",
    url: "https://romankushnarov.com",
    images: [
      {
        url: "https://romankushnarov.com/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Roman Kushnarov's Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Roman Kushnarov",
    description:
      "Roman Kushnarov is a software engineer creating innovative and inclusive digital experiences.",
    images: ["https://romankushnarov.com/android-chrome-512x512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-primary-darkBlue`}>
        <GlowEffect>{children}</GlowEffect>
      </body>
    </html>
  );
}
