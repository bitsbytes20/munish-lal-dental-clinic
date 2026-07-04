import { CalendarDays, Phone } from "lucide-react";
import Container from "@/components/ui/container";

export default function CTA() {
  return (
    <section className="bg-white py-28">
      <Container>
        <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-teal-700 to-teal-600 px-8 py-20 text-center text-white shadow-2xl md:px-16">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
            Book Your Visit Today
          </span>

          <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            Smile With Confidence Again.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-teal-50">
            Whether you need a routine check-up, cosmetic dentistry, dental
            implants or emergency treatment, our experienced team is here to
            provide comfortable and personalized care.
          </p>

          <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-teal-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CalendarDays size={20} />
              Book Appointment
            </a>

            <a
              href="tel:+919259032949"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/40 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-teal-700"
            >
              <Phone size={20} />
              Call Now
            </a>

          </div>

        </div>
      </Container>
    </section>
  );
}