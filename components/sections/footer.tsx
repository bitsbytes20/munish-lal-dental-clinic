import {
  Phone,
  Mail,
  MapPin,
  Clock3,
} from "lucide-react";

import {
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa";

import Container from "@/components/ui/container";

import {
  clinic,
  phoneLink,
  mailtoLink,
  whatsappLink,
} from "@/data/clinic";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white">
      <Container>
        <div className="grid gap-10 py-14 sm:gap-12 md:grid-cols-2 md:py-20 lg:grid-cols-5">

          {/* Brand */}

          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">
              {clinic.name}
            </h2>

            <p className="mt-5 leading-7 text-teal-100">
              Compassion.
              <br />
              Care.
              <br />
              Confidence.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-white hover:text-teal-800"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="rounded-full bg-white/10 p-3 transition hover:bg-white hover:text-teal-800"
              >
                <FaFacebookF />
              </a>

              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-3 transition hover:bg-green-500"
              >
                <FaWhatsapp />
              </a>

            </div>
          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4 text-teal-100">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#treatments">Treatments</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>

          </div>

          {/* Treatments */}

          <div>

            <h3 className="text-xl font-semibold">
              Treatments
            </h3>

            <ul className="mt-6 space-y-4 text-teal-100">
              <li>Dental Implants</li>
              <li>Root Canal</li>
              <li>Braces</li>
              <li>Teeth Whitening</li>
              <li>Emergency Care</li>
            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-teal-100">

              <div className="flex gap-3">
                <Phone size={18} />

                <a
                  href={phoneLink}
                  className="transition hover:text-teal-300"
                >
                  {clinic.contact.phoneDisplay}
                </a>

              </div>

              <div className="flex gap-3">

                <Mail size={18} />

                <a
                  href={mailtoLink}
                  className="transition hover:text-teal-300"
                >
                  {clinic.contact.email}
                </a>

              </div>

              <div className="flex gap-3">

                <MapPin size={18} />

                <a
                  href={clinic.address.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-teal-300"
                >
                  {clinic.address.lines.join(", ")}
                </a>

              </div>

            </div>

          </div>

          {/* Timings */}

          <div>

            <h3 className="text-xl font-semibold">
              Clinic Hours
            </h3>

            <div className="mt-6 flex gap-3 text-teal-100">

              <Clock3 size={18} />

              <div>

                {clinic.hours.days}

                <br />
                <br />

                {clinic.hours.morning}

                <br />

                {clinic.hours.evening}

                <br />
                <br />

                {clinic.hours.closedNote}

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 py-8 text-center text-sm text-teal-200">

          © {new Date().getFullYear()} {clinic.name}. All Rights Reserved.

        </div>

      </Container>

    </footer>
  );
}