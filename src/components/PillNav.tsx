/**
 * PillNav — floating pill navigation with a GSAP "rising circle" hover effect.
 *
 * Adapted for Next.js App Router (uses next/link instead of react-router).
 * Brand defaults: deep-green pill bar, ivory pills, white hover text.
 */
"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  /** Logo image URL or a React node rendered inside the circular logo button */
  logo: React.ReactNode | string;
  /** Alt text for the logo image */
  logoAlt?: string;
  /** Where the logo links to (defaults to first item href, then "/") */
  logoHref?: string;
  /** Navigation items */
  items: PillNavItem[];
  /** Current pathname for active highlighting (pass usePathname() from parent) */
  activeHref?: string;
  /** Extra classes for the outer floating container */
  className?: string;
  /** GSAP easing for hover timelines */
  ease?: string;
  /** Pill bar / logo / hover-fill color */
  baseColor?: string;
  /** Idle pill background */
  pillColor?: string;
  /** Idle pill text color */
  pillTextColor?: string;
  /** Pill text color while the hover fill is raised */
  hoveredPillTextColor?: string;
  /** Optional CTA node rendered right of the pills (desktop) and left of the hamburger (mobile) */
  cta?: React.ReactNode;
  /** Mobile menu CTA row (defaults to Book Consultation → /book) */
  mobileCta?: PillNavItem;
  /** Entrance animation on mount (skipped for prefers-reduced-motion) */
  initialLoadAnimation?: boolean;
}

