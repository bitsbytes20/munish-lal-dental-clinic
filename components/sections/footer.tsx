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

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-white">

      <Container>

        <div className="grid gap-12 py-20 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand */}

          <div>

            <h2 className="text-3xl font-bold">
              Dr. Munishlal Dental Clinic
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
                href="https://wa.me/919259032949"
                target="_blank"
                className="rounded-full bg-white/10 p-3 transition hover:bg-green-500"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

          {/* Links */}

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
    href="tel:+919259032949"
    className="transition hover:text-teal-300"
  >
    +91 92590 32949
  </a>
</div>

              <div className="flex gap-3">
                <Mail size={18} />
               <a
  href="mailto:bitsbytes2006@gmail.com"
  className="transition hover:text-teal-300"
>
  bitsbytes2006@gmail.com
</a>
              </div>

              <div className="flex gap-3">
                <MapPin size={18} />
             <a
  href="https://maps.google.com/?q=Anand+Ashram+Road+Civil+Lines+Bareilly+243005"
  target="_blank"
  rel="noopener noreferrer"
  className="transition hover:text-teal-300"
>
  Anand Ashram Road, Civil Lines, Bareilly
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

                Monday – Saturday

                <br /><br />

                10 AM – 1 PM

                <br />

                3 PM – 7 PM

                <br /><br />

                Sunday Closed

              </div>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 py-8 text-center text-sm text-teal-200">

          © 2026 Dr. Munishlal Dental Clinic. All Rights Reserved.

        </div>

      </Container>

    </footer>
  );
}