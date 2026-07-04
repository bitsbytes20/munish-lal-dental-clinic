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

/**
 * AppointmentForm
 * -----------------------------------------------------------------------
 * Drop-in appointment section for Dr. Munish Lal Dental Clinic.
 * Design language: porcelain / teal / gold, matching the Hero section.
 * Signature element: the booking card is styled as a physical
 * "appointment ticket" — perforated edge + torn stub — echoing the
 * ticket-stub motif already used in the Hero's appointment card, so the
 * booking moment feels like tearing off a real clinic token, not filling
 * out a generic web form.
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
    body: "If your preferred slot isn't available, we'll suggest the nearest one.",
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
    <section
      id="appointment"
      className="relative overflow-hidden py-24 px-6"
      style={{ backgroundColor: "#FAF8F5" }}
    >
      {/* ambient texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0F3D3D 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1.1fr] lg:items-center">
        {/* ---------------- LEFT: context ---------------- */}
        <div>
          <span
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-[0.14em]"
            style={{
              fontFamily: "'IBM Plex Mono', monospace",
              backgroundColor: "rgba(15,61,61,0.08)",
              color: "#0F3D3D",
            }}
          >
            BOOK APPOINTMENT
          </span>

          <h2
            className="mt-6 text-4xl leading-[1.1] sm:text-5xl"
            style={{ fontFamily: "'Fraunces', serif", color: "#1C2321" }}
          >
            Reserve your visit,
            <br />
            <span style={{ color: "#0F3D3D" }}>confirmed on WhatsApp.</span>
          </h2>

          <p
            className="mt-5 max-w-md text-[15px] leading-relaxed"
            style={{ fontFamily: "'Inter', sans-serif", color: "#5B6461" }}
          >
            Request your preferred date and time below. Our staff will confirm
            your appointment over WhatsApp or phone once the doctor&apos;s
            availability is checked — usually within working hours.
          </p>

          <div className="mt-10 space-y-5">
            {FEATURES.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex items-start gap-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "rgba(201,162,39,0.14)" }}
                >
                  <Icon size={18} style={{ color: "#A8801F" }} strokeWidth={1.75} />
                </div>
                <div>
                  <p
                    className="text-[15px] font-medium"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#1C2321" }}
                  >
                    {title}
                  </p>
                  <p
                    className="mt-0.5 text-[13.5px] leading-relaxed"
                    style={{ fontFamily: "'Inter', sans-serif", color: "#767F7C" }}
                  >
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- RIGHT: ticket-stub form card ---------------- */}
        <div className="relative">
          <div
            className="relative overflow-hidden rounded-[28px] shadow-[0_30px_60px_-25px_rgba(15,61,61,0.35)]"
            style={{ backgroundColor: "#FFFFFF" }}
          >
            {/* ticket header stub */}
            <div
              className="flex items-center justify-between px-8 py-5"
              style={{ backgroundColor: "#0F3D3D" }}
            >
              <div className="flex items-center gap-2">
                <Stethoscope size={16} color="#E9C25A" strokeWidth={2} />
                <span
                  className="text-[11px] tracking-[0.18em] text-white/90"
                  style={{ fontFamily: "'IBM Plex Mono', monospace" }}
                >
                  APPOINTMENT TICKET
                </span>
              </div>
              <span
                className="text-[11px] tracking-[0.1em] text-white/50"
                style={{ fontFamily: "'IBM Plex Mono', monospace" }}
              >
                DR. MUNISH LAL DENTAL
              </span>
            </div>

            {/* perforation row */}
            <div className="relative flex items-center" style={{ height: 1 }}>
              <div className="absolute -left-3 h-6 w-6 rounded-full" style={{ backgroundColor: "#FAF8F5" }} />
              <div
                className="mx-3 w-full border-t-2 border-dashed"
                style={{ borderColor: "#E4DFD4" }}
              />
              <div className="absolute -right-3 h-6 w-6 rounded-full" style={{ backgroundColor: "#FAF8F5" }} />
            </div>

            {/* form body */}
            <div className="space-y-5 px-8 py-8">
              <Field
                label="Full Name"
                icon={User}
                error={errors.name}
              >
                <input
                  type="text"
                  placeholder="e.g. Aman Kumar"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={inputClass(errors.name)}
                  style={inputStyle}
                />
              </Field>

              <Field label="Mobile Number" icon={Phone} error={errors.phone}>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputClass(errors.phone)}
                  style={inputStyle}
                />
              </Field>

              <Field label="Treatment" icon={Stethoscope} error={errors.treatment}>
                <select
                  value={form.treatment}
                  onChange={(e) => update("treatment", e.target.value)}
                  className={inputClass(errors.treatment)}
                  style={inputStyle}
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
                    style={inputStyle}
                  />
                </Field>

                <Field label="Preferred Time" icon={Clock} error={errors.time}>
                  <select
                    value={form.time}
                    onChange={(e) => update("time", e.target.value)}
                    className={inputClass(errors.time)}
                    style={inputStyle}
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
                  className="w-full resize-none rounded-2xl border px-4 py-3 text-[14px] outline-none transition focus:ring-2"
                  style={inputStyle}
                />
              </Field>

              <button
                onClick={handleSubmit}
                className="group flex w-full items-center justify-center gap-2 rounded-full py-4 text-[15px] font-medium text-white transition-all duration-300 hover:scale-[1.01] active:scale-[0.99]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  backgroundColor: "#1D8E5C",
                  boxShadow: "0 12px 24px -10px rgba(29,142,92,0.55)",
                }}
              >
             Request Appointment on WhatsApp
                <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
              </button>

              <p
                className="text-center text-[12px] leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", color: "#9A9F9C" }}
              >
               Your appointment request will be reviewed by our staff.
We&apos;ll confirm your appointment or suggest another suitable time through WhatsApp or phone.
              </p>
            </div>
          </div>

          {/* subtle gold corner accent, reinforcing the ticket motif */}
          <div
            className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-[28px]"
            style={{ border: "1.5px solid rgba(201,162,39,0.35)" }}
          />
        </div>
      </div>
    </section>
  );
}

/* ---------------- helpers ---------------- */

const inputStyle: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  backgroundColor: "#FAF8F5",
  borderColor: "#E4DFD4",
  color: "#1C2321",
};

function inputClass(hasError?: boolean) {
  return [
    "w-full rounded-2xl border px-4 py-3 text-[14px] outline-none transition",
    "focus:ring-2 focus:ring-offset-0",
    hasError ? "border-red-400 focus:ring-red-200" : "focus:ring-[#0F3D3D]/15",
  ].join(" ");
}

function Field({
  label,
  icon: Icon,
  error,
  children,
}: {
  label: string;
  icon: React.ComponentType<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>;
  error?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        className="mb-1.5 flex items-center gap-1.5 text-[12.5px] font-medium"
        style={{ fontFamily: "'Inter', sans-serif", color: "#5B6461" }}
      >
        <Icon size={13} strokeWidth={2} style={{ color: "#0F3D3D" }} />
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1 text-[11.5px] text-red-500" style={{ fontFamily: "'Inter', sans-serif" }}>
          This field is required.
        </p>
      )}
    </div>
  );
}
