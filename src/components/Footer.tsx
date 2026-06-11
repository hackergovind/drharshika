import Link from "next/link";
import {
  Leaf,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Clock,
  Heart,
  ArrowRight,
} from "lucide-react";

const quickLinks = [
  { href: "/about", label: "About Dr. Harshika" },
  { href: "/services", label: "Our Services" },
  { href: "/testimonials", label: "Patient Stories" },
  { href: "/blog", label: "Health Articles" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact Us" },
];

const serviceLinks = [
  { href: "/services#hormonal", label: "PCOS Treatment" },
  { href: "/services#hormonal", label: "Thyroid Care" },
  { href: "/services#hormonal", label: "Hormonal Balance" },
  { href: "/services#musculoskeletal", label: "Joint Pain Relief" },
  { href: "/services#musculoskeletal", label: "Arthritis Care" },
  { href: "/services#musculoskeletal", label: "Spine Health" },
];

export default function Footer() {
  return (
    <footer className="footer-bg">
      {/* Main Footer */}
      <div className="container-custom section-padding-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-400" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-white">
                  Dr. Harshika
                </h3>
                <p className="text-xs text-white/50">Wellness & Homeopathy</p>
              </div>
            </div>
            <p className="text-sm text-white/60 leading-relaxed mb-6">
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
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-white/80" />
              </a>
              <a
                href="https://www.facebook.com/share/18qw5FdxED/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white/80" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
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
            <h4 className="text-white font-heading font-semibold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-3">
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
            <h4 className="text-white font-heading font-semibold text-lg mb-6">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <a
                  href="mailto:drharshikawellness@gmail.com"
                  className="text-sm text-white/60 hover:text-primary-400 transition-colors"
                >
                  drharshikawellness@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-white/60">
                  Online Consultations Available
                  <br />
                  Across India
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-sm text-white/60">
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
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Dr. Harshika Wellness. All rights reserved.
          </p>
          <p className="text-xs text-white/40 flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-secondary" /> for better health
          </p>
        </div>
      </div>
    </footer>
  );
}
