"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

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
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 navbar-glass ${
        scrolled ? "shadow-xl" : ""
      }`}
    >
      {/* ── Desktop Navbar: 3-column grid ── */}
      <div className="container-custom">
        <div className="hidden lg:grid lg:grid-cols-3 items-center h-20">

          {/* Col 1 — Logo (left-aligned) */}
          <Link href="/" className="flex items-center gap-3 group w-fit">
            <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Dr Harshika Wellness Logo"
                width={44}
                height={44}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="leading-tight">
              <span className="text-base font-heading font-bold text-white block">
                Dr. Harshika
              </span>
              <span className="text-xs text-white/55 block -mt-0.5">
                Wellness &amp; Homeopathy
              </span>
            </div>
          </Link>

          {/* Col 2 — Nav links (center-aligned) */}
          <div className="flex items-center justify-center gap-0.5">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "text-white bg-white/15"
                      : "text-white/75 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Col 3 — CTA Button (right-aligned) */}
          <div className="flex justify-end">
            <Link
              href="/book"
              className="btn-primary !bg-white !text-primary hover:!bg-white/90 !py-2.5 !px-5 text-sm font-semibold shadow-lg"
            >
              <Phone className="w-4 h-4" />
              <span>Book Consultation</span>
            </Link>
          </div>
        </div>

        {/* ── Mobile Navbar ── */}
        <div className="lg:hidden flex items-center justify-between h-16 px-1">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white/20 flex-shrink-0">
              <Image
                src="/images/logo.png"
                alt="Dr Harshika Wellness Logo"
                width={36}
                height={36}
                className="object-cover w-full h-full"
                priority
              />
            </div>
            <div className="leading-tight">
              <span className="text-sm font-heading font-bold text-white block">
                Dr. Harshika
              </span>
              <span className="text-xs text-white/55 block -mt-0.5">
                Wellness &amp; Homeopathy
              </span>
            </div>
          </Link>

          {/* Mobile: Book button + Hamburger */}
          <div className="flex items-center gap-2">
            <Link
              href="/book"
              className="btn-primary !bg-white !text-primary !py-2 !px-3 text-xs font-semibold hidden sm:flex"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Book</span>
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Dropdown Menu ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(35, 78, 52, 0.98) 0%, rgba(50, 88, 63, 0.98) 100%)",
              borderTop: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <div className="container-custom py-4 space-y-1">
              {navLinks.map((link, i) => {
                const isActive = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center px-4 py-3 rounded-xl font-medium text-sm transition-all ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "text-white/75 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}

              {/* Mobile CTA */}
              <div className="pt-3 pb-1">
                <Link
                  href="/book"
                  className="flex items-center justify-center gap-2 w-full bg-white text-primary py-3 rounded-xl font-semibold text-sm shadow-md hover:bg-white/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Book Consultation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
