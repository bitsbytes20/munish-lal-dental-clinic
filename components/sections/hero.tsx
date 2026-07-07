import Image from "next/image";
import { Phone, Calendar, Star, ArrowUpRight } from "lucide-react";

import Container from "@/components/ui/container";
import { clinic, phoneLink } from "@/data/clinic";

export default function Hero() {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-28">
      <Container>
        <div className="relative grid items-center gap-10 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* LEFT */}
          <div>
            <span className="rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700">
              {clinic.locationTagline}
            </span>

            <h1 className="mt-6 text-3xl font-bold leading-tight text-slate-900 sm:mt-8 sm:text-4xl md:text-6xl">
              Care, crafted for every{" "}
              <span className="text-teal-700">smile</span>.
            </h1>

            <p className="mt-5 max-w-md text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              {clinic.doctor.name} and team provide gentle, modern dental care
              for every member of your family &mdash; built on two decades of
              trust.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <a
                href="#appointment"
                className="group inline-flex items-center gap-2 rounded-full bg-teal-700 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-teal-800 sm:px-7 sm:py-4"
              >
                <Calendar size={17} />
                Book an appointment
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href={phoneLink}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-900 transition hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700 sm:px-7 sm:py-4"
              >
                <Phone size={17} />
                Call the clinic
              </a>
            </div>

            {/* Stats */}
            <div className="mt-10 flex divide-x divide-slate-200 border-t border-slate-200 pt-6 sm:mt-16 sm:pt-8">
              {clinic.stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex-1 ${i === 0 ? "pr-3 sm:pr-6" : i === clinic.stats.length - 1 ? "pl-3 sm:pl-6" : "px-3 sm:px-6"}`}
                >
                  <p className="text-xl font-bold tabular-nums text-slate-900 sm:text-3xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-slate-600 sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mx-auto w-full max-w-sm sm:max-w-md lg:mx-0">
            <div className="relative rounded-3xl border border-slate-200 bg-white p-3 shadow-2xl">
              <div className="overflow-hidden rounded-2xl bg-teal-50">
                <Image
                  src={clinic.doctor.photo}
                  alt={clinic.doctor.photoAlt}
                  width={640}
                  height={760}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>

              {/* Rating badge */}
              <div className="absolute -right-2 top-5 flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-lg ring-1 ring-slate-200 sm:-right-4 sm:top-7 sm:px-3.5 sm:py-2">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={11} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-xs font-semibold text-slate-900">
                  {clinic.stats.find((s) => s.label === "Average rating")?.value ?? "4.9"}
                </span>
              </div>
            </div>

            <p className="mt-6 text-center text-sm text-slate-500 lg:text-left">
              {clinic.doctor.name} &middot; {clinic.doctor.qualification}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
