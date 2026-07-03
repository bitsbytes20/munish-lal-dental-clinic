import Image from "next/image";
import { Award, ShieldCheck, Smile, CheckCircle2 } from "lucide-react";

import Container from "@/components/ui/container";

export default function About() {
  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-b from-white to-sky-50"
    >
      <Container>
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left */}

          <div className="relative">

            <div className="absolute -left-8 -top-8 h-56 w-56 rounded-full bg-sky-100 blur-3xl opacity-70" />

            <div className="relative overflow-hidden rounded-[36px] shadow-2xl">

              <Image
                src="/images/doctor.jpg"
                alt="Doctor"
                width={700}
                height={850}
                className="w-full object-cover"
              />

            </div>

          </div>

          {/* Right */}

          <div>

            <span className="rounded-full bg-blue-100 px-5 py-2 text-blue-700 font-semibold">
              Meet Your Dentist
            </span>

            <h2 className="mt-8 text-5xl font-bold leading-tight">
              Dr. Munish Lal
            </h2>

            <p className="mt-2 text-blue-600 font-semibold">
              BDS • General & Cosmetic Dentistry
            </p>

            <p className="mt-8 text-lg leading-8 text-gray-600">
              With more than two decades of experience,
              Dr. Munish Lal has helped thousands of
              patients achieve healthy, confident smiles
              through gentle and modern dental care.
            </p>

            <div className="mt-10 grid gap-5">

              <div className="flex items-center gap-4">
                <CheckCircle2 className="text-blue-600" />
                <span>20+ Years Clinical Experience</span>
              </div>

              <div className="flex items-center gap-4">
                <Smile className="text-blue-600" />
                <span>5000+ Happy Patients</span>
              </div>

              <div className="flex items-center gap-4">
                <ShieldCheck className="text-blue-600" />
                <span>Safe & Painless Treatment</span>
              </div>

              <div className="flex items-center gap-4">
                <Award className="text-blue-600" />
                <span>Latest Dental Equipment</span>
              </div>

            </div>

          </div>

        </div>
      </Container>
    </section>
  );
}