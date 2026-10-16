"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone } from "lucide-react";
import PillNav from "./PillNav";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <PillNav
        logo="/images/logo.png"
        logoAlt="Dr Harshika Wellness Logo"
        items={navLinks}
        activeHref={pathname}
        baseColor="#2A5A3D"
        pillColor="#FDF8F0"
        pillTextColor="#234E34"
        hoveredPillTextColor="#FFFFFF"
        cta={
          <Link
            href="/book"
            className="flex items-center justify-center gap-2 h-12 px-4 sm:px-5 rounded-full text-xs sm:text-sm font-semibold text-white whitespace-nowrap shadow-xl shadow-orange-900/20 hover:-translate-y-0.5 transition-transform"
            style={{
              background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
            }}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Book Consultation</span>
            <span className="sm:hidden">Book</span>
          </Link>
        }
      />
    </header>
  );
}
