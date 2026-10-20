function ThemeSwitch({isLightMode, setIsLightMode}) {
  return (
    <div className="flex gap-2">
      <p className="text-Gray-650 font-bold">Dark Mode</p>
      <input
        type="checkbox" onClick={()=> setIsLightMode(!isLightMode)}
        className="appearance-none relative w-10 h-5 bg-linear-to-r from-Linear-gradient-Toggle to-Linear-gradient-Toggle1 outline-none rounded-2xl  transition-all duration-700 cursor-pointer checked:bg-Gray-400 before:content-[''] before:absolute before:w-4 before:h-4 before:rounded-2xl before:top-0.5 before:left-0.5 before:bg-Navy-950 before:scale-110  before:transition-all before:duration-500 checked:before:left-5"
      />
    </div>
  );
}

export default ThemeSwitch;
