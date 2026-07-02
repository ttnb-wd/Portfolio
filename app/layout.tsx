import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://your-domain.vercel.app"),

  title: {
    default: "Shin Htet Maung | Frontend Developer",
    template: "%s | Shin Htet Maung",
  },

  description:
    "Frontend Developer specializing in React, Next.js, TypeScript, Tailwind CSS, and modern web experiences with AI-assisted workflows.",

  keywords: [
    "Shin Htet Maung",
    "Frontend Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Portfolio",
    "Web Developer",
  ],

  authors: [
    {
      name: "Shin Htet Maung",
    },
  ],

  creator: "Shin Htet Maung",

  openGraph: {
    title: "Shin Htet Maung | Frontend Developer",
    description:
      "Modern developer portfolio built with Next.js, TypeScript, Tailwind CSS, and AI-assisted workflows.",
    url: "https://your-domain.vercel.app",
    siteName: "Shin Htet Maung Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shin Htet Maung | Frontend Developer",
    description:
      "Modern developer portfolio built with Next.js and TypeScript.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ScrollProgress />
        {children}
        <BackToTop />
        <Toaster
          position="top-center"
          richColors
        />
      </body>
    </html>
  );
}