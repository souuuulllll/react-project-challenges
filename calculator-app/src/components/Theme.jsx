const themes = [1, 2, 3];

function Theme({ currentTheme, setCurrentTheme }) {
  const indicatorOffset = `${(currentTheme - 1) * 150}%`;

  return (
    <div className="flex items-end gap-5">
      <span className="pb-2 text-xs font-bold uppercase tracking-[0.12em]">
        Theme
      </span>
      <div>
        <div
          role="group"
          aria-label="Color theme"
          className="grid grid-cols-3 text-center text-xs font-bold"
        >
          {themes.map((theme) => (
            <button
              key={theme}
              type="button"
              aria-label={`Theme ${theme}`}
              aria-pressed={currentTheme === theme}
              onClick={() => setCurrentTheme(theme)}
              className="rounded px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[var(--accent-bg)]"
            >
              {theme}
            </button>
          ))}
        </div>
        <div
          aria-hidden="true"
          className="relative mt-1 h-6 w-[4.5rem] rounded-full bg-[var(--panel-bg)] p-1"
        >
          <span
            className="absolute left-1 top-1 size-4 rounded-full bg-[var(--accent-bg)] transition-transform duration-200"
            style={{ transform: `translateX(${indicatorOffset})` }}
          />
        </div>
      </div>
    </div>
  );
}

export default Theme;
