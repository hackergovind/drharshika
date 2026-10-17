import BookingForm from "@/components/BookingForm";
import { pageMeta } from "@/lib/site";
import { Shield, Clock, Globe } from "lucide-react";

export const metadata = pageMeta({
  title: "Book Consultation",
  description:
    "Book your personalized homeopathic consultation with Dr. Harshika Singh. Online appointments available across India.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <section className="hero-pattern pt-32 pb-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-charcoal mb-4">
            Book Your <span className="gradient-text">Consultation</span>
          </h1>
          <div className="section-divider" />
          <p className="text-muted mt-6 max-w-xl mx-auto text-lg text-balance">
            Take the first step towards natural healing. Schedule your
            personalized consultation with Dr. Harshika Singh.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Info Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <div className="sticky top-28 space-y-6">
                <div className="card-premium p-6">
                  <h3 className="font-heading text-lg font-bold text-charcoal mb-4">
                    What to Expect
                  </h3>
                  <div className="space-y-4">
                    {[
                      {
                        icon: Clock,
                        title: "30-45 Min Consultation",
                        desc: "Detailed case-taking to understand your complete health picture.",
                      },
                      {
                        icon: Globe,
                        title: "Online Availability",
                        desc: "Consultations via video/phone call from anywhere in India.",
                      },
                      {
                        icon: Shield,
                        title: "Medicines Delivered",
                        desc: "Prescribed remedies couriered to your doorstep within 3-5 days.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm text-charcoal">
                            {item.title}
                          </p>
                          <p className="text-xs text-muted mt-0.5">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card-premium p-6 bg-primary-50/50">
                  <h4 className="font-heading font-bold text-charcoal mb-2">
                    Need Help?
                  </h4>
                  <p className="text-sm text-muted mb-3">
                    If you have any questions about booking, feel free to reach
                    out to us.
                  </p>
                  <a
                    href="mailto:drharshikawellness@gmail.com"
                    className="text-sm text-primary font-semibold hover:text-primary-dark transition-colors"
                  >
                    drharshikawellness@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="card-premium p-8 lg:p-10">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
