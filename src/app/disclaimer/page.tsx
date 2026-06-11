import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Medical Disclaimer",
  description:
    "Medical disclaimer for Dr. Harshika Wellness — important information about homeopathic care and our scope of practice.",
  alternates: {
    canonical: "https://drharshika.vercel.app/disclaimer",
  },
};

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-ivory pt-28 pb-16">
      <div className="container-custom max-w-3xl mx-auto">
        <h1 className="font-heading text-charcoal mb-4">Medical Disclaimer</h1>
        <p className="text-muted text-sm mb-8">
          Please read this disclaimer carefully before using our services.
        </p>

        <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-6 mb-8">
          <p className="text-sm text-charcoal-light font-medium leading-relaxed">
            <strong className="text-charcoal">Important Notice:</strong> The information provided
            on this website is for educational and informational purposes only. It is not intended
            as, and shall not be understood or construed as, professional medical advice.
          </p>
        </div>

        <div className="space-y-8 text-charcoal-light leading-relaxed">
          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              1. Not a Substitute for Professional Medical Advice
            </h2>
            <p className="text-muted">
              The content on this website, including articles, blog posts, and service descriptions,
              is provided for general informational purposes only. This information does not replace
              professional medical advice, diagnosis, or treatment. Always seek the advice of your
              physician or other qualified health provider with any questions you may have regarding
              a medical condition.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              2. Scope of Homeopathic Practice
            </h2>
            <p className="text-muted">
              Dr. Harshika Singh practises homeopathy, a complementary and alternative medicine
              (CAM) system. Homeopathy is regulated under AYUSH (Ayurveda, Yoga &amp; Naturopathy,
              Unani, Siddha and Homeopathy) in India. While homeopathy has been used for centuries,
              scientific evidence for its effectiveness varies across conditions. Treatment results
              may differ from person to person.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              3. Emergency Situations
            </h2>
            <p className="text-muted">
              Homeopathic consultations are not suitable for emergency medical situations.
              If you are experiencing a medical emergency, please call emergency services
              immediately (India: 112) or visit your nearest hospital emergency department.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              4. Individual Results
            </h2>
            <p className="text-muted">
              Treatment outcomes described on this website, including patient testimonials,
              represent individual experiences and may not reflect results typical for all
              patients. Results depend on individual health conditions, adherence to treatment,
              and various other factors.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              5. Continuing Conventional Treatment
            </h2>
            <p className="text-muted">
              Do not discontinue any prescribed medications or medical treatments without first
              consulting your physician. Homeopathic treatment is intended to complement, not
              replace, your existing medical care.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-xl font-bold text-charcoal mb-3">
              6. Contact
            </h2>
            <p className="text-muted">
              If you have questions about this disclaimer, please contact us at{" "}
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
