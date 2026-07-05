"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Container from "@/components/ui/container";

const faqs = [
  {
    question: "Do I need to book an appointment before visiting?",
    answer:
      "Yes. We recommend booking an appointment so that we can provide you with the best possible care without unnecessary waiting.",
  },
  {
    question: "Is Root Canal Treatment painful?",
    answer:
      "Modern Root Canal Treatment is comfortable and virtually painless with advanced techniques and anesthesia.",
  },
  {
    question: "Do you provide emergency dental treatment?",
    answer:
      "Yes. We provide emergency care for severe tooth pain, dental trauma, broken teeth and other urgent dental problems.",
  },
  {
    question: "Do you treat children?",
    answer:
      "Absolutely. Our clinic provides gentle and friendly dental care specially designed for children.",
  },
  {
    question: "How can I book an appointment?",
    answer:
      "Simply click the 'Book Appointment' button, fill in your details, and our team will contact you to confirm your preferred time.",
  },
  {
    question: "Which payment methods are accepted?",
    answer:
      "We accept Cash, UPI, Debit Cards, Credit Cards and other common payment methods.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-24 bg-[#FAF8F5] py-16 md:py-24 lg:py-28">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-teal-100 px-5 py-2 font-semibold text-teal-700">
            FAQ
          </span>

          <h2 className="mt-6 text-3xl sm:mt-8 sm:text-4xl md:text-5xl font-bold text-slate-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
            Everything you need to know before visiting our clinic.
          </p>

        </div>

        <div className="mx-auto mt-10 max-w-4xl space-y-4 sm:mt-16 sm:space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-3xl bg-white shadow-sm overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between gap-4 p-5 text-left sm:p-7"
              >
                <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                  {faq.question}
                </h3>

                <ChevronDown
                  className={`shrink-0 transition-transform duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (

                <div className="px-5 pb-5 text-sm leading-6 text-slate-600 sm:px-7 sm:pb-7 sm:text-base sm:leading-7">

                  {faq.answer}

                </div>

              )}

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}