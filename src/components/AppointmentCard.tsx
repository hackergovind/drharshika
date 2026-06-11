"use client";

import { Calendar, Clock, Tag } from "lucide-react";

interface AppointmentCardProps {
  appointment: {
    id: string;
    service: string;
    subService?: string | null;
    date: string;
    time: string;
    status: string;
    notes?: string | null;
  };
}

const statusColors: Record<string, string> = {
  pending: "bg-yellow-100 text-yellow-700",
  confirmed: "bg-green-100 text-green-700",
  completed: "bg-blue-100 text-blue-700",
  cancelled: "bg-red-100 text-red-700",
};

export default function AppointmentCard({ appointment }: AppointmentCardProps) {
  const date = new Date(appointment.date);
  const formattedDate = date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="card-premium p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-heading font-bold text-charcoal">
            {appointment.service}
          </h4>
          {appointment.subService && (
            <p className="text-sm text-muted mt-0.5">{appointment.subService}</p>
          )}
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold capitalize ${
            statusColors[appointment.status] || "bg-gray-100 text-gray-700"
          }`}
        >
          {appointment.status}
        </span>
      </div>

      <div className="flex flex-wrap gap-4 text-sm text-muted">
        <div className="flex items-center gap-1.5">
          <Calendar className="w-4 h-4" />
          <span>{formattedDate}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-4 h-4" />
          <span>{appointment.time}</span>
        </div>
      </div>

      {appointment.notes && (
        <div className="mt-4 pt-4 border-t border-primary/8">
          <p className="text-xs text-muted">
            <span className="font-medium">Notes:</span> {appointment.notes}
          </p>
        </div>
      )}
    </div>
  );
}
