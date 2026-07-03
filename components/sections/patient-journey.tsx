import {
  CalendarDays,
  Stethoscope,
  Sparkles,
  Smile,
} from "lucide-react";

import Container from "@/components/ui/container";

const steps = [
  {
    icon: CalendarDays,
    title: "Request Appointment",
    text: "Choose your preferred date and time. Our team will review your request and confirm it via WhatsApp or phone.",
  },
  {
    icon: Stethoscope,
    title: "Dental Consultation",
    text: "Meet Dr. Munish Lal for a detailed examination and receive a personalized treatment plan.",
  },
  {
    icon: Sparkles,
    title: "Personalized Treatment",
    text: "Receive comfortable dental care using modern technology with your comfort as our highest priority.",
  },
  {
    icon: Smile,
    title: "Aftercare & Healthy Smile",
    text: "Leave with a healthier smile along with expert guidance to maintain excellent oral health.",
  },
];

export default function PatientJourney() {
  return (
    <section className="bg-white py-24">
      <Container>
        <div className="text-center">
          <span className="rounded-full bg-teal-100 px-5 py-2 text-sm font-semibold text-teal-700">
            Your Journey
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-slate-900">
            Your Dental Care in
            <span className="text-teal-700"> 4 Simple Steps</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            From requesting your appointment to achieving a healthy smile, we
            ensure every step is comfortable, transparent, and focused on your
            care.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl border border-slate-200 bg-[#FAF8F5] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-teal-700 hover:shadow-2xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-700 text-white transition-transform duration-300 group-hover:scale-110">
                  <Icon size={30} />
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                </div>

                <p className="mt-5 leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}