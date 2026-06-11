import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Dr. Harshika Wellness | Homeopathic Care for Hormonal & Joint Health",
    template: "%s | Dr. Harshika Wellness",
  },
  description:
    "Dr. Harshika Singh (BHMS, MD Hom.) offers expert homeopathic treatment for PCOS, thyroid disorders, hormonal imbalance, arthritis, joint pain, and musculoskeletal conditions. Online consultations available across India.",
  keywords: [
    "homeopathy",
    "PCOS treatment",
    "thyroid homeopathy",
    "joint pain treatment",
    "Dr Harshika",
    "homeopathic doctor",
    "online consultation",
    "hormonal imbalance",
    "arthritis treatment",
  ],
  openGraph: {
    title: "Dr. Harshika Wellness — Healing from Within, Naturally",
    description:
      "Compassionate homeopathic care for hormonal health and musculoskeletal conditions by Dr. Harshika Singh, BHMS, MD (Hom.)",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

