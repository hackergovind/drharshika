"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Download, X } from "lucide-react";
import PillNav from "./PillNav";
import { APK_DOWNLOAD_URL } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/packages", label: "Packages" },
  { href: "/app", label: "Android App" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined" && sessionStorage.getItem("harshika_hide_top_banner") === "1") {
      setShowBanner(false);
    }
  }, []);

  const handleDismiss = () => {
    setShowBanner(false);
    sessionStorage.setItem("harshika_hide_top_banner", "1");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center">
      {showBanner && (
        <aside
          aria-label="Download Android App Banner"
          className="w-full bg-[#183925] border-b border-emerald-500/30 text-white py-1.5 px-3 sm:px-6 shadow-sm"
        >
          <div className="container-custom flex items-center justify-between gap-2 sm:gap-4 text-xs sm:text-sm">
            <div className="flex items-center gap-2 min-w-0">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-emerald-400/20 text-emerald-300 shrink-0">
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" role="img" aria-label="Android">
                  <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1 0-.5514.4482-1 .9993-1 .5511 0 .9993.4486.9993 1 0 .5514-.4482 1-.9993 1m-11.046 0c-.5511 0-.9993-.4486-.9993-1 0-.5514.4482-1 .9993-1 .5511 0 .9993.4486.9993 1 0 .5514-.4482 1-.9993 1m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5834 8.4116 13.8543 8.125 12 8.125c-1.8543 0-3.5834.2866-5.1368.8247L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.152 1.5676l1.9973 3.4592C2.6889 12.1867 0 16.0365 0 20.625h24c0-4.5885-2.6889-8.4383-6.1185-11.3036" />
                </svg>
              </span>
              <p className="truncate">
                <strong className="font-semibold text-emerald-100">Android App:</strong>{" "}
                <span className="text-emerald-100/90 hidden md:inline">
                  Download Harshika eClinic directly on Android for instant homeopathic care
                </span>
                <span className="text-emerald-100/90 md:hidden">
                  Download Harshika eClinic APK
                </span>
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <a
                href={APK_DOWNLOAD_URL}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500 hover:bg-orange-600 text-white shadow-sm transition-transform hover:-translate-y-0.5"
                title="Direct APK Download (33 MB)"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download APK</span>
                <span className="hidden sm:inline text-[10px] opacity-90">(33 MB)</span>
              </a>
              <button
                onClick={handleDismiss}
                aria-label="Dismiss banner"
                className="text-emerald-200 hover:text-white p-1 rounded-full hover:bg-emerald-900/60 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </aside>
      )}

      <div className="w-full flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
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
      </div>
    </header>
  );
}
