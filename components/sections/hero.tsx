import Image from "next/image";
import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import { Phone, Calendar, Star, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/container";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

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
    <section
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable} relative overflow-hidden bg-[#FAF9F5] py-24 font-[family-name:var(--font-inter)] lg:py-32`}
    >
      {/* Quiet clinical texture — restrained, not decorative for its own sake */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(#0B6E63 0.6px, transparent 0.6px)",
          backgroundSize: "28px 28px",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-10%] top-1/3 h-[420px] w-[420px] rounded-full bg-[#0B6E63]/10 blur-[100px]"
      />

      <Container>
        <div className="relative grid items-center gap-20 lg:grid-cols-[1.05fr_0.95fr]">
          {/* LEFT */}
          <div className="relative">
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#0B6E63]" />
              <span className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.3em] text-[#0B6E63]">
                Bareilly &middot; General &amp; Cosmetic Dentistry
              </span>
            </div>

            <h1 className="font-[family-name:var(--font-fraunces)] text-[clamp(2.75rem,6vw,5rem)] font-medium leading-[1.04] text-[#142621]">
              Care, crafted
              <br />
              for every{" "}
              <span className="italic text-[#0B6E63]">smile</span>.
            </h1>

            <p className="mt-8 max-w-md text-lg leading-8 text-[#142621]/65">
              Dr. Munish Lal and team provide gentle, modern dental
              care for every member of your family &mdash; built on
              two decades of trust in Bareilly.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-[#0B6E63] px-7 py-4 text-sm font-medium text-[#FAF9F5] transition-colors hover:bg-[#073F3A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B6E63]"
              >
                <Calendar size={17} />
                Book an appointment
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="tel:+91XXXXXXXXXX"
                className="inline-flex items-center gap-2 rounded-full border border-[#142621]/15 px-7 py-4 text-sm font-medium text-[#142621] transition-colors hover:border-[#142621]/30 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0B6E63]"
              >
                <Phone size={17} />
                Call the clinic
              </a>
            </div>

            {/* Stats — hairline-divided, mono numerals instead of icon tiles */}
            <div className="mt-16 flex divide-x divide-[#142621]/10 border-t border-[#142621]/10 pt-8">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex-1 ${i === 0 ? "pr-6" : i === STATS.length - 1 ? "pl-6" : "px-6"}`}
                >
                  <p className="font-[family-name:var(--font-mono)] text-3xl font-medium tabular-nums text-[#142621]">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-sm text-[#142621]/55">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mx-auto max-w-md lg:mx-0">
            <div className="relative rounded-[2rem] border border-[#0B6E63]/10 bg-white p-3 shadow-[0_30px_60px_-15px_rgba(11,110,99,0.18)]">
              <div className="overflow-hidden rounded-[1.5rem] bg-[#E6F1EC]">
                <Image
                  src="/images/doctor.jpg"
                  alt="Dr. Munish Lal, BDS, at the clinic"
                  width={640}
                  height={760}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              <span
                aria-hidden
                className="absolute -left-3 -top-3 h-8 w-8 rounded-full border-4 border-[#FAF9F5] bg-[#C7A468]"
              />

              {/* Understated rating badge — replaces the oversized floating card */}
              <div className="absolute -right-4 top-7 flex items-center gap-1.5 rounded-full bg-white px-3.5 py-2 shadow-lg ring-1 ring-black/5">
                <div className="flex text-[#C7A468]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="font-[family-name:var(--font-mono)] text-xs font-medium text-[#142621]">
                  4.9
                </span>
              </div>
            </div>

            {/* Signature element: appointment "ticket" stub, driven by real clinic hours */}
            <div className="relative mx-6 -mt-6 rounded-2xl bg-[#0B6E63] px-6 py-5 text-[#FAF9F5] shadow-xl">
              <span
                aria-hidden
                className="absolute -left-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[#FAF9F5]"
              />
              <span
                aria-hidden
                className="absolute -right-3 top-1/2 h-6 w-6 -translate-y-1/2 rounded-full bg-[#FAF9F5]"
              />

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-[family-name:var(--font-mono)] text-[10px] uppercase tracking-[0.25em] text-[#DCEEE9]/80">
                    Next available
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-fraunces)] text-xl">
                    {next}
                  </p>
                </div>
                <Calendar size={20} className="text-[#C7A468]" />
              </div>

              <div className="my-4 border-t border-dashed border-white/25" />

              <div className="flex flex-wrap gap-2 font-[family-name:var(--font-mono)] text-[11px]">
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

            <p className="mt-6 text-center text-sm text-[#142621]/50 lg:text-left">
              Dr. Munish Lal &middot; BDS, General &amp; Cosmetic Dentistry
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
