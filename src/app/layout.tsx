import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const siteUrl = "https://drharshika.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Dr. Harshika Wellness | Homeopathic Doctor India",
    template: "%s | Dr. Harshika Wellness",
  },
  description:
    "Expert homeopathic care for PCOS, thyroid, hormonal imbalance & joint pain by Dr. Harshika Singh, BHMS MD (Hom.). Online consultations across India.",
  keywords: [
    "homeopathy",
    "PCOS treatment",
    "thyroid homeopathy",
    "joint pain treatment",
    "Dr Harshika Singh",
    "homeopathic doctor",
    "online consultation India",
    "hormonal imbalance",
    "arthritis treatment",
  ],
  authors: [{ name: "Dr. Harshika Singh", url: siteUrl }],
  creator: "Dr. Harshika Singh",
  publisher: "Dr. Harshika Wellness",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Dr. Harshika Wellness — Healing from Within, Naturally",
    description:
      "Expert homeopathic care for PCOS, thyroid & joint health by Dr. Harshika Singh, BHMS MD (Hom.). Online consultations across India.",
    type: "website",
    url: siteUrl,
    siteName: "Dr. Harshika Wellness",
    images: [
      {
        url: `${siteUrl}/images/dr-harshika-og.png`,
        width: 1200,
        height: 630,
        alt: "Dr. Harshika Singh - BHMS, MD (Hom.) - Homeopathic Specialist",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dr. Harshika Wellness — Healing from Within, Naturally",
    description:
      "Expert homeopathic care for PCOS, thyroid & joint health by Dr. Harshika Singh, BHMS MD (Hom.). Online consultations across India.",
    images: [`${siteUrl}/images/dr-harshika-og.png`],
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
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
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
      logo: `${siteUrl}/images/dr-harshika-logo.png`,
      image: `${siteUrl}/images/dr-harshika-og.png`,
      description:
        "Expert homeopathic clinic specialising in hormonal health, thyroid disorders, PCOS, and musculoskeletal conditions. Online consultations available across India.",
      medicalSpecialty: "Homeopathy",
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
        contactType: "Appointment Booking",
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
      image: `${siteUrl}/images/dr-harshika-photo.png`,
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
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
      </body>
    </html>
  );
}
