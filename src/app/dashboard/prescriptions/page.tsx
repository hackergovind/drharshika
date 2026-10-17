import Link from "next/link";
import { pageMeta } from "@/lib/site";
import { ArrowLeft, FileText, Calendar, Pill, Download } from "lucide-react";

export const metadata = pageMeta({
  title: "Prescriptions",
  description: "View your prescriptions and treatment history.",
  path: "/dashboard/prescriptions",
  noindex: true,
});

const samplePrescriptions = [
  {
    id: "1",
    date: "2026-06-10",
    condition: "PCOS Management",
    remedies: [
      { name: "Pulsatilla 200", dosage: "2 doses, weekly" },
      { name: "Sepia 30", dosage: "3 times daily for 15 days" },
    ],
    notes:
      "Continue for 1 month. Avoid coffee and strong flavors 30 minutes before/after taking remedies. Follow-up in 4 weeks.",
    doctor: "Dr. Harshika Singh",
  },
  {
    id: "2",
    date: "2026-05-15",
    condition: "Thyroid Follow-up",
    remedies: [
      { name: "Thyroidinum 30", dosage: "Once daily, morning" },
      { name: "Calcarea Carb 200", dosage: "1 dose weekly" },
    ],
    notes:
      "TSH levels improving. Continue current prescription. Recheck thyroid panel after 6 weeks.",
    doctor: "Dr. Harshika Singh",
  },
  {
    id: "3",
    date: "2026-04-20",
    condition: "Knee Pain - Osteoarthritis",
    remedies: [
      { name: "Rhus Tox 200", dosage: "2 doses per week" },
      { name: "Bryonia 30", dosage: "As needed for acute pain" },
      { name: "Calcarea Fluor 6X", dosage: "3 times daily" },
    ],
    notes:
      "Gentle exercise recommended. Warm compresses for acute pain. Avoid cold exposure. Review in 3 weeks.",
    doctor: "Dr. Harshika Singh",
  },
];

export default function PrescriptionsPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-10">
          <Link
            href="/dashboard"
            className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="font-heading text-3xl font-bold text-charcoal">
            Prescriptions
          </h1>
          <p className="text-muted mt-1">
            Your treatment history and prescribed remedies.
          </p>
        </div>

        {/* Prescriptions */}
        <div className="space-y-6">
          {samplePrescriptions.map((rx) => {
            const date = new Date(rx.date);
            const formattedDate = date.toLocaleDateString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
            });

            return (
              <div key={rx.id} className="card-premium overflow-hidden">
                {/* Header */}
                <div className="p-6 border-b border-primary/8 flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <FileText className="w-5 h-5 text-primary" />
                      <h3 className="font-heading font-bold text-charcoal">
                        {rx.condition}
                      </h3>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {formattedDate}
                      </span>
                      <span>{rx.doctor}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-1 text-sm text-primary hover:text-primary-dark transition-colors font-medium">
                    <Download className="w-4 h-4" />
                    <span className="hidden sm:inline">Download</span>
                  </button>
                </div>

                {/* Remedies */}
                <div className="p-6">
                  <h4 className="text-sm font-semibold text-charcoal mb-3 flex items-center gap-2">
                    <Pill className="w-4 h-4 text-primary" />
                    Prescribed Remedies
                  </h4>
                  <div className="space-y-2 mb-6">
                    {rx.remedies.map((remedy, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between p-3 rounded-lg bg-ivory"
                      >
                        <span className="font-medium text-sm text-charcoal">
                          {remedy.name}
                        </span>
                        <span className="text-xs text-muted bg-white px-3 py-1 rounded-full">
                          {remedy.dosage}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Notes */}
                  <div className="p-4 rounded-lg bg-primary-50/50 border border-primary/10">
                    <p className="text-xs font-semibold text-primary mb-1">
                      Doctor&apos;s Notes
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {rx.notes}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
