
/**
 * ---------------------------------------------------------------------
 * CLINIC CONFIG — single source of truth
 * ---------------------------------------------------------------------
 * This is the ONLY file you should need to edit when reusing this
 * website for a different clinic. Update the values below and every
 * page/component that imports from "@/data/clinic" will update with it.
 *
 * Things you'll typically change per client:
 *  - name / shortName / tagline
 *  - doctor name, qualification, photo
 *  - phone number, whatsapp number, email
 *  - address lines, Google Maps link + embed
 *  - working hours
 *  - stats shown in the hero section
 *
 * Photo:
 *  - Put the doctor's photo in /public/images/ (e.g. /public/images/doctor.jpg)
 *  - Then update `doctor.photo` below to match the file name.
 * ---------------------------------------------------------------------
 */
 
export const clinic = {

  branding: {
  logo: "/images/logo.png",
},
  // Shown in the navbar logo, WhatsApp messages, and appointment card
  name: "Dr. Shubhra Dental Care",
 
  // Short version used in the navbar logo (top line)
  shortName: "Dr. Shubhra",
 
  // Small subtitle under the short name in the navbar
  tagline: "Dental Care",
 
  // Badge text shown above the hero heading
  locationTagline: "Bareilly · General & Cosmetic Dentistry",
 
  doctor: {
    name: "Dr. Shubhra Tripathi",
    qualification: "BDS, MDS General & Cosmetic Dentistry",
    // Path relative to /public
    photo: "/images/doctor.png",
    photoAlt: "Dr. Shubhra at the clinic",
  },
 
  contact: {
    // What visitors see on the page
    phoneDisplay: "+91 90587 81243",
    // Digits only, no +, no spaces — used to build tel:/wa.me links
    phoneDigits: "919058781243",
    email: "bitsbytes2006@gmail.com",
  },
 
  address: {
   lines: [
  "A-24, Deen Dayal Puram",
  "Bareilly",
  "Uttar Pradesh 243122",
],
    // "Get Directions" button link
   mapsLink:
  "https://www.google.com/maps/dir//Dr.+Shubhra's+Dental+Clinic+%26+Implant+center,+A+24,+Deen+Dayal+Puram,+Bareilly,+Uttar+Pradesh+243122/@28.3188041,79.4141207,14z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x39a007e27569cb39:0xefdf2e333831ddb0!2m2!1d79.4311948!2d28.3802266?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D",
    // Used for the embedded map iframe on the Contact section
  mapsEmbedSrc:
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.29252826674!2d79.42861451121622!3d28.38023129539207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a007e27569cb39%3A0xefdf2e333831ddb0!2sDr.%20Shubhra%27s%20Dental%20Clinic%20%26%20Implant%20center!5e0!3m2!1sen!2sin!4v1783445035459!5m2!1sen!2sin",
  },
 
  hours: {
    days: "Monday – Saturday",
    morning: "10:00 AM – 1:00 PM",
    evening: "3:00 PM – 8:30 PM",
    closedNote: "Sunday : Closed",
    // Used by the appointment form's time-slot dropdown (24hr, half-open ranges)
    sessions: [
      { startHour: 10, endHour: 13 }, // 10:00 AM – 1:00 PM
      { startHour: 15, endHour: 19 }, // 3:00 PM – 7:00 PM
    ],
  },
 
  // Hero section stat strip
  stats: [
    { value: "10+", label: "Years in practice" },
    { value: "5,000+", label: "Patients treated" },
    { value: "4.9", label: "Average rating" },
  ],
} as const;
 
/* ---------------------------------------------------------------------
 * Small helpers built from the config above — no need to edit these.
 * ------------------------------------------------------------------- */
 
export const phoneLink = `tel:+${clinic.contact.phoneDigits}`;
 
export const mailtoLink = `mailto:${clinic.contact.email}`;
 
export function whatsappLink(message?: string) {
  const base = `https://wa.me/${clinic.contact.phoneDigits}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}