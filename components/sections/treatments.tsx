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
import Link from "next/link";
import Container from "@/components/ui/container";
import Reveal from "@/components/ui/reveal";
import { Calendar } from "lucide-react";
const treatments = [
  {
    icon: Syringe,
    title: "Dental Implants",
    description:
      "Permanent and natural-looking replacement for missing teeth using advanced implant technology.",
    highlight: "Long-lasting solution",
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description:
      "Professional whitening treatment for a brighter, healthier and more confident smile.",
    highlight: "Brighter confident smile",
  },
  {
    icon: ShieldPlus,
    title: "Root Canal Treatment",
    description:
      "Modern and comfortable root canal procedures to preserve your natural teeth.",
    highlight: "Pain-free modern procedure",
  },
  {
    icon: Smile,
    title: "Braces & Orthodontics",
    description:
      "Fixed orthodontic treatments to align teeth and improve your smile.",
    highlight: "Customized treatment plan",
  },
  {
    icon: HeartHandshake,
    title: "Pediatric Dentistry",
    description:
      "Gentle and friendly dental care specially designed for children of all ages.",
    highlight: "Gentle care for children",
  },
  {
    icon: Gem,
    title: "Crowns & Bridges",
    description:
      "Durable and aesthetic crowns and bridges for restoring damaged or missing teeth.",
    highlight: "Natural-looking restoration",
  },
  {
    icon: ShieldAlert,
    title: "Emergency Dental Care",
    description:
      "Immediate care for dental pain, trauma, fractures and urgent dental emergencies.",
    highlight: "Immediate expert attention",
  },
  {
    icon: ScanLine,
    title: "Digital X-Ray & Diagnosis",
    description:
      "Accurate diagnosis using modern digital X-ray technology for better treatment planning.",
    highlight: "Accurate digital imaging",
  },
];

export default function Treatments() {
  return (
    <section
      id="treatments"
      className="scroll-mt-24 bg-[var(--background)] py-16 md:py-24 lg:py-28"
    >
      <Container>
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="rounded-full bg-[var(--teal-light)] px-5 py-2 font-semibold text-[var(--teal)]">
              Our Treatments
            </span>

            <h2 className="mt-6 font-heading text-3xl font-semibold text-[var(--foreground)] sm:mt-8 sm:text-4xl md:text-5xl">
              Complete Dental Care Under One Roof
            </h2>

            <p className="mt-5 text-base leading-7 text-gray-600 sm:mt-6 sm:text-lg sm:leading-8">
              From preventive dentistry to advanced oral surgery and cosmetic
              smile enhancement, we provide comprehensive dental solutions using
              modern technology and personalized care.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {treatments.map((item, index) => {
            const Icon = item.icon;

            return (
             <Reveal
  key={item.title}
  delay={index * 0.08}
  className="h-full"
>
                <div className="group h-full rounded-3xl border border-black/10 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[var(--teal)] hover:shadow-xl sm:p-8">
                  <div className="inline-flex rounded-2xl bg-[var(--teal-light)] p-4 text-[var(--teal)] transition-all duration-300 group-hover:bg-[var(--teal)] group-hover:text-white">
                    <Icon size={30} />
                  </div>

                  <h3 className="mt-8 text-xl font-semibold text-[var(--foreground)]">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 border-t border-black/5 pt-5 text-sm font-medium text-[var(--teal)]">
                    <ShieldPlus size={16} className="shrink-0" />
                    <span>{item.highlight}</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 text-center">
     <Link
  href="#appointment"
  className="inline-flex items-center gap-2 rounded-full bg-[var(--teal)] px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:bg-[var(--teal-dark)] active:scale-95"
>
  <Calendar size={18} />
  Book Consultation
</Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}