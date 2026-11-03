function ThemeSwitch({themeMode, setThemeMode}) {
  return (
    <img
      src="/images/icon-sun.svg"
      alt="icon"
      onClick={() => setThemeMode(!themeMode)}
      className="bg-Neutral-600 p-2 rounded-xl"
    />
  );
}

export default ThemeSwitch;
