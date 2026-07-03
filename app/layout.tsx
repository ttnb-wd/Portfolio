import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import ScrollProgress from "../components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const siteUrl = "https://your-domain.vercel.app";
const siteName = "Shin Htet Maung - Frontend Developer Portfolio";
const siteDescription =
  "Experienced Frontend Developer from Myanmar specializing in React, Next.js, TypeScript, and Tailwind CSS. Building fast, accessible, and scalable web applications with modern AI-assisted development workflows. Available for freelance projects and remote opportunities.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: siteName,
    template: "%s | Shin Htet Maung",
  },

  description: siteDescription,

  keywords: [
    // Name & Identity
    "Shin Htet Maung",
    "Shin Htet Maung Developer",
    "Shin Htet Maung Portfolio",
    
    // Primary Roles
    "Frontend Developer",
    "Full Stack Developer",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    
    // Technologies & Skills
    "React",
    "React.js",
    "Next.js",
    "Next.js 15",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Supabase",
    "HTML5",
    "CSS3",
    "Framer Motion",
    "Responsive Web Design",
    "Progressive Web Apps",
    "Server-Side Rendering",
    "Static Site Generation",
    
    // Services & Expertise
    "Web Development",
    "Frontend Development",
    "Full Stack Development",
    "Modern Web Applications",
    "UI/UX Development",
    "Web Performance Optimization",
    "Accessible Web Design",
    "WCAG Compliance",
    "SEO Optimization",
    "Cross-Browser Compatibility",
    
    // AI & Modern Practices
    "AI-Assisted Development",
    "AI Workflow",
    "Modern Development Tools",
    "Code Quality",
    "Clean Code",
    "Best Practices",
    
    // Location & Availability
    "Web Developer Myanmar",
    "Myanmar Developer",
    "Yangon Web Developer",
    "Freelance Developer",
    "Remote Developer",
    "Hire Frontend Developer",
    "Available for Hire",
    
    // Work Type
    "Portfolio Website",
    "Developer Portfolio",
    "Tech Portfolio",
    "Web Development Services",
    "Freelance Web Development",
    "Remote Web Development",
  ],

  authors: [
    {
      name: "Shin Htet Maung",
      url: siteUrl,
    },
  ],

  creator: "Shin Htet Maung",
  publisher: "Shin Htet Maung",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: `${siteUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Shin Htet Maung - Frontend Developer Portfolio showcasing React, Next.js, and TypeScript projects",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@shinhtetmaung",
    creator: "@shinhtetmaung",
    title: siteName,
    description: siteDescription,
    images: {
      url: `${siteUrl}/og-image.png`,
      alt: "Shin Htet Maung - Frontend Developer Portfolio",
    },
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
    },
  },

  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },

  category: "technology",
  
  other: {
    "geo.region": "MM",
    "geo.placename": "Yangon",
    "geo.position": "16.8661;96.1951",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shin Htet Maung",
    alternateName: "Shin Htet Maung",
    url: siteUrl,
    image: `${siteUrl}/og-image.png`,
    sameAs: [
      "https://github.com/ttnb-wd",
      "https://www.linkedin.com/in/shin-htet-maung-81a24933b/",
    ],
    jobTitle: "Frontend Developer",
    description: siteDescription,
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Supabase",
      "Web Development",
      "Frontend Development",
      "Full Stack Development",
      "AI-Assisted Development",
      "Responsive Web Design",
      "Web Performance Optimization",
      "Accessibility",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yangon",
      addressRegion: "Yangon",
      addressCountry: {
        "@type": "Country",
        name: "Myanmar",
      },
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Frontend Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Myanmar",
      },
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Tailwind CSS",
        "Web Development",
      ],
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Self-Taught Developer",
    },
  };

  // WebSite Schema for search box
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    description: siteDescription,
    author: {
      "@type": "Person",
      name: "Shin Htet Maung",
    },
    inLanguage: "en-US",
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Shin Htet Maung - Web Development Services",
    image: `${siteUrl}/og-image.png`,
    url: siteUrl,
    telephone: "",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Yangon",
      addressCountry: "MM",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "16.8661",
      longitude: "96.1951",
    },
    priceRange: "$$",
    serviceType: [
      "Web Development",
      "Frontend Development",
      "React Development",
      "Next.js Development",
    ],
  };

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data - Person */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* JSON-LD Structured Data - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        
        {/* JSON-LD Structured Data - Professional Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="color-scheme" content="light" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <link rel="canonical" href={siteUrl} />
        
        {/* Favicons - using Next.js defaults */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Skip to main content link for keyboard navigation */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100001] focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-white focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
        >
          Skip to main content
        </a>
        
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