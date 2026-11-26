import { Link } from "react-router-dom";

export default function MovieCard({ movie, onToggleWatch }) {
  const { id, title, image, isWatch, year, rating } = movie;

  return (
    <article className="movie-card">
      <Link to={`/movies/${id}`} className="poster-link" aria-label={`View ${title} details`}>
        <img src={image} alt={title} loading="lazy" className="poster-image" />
        <span className={`watch-status${isWatch ? " is-watched" : ""}`}>
          <span className="status-dot" aria-hidden="true" />
          {isWatch ? "Logged" : "In queue"}
        </span>
        <span className="poster-action">Open record <span aria-hidden="true">↗</span></span>
      </Link>

      <div className="movie-card-content">
        <div className="movie-meta">
          {year && <span>{year}</span>}
          {rating && <span className="movie-rating"><span aria-hidden="true">✦</span> {rating}</span>}
        </div>
        <Link to={`/movies/${id}`} className="movie-title" title={title}>
          {title}
        </Link>
        <button
          type="button"
          onClick={() => onToggleWatch(id)}
          className={`watch-toggle${isWatch ? " is-watched" : ""}`}
        >
          <span aria-hidden="true">{isWatch ? "−" : "+"}</span>
          {isWatch ? "Remove from watched" : "watched"}
        </button>
      </div>
    </article>
  );
}
