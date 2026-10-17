import Link from "next/link";
import AppointmentCard from "@/components/AppointmentCard";
import { pageMeta } from "@/lib/site";
import { ArrowLeft, Plus } from "lucide-react";

export const metadata = pageMeta({
  title: "Appointments",
  description: "View and manage your appointments.",
  path: "/dashboard/appointments",
  noindex: true,
});

const sampleAppointments = [
  {
    id: "1",
    service: "Hormonal & Thyroid Health",
    subService: "PCOS Management",
    date: "2026-06-15",
    time: "10:30 AM",
    status: "confirmed",
    notes: "First consultation - detailed case taking required",
  },
  {
    id: "2",
    service: "Musculoskeletal Health",
    subService: "Knee Pain & Joint Stiffness",
    date: "2026-06-18",
    time: "02:00 PM",
    status: "pending",
    notes: "Follow-up from previous consultation",
  },
  {
    id: "3",
    service: "Hormonal & Thyroid Health",
    subService: "Thyroid Disorders",
    date: "2026-06-10",
    time: "11:00 AM",
    status: "completed",
    notes: "TSH levels improving, continue current prescription",
  },
  {
    id: "4",
    service: "Musculoskeletal Health",
    subService: "Cervical Spondylosis",
    date: "2026-06-05",
    time: "03:30 PM",
    status: "completed",
    notes: null,
  },
];

export default function AppointmentsPage() {
  const upcoming = sampleAppointments.filter(
    (a) => a.status === "confirmed" || a.status === "pending"
  );
  const past = sampleAppointments.filter(
    (a) => a.status === "completed" || a.status === "cancelled"
  );

  return (
    <div className="pt-28 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <Link
              href="/dashboard"
              className="flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </Link>
            <h1 className="font-heading text-3xl font-bold text-charcoal">
              Appointments
            </h1>
          </div>
          <Link href="/book" className="btn-primary text-sm">
            <Plus className="w-4 h-4" />
            <span>New Appointment</span>
          </Link>
        </div>

        {/* Upcoming */}
        <div className="mb-10">
          <h2 className="font-heading text-xl font-bold text-charcoal mb-4">
            Upcoming Appointments
          </h2>
          {upcoming.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {upcoming.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
          ) : (
            <div className="card-premium p-8 text-center">
              <p className="text-muted">No upcoming appointments.</p>
              <Link href="/book" className="btn-primary mt-4 inline-flex text-sm">
                Book a Consultation
              </Link>
            </div>
          )}
        </div>

        {/* Past */}
        <div>
          <h2 className="font-heading text-xl font-bold text-charcoal mb-4">
            Past Appointments
          </h2>
          {past.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {past.map((appointment) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                />
              ))}
            </div>
          ) : (
            <div className="card-premium p-8 text-center">
              <p className="text-muted">No past appointments.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
