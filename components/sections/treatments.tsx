import {
  Sparkles,
  ShieldPlus,
  Smile,
  Syringe,
  ScanLine,
  HeartHandshake,
  ShieldAlert,
  Gem,
} from "lucide-react";

import Container from "@/components/ui/container";

const treatments = [
  {
    icon: Syringe,
    title: "Dental Implants",
    description:
      "Permanent and natural-looking replacement for missing teeth using advanced implant technology.",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description:
      "Professional whitening treatment for a brighter, healthier and more confident smile.",
  },
  {
    icon: ShieldPlus,
    title: "Root Canal Treatment",
    description:
      "Modern and comfortable root canal procedures to preserve your natural teeth.",
  },
  {
    icon: Smile,
    title: "Braces & Orthodontics",
    description:
      "Fixed orthodontic treatments to align teeth and improve your smile.",
  },
  {
    icon: HeartHandshake,
    title: "Pediatric Dentistry",
    description:
      "Gentle and friendly dental care specially designed for children of all ages.",
  },
  {
    icon: Gem,
    title: "Crowns & Bridges",
    description:
      "Durable and aesthetic crowns and bridges for restoring damaged or missing teeth.",
  },
  {
    icon: ShieldAlert,
    title: "Emergency Dental Care",
    description:
      "Immediate care for dental pain, trauma, fractures and urgent dental emergencies.",
  },
  {
    icon: ScanLine,
    title: "Digital X-Ray & Diagnosis",
    description:
      "Accurate diagnosis using modern digital X-ray technology for better treatment planning.",
  },
];

export default function Treatments() {
  return (
    <section
      id="treatments"
      className="bg-[#FAF8F5] py-28"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-teal-100 px-5 py-2 font-semibold text-teal-700">
            Our Treatments
          </span>

          <h2 className="mt-8 text-4xl font-bold text-slate-900 md:text-5xl">
            Complete Dental Care Under One Roof
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            From preventive dentistry to advanced oral surgery and cosmetic
            smile enhancement, we provide comprehensive dental solutions using
            modern technology and personalized care.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {treatments.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-teal-600 hover:shadow-2xl"
              >
                <div className="inline-flex rounded-2xl bg-teal-100 p-4 text-teal-700 transition-all duration-300 group-hover:bg-teal-700 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>

                <button className="mt-8 font-semibold text-teal-700 transition-all group-hover:translate-x-2">
                  Learn More →
                </button>

              </div>
            );
          })}

        </div>

        <div className="mt-16 text-center">
          <button className="rounded-full bg-teal-700 px-8 py-4 font-semibold text-white transition hover:bg-teal-800">
            View All Treatments
          </button>
        </div>

      </Container>
    </section>
  );
}