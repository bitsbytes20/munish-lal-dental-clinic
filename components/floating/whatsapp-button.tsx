"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

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
      "Hello Dr Shubra's Dental Clinic,\n\nI would like to book an appointment.\nPlease let me know the available timings.\n\nThank you."
    );

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed z-50 transition-all duration-500 ease-out
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0 pointer-events-none"
        }
        bottom-5 right-4
        lg:bottom-7 lg:right-7
      `}
    >
      {/* Desktop */}

      <div
        className="
        hidden lg:flex
        items-center
        gap-3
        rounded-full
        bg-[#25D366]
        px-5
        py-3
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:scale-[1.03]
        hover:shadow-2xl
        "
      >
        <FaWhatsapp size={24} />

        <span className="text-sm font-semibold whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </div>

      {/* Mobile */}

      <div
        className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:scale-105
        lg:hidden
        "
      >
        <FaWhatsapp size={30} />
      </div>
    </a>
  );
}