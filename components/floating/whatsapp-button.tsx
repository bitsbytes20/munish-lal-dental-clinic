"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { Phone, CalendarDays } from "lucide-react";
import { phoneLink } from "@/data/clinic";
export default function WhatsAppButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");

    if (!hero) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, []);

  const whatsappLink =
    "https://wa.me/919058781243?text=" +
    encodeURIComponent(
      "Hello Dr Shubhra's Dental Clinic,\n\nI would like to book an appointment.\nPlease let me know the available timings.\n\nThank you."
    );

  return (
    <>
      {/* ================= Desktop WhatsApp ================= */}

      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className={`fixed z-50 hidden lg:block transition-all duration-500
          ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0 pointer-events-none"
          }
          bottom-7 right-7`}
      >
        <div className="flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-xl transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl">
          <FaWhatsapp size={24} />

          <span className="text-sm font-semibold whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </div>
      </a>

      {/* ================= Mobile Floating Buttons ================= */}

      <div
        className={`fixed bottom-5 right-4 z-50 flex flex-col gap-3 lg:hidden transition-all duration-500
          ${
            visible
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0 pointer-events-none"
          }`}
      >
        {/* Call */}

        <a
          href={phoneLink}
          aria-label="Call Clinic"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--teal)] text-white shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Phone size={24} />
        </a>

        {/* Book */}

        <a
          href="#appointment"
          aria-label="Book Appointment"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--teal)] text-white shadow-xl transition-all duration-300 hover:scale-110"
        >
          <CalendarDays size={24} />
        </a>
      </div>
    </>
  );
}