export const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = "Logo",
  logoHref,
  items,
  activeHref,
  className = "",
  ease = "power3.out",
  baseColor = "#2A5A3D",
  pillColor = "#FDF8F0",
  pillTextColor = "#234E34",
  hoveredPillTextColor = "#FFFFFF",
  cta,
  mobileCta = { label: "Book Consultation", href: "/book" },
  initialLoadAnimation = true,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoInnerRef = useRef<HTMLImageElement | HTMLDivElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  const homeHref = logoHref ?? items[0]?.href ?? "/";

  const renderLogo = () => {
    if (typeof logo === "string") {
      return (
        <img
          src={logo}
          alt={logoAlt}
          ref={logoInnerRef as React.Ref<HTMLImageElement>}
          className="w-full h-full object-cover pointer-events-none"
        />
      );
    }
    return (
      <div
        ref={logoInnerRef as React.Ref<HTMLDivElement>}
        className="flex items-center justify-center w-full h-full"
      >
        {logo}
      </div>
    );
  };

  useEffect(() => {
    const layout = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;

        // Radius of the circle that fully covers the pill when raised
        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta =
          Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector<HTMLElement>(".pill-label");
        const white = pill.querySelector<HTMLElement>(".pill-label-hover");

        if (label) gsap.set(label, { y: 0 });
        if (white) gsap.set(white, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          { scale: 1.2, xPercent: -50, duration: 0.8, ease, overwrite: "auto" },
          0
        );

        if (label) {
          tl.to(
            label,
            { y: -(h + 8), duration: 0.6, ease, overwrite: "auto" },
            0
          );
        }

        if (white) {
          gsap.set(white, { y: Math.ceil(h + 20), opacity: 0 });
          tl.to(
            white,
            { y: 0, opacity: 1, duration: 0.6, ease, overwrite: "auto" },
            0
          );
        }

        tlRefs.current[index] = tl;
      });
    };

    layout();

    const onResize = () => layout();
    window.addEventListener("resize", onResize);

    if (document.fonts) {
      document.fonts.ready.then(layout).catch(() => {});
    }

    // Entrance: logo pops in, pills stagger from the left (skip for reduced motion)
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (initialLoadAnimation && !reducedMotion) {
      const logoEl = logoRef.current;
      const navItems = navItemsRef.current;

      if (logoEl) {
        gsap.set(logoEl, { scale: 0, opacity: 0 });
        gsap.to(logoEl, {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        });
      }

      if (navItems) {
        const listItems = navItems.querySelectorAll("li");
        gsap.set(listItems, { opacity: 0, x: -20 });
        gsap.to(listItems, {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.05,
          ease: "power2.out",
          delay: 0.2,
        });
      }
    }

    return () => window.removeEventListener("resize", onResize);
  }, [items, ease, initialLoadAnimation]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.4,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const handleLogoEnter = () => {
    const inner = logoInnerRef.current;
    if (!inner) return;
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.to(inner, {
      rotate: 360,
      duration: 0.8,
      ease: "elastic.out(1, 0.5)",
      overwrite: "auto",
      onComplete: () => gsap.set(inner, { rotate: 0 }),
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const menu = mobileMenuRef.current;
    if (menu) {
      if (newState) {
        gsap.set(menu, { display: "block", opacity: 0, y: -20 });
        gsap.to(menu, { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" });
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: -20,
          duration: 0.3,
          ease: "power3.in",
          onComplete: () => {
            gsap.set(menu, { display: "none" });
          },
        });
      }
    }
  };

  const cssVars = {
    "--base": baseColor,
    "--pill-bg": pillColor,
    "--hover-text": hoveredPillTextColor,
    "--pill-text": pillTextColor,
    "--nav-h": "48px",
    "--pill-pad-x": "18px",
    "--pill-gap": "6px",
  } as React.CSSProperties;

  const basePillClasses =
    "relative overflow-hidden inline-flex items-center justify-center h-[calc(var(--nav-h)-12px)] self-center no-underline rounded-full box-border font-medium text-[13px] uppercase tracking-wider cursor-pointer border border-emerald-950/10 shadow-md shadow-emerald-950/10";

  return (
    <div
      ref={containerRef}
      className={`relative z-[1000] w-full max-w-6xl mx-auto ${className}`}
      style={cssVars}
    >
      <nav
        className="relative w-full flex items-center justify-between gap-3"
        aria-label="Primary"
      >
        {/* Logo */}
        <div
          className="flex-shrink-0"
          onMouseEnter={handleLogoEnter}
        >
          <Link
            ref={logoRef}
            href={homeHref}
            aria-label="Dr. Harshika Wellness — home"
            className="flex items-center justify-center rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-emerald-950/20 ring-2 ring-white/70"
            style={{
              width: "var(--nav-h)",
              height: "var(--nav-h)",
              background: "var(--base)",
              color: "var(--pill-bg)",
            }}
          >
            {renderLogo()}
          </Link>
        </div>

        {/* Desktop pills — absolutely centered; frosted bar appears on scroll so pills never clash with headings underneath */}
        <div
          ref={navItemsRef}
          className={`hidden lg:flex items-center rounded-full px-1.5 absolute left-1/2 -translate-x-1/2 transition-all duration-300 ${
            scrolled
              ? "bg-[#FDF8F0]/95 backdrop-blur-xl shadow-xl shadow-emerald-950/15 border border-emerald-950/10"
              : "bg-transparent border border-transparent"
          }`}
          style={{ height: "var(--nav-h)" }}
        >
          <ul
            role="menubar"
            className="list-none flex items-stretch m-0 p-0 h-full"
            style={{ gap: "var(--pill-gap)" }}
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;

              return (
                <li key={item.href} role="none" className="flex items-center">
                  <Link
                    role="menuitem"
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={basePillClasses}
                    style={{
                      background: "var(--pill-bg)",
                      color: "var(--pill-text)",
                      paddingLeft: "var(--pill-pad-x)",
                      paddingRight: "var(--pill-pad-x)",
                    }}
                    aria-label={item.ariaLabel || item.label}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    <span
                      className="absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                      style={{ background: "var(--base)", willChange: "transform" }}
                      aria-hidden="true"
                      ref={(el) => {
                        circleRefs.current[i] = el;
                      }}
                    />
                    <span className="relative inline-block leading-none z-[2] overflow-hidden py-1">
                      <span
                        className="pill-label relative z-[2] inline-block"
                        style={{ willChange: "transform" }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="pill-label-hover absolute left-0 top-1 z-[3] inline-block w-full text-center"
                        style={{
                          color: "var(--hover-text)",
                          willChange: "transform, opacity",
                        }}
                        aria-hidden="true"
                      >
                        {item.label}
                      </span>
                    </span>
                    {isActive && (
                      <span
                        className="absolute left-1/2 -bottom-0.5 -translate-x-1/2 w-1 h-1 rounded-full z-[4]"
                        style={{ background: "var(--base)" }}
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* CTA + mobile hamburger */}
        <div className="flex items-center gap-2.5">
          {cta}
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
            className="lg:hidden flex items-center justify-center rounded-full transition-transform active:scale-90 shadow-xl shadow-emerald-950/20"
            style={{
              width: "var(--nav-h)",
              height: "var(--nav-h)",
              background: "var(--base)",
              color: "var(--pill-bg)",
            }}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      <div
        ref={mobileMenuRef}
        className="lg:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden shadow-2xl z-[999] hidden"
        style={{ background: "var(--base)" }}
      >
        <ul className="list-none m-0 p-2 flex flex-col gap-1">
          {items.map((item) => {
            const isActive = activeHref === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className="block py-3 px-6 text-sm font-semibold uppercase tracking-widest rounded-xl transition-colors"
                  style={
                    isActive
                      ? { background: "var(--pill-bg)", color: "var(--pill-text)" }
                      : { color: "var(--pill-bg)" }
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li className="mt-1 pt-2" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
            <Link
              href={mobileCta.href}
              className="flex items-center justify-center gap-2 w-full py-3 px-6 rounded-xl font-semibold text-sm text-white"
              style={{
                background: "linear-gradient(135deg, #F97316 0%, #EA580C 100%)",
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {mobileCta.label}
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
