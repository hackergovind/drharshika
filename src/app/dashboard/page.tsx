import Link from "next/link";
import {
  CalendarDays,
  FileText,
  Users,
  Clock,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { pageMeta } from "@/lib/site";

// Internal area — noindex, and disallowed in robots.txt.
export const metadata = pageMeta({
  title: "Dashboard",
  description: "Dr. Harshika Wellness patient dashboard.",
  path: "/dashboard",
  noindex: true,
});

const dashboardCards = [
  {
    title: "Appointments",
    description: "View and manage your upcoming and past appointments.",
    icon: CalendarDays,
    href: "/dashboard/appointments",
    color: "bg-primary/10 text-primary",
    stat: "View All",
  },
  {
    title: "Prescriptions",
    description: "Access your prescribed remedies and treatment history.",
    icon: FileText,
    href: "/dashboard/prescriptions",
    color: "bg-secondary/10 text-secondary",
    stat: "View All",
  },
];

const quickStats = [
  {
    label: "Total Patients",
    value: "1,247",
    icon: Users,
    change: "+12%",
  },
  {
    label: "This Week",
    value: "38",
    icon: CalendarDays,
    change: "+5%",
  },
  {
    label: "Avg. Session",
    value: "35 min",
    icon: Clock,
    change: "Stable",
  },
  {
    label: "Satisfaction",
    value: "95%",
    icon: TrendingUp,
    change: "+2%",
  },
];

export default function DashboardPage() {
  return (
    <div className="pt-28 pb-16">
      <div className="container-custom">
        {/* Header */}
        <div className="mb-10">
          <h1 className="font-heading text-3xl font-bold text-charcoal mb-2">
            Dashboard
          </h1>
          <p className="text-muted">
            Welcome to Dr. Harshika Wellness management portal.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {quickStats.map((stat, i) => (
            <div key={i} className="card-premium p-6">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-heading font-bold text-charcoal">
                {stat.value}
              </p>
              <p className="text-xs text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {dashboardCards.map((card, i) => (
            <Link key={i} href={card.href} className="group">
              <div className="card-premium p-8 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${card.color} flex items-center justify-center`}
                  >
                    <card.icon className="w-7 h-7" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                  {card.title}
                </h3>
                <p className="text-sm text-muted">{card.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Recent Activity Placeholder */}
        <div className="mt-10 card-premium p-8">
          <h3 className="font-heading text-lg font-bold text-charcoal mb-6">
            Recent Activity
          </h3>
          <div className="space-y-4">
            {[
              {
                action: "New appointment booked",
                patient: "P.S.",
                time: "2 hours ago",
                type: "PCOS Consultation",
              },
              {
                action: "Follow-up completed",
                patient: "R.K.",
                time: "5 hours ago",
                type: "Thyroid Follow-up",
              },
              {
                action: "New inquiry received",
                patient: "M.D.",
                time: "1 day ago",
                type: "Knee Pain Query",
              },
              {
                action: "Prescription updated",
                patient: "A.V.",
                time: "1 day ago",
                type: "Cervical Spondylosis",
              },
            ].map((activity, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-4 rounded-xl bg-ivory hover:bg-primary-50 transition-colors"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-primary">
                    {activity.patient}
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-charcoal">
                    {activity.action}
                  </p>
                  <p className="text-xs text-muted">{activity.type}</p>
                </div>
                <span className="text-xs text-muted flex-shrink-0">
                  {activity.time}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
