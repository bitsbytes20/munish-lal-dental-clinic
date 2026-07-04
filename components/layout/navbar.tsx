"use client";

import { useEffect, useState } from "react";
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

// Sections tracked for scroll-spy. "#" (Home) is treated as the top of the page.
const sectionIds = ["about", "treatments", "gallery", "testimonials", "faq", "appointment", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("#");

  const closeMenu = () => setIsOpen(false);

  // Header background/shadow state on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Active-section tracking (scroll-spy)
  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveSection(`#${visible[0].target.id}`);
        } else if (window.scrollY < window.innerHeight * 0.5) {
          setActiveSection("#");
        }
      },
      {
        // Treat a section as "active" once it crosses roughly the upper-middle of the viewport
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-[var(--background)]/90 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled
          ? "border-black/10 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
          : "border-black/0 shadow-none"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">

          {/* Logo */}

          <Link href="#" className="flex flex-col" onClick={closeMenu}>
            <span className="text-2xl font-bold tracking-tight">
              Munish Lal
            </span>

            <span className="text-sm uppercase tracking-[0.15em] text-gray-500">
              Dental Clinic
            </span>
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`group relative text-[15px] font-medium transition-all duration-300 hover:text-[var(--teal)] ${
                    isActive ? "text-[var(--teal)]" : "text-gray-700"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-[var(--teal)] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>

                </Link>
              );
            })}
          </nav>

          {/* Desktop Buttons */}

          <div className="hidden lg:flex items-center gap-3">

            <a
              href="tel:+919259032949"
              className="flex items-center gap-2 rounded-full border border-black/80 px-4 py-2.5 text-sm font-medium transition hover:border-[var(--teal)] hover:bg-[var(--teal-light)] hover:text-[var(--teal)]"
            >
              <Phone size={16} />
              Call
            </a>

            <Link
              href="#appointment"
              className="flex items-center gap-2 rounded-full bg-[var(--teal)] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300
hover:scale-[1.02]
hover:bg-[var(--teal-dark)]
active:scale-95"
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
            className="flex items-center justify-center rounded-full border border-black/10 p-2 transition hover:bg-[var(--teal-light)] hover:text-[var(--teal)] active:scale-95 lg:hidden"
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
            <div className="mb-5 flex flex-col gap-1 rounded-3xl border border-black/10 bg-[var(--background)] p-4 shadow-lg">

              {mobileLinks.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={closeMenu}
                    className={`rounded-xl px-4 py-3 text-base font-medium transition-all duration-300 hover:bg-[var(--teal)] hover:text-white ${
                      isActive ? "bg-[var(--teal-light)] text-[var(--teal)]" : "text-gray-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="mt-3 flex flex-col gap-3 border-t border-black/10 pt-4">

                <Link
                  href="#appointment"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--teal)] px-5 py-3 text-white transition-all duration-300
hover:scale-[1.02]
hover:bg-[var(--teal-dark)]
active:scale-95"
                >
                  <Calendar size={18} />
                  Book Appointment
                </Link>

                <a
                  href="tel:+919259032949"
                  onClick={closeMenu}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-black/80 px-5 py-3 transition hover:border-[var(--teal)] hover:bg-[var(--teal-light)] hover:text-[var(--teal)]"
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
