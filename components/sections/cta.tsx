import { CalendarDays, Phone } from "lucide-react";
import Container from "@/components/ui/container";

export default function CTA() {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <Container>
        <div className="overflow-hidden rounded-[28px] bg-gradient-to-r from-teal-700 to-teal-600 px-6 py-12 text-center text-white shadow-2xl sm:rounded-[40px] sm:px-8 sm:py-20 md:px-16">

          <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur">
            Book Your Visit Today
          </span>

          <h2 className="mx-auto mt-6 max-w-3xl text-3xl font-bold leading-tight sm:mt-8 sm:text-4xl md:text-6xl">
            Smile With Confidence Again.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-teal-50 sm:mt-8 sm:text-lg sm:leading-8">
            Whether you need a routine check-up, cosmetic dentistry, dental
            implants or emergency treatment, our experienced team is here to
            provide comfortable and personalized care.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:mt-12 sm:flex-row sm:gap-5">

            <a
              href="#appointment"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-semibold text-teal-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CalendarDays size={20} />
              Book Appointment
            </a>

            <a
              href="tel:+919058781243"
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