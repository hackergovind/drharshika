import { pageMeta } from "@/lib/site";

export const metadata = pageMeta({
  title: "Terms of Service",
  description:
    "Terms of Service for Dr. Harshika Wellness — conditions for using our online consultation platform.",
  path: "/terms-of-service",
});

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-ivory pt-28 pb-16">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="font-heading text-charcoal mb-4">Terms of Service</h1>
        <p className="text-muted text-sm mb-8">
          Last updated: June 2025
        </p>

        <div className="space-y-8 text-charcoal-light leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="text-muted">
              By accessing and using the Dr. Harshika Wellness website and services, you accept
              and agree to be bound by these Terms of Service. If you do not agree, please do
              not use our services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              2. Medical Services
            </h2>
            <p className="text-muted">
              The services provided are online homeopathic consultations with Dr. Harshika Singh,
              a registered BHMS, MD (Hom.) practitioner. These consultations are intended to
              complement, not replace, conventional medical care. Always inform your primary
              care physician about any alternative treatments you are pursuing.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              3. Appointments &amp; Cancellations
            </h2>
            <p className="text-muted">
              Appointments must be booked at least 24 hours in advance. Cancellations must be
              made at least 12 hours before the scheduled appointment. Repeated no-shows may
              result in suspension of booking privileges. Dr. Harshika reserves the right to
              reschedule consultations with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              4. Patient Responsibilities
            </h2>
            <p className="text-muted">
              Patients are responsible for providing accurate and complete health information.
              Withholding relevant medical history may affect the quality of treatment. Patients
              must follow prescribed treatment plans and report any adverse effects immediately.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              5. Limitation of Liability
            </h2>
            <p className="text-muted">
              While Dr. Harshika Singh provides professional care to the best of her ability,
              results may vary between individuals. Dr. Harshika Wellness shall not be liable
              for any indirect, incidental, or consequential damages arising from the use of
              our services.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              6. Intellectual Property
            </h2>
            <p className="text-muted">
              All content on this website, including text, images, and design elements, is the
              property of Dr. Harshika Wellness and is protected by applicable intellectual
              property laws. Unauthorized reproduction or use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              7. Contact
            </h2>
            <p className="text-muted">
              For questions about these terms, please contact us at{" "}
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
