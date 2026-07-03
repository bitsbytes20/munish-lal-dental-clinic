import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  MessageCircle,
} from "lucide-react";

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
    icon: MessageCircle,
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
      className="bg-[#FAF8F5] py-28"
    >
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-teal-100 px-5 py-2 font-semibold text-teal-700">
            Contact Us
          </span>

          <h2 className="mt-8 text-4xl font-bold text-slate-900 md:text-5xl">
            We'd Love To Hear From You
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Have a question or need dental care? Reach out to us through any of
            the options below. Our team is always happy to help.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {contactCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition-all duration-300 group-hover:bg-teal-700 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-5 whitespace-pre-line leading-8 text-slate-600">
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

        <div className="mt-20 overflow-hidden rounded-[32px] shadow-xl">

          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps?q=Anand+Ashram+Road,+Civil+Lines,+Bareilly,+Uttar+Pradesh+243005&output=embed"
            width="100%"
            height="450"
            loading="lazy"
            className="border-0"
          />

        </div>

      </Container>
    </section>
  );
}