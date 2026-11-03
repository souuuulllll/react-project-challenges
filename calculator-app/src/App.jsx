import { useState } from "react";
import Keypad from "./components/Keypad"
import Theme from "./components/Theme"


function App() {
const [inputValue, setInputValue] = useState("");
const [prevValue, setPrevValue] = useState(null);
const [operator, setOperator] = useState(null);
 
  const handleButton = (value) => {
    if (value === "Reset") {
      setInputValue("");
      setPrevValue(null);
      setOperator(null);
    } else if (value === "DEL") {
      setInputValue((prev) => prev.slice(0, -1));
    }
//     if (["+", "-", "/", "x"].includes(value)) {
      
//       const op = value === "x" ? "*" : value;
      
//       if (prevValue === null) {
//         setPrevValue(parseFloat(inputValue));
//       } else if (operator) {
//         const result = calculate(prevValue, parseFloat(inputValue), operator);
//         setPrevValue(result);
//         setInputValue(String(result));
//       }
//       setOperator(op);
//       return;
//     }
//     if (value === "=") {
//       if (!operator || prevValue === null) return;
      
//       const result = calculate(prevValue, parseFloat(inputValue), operator);
//       setInputValue(String(result));
//       setPrevValue(null);
//       setOperator(null);
     
//       return;
//     }
//  else {
//       setInputValue((prev) => prev + value);
//     }
  };

  // တွက်ချက်ပေးမည့် Helper Function
  const calculate = (first, second, op) => {
    switch (op) {
      case "+": return first + second;
      case "-": return first - second;
      case "*": return first * second;
      case "/": return second === 0 ? "Error" : first / second;
      default: return second;
    }
  };

 const [currentTheme, setCurrentTheme] = useState("theme-1");
  
  const themeStyles = {
    "theme-1": {
      bgMain: "bg-Navy-800",
      bgScreen: "bg-[#182034]",
      bgKeypad: "bg-Gray-200",
      text: "text-white",
    },
    "theme-2": {
      bgMain: "bg-Gray-200", 
      bgScreen: "bg-[#eeeeee]",
      bgKeypad: "bg-Gray-200",
      text: "text-[#36362c]",
    },
    "theme-3": {
      bgMain: "bg-Purple-950",
      bgScreen: "bg-[#1e0836]",
      bgKeypad: "bg-Purple-800",
      text: "text-[#ffe53b]",
    }
  };

  const activeTheme = themeStyles[currentTheme];

  


  return (
    <div className={`${activeTheme.bgMain} h-screen grid place-items-center`}>
      <div className="w-125">
        <div className="flex justify-between">
          <h2 className="text-white font-bold text-3xl">calc</h2>
          <div className="flex items-center gap-2">
            <p className="text-white text-xs font-bold">THEME</p>
            <Theme currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
          </div>
        </div>
        <input type="text" value={inputValue} readOnly className="bg-Navy-950 w-full text-White text-4xl font-bold p-8 rounded-md mt-4"/>
        <div className="bg-Navy-900 p-7 mt-4 rounded-md">
          <Keypad handleButton={handleButton} activeTheme={activeTheme}/>
        </div>
      </div>
    </div>
  )
}

export default App