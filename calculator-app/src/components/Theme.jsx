function Theme({currentTheme, setCurrentTheme}) {
  return (
    <div className="flex gap-2">
      <button onClick={() => setCurrentTheme("theme-1")}>1</button>
      <button onClick={() => setCurrentTheme("theme-2")}>2</button>
      <button onClick={() => setCurrentTheme("theme-3")}>3</button>
    </div>
  );
}

export default Theme;
