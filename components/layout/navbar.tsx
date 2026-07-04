"use client";

import Link from "next/link";
import Container from "../ui/container";
import { Calendar, Phone } from "lucide-react";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Treatments", href: "#treatments" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex flex-col">
            <span className="text-2xl font-bold">
              Munish Lal
            </span>

            <span className="text-sm text-gray-500">
              Dental Clinic
            </span>
          </Link>

          {/* Navigation */}

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="hover:text-blue-600 transition"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Buttons */}

          <div className="flex items-center gap-3">

            <a
              href="tel:+91XXXXXXXXXX"
              className="hidden md:flex items-center gap-2 rounded-full border px-4 py-2 hover:bg-gray-100 transition"
            >
              <Phone size={18} />
              Call
            </a>

            <Link
  href="#appointment"
  className="flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2 text-white hover:bg-blue-700 transition"
>
  <Calendar size={18} />
  Book Appointment
</Link>

          </div>

        </div>
      </Container>
    </header>
  );
}