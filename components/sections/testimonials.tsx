import { Star } from "lucide-react";
import Container from "@/components/ui/container";

const testimonials = [
  {
    name: "Rahul Sharma",
    treatment: "Root Canal Treatment",
    review:
      "The entire treatment was painless and professionally handled. Dr. Munish Lal explained every step and made me feel completely comfortable.",
  },
  {
    name: "Priya Verma",
    treatment: "Teeth Whitening",
    review:
      "The clinic is very clean and the staff is extremely friendly. My smile looks brighter than ever. Highly recommended!",
  },
  {
    name: "Amit Singh",
    treatment: "Dental Implant",
    review:
      "Excellent experience from consultation to treatment. Modern equipment, caring staff and outstanding results.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-28">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-teal-100 px-5 py-2 font-semibold text-teal-700">
            Testimonials
          </span>

          <h2 className="mt-8 text-4xl font-bold text-slate-900 md:text-5xl">
            Loved by Patients,
            <span className="text-teal-700"> Trusted by Families</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Our greatest achievement is the confidence and smiles of our
            patients.
          </p>

        </div>

        <div className="mt-16 flex items-center justify-center gap-2">

          {[1,2,3,4,5].map((_, index) => (
            <Star
              key={index}
              className="fill-yellow-400 text-yellow-400"
              size={22}
            />
          ))}

          <span className="ml-3 font-semibold text-slate-700">
            4.9 Google Rating
          </span>

        </div>

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="rounded-3xl border border-slate-200 bg-[#FAF8F5] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-6 flex">

                {[1,2,3,4,5].map((_, i) => (
                  <Star
                    key={i}
                    className="fill-yellow-400 text-yellow-400"
                    size={18}
                  />
                ))}

              </div>

              <p className="leading-8 text-slate-600">
                "{item.review}"
              </p>

              <div className="mt-8">

                <h3 className="font-bold text-slate-900">
                  {item.name}
                </h3>

                <p className="text-sm text-teal-700">
                  {item.treatment}
                </p>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}