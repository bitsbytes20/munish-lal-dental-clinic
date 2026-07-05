import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Container from "@/components/ui/container";

const contactCards = [
  {
    icon: MapPin,
    title: "Visit Our Clinic",
    description: `Anand Ashram Road
Opposite Mental Hospital
Civil Lines
Bareilly, Uttar Pradesh 243005`,
    link: "https://maps.google.com",
    button: "Get Directions",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "+91 92590 32949",
    link: "tel:+919259032949",
    button: "Call Now",
  },
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    description: "+91 92590 32949",
    link: "https://wa.me/919259032949",
    button: "Chat Now",
  },
  {
    icon: Mail,
    title: "Email",
    description: "bitsbytes2006@gmail.com",
    link: "mailto:bitsbytes2006@gmail.com",
    button: "Send Email",
  },
  {
    icon: Clock3,
    title: "Clinic Hours",
    description: `Monday – Saturday

10:00 AM – 1:00 PM

3:00 PM – 7:00 PM

Sunday : Closed`,
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#FAF8F5] py-16 md:py-24 lg:py-28"
    >
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-teal-100 px-5 py-2 font-semibold text-teal-700">
            Contact Us
          </span>

          <h2 className="mt-6 text-3xl font-bold text-slate-900 sm:mt-8 sm:text-4xl md:text-5xl">
          We&apos;re here to help
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Have a question or need dental care? Reach out to us through any of
            the options below. Our team is always happy to help.
          </p>

        </div>

        <div className="mt-12 grid gap-6 sm:mt-16 sm:gap-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-3">

          {contactCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl sm:p-8"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition-all duration-300 group-hover:bg-teal-700 group-hover:text-white sm:h-16 sm:w-16">
                  <Icon size={26} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900 sm:mt-8 sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-4 whitespace-pre-line text-sm leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-8">
                  {item.description}
                </p>

                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block font-semibold text-teal-700 transition-all hover:translate-x-2"
                  >
                    {item.button} →
                  </a>
                )}
              </div>
            );
          })}

        </div>

        <div className="mt-12 overflow-hidden rounded-[24px] shadow-xl sm:mt-16 sm:rounded-[32px] lg:mt-20">

          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps?q=Anand+Ashram+Road,+Civil+Lines,+Bareilly,+Uttar+Pradesh+243005&output=embed"
            width="100%"
            height="320"
            loading="lazy"
            className="h-[320px] w-full border-0 sm:h-[450px]"
          />

        </div>

      </Container>
    </section>
  );
}