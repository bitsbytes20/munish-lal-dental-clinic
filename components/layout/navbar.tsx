"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "../ui/container";
import { Calendar, Phone, Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Treatments", href: "#treatments" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const mobileLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Treatments", href: "#treatments" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "FAQ", href: "#faq" },
  { name: "Appointment", href: "#appointment" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-[var(--background)]/90 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link href="/" className="flex flex-col" onClick={closeMenu}>
            <span className="text-2xl font-bold tracking-tight">
              Munish Lal
            </span>

            <span className="text-sm text-gray-500">
              Dental Clinic
            </span>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[15px] font-medium text-gray-700 transition hover:text-[var(--teal)]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}

          <div className="hidden lg:flex items-center gap-3">

            <a
              href="tel:+919259032949"
              className="flex items-center gap-2 rounded-full border border-black/80 px-4 py-2.5 text-sm font-medium transition hover:bg-black/5"
            >
              <Phone size={16} />
              Call
            </a>

            <Link
              href="#appointment"
              className="flex items-center gap-2 rounded-full bg-[var(--teal)] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--teal-dark)]"
            >
              <Calendar size={16} />
              Book Appointment
            </Link>

          </div>

          {/* Mobile Hamburger Toggle */}

          <button
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            className="flex items-center justify-center rounded-full border border-black/10 p-2 transition hover:bg-black/5 active:scale-95 lg:hidden"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

        {/* Mobile Dropdown */}

        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="mb-5 flex flex-col gap-1 rounded-3xl border border-black/10 bg-white p-4 shadow-lg">

              {mobileLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-base font-medium text-gray-800 transition hover:bg-[var(--teal-light)] hover:text-[var(--teal)]"
                >
                  {item.name}
                </Link>
              ))}

              <div className="mt-3 flex flex-col gap-3 border-t border-black/10 pt-4">

                <Link
                  href="#appointment"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--teal)] px-5 py-3 text-white transition hover:bg-[var(--teal-dark)]"
                >
                  <Calendar size={18} />
                  Book Appointment
                </Link>

                <a
                  href="tel:+919259032949"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-black/80 px-5 py-3 transition hover:bg-black/5"
                >
                  <Phone size={18} />
                  Call Now
                </a>

              </div>

            </div>
          </div>
        </div>

      </Container>
    </header>
  );
}
