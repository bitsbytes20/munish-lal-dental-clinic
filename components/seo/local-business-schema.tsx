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
  "https://maps.app.goo.gl/i1v37R17ALEkwCoP7"
],

hasMap: "https://maps.app.goo.gl/i1v37R17ALEkwCoP7",

    

   
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