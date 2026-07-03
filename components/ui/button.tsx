type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export default function Button({
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        inline-flex items-center justify-center
        rounded-full
        bg-teal-700
        px-6
        py-3
        text-white
        font-semibold
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-xl
        hover:bg-teal-800
        active:scale-95
        ${className}
      `}
    >
      {children}
    </button>
  );
}
