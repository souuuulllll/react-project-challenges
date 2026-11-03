const keys = [
  { label: "7" },
  { label: "8" },
  { label: "9" },
  { label: "DEL", style: "special", ariaLabel: "Delete last digit" },
  { label: "4" },
  { label: "5" },
  { label: "6" },
  { label: "+" },
  { label: "1" },
  { label: "2" },
  { label: "3" },
  { label: "-" },
  { label: "." },
  { label: "0" },
  { label: "/" },
  { label: "x", ariaLabel: "Multiply" },
  { label: "Reset", style: "special", span: 2 },
  { label: "=", style: "accent", span: 2 },
];

const keyStyles = {
  default:
    "border-[var(--key-shadow)] bg-[var(--key-bg)] text-[var(--key-text)] text-[2rem]",
  special:
    "border-[var(--special-shadow)] bg-[var(--special-bg)] text-[var(--special-text)] text-xl uppercase",
  accent:
    "border-[var(--accent-shadow)] bg-[var(--accent-bg)] text-[var(--accent-text)] text-[2rem]",
};

function Keypad({ handleButton }) {
  return (
    <div className="grid grid-cols-4 gap-3 sm:gap-6">
      {keys.map(({ label, style = "default", span = 1, ariaLabel }) => (
        <button
          key={label}
          type="button"
          aria-label={ariaLabel}
          onClick={() => handleButton(label)}
          className={`flex min-h-16 items-center justify-center rounded-xl border-b-4 px-2 font-bold transition-[filter,transform] duration-100 active:translate-y-0.5 active:border-b-0 active:brightness-110 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-bg)] ${keyStyles[style]} ${span === 2 ? "col-span-2" : ""}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default Keypad;
