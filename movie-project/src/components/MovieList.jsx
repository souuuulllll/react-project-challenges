import MovieCard from "./MovieCard";

export default function MovieList({ movies, onToggleWatch }) {
  if (!movies || movies.length === 0) {
    return (
      <div className="empty-state">
        <span className="empty-mark" aria-hidden="true">✦</span>
        <p className="empty-title">No matching records</p>
        <p className="empty-description">
          Change the active filter to scan the rest of the archive.
        </p>
      </div>
    );
  }

  return (
    <section
      aria-label="Movie list"
      className="movie-grid"
    >
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onToggleWatch={onToggleWatch}
        />
      ))}
    </section>
  );
}
