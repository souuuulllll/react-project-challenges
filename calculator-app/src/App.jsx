import { useState } from "react";
import Keypad from "./components/Keypad";
import Theme from "./components/Theme";

function calculate(first, second, operator) {
  let result;

  switch (operator) {
    case "+":
      result = first + second;
      break;
    case "-":
      result = first - second;
      break;
    case "x":
      result = first * second;
      break;
    case "/":
      result = second === 0 ? null : first / second;
      break;
    default:
      return null;
  }

  return Number.isFinite(result) ? Number(result.toPrecision(12)) : null;
}

function App() {
  const [display, setDisplay] = useState("0");
  const [storedValue, setStoredValue] = useState(null);
  const [pendingOperator, setPendingOperator] = useState(null);
  const [isNewEntry, setIsNewEntry] = useState(true);


  const [currentTheme, setCurrentTheme] = useState(1);

  const reset = () => {
    setDisplay("0");
    setStoredValue(null);
    setPendingOperator(null);
    setIsNewEntry(true);
  };

  const handleButton = (value) => {
    if (value === "Reset") {
      reset();
      return;
    }

    if (value === "DEL") {
      if (display === "Error") {
        reset();
        return;
      }

      setDisplay((current) => {
        const next = current.slice(0, -1);
        return next === "" || next === "-" ? "0" : next;
      });
      setIsNewEntry(false);
      return;
    }

    if (/^\d$/.test(value)) {
      if (display === "Error") {
        reset();
      }

      setDisplay((current) => {
        if (isNewEntry || current === "Error") return value;
        if (current === "0") return value;
        return `${current}${value}`;
      });
      setIsNewEntry(false);
      return;
    }

    if (value === ".") {
      if (display === "Error") {
        setDisplay("0.");
      } else if (isNewEntry) {
        setDisplay("0.");
      } else if (!display.includes(".")) {
        setDisplay((current) => `${current}.`);
      }
      setIsNewEntry(false);
      return;
    }

    if (["+", "-", "x", "/"].includes(value)) {
      if (display === "Error") return;

      const currentValue = Number(display);
      if (!Number.isFinite(currentValue)) return;

      if (storedValue !== null && pendingOperator && !isNewEntry) {
        const result = calculate(storedValue, currentValue, pendingOperator);
        if (result === null) {
          setDisplay("Error");
          setStoredValue(null);
          setPendingOperator(null);
          setIsNewEntry(true);
          return;
        }

        setDisplay(String(result));
        setStoredValue(result);
      } else if (storedValue === null) {
        setStoredValue(currentValue);
      }

      setPendingOperator(value);
      setIsNewEntry(true);
      return;
    }

    if (value === "=" && storedValue !== null && pendingOperator) {
      const result = calculate(storedValue, Number(display), pendingOperator);
      if (result === null) {
        setDisplay("Error");
      } else {
        setDisplay(String(result));
      }
      setStoredValue(null);
      setPendingOperator(null);
      setIsNewEntry(true);
    }
  };

  return (
    <main
      className={`theme-shell theme-${currentTheme} grid min-h-screen place-items-center px-6 py-8 text-(--text-main)`}
    >
      <section className="w-full max-w-135" aria-label="Calculator">
        <header className="mb-6 flex items-end justify-between">
          <h1 className="text-3xl font-bold tracking-tight">calc</h1>
          <Theme
            currentTheme={currentTheme}
            setCurrentTheme={setCurrentTheme}
          />
        </header>

        <output
          aria-label="Calculator display"
          aria-live="polite"
          className="flex min-h-28 w-full items-center justify-end overflow-hidden break-all rounded-xl bg-[var(--display-bg)] px-6 py-6 text-right text-5xl font-bold tabular-nums sm:text-6xl"
        >
          {display}
        </output>

        <div className="mt-6 rounded-xl bg-[var(--panel-bg)] p-6 sm:p-8">
          <Keypad handleButton={handleButton} />
        </div>
      </section>
    </main>
  );
}

export default App;
