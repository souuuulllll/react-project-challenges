function Keypad({handleButton, activeTheme}) {
  return (
    <div className="grid grid-cols-4 grid-rows-5 gap-4">
      <button onClick={() => handleButton("7")} className={`border text-Navy-750 font-bold text-[32px] border-Gray-200 shadow-2xs shadow-Gray-orange-400 p-1 ${activeTheme.bgKeypad} rounded-lg`}>7</button>
      <button onClick={() => handleButton("8")} className="border text-Navy-750 font-bold text-[32px] border-Gray-200 shadow-2xs shadow-Gray-orange-400 p-1 bg-Gray-200 rounded-lg">8</button>
      <button onClick={() => handleButton("9")} className="border text-Navy-750 font-bold text-[32px] border-Gray-200 shadow-2xs shadow-Gray-orange-400 p-1 bg-Gray-200 rounded-lg">9</button>
      <button onClick={() => handleButton("DEL")} className="border text-White font-bold text-[32px] border-Navy-700 shadow-2xs shadow-Navy-800 p-1 bg-Navy-700 rounded-lg">DEL</button>
      <button onClick={() => handleButton("4")} className="border text-Navy-750 font-bold text-[32px] border-Gray-200 shadow-2xs shadow-Gray-orange-400 p-1 bg-Gray-200 rounded-lg">4</button>
      <button onClick={() => handleButton("5")} className="border text-Navy-750 font-bold text-[32px] border-Gray-200 shadow-2xs shadow-Gray-orange-400 p-1 bg-Gray-200 rounded-lg">5</button>
      <button onClick={() => handleButton("6")} className="border text-Navy-750 font-bold text-[32px] border-Gray-200 shadow-2xs shadow-Gray-orange-400 p-1 bg-Gray-200 rounded-lg">6</button>
      <button onClick={() => handleButton("+")} className="border text-Navy-750 font-bold text-[32px] border-Gray-200 shadow-2xs shadow-Gray-orange-400 p-1 bg-Gray-200 rounded-lg">+</button>
      <button onClick={() => handleButton("1")} className="border text-Navy-750 font-bold text-[32px] border-Gray-200 shadow-2xs shadow-Gray-orange-400 p-1 bg-Gray-200 rounded-lg">1</button>
      <button onClick={() => handleButton("2")} className="border text-Navy-750 font-bold text-[32px] border-Gray-200 shadow-2xs shadow-Gray-orange-400 p-1 bg-Gray-200 rounded-lg">2</button>
      <button onClick={() => handleButton("3")} className="border text-Navy-750 font-bold text-[32px] border-Gray-200 shadow-2xs shadow-Gray-orange-400 p-1 bg-Gray-200 rounded-lgg">3</button>
      <button onClick={() => handleButton("-")} className="border text-Navy-750 font-bold text-[32px] border-Gray-200 shadow-2xs shadow-Gray-orange-400 p-1 bg-Gray-200 rounded-lg">-</button>
      <button onClick={() => handleButton(".")} className="border text-Navy-750 font-bold text-[32px] border-Gray-200 shadow-2xs shadow-Gray-orange-400 p-1 bg-Gray-200 rounded-lg">.</button>
      <button onClick={() => handleButton("0")} className="border text-Navy-750 font-bold text-[32px] border-Gray-200 shadow-2xs shadow-Gray-orange-400 p-1 bg-Gray-200 rounded-lg">0</button>
      <button onClick={() => handleButton("/")} className="border text-Navy-750 font-bold text-[32px] border-Gray-200 shadow-2xs shadow-Gray-orange-400 p-1 bg-Gray-200 rounded-lg">/</button>
      <button onClick={() => handleButton("x")} className="border text-Navy-750 font-bold text-[32px] border-Gray-200 shadow-2xs shadow-Gray-orange-400 p-1 bg-Gray-200 rounded-lg">x</button>
      <button onClick={() => handleButton("Reset")} className="border text-White font-bold text-[32px] border-Navy-700 shadow-2xs shadow-Navy-800 p-1 bg-Navy-700 rounded-lg col-span-2">Reset</button>
      <button onClick={() => handleButton("=")} className="border text-White font-bold text-[32px] border-Red-600 shadow-2xs shadow-Red-800 p-1 bg-Red-600 rounded-lg col-span-2">=</button>
    </div>
  );
}

export default Keypad;
