type SectionTitleProps = {
  badge: string;
  title: string;
  description: string;
};

export default function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-teal-700">
        {badge}
      </p>

      <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
        {title}
      </h2>

      <p className="mt-6 text-lg leading-8 text-gray-600">
        {description}
      </p>
    </div>
  );
}