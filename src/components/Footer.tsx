import Link from "next/link";
import {
  Leaf,
  Mail,
  Instagram,
  Facebook,
  Clock,
  Heart,
  ArrowRight,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { APK_DOWNLOAD_URL } from "@/lib/site";
import { whatsappUrl, WHATSAPP_DISPLAY } from "@/lib/contact";

const quickLinks = [
  { href: "/about", label: "About Dr. Harshika" },
  { href: "/services", label: "Our Services" },
  { href: "/packages", label: "Packages & Fees" },
  { href: "/pcos-treatment-homeopathy", label: "PCOS Care India" },
  { href: "/thyroid-treatment-homeopathy", label: "Thyroid Care India" },
  { href: "/testimonials", label: "Patient Stories" },
  { href: "/blog", label: "Health Articles" },
  { href: "/faq", label: "FAQs" },
  { href: "/app", label: "Android App (APK)" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/pcos-treatment-homeopathy", label: "PCOS & PCOD Care" },
  { href: "/thyroid-treatment-homeopathy", label: "Thyroid Disorders" },
  { href: "/services#hormonal", label: "Hormonal Balance" },
  { href: "/services#musculoskeletal", label: "Joint Pain Relief" },
  { href: "/services#musculoskeletal", label: "Arthritis Care" },
  { href: "/services#musculoskeletal", label: "Spine Health" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms-of-service", label: "Terms of Service" },
  { href: "/disclaimer", label: "Medical Disclaimer" },
];

export default function Footer() {
  return (
    <footer className="footer-bg">
      {/* Main Footer */}
      <div className="container-custom pt-16 pb-14 md:pt-20 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <p className="text-lg font-heading font-bold text-white">
                  Dr. Harshika
                </p>
                <p className="text-xs text-white/50">Wellness &amp; Homeopathy</p>
              </div>
            </div>

            {/* Author / E-E-A-T signal */}
            <div className="mb-5">
              <p className="text-sm font-semibold text-white mb-1">
                Dr. Harshika Singh
              </p>
              <p className="text-xs text-primary-300 font-medium mb-1">
                BHMS, MD (Hom.)
              </p>
              <p className="text-xs text-white/50 leading-relaxed">
                Focused on Hormonal Health, Thyroid Care &amp; Musculoskeletal Conditions
              </p>
            </div>

            <p className="text-sm text-white/60 leading-relaxed mb-5">
              Compassionate homeopathic care for hormonal health and
              musculoskeletal conditions. Personalized treatment plans that
              address root causes, not just symptoms.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/drharshikahomeopathy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/40 transition-colors"
                aria-label="Follow Dr. Harshika on Instagram"
              >
                <Instagram className="w-4 h-4 text-white/80" />
              </a>
              <a
                href="https://www.facebook.com/share/18qw5FdxED/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/40 transition-colors"
                aria-label="Follow Dr. Harshika on Facebook"
              >
                <Facebook className="w-4 h-4 text-white/80" />
              </a>
            </div>

            {/* Android App Download Badge */}
            <div className="mt-6 pt-5 border-t border-white/10">
              <p className="text-xs text-white/70 font-semibold mb-2.5 uppercase tracking-wider">
                Mobile App
              </p>
              <a
                href={APK_DOWNLOAD_URL}
                className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all text-xs group"
                title="Download Harshika eClinic APK directly on Android"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 fill-current text-emerald-400" viewBox="0 0 24 24" role="img" aria-label="Android">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-1 0-.5514.4482-1 .9993-1 .5511 0 .9993.4486.9993 1 0 .5514-.4482 1-.9993 1m-11.046 0c-.5511 0-.9993-.4486-.9993-1 0-.5514.4482-1 .9993-1 .5511 0 .9993.4486.9993 1 0 .5514-.4482 1-.9993 1m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5834 8.4116 13.8543 8.125 12 8.125c-1.8543 0-3.5834.2866-5.1368.8247L4.8409 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.152 1.5676l1.9973 3.4592C2.6889 12.1867 0 16.0365 0 20.625h24c0-4.5885-2.6889-8.4383-6.1185-11.3036" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-white leading-tight">Harshika eClinic</p>
                  <p className="text-[10px] text-white/60">Download Android APK (33 MB)</p>
                </div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-white font-semibold tracking-wider text-sm mb-5 uppercase">
              Quick Links
            </p>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-white font-semibold tracking-wider text-sm mb-5 uppercase">
              Services
            </p>
            <ul className="space-y-4">
              {serviceLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-white font-semibold tracking-wider text-sm mb-5 uppercase">
              Get in Touch
            </p>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MessageCircle className="w-4 h-4 text-[#25D366] mt-1 flex-shrink-0" />
                <a
                  href={whatsappUrl("Hello Dr. Harshika, I'd like to inquire about a consultation.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/90 hover:text-[#25D366] transition-colors leading-relaxed font-medium"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:drharshikawellness@gmail.com"
                  className="text-sm text-white/60 hover:text-primary-400 transition-colors break-all leading-relaxed"
                >
                  drharshikawellness@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-white/60 leading-relaxed">
                  Online Consultations Available
                  <br />
                  Across India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-white/60 leading-relaxed">
                  Mon – Sat: 10:00 AM – 7:00 PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="container-custom pt-8 pb-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 gap-4">
          <p>
            © {new Date().getFullYear()} Dr. Harshika Wellness. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-secondary" /> for better health
          </p>
        </div>
      </div>
    </footer>
  );
}
