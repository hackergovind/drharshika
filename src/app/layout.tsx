import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_SIZE,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_TAGLINE,
  SITE_URL,
} from "@/lib/site";

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Harshika Wellness | Homeopathic Doctor India",
    template: "%s | Dr. Harshika Wellness",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "homeopathy",
    "PCOS treatment",
    "thyroid homeopathy",
    "joint pain treatment",
    "Dr Harshika Singh",
    "homeopathic doctor",
    "online consultation India",
    "homeopathic consultation packages",
    "hormonal imbalance",
    "arthritis treatment",
  ],
  authors: [{ name: "Dr. Harshika Singh", url: `${siteUrl}/about` }],
  creator: "Dr. Harshika Singh",
  publisher: SITE_NAME,
  // Canonical for the home page only. Every other route sets its own through
  // pageMeta() in src/lib/site.ts — inheriting this one would tell search
  // engines that /about, /services & co. are duplicates of the home page.
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    type: "website",
    url: siteUrl,
    siteName: SITE_NAME,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        ...DEFAULT_OG_IMAGE_SIZE,
        alt: "Dr. Harshika Singh — BHMS, MD (Hom.) — Homeopathic Specialist",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    // Only files that actually exist: the old favicon.ico and
    // apple-touch-icon.png entries were 404s. logo.png is a 1024x1024 square,
    // which is what apple-touch-icon wants.
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: "/images/logo.png",
  },
  verification: {
    other: {
      "msvalidate.01": "A50A09FE4E207C506BC0BD7A587449FD",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}/#organization`,
      name: "Dr. Harshika Wellness",
      url: siteUrl,
      logo: `${siteUrl}/images/logo.png`,
      image: `${siteUrl}${DEFAULT_OG_IMAGE}`,
      description:
        "Expert homeopathic clinic specialising in hormonal health, thyroid disorders, PCOS, and musculoskeletal conditions. Online consultations available across India.",
      medicalSpecialty: "Homeopathy",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
        addressLocality: "India",
      },
      availableService: [
        {
          "@type": "MedicalTherapy",
          name: "Hormonal & Thyroid Health",
          description:
            "Homeopathic treatment for PCOS, thyroid disorders, hormonal imbalance and menstrual health",
        },
        {
          "@type": "MedicalTherapy",
          name: "Musculoskeletal Health",
          description:
            "Homeopathic care for arthritis, joint pain, back pain and mobility conditions",
        },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        email: "drharshikawellness@gmail.com",
        contactType: "customer support",
        availableLanguage: ["English", "Hindi"],
        areaServed: "IN",
      },
      areaServed: {
        "@type": "Country",
        name: "India",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Online Consultation Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Online Consultation",
              description: "Video/phone consultation with Dr. Harshika Singh",
            },
          },
        ],
      },
      sameAs: [
        "https://www.instagram.com/drharshikahomeopathy",
        "https://www.facebook.com/share/18qw5FdxED/",
      ],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#doctor`,
      name: "Dr. Harshika Singh",
      jobTitle: "Homeopathic Physician",
      honorificSuffix: "BHMS, MD (Hom.)",
      worksFor: { "@id": `${siteUrl}/#organization` },
      url: `${siteUrl}/about`,
      image: `${siteUrl}/images/dr-harshika.png`,
      description:
        "Dr. Harshika Singh is a qualified homeopathic physician (BHMS, MD Hom.) specialising in hormonal disorders, thyroid conditions, PCOS, and musculoskeletal health.",
      knowsAbout: [
        "Homeopathy",
        "PCOS",
        "Thyroid Disorders",
        "Hormonal Imbalance",
        "Arthritis",
        "Joint Pain",
        "Musculoskeletal Health",
      ],
      sameAs: [
        "https://www.instagram.com/drharshikahomeopathy",
        "https://www.facebook.com/share/18qw5FdxED/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Dr. Harshika Wellness",
      publisher: { "@id": `${siteUrl}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/blog?search={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Icons are emitted from the metadata.icons block above. The old
            hand-written <link> tags pointed at /favicon.ico and
            /apple-touch-icon.png, neither of which exists. */}
      </head>
      <body className="antialiased">
        {/* Skip to content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:font-medium"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="min-h-screen">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
