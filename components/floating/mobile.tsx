"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Calendar } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { clinic, phoneLink } from "@/data/clinic";
export default function Mobile() {
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
    "https://wa.me/919259032949?text=" +
    encodeURIComponent(
      "Hello Dr. Munish Lal Dental Clinic,\n\nI would like to book an appointment.\nPlease let me know the available timings.\n\nThank you."
    );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-5 left-1/2 z-50 flex -translate-x-1/2 items-center gap-4 rounded-full border border-white/60 bg-white/90 px-5 py-3 shadow-2xl backdrop-blur-xl lg:hidden"
        >
         <div className="grid w-72 grid-cols-3 rounded-3xl border border-black/5 bg-white/95 p-3 shadow-2xl backdrop-blur-xl">

  {/* Call */}

  <a
   href={phoneLink}
    className="group flex flex-col items-center gap-2 rounded-2xl p-2 transition-all duration-300 hover:bg-[var(--teal-light)]"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--teal)] text-white transition-transform duration-300 group-hover:scale-110">
      <Phone size={20} />
    </div>

    <span className="text-xs font-semibold text-slate-700">
      Call
    </span>
  </a>

  {/* WhatsApp */}

  <a
    href={whatsappLink}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col items-center gap-2 rounded-2xl p-2 transition-all duration-300 hover:bg-green-50"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform duration-300 group-hover:scale-110">
      <FaWhatsapp size={22} />
    </div>

    <span className="text-xs font-semibold text-slate-700">
      Chat
    </span>
  </a>

  {/* Book */}

  <Link
    href="#appointment"
    className="group flex flex-col items-center gap-2 rounded-2xl p-2 transition-all duration-300 hover:bg-[var(--teal-light)]"
  >
    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--teal-dark)] text-white transition-transform duration-300 group-hover:scale-110">
      <Calendar size={20} />
    </div>

    <span className="text-xs font-semibold text-slate-700">
      Book
    </span>
  </Link>

</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}