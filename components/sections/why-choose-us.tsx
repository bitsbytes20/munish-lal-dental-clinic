import {
  Award,
  HeartHandshake,
  ShieldCheck,
  MonitorSmartphone,
  Users,
  Clock3,
} from "lucide-react";

import Container from "@/components/ui/container";

const features = [
  {
    icon: Award,
    title: "20+ Years Experience",
    description:
      "Providing trusted dental care with years of clinical expertise and patient satisfaction.",
  },
  {
    icon: Users,
    title: "5000+ Happy Patients",
    description:
      "Thousands of smiles restored with personalized and compassionate treatment.",
  },
  {
    icon: MonitorSmartphone,
    title: "Modern Technology",
    description:
      "Digital X-rays, advanced equipment and modern techniques for accurate treatment.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Sterile Clinic",
    description:
      "Strict sterilization protocols ensuring a safe and hygienic environment for every patient.",
  },
  {
    icon: HeartHandshake,
    title: "Personalized Care",
    description:
      "Every treatment plan is customized according to the patient's individual needs.",
  },
  {
    icon: Clock3,
    title: "Emergency Dental Care",
    description:
      "Quick assistance for dental pain, trauma and urgent treatment whenever required.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#FAF8F5] py-28">
      <Container>

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-teal-100 px-5 py-2 font-semibold text-teal-700">
            Why Choose Us
          </span>

          <h2 className="mt-8 text-4xl font-bold text-slate-900 md:text-5xl">
            Excellence in Every Smile
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Combining years of experience, advanced technology and compassionate
            care to provide a comfortable dental experience for every patient.
          </p>

        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border hover:border-teal-600"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-teal-100 text-teal-700 transition-all duration-300 group-hover:bg-teal-700 group-hover:text-white">
                  <Icon size={30} />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

      </Container>
    </section>
  );
}