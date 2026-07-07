import Container from "@/components/ui/container";
import AnimatedCounter from "@/components/ui/animated-counter";
import Reveal from "@/components/ui/reveal";
const stats = [
  {
    value: 10,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    value: 5000,
    suffix: "+",
    label: "Happy Patients",
  },
  {
    value: 15,
    suffix: "+",
    label: "Specialized Treatments",
  },
  {
    value: 100,
    suffix: "%",
    label: "Sterilization Standards",
  },
];


export default function Stats() {
  return (
    <section className="border-y border-black/5 bg-[var(--background)] py-16 lg:py-24">
      <Container>
        <Reveal>
        {/* Accent Line */}

        <div className="mx-auto h-[2px] w-28 rounded-full bg-[var(--gold)]" />

        {/* Small Label */}

        <p className="mt-6 text-center text-xs font-semibold uppercase tracking-[0.30em] text-[var(--teal)]">
          Trusted Dental Care
        </p>

        {/* Heading */}

        <h2 className="mx-auto mt-5 max-w-2xl text-center font-heading text-3xl font-semibold leading-tight text-[var(--foreground)] lg:text-4xl">
          Trusted Smiles,
          <br />
          Built on Experience
        </h2>

        {/* Description */}

        <p className="mx-auto mt-5 max-w-xl text-center text-base leading-8 text-gray-600 lg:text-lg">
          Helping families achieve healthier smiles through modern dentistry,
          advanced technology and compassionate patient care.
        </p>

        {/* Statistics */}

        <div className="mt-14 grid grid-cols-2 lg:mt-16 lg:grid-cols-4">

          {stats.map((item, index) => (
            <div
              key={item.label}
              className={`flex flex-col items-center px-6 py-4 ${
                index !== stats.length - 1
                  ? "lg:border-r lg:border-black/10"
                  : ""
              }`}
            >
            <h3 className="font-heading text-4xl font-semibold text-[var(--teal)] lg:text-5xl">
  <AnimatedCounter
    end={item.value}
    suffix={item.suffix}
    className="font-heading"
  />
</h3>
              <p className="mt-3 text-center text-sm font-medium text-gray-500 lg:text-base">
                {item.label}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom Text */}

        <p className="mt-12 text-center text-sm tracking-wide text-gray-500">
          Committed to safe, ethical and patient-first dental care.
        </p>
        </Reveal>
      </Container>
    </section>
  );
}