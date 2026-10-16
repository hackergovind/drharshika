import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import {
  Mail,
  MapPin,
  Clock,
  Instagram,
  Facebook,
  Phone,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Dr. Harshika Singh for homeopathic consultations, queries, or appointments. Available online across India.",
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-pattern pt-32 pb-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-charcoal mb-4">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <div className="section-divider" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-lg text-balance">
            Have questions about homeopathic treatment? We&apos;d love to hear from
            you. Reach out and we&apos;ll respond within 24 hours.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <div className="sticky top-28 space-y-6">
                <div className="card-premium p-8">
                  <h3 className="font-heading text-lg font-bold text-charcoal mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-5">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-charcoal">
                          Email
                        </p>
                        <a
                          href="mailto:drharshikawellness@gmail.com"
                          className="text-sm text-muted hover:text-primary transition-colors"
                        >
                          drharshikawellness@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-charcoal">
                          Location
                        </p>
                        <p className="text-sm text-muted">
                          Online Consultations<br />Available across India
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Clock className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm text-charcoal">
                          Working Hours
                        </p>
                        <p className="text-sm text-muted">
                          Mon – Sat: 10:00 AM – 7:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="card-premium p-8">
                  <h3 className="font-heading text-lg font-bold text-charcoal mb-4">
                    Follow Us
                  </h3>
                  <p className="text-sm text-muted mb-4">
                    Stay connected for health tips, patient stories, and
                    homeopathic insights.
                  </p>
                  <div className="space-y-3">
                    <a
                      href="https://www.instagram.com/drharshikahomeopathy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-ivory hover:bg-primary-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Instagram className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-charcoal">Instagram</p>
                        <p className="text-xs text-muted">@drharshikahomeopathy</p>
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/share/18qw5FdxED/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-xl bg-ivory hover:bg-primary-50 transition-colors group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
                        <Facebook className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-charcoal">Facebook</p>
                        <p className="text-xs text-muted">Dr. Harshika Homeopathy</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="card-premium p-8 lg:p-10">
                <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                  Send Us a Message
                </h3>
                <p className="text-muted text-sm mb-8">
                  Fill out the form below and we&apos;ll get back to you as soon as possible.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
