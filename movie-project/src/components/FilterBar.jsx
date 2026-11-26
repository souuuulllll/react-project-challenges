export default function FilterBar({ currentFilter, onFilterChange, counts }) {
  const filters = [
    { key: "all", label: "All records", count: counts.all },
    { key: "watched", label: "Watched", count: counts.watched },
    { key: "unwatched", label: "Queue", count: counts.unwatched },
  ];

  return (
    <div className="filter-bar" role="group" aria-label="Filter movies">
      {filters.map(({ key, label, count }) => {
        const isActive = currentFilter === key;
        return (
          <button
            key={key}
            type="button"
            onClick={() => onFilterChange(key)}
            aria-pressed={isActive}
            className={`filter-button${isActive ? " is-active" : ""}`}
          >
            <span>{label}</span>
            <span className="filter-count">
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
