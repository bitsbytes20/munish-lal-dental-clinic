import Image from "next/image";
import { Phone, Calendar, Star, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/container";

const STATS = [
  { value: "20+", label: "Years in practice" },
  { value: "5,000+", label: "Patients treated" },
  { value: "4.9", label: "Average rating" },
];

/* ------------------------------------------------------------------ */
/*  Clinic availability — derived from real operating hours            */
/* ------------------------------------------------------------------ */

type Session = { startHour: number; endHour: number };

// Clinic operating sessions — edit this if hours ever change
const CLINIC_SESSIONS: Session[] = [
  { startHour: 10, endHour: 13 }, // 10:00 AM – 1:00 PM
  { startHour: 15, endHour: 19 }, // 3:00 PM – 7:00 PM
];

const SLOT_MINUTES = 30; // appointment granularity

function formatTime(hour: number, minute: number) {
  const d = new Date();
  d.setHours(hour, minute, 0, 0);
  return d.toLocaleTimeString("en-IN", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

/**
 * Returns the next bookable slot plus two upcoming slots, based on
 * CLINIC_SESSIONS. Falls forward to tomorrow's morning session once
 * today's slots run out.
 */
function getNextAvailability(now: Date = new Date()) {
  const minutesNow = now.getHours() * 60 + now.getMinutes();
  const roundedMinutes = Math.ceil(minutesNow / SLOT_MINUTES) * SLOT_MINUTES;

  const todaySlots: number[] = [];
  for (const { startHour, endHour } of CLINIC_SESSIONS) {
    for (let m = startHour * 60; m < endHour * 60; m += SLOT_MINUTES) {
      todaySlots.push(m);
    }
  }

  const remainingToday = todaySlots.filter((m) => m >= roundedMinutes);

  type Slot = { minutes: number; day: "Today" | "Tomorrow" };
  let slots: Slot[];

  if (remainingToday.length >= 3) {
    slots = remainingToday.slice(0, 3).map((m) => ({ minutes: m, day: "Today" }));
  } else {
    const needed = 3 - remainingToday.length;
    const tomorrowMorning = todaySlots
      .filter((m) => m < CLINIC_SESSIONS[0].endHour * 60)
      .slice(0, needed)
      .map((m): Slot => ({ minutes: m, day: "Tomorrow" }));

    slots = [
      ...remainingToday.map((m): Slot => ({ minutes: m, day: "Today" })),
      ...tomorrowMorning,
    ];
  }

  const toLabel = (s: Slot) => {
    const h = Math.floor(s.minutes / 60);
    const m = s.minutes % 60;
    return `${s.day}, ${formatTime(h, m)}`;
  };

  return {
    next: toLabel(slots[0]),
    upcoming: slots.slice(1).map(toLabel),
  };
}

/* ------------------------------------------------------------------ */

export default function Hero() {
  const { next, upcoming } = getNextAvailability();

  return (
    <section className="bg-white py-24 lg:py-28">
      <Container>
        <div className="relative grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div>
            <span className="rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700">
              Bareilly &middot; General &amp; Cosmetic Dentistry
            </span>

            <h1 className="mt-8 text-4xl font-bold leading-tight text-slate-900 md:text-6xl">
              Care, crafted for every{" "}
              <span className="text-teal-700">smile</span>.
            </h1>

            <p className="mt-6 max-w-md text-lg leading-8 text-slate-600">
              Dr. Munish Lal and team provide gentle, modern dental care for
              every member of your family &mdash; built on two decades of
              trust in Bareilly.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#appointment"
                className="group inline-flex items-center gap-2 rounded-full bg-teal-700 px-7 py-4 text-sm font-semibold text-white transition hover:bg-teal-800"
              >
                <Calendar size={17} />
                Book an appointment
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="tel:+919259032949"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-7 py-4 text-sm font-semibold text-slate-900 transition hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700"
              >
                <Phone size={17} />
                Call the clinic
              </a>
            </div>

            {/* Stats */}
            <div className="mt-16 flex divide-x divide-slate-200 border-t border-slate-200 pt-8">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex-1 ${i === 0 ? "pr-6" : i === STATS.length - 1 ? "pl-6" : "px-6"}`}
                >
                  <p className="text-3xl font-bold tabular-nums text-slate-900">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">
              <div className="overflow-hidden rounded-2xl bg-teal-50">
                <Image
                  src="/images/doctor.jpg"
                  alt="Dr. Munish Lal, BDS, at the clinic"
                  width={640}
                  height={760}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              {/* Rating badge */}
              <div className="absolute -right-4 top-7 flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 shadow-lg ring-1 ring-slate-200">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-900">4.9</span>
              </div>
            </div>

            {/* Appointment "ticket" stub, driven by real clinic hours */}
            <div className="relative mx-6 -mt-6 rounded-2xl bg-teal-700 px-6 py-5 text-white shadow-xl">
              <span
                aria-hidden
                className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-white"
              />
              <span
                aria-hidden
                className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-white"
              />

              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-teal-100">
                    Next available
                  </p>
                  <p className="mt-1 text-xl font-bold">{next}</p>
                </div>
                <Calendar size={20} className="text-teal-100" />
              </div>

              <div className="my-4 border-t border-dashed border-white/25" />

              <div className="flex flex-wrap gap-2 text-[11px] font-medium">
                {upcoming.map((slot) => (
                  <span
                    key={slot}
                    className="rounded-full bg-white/10 px-3 py-1.5"
                  >
                    {slot}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-slate-500 lg:text-left">
              Dr. Munish Lal &middot; BDS, General &amp; Cosmetic Dentistry
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
