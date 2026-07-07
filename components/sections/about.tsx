import Image from "next/image";
import Reveal from "@/components/ui/reveal";
import Container from "@/components/ui/container";
import { clinic } from "@/data/clinic";

import {
  Award,
  ShieldCheck,
  Smile,
  CheckCircle2,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 overflow-x-hidden bg-gradient-to-b from-[var(--background)] to-white py-16 md:py-24 lg:py-28"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-20">

          {/* Left */}

          <div className="relative">

            {/* Decorative Background */}

            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-[var(--teal-light)] opacity-40 blur-3xl sm:-left-10 sm:-top-10 sm:h-60 sm:w-60" />

            <div className="group relative overflow-hidden rounded-[36px] shadow-xl">

              <Image
                src={clinic.doctor.photo}
                alt={clinic.doctor.photoAlt}
                width={700}
                height={850}
                priority
                className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />

            </div>

          </div>

          {/* Right */}

          <div>

            {/* Badge */}

            <span className="inline-flex rounded-full bg-[var(--teal-light)] px-5 py-2 text-sm font-semibold tracking-wide text-[var(--teal)]">
              Meet Your Dentist
            </span>

            {/* Heading */}

            <h2 className="mt-6 font-heading text-3xl font-semibold leading-tight text-[var(--foreground)] sm:mt-8 sm:text-4xl lg:text-5xl">
              {clinic.doctor.name}
            </h2>

            {/* Qualification */}

            <p className="mt-3 text-base font-semibold text-[var(--teal)] sm:text-lg">
              {clinic.doctor.qualification}
            </p>

            {/* Description */}

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-xl text-base leading-7 text-gray-600 sm:mt-8 sm:text-lg sm:leading-8">
                With years of clinical experience, {clinic.doctor.name} is committed
                to providing gentle, modern and patient-focused dental care. Every
                treatment is delivered with precision, compassion and a commitment
                to long-term oral health.
              </p>
            </Reveal>

            {/* Highlights */}

            <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6">

              <div className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <CheckCircle2 className="h-6 w-6 text-[var(--teal)]" />
                <span className="font-medium text-gray-700">
                  10+ Years of Clinical Experience
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <Smile className="h-6 w-6 text-[var(--teal)]" />
                <span className="font-medium text-gray-700">
                  5000+ Happy Patients
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <ShieldCheck className="h-6 w-6 text-[var(--teal)]" />
                <span className="font-medium text-gray-700">
                  Safe & Comfortable Dental Care
                </span>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                <Award className="h-6 w-6 text-[var(--teal)]" />
                <span className="font-medium text-gray-700">
                  Modern Equipment & Advanced Techniques
                </span>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}