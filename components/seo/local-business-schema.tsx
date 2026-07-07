import { clinic } from "@/data/clinic";

/**
 * LocalBusinessSchema (Dentist)
 * ---------------------------------------------------------------------
 * Rebuilt to match the actual shape of @/data/clinic.ts (branding,
 * doctor.qualification, address.lines, hours.morning/evening text +
 * hours.sessions, no separate "seo"/"social"/"services" blocks).
 *
 * A few things clinic.ts doesn't currently store, handled locally in
 * this file instead of inventing new fields on clinic.ts:
 *
 *  - SITE_URL: needed to turn branding.logo ("/images/logo.png") into
 *    an absolute URL, which schema.org/Google require for `image`/
 *    `logo`. Reads NEXT_PUBLIC_SITE_URL if you set it, otherwise
 *    falls back to the known production URL below.
 *  - priceRange: not in clinic.ts, set once here.
 *  - geo coordinates: derived by parsing them out of
 *    address.mapsEmbedSrc (Google's `pb=` embed parameters) rather
 *    than hardcoding a second copy of the lat/long. If Google ever
 *    changes that URL format this falls back to omitting `geo`
 *    rather than emitting wrong coordinates.
 *
 * Deliberately NOT included (per Google's current guidelines, checked
 * July 2026):
 *  - aggregateRating / review — Google won't show star rich results
 *    for LocalBusiness/Dentist schema when the business controls the
 *    reviews about itself (the "self-serving reviews" rule, in place
 *    since 2019, reaffirmed Dec 2025). Real stars only come from your
 *    Google Business Profile.
 *  - FAQPage — Google fully retired FAQ rich results in Search as of
 *    May 7, 2026, so it's no SEO benefit.
 *  - sameAs / hasOfferCatalog — clinic.ts doesn't currently store
 *    social links or a treatments list, so these are left out rather
 *    than duplicating stale data here. See the bottom of this file
 *    for how to wire them back in if you add those fields later.
 * ---------------------------------------------------------------------
 */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://shubhradentalcare.vercel.app";
const PRICE_RANGE = "\u20b9\u20b9";

function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

// Converts "10:00 AM" / "8:30 PM" -> "10:00" / "20:30"
function to24h(time: string): string {
  const match = time.trim().match(/(\d{1,2}):(\d{2})\s*(AM|PM)/i);
  if (!match) return "00:00";
  const [, hh, mm, meridiem] = match;
  let hour = parseInt(hh, 10) % 12;
  if (meridiem.toUpperCase() === "PM") hour += 12;
  return `${String(hour).padStart(2, "0")}:${mm}`;
}

// "10:00 AM – 1:00 PM" -> { opens: "10:00", closes: "13:00" }
function parseRange(range: string) {
  const [start, end] = range.split(/[\u2013-]/).map((s) => s.trim());
  return { opens: to24h(start), closes: to24h(end) };
}

// Pulls "City · Specialty" apart, e.g. "Bareilly · General & Cosmetic Dentistry"
const [taglineCity, taglineSpecialty] = clinic.locationTagline
  .split("\u00b7")
  .map((s) => s.trim());

// address.lines is [street, city, "State PIN"] for this clinic's data —
// adjust this parsing if you restructure the lines array for a future client.
const [streetAddress, addressLocality, stateAndPin] = clinic.address.lines;
const pinMatch = stateAndPin?.match(/(\d{6})\s*$/);
const postalCode = pinMatch?.[1] ?? "";
const addressRegion = stateAndPin?.replace(/\d{6}\s*$/, "").trim() ?? "";

// Best-effort geo extraction from the Google Maps embed URL's pb=...!2d<lng>!3d<lat>
// parameters. Returns null (and geo is omitted) if the URL format doesn't match.
function extractGeo(embedSrc: string): { latitude: number; longitude: number } | null {
  const match = embedSrc.match(/!2d(-?\d+\.?\d*)!3d(-?\d+\.?\d*)/);
  if (!match) return null;
  return { longitude: parseFloat(match[1]), latitude: parseFloat(match[2]) };
}

const geo = extractGeo(clinic.address.mapsEmbedSrc);

const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
]; // matches clinic.hours.days ("Monday – Saturday"); update both together if this ever changes

export default function LocalBusinessSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "@id": `${SITE_URL}/#dentist`,

    name: clinic.name,
    image: absoluteUrl(clinic.branding.logo),
    logo: absoluteUrl(clinic.branding.logo),
    url: SITE_URL,
    telephone: `+${clinic.contact.phoneDigits}`,
    email: clinic.contact.email,
    priceRange: PRICE_RANGE,
    currenciesAccepted: "INR",

    address: {
      "@type": "PostalAddress",
      streetAddress: streetAddress ?? clinic.address.lines.join(", "),
      addressLocality: addressLocality ?? taglineCity,
      addressRegion,
      postalCode,
      addressCountry: "IN",
    },

    hasMap: clinic.address.mapsLink,
    sameAs: [
  clinic.address.mapsLink,
  "https://www.instagram.com/drshubhrasdentalcare/",
],

    areaServed: {
      "@type": "City",
      name: taglineCity,
    },

    medicalSpecialty: "Dentistry",

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: WEEKDAYS,
        ...parseRange(clinic.hours.morning),
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: WEEKDAYS,
        ...parseRange(clinic.hours.evening),
      },
    ],

    // Solo-practitioner clinics commonly model the practicing dentist as
    // "founder" — switch to an array under "employee" if you ever add a
    // second dentist to the clinic.
   founder: [
  {
    "@type": "Dentist",
    name: clinic.doctor.name,
  },
],
  };

  if (geo) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}

/**
 * To re-enable sameAs / hasOfferCatalog later, add to clinic.ts:
 *
 *   social: { instagram: "https://...", facebook: "https://..." },
 *   services: ["Dental Implants", "Root Canal Treatment", ...],
 *
 * then add here, inside the schema object above:
 *
 *   sameAs: [clinic.social.instagram, clinic.social.facebook].filter(Boolean),
 *   hasOfferCatalog: {
 *     "@type": "OfferCatalog",
 *     name: "Dental Treatments",
 *     itemListElement: clinic.services.map((service) => ({
 *       "@type": "Offer",
 *       itemOffered: { "@type": "MedicalProcedure", name: service },
 *     })),
 *   },
 */
