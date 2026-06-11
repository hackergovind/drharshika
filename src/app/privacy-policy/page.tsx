import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for Dr. Harshika Wellness — how we collect, use and protect your personal information.",
  alternates: {
    canonical: "https://drharshika.vercel.app/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-ivory pt-28 pb-16">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="font-heading text-charcoal mb-4">Privacy Policy</h1>
        <p className="text-muted text-sm mb-8">
          Last updated: June 2025
        </p>

        <div className="space-y-8 text-charcoal-light leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              1. Information We Collect
            </h2>
            <p className="text-muted">
              When you book a consultation or contact us, we may collect your name, email address,
              phone number, age, gender, and health-related information you voluntarily provide.
              We do not collect payment information directly — all transactions are handled via
              secure third-party payment gateways.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              2. How We Use Your Information
            </h2>
            <p className="text-muted">
              Your information is used solely to schedule and manage your consultations, communicate
              with you about your appointments, and improve our services. We do not sell, trade,
              or rent your personal data to third parties.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              3. Data Security
            </h2>
            <p className="text-muted">
              We implement appropriate technical and organizational measures to protect your
              personal information against unauthorized access, alteration, disclosure, or
              destruction. All data is transmitted over HTTPS.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              4. Medical Information
            </h2>
            <p className="text-muted">
              Health information you share during consultations is treated as strictly confidential
              and is used exclusively for your clinical care. We comply with all applicable
              healthcare privacy regulations in India.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              5. Cookies
            </h2>
            <p className="text-muted">
              Our website may use essential cookies to improve your browsing experience. We do
              not use advertising or tracking cookies. You can configure your browser to refuse
              cookies, though this may affect some website functionality.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              6. Your Rights
            </h2>
            <p className="text-muted">
              You have the right to access, correct, or delete your personal data. To exercise
              these rights, please contact us at{" "}
              <a
                href="mailto:drharshikawellness@gmail.com"
                className="text-primary hover:underline"
              >
                drharshikawellness@gmail.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              7. Contact
            </h2>
            <p className="text-muted">
              For any privacy-related questions, please contact Dr. Harshika Wellness at{" "}
              <a
                href="mailto:drharshikawellness@gmail.com"
                className="text-primary hover:underline"
              >
                drharshikawellness@gmail.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
