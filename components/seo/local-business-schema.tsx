export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",

    name: "Dr. Shubhra's Dental Clinic & Implant Center",

    image: "https://shubhradentalcare.vercel.app/logo.png",

    url: "https://shubhradentalcare.vercel.app",

    telephone: "+91 9058781243",

    priceRange: "₹₹",

    address: {
      "@type": "PostalAddress",
      streetAddress: "A-24, Deen Dayal Puram",
      addressLocality: "Bareilly",
      addressRegion: "Uttar Pradesh",
      postalCode: "243122",
      addressCountry: "IN",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 28.3802266,
      longitude: 79.4311948,
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "10:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "15:00",
        closes: "20:30",
      },
    ],

    sameAs: [
      "https://www.instagram.com/drshubhrasdentalcare/",
      "https://www.google.com/maps/place/Dr.+Shubhra's+Dental+Clinic+%26+Implant+center/@28.3802313,79.4286145,17z/data=!3m1!4b1!4m6!3m5!1s0x39a007e27569cb39:0xefdf2e333831ddb0!8m2!3d28.3802266!4d79.4311948!16s%2Fg%2F11mll7x4sn",
    ],

    hasMap:
      "https://www.google.com/maps/place/Dr.+Shubhra's+Dental+Clinic+%26+Implant+center/",

    medicalSpecialty: [
      "General Dentistry",
      "Cosmetic Dentistry",
      "Dental Implants",
      "Root Canal Therapy",
      "Teeth Whitening",
      "Orthodontics",
      "Pediatric Dentistry",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}