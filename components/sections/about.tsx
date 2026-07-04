import Image from "next/image";
import {
  Award,
  ShieldCheck,
  Smile,
  CheckCircle2,
} from "lucide-react";

import Container from "@/components/ui/container";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-[var(--background)] to-white py-28"
    >
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left */}

          <div className="relative">

            {/* Decorative Background */}

            <div className="absolute -left-10 -top-10 h-60 w-60 rounded-full bg-[var(--teal-light)] opacity-40 blur-3xl" />

            <div className="relative overflow-hidden rounded-[36px] shadow-xl group">

              <Image
                src="/images/doctor.jpg"
                alt="Dr. Munish Lal"
                width={700}
                height={850}
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

            <h2 className="mt-8 font-heading text-5xl font-semibold leading-tight text-[var(--foreground)]">
              Dr. Munish Lal
            </h2>

            {/* Subtitle */}

            <p className="mt-3 text-lg font-semibold text-[var(--teal)]">
              BDS • General & Cosmetic Dentistry
            </p>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
              With more than two decades of clinical experience,
              Dr. Munish Lal has helped thousands of patients
              achieve healthier, brighter smiles through gentle,
              modern, and patient-focused dental care. Every
              treatment is delivered with precision, compassion,
              and a commitment to long-term oral health.
            </p>

            {/* Highlights */}

            <div className="mt-10 grid gap-6">

              <div className="flex items-center gap-4 rounded-2xl border border-black/5 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">

                <CheckCircle2 className="h-6 w-6 text-[var(--teal)]" />

                <span className="font-medium text-gray-700">
                  20+ Years of Clinical Experience
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