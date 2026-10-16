import { Star } from "lucide-react";
import { testimonials } from "@/lib/utils";

type Testimonial = (typeof testimonials)[number];

const discColors = [
  "bg-emerald-100 text-emerald-800",
  "bg-teal-100 text-teal-800",
  "bg-orange-100 text-orange-800",
];

function MarqueeCard({ t, index, hidden = false }: { t: Testimonial; index: number; hidden?: boolean }) {
  return (
    <figure
      aria-hidden={hidden || undefined}
      className="w-[280px] sm:w-[340px] shrink-0 bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-[0_1px_2px_rgba(9,9,11,0.04)] flex flex-col"
    >
      <div className="flex gap-1 mb-3" aria-label={`${t.rating} out of 5 stars`}>
        {Array.from({ length: t.rating }).map((_, j) => (
          <Star key={j} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <blockquote className="text-sm text-slate-600 leading-relaxed mb-5">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
        <span
          aria-hidden="true"
          className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${discColors[index % discColors.length]}`}
        >
          {t.patientInitials}
        </span>
        <span>
          <span className="block font-semibold text-sm text-slate-800">
            {t.patientInitials}
          </span>
          <span className="block text-xs text-slate-500">
            Treated for {t.condition}
          </span>
        </span>
      </figcaption>
    </figure>
  );
}

function MarqueeRow({
  items,
  reverse = false,
  label,
}: {
  items: Testimonial[];
  reverse?: boolean;
  label: string;
}) {
  return (
    <div
      className="marquee overflow-hidden py-2 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]"
      role="region"
      aria-label={label}
    >
      <div className={`marquee-track ${reverse ? "marquee-reverse" : ""}`}>
        {items.map((t, i) => (
          <MarqueeCard key={t.id} t={t} index={i} />
        ))}
        {items.map((t, i) => (
          <MarqueeCard key={`dup-${t.id}`} t={t} index={i} hidden />
        ))}
      </div>
    </div>
  );
}

export default function TestimonialsMarquee() {
  return (
    <div className="space-y-6">
      <MarqueeRow
        items={testimonials.slice(0, 3)}
        label="Patient stories, scrolling row one"
      />
      <MarqueeRow
        items={testimonials.slice(3, 6)}
        reverse
        label="Patient stories, scrolling row two"
      />
    </div>
  );
}
