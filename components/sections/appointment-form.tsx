"use client";

import { useState } from "react";
import {
  User,
  Phone,
  Stethoscope,
  Calendar,
  Clock,
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Container from "@/components/ui/container";

/**
 * AppointmentForm
 * -----------------------------------------------------------------------
 * Restyled to match the site's plain teal/slate Tailwind theme
 * (same conventions as Treatments: bg-teal-100 badges, text-slate-900
 * headings, text-slate-600 body copy, teal-700 accents, rounded-3xl
 * white cards with border-slate-200).
 *
 * Replace CLINIC_WHATSAPP_NUMBER with the real WhatsApp number
 * (country code, no + or spaces, e.g. "919259032949").
 * -----------------------------------------------------------------------
 */

const CLINIC_WHATSAPP_NUMBER = "919259032949"; // TODO: replace with real number

const TREATMENTS = [
  "General Consultation",
  "Dental Implant",
  "Root Canal Treatment",
  "Teeth Whitening",
  "Braces & Orthodontics",
  "Tooth Extraction",
  "Dental Filling",
  "Smile Makeover",
  "Pediatric Dentistry",
  "Other",
];

const MORNING_SLOTS = ["10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM"];
const EVENING_SLOTS = ["3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM"];

const FEATURES = [
  {
    icon: CheckCircle2,
    title: "Quick WhatsApp Response",
    body: "Our staff usually responds during clinic working hours.",
  },
  {
    icon: Sparkles,
    title: "Experienced Dental Care",
    body: "Personalized treatment using modern dental technology.",
  },
  {
    icon: ShieldCheck,
    title: "Flexible Scheduling",
    body: "If your preferred slot isn't available, we&apos;ll suggest the nearest one.",
  },
];

type FormState = {
  name: string;
  phone: string;
  treatment: string;
  date: string;
  time: string;
  message: string;
};

const EMPTY_FORM: FormState = {
  name: "",
  phone: "",
  treatment: "",
  date: "",
  time: "",
  message: "",
};

export default function AppointmentForm() {
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, boolean>>>({});

  const today = new Date().toISOString().split("T")[0];

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: false }));
  }

  function validate(): boolean {
    const required: (keyof FormState)[] = ["name", "phone", "treatment", "date", "time"];
    const nextErrors: Partial<Record<keyof FormState, boolean>> = {};
    required.forEach((key) => {
      if (!form[key].trim()) nextErrors[key] = true;
    });
    if (form.phone && !/^\d{10}$/.test(form.phone.replace(/\D/g, "").slice(-10))) {
      nextErrors.phone = true;
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;

    const dateLabel = new Date(form.date + "T00:00:00").toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const lines = [
      "🦷 *Dr. Munish Lal Dental Clinic*",
      "",
      "*New Appointment Request*",
      "",
      `👤 Patient: ${form.name}`,
      `📞 Phone: ${form.phone}`,
      `🦷 Treatment: ${form.treatment}`,
      `📅 Date: ${dateLabel}`,
      `🕒 Time: ${form.time}`,
    ];

    if (form.message.trim()) {
      lines.push("", `💬 Notes: ${form.message}`);
    }

    lines.push("", "Please confirm the appointment.");

    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/${CLINIC_WHATSAPP_NUMBER}?text=${text}`, "_blank");
  }

  return (
    <section id="appointment" className="bg-[#FAF8F5] py-28">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          {/* ---------------- LEFT: context ---------------- */}
          <div>
            <span className="rounded-full bg-teal-100 px-5 py-2 font-semibold text-teal-700">
              Book Appointment
            </span>

            <h2 className="mt-8 text-4xl font-bold text-slate-900 md:text-5xl">
              Reserve Your Visit, Confirmed on WhatsApp
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Request your preferred date and time below. Our staff will confirm
              your appointment over WhatsApp or phone once the doctor&apos;s
              availability is checked — usually within working hours.
            </p>

            <div className="mt-10 space-y-6">
              {FEATURES.map(({ icon: Icon, title, body }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="inline-flex shrink-0 rounded-2xl bg-teal-100 p-3 text-teal-700">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">{title}</p>
                    <p className="mt-1 leading-6 text-slate-600">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ---------------- RIGHT: booking card ---------------- */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-2xl md:p-10">
            <div className="mb-8 flex items-center gap-3">
              <div className="inline-flex rounded-2xl bg-teal-100 p-3 text-teal-700">
                <Stethoscope size={22} />
              </div>
              <div>
                <p className="font-bold text-slate-900">Appointment Request</p>
                <p className="text-sm text-slate-600">Dr. Munish Lal Dental Clinic</p>
              </div>
            </div>

            <div className="space-y-5">
              <Field label="Full Name" icon={User} error={errors.name}>
                <input
                  type="text"
                  placeholder="e.g. Aman Kumar"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={inputClass(errors.name)}
                />
              </Field>

              <Field label="Mobile Number" icon={Phone} error={errors.phone}>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputClass(errors.phone)}
                />
              </Field>

              <Field label="Treatment" icon={Stethoscope} error={errors.treatment}>
                <select
                  value={form.treatment}
                  onChange={(e) => update("treatment", e.target.value)}
                  className={inputClass(errors.treatment)}
                >
                  <option value="">Select treatment</option>
                  {TREATMENTS.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Preferred Date" icon={Calendar} error={errors.date}>
                  <input
                    type="date"
                    min={today}
                    value={form.date}
                    onChange={(e) => update("date", e.target.value)}
                    className={inputClass(errors.date)}
                  />
                </Field>

                <Field label="Preferred Time" icon={Clock} error={errors.time}>
                  <select
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                    className={inputClass(errors.time)}
                  >
                    <option value="">Select time</option>
                    <optgroup label="Morning">
                      {MORNING_SLOTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Evening">
                      {EVENING_SLOTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </Field>
              </div>

              <Field label="Additional Message (optional)" icon={MessageSquare}>
                <textarea
                  placeholder="Tell us briefly what's bothering you..."
                  rows={3}
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className={`w-full resize-none rounded-xl border px-4 py-3 text-[15px] text-slate-900 outline-none transition focus:ring-2 focus:ring-teal-600/20 border-slate-200`}
                />
              </Field>

              <button
                onClick={handleSubmit}
                className="group flex w-full items-center justify-center gap-2 rounded-full bg-teal-700 py-4 font-semibold text-white transition hover:bg-teal-800"
              >
                Request Appointment on WhatsApp
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>

              <p className="text-center text-sm leading-relaxed text-slate-500">
                Your appointment request will be reviewed by our staff. We&apos;ll
                confirm your appointment or suggest another suitable time
                through WhatsApp or phone.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

/* ---------------- helpers ---------------- */

function inputClass(hasError?: boolean) {
  return [
    "w-full rounded-xl border px-4 py-3 text-[15px] text-slate-900 outline-none transition",
    "focus:ring-2 focus:ring-offset-0",
    hasError ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:ring-teal-600/20",
  ].join(" ");
}

function Field({
  label,
  icon: Icon,
  error,
  children,
}: {
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  error?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-slate-700">
        <Icon size={14} />
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-500">This field is required.</p>
      )}
    </div>
  );
}