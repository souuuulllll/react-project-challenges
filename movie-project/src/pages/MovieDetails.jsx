import { useParams, Link, useNavigate } from "react-router-dom";
import { useMovies } from "../hooks/useMovies";

export default function MovieDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getMovieById, toggleWatch, movies } = useMovies();

  const movie = getMovieById(id);

  if (!movie) {
    return (
      <div className="cinema-shell cyber-shell details-shell">
        <div className="not-found-panel">
          <div className="not-found-mark">
            !
          </div>
          <h1>Movie Not Found</h1>
          <p>
            We couldn't find a movie with ID #{id}. It may have been removed or never existed.
          </p>
          <Link to="/" className="detail-action">
            &larr; Return to archive
          </Link>
        </div>
      </div>
    );
  }

  // Find index for Next / Previous navigation
  const currentIndex = movies.findIndex((m) => m.id === movie.id);
  const prevMovie = currentIndex > 0 ? movies[currentIndex - 1] : null;
  const nextMovie = currentIndex < movies.length - 1 ? movies[currentIndex + 1] : null;

  return (
    <div className="cinema-shell cyber-shell details-shell">
      <div className="details-frame">
        <nav className="details-nav">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="back-link"
          >
            <span>&larr;</span> Exit record
          </button>

          <div className="details-paging">
            {prevMovie && (
              <Link
                to={`/movies/${prevMovie.id}`}
                className="paging-link"
                title={prevMovie.title}
              >
                &larr; Prev
              </Link>
            )}
            {nextMovie && (
              <Link
                to={`/movies/${nextMovie.id}`}
                className="paging-link"
                title={nextMovie.title}
              >
                Next &rarr;
              </Link>
            )}
          </div>
        </nav>

        <main className="detail-panel">
          <div className="detail-poster-column">
            <div className="detail-poster">
              <img src={movie.image} alt={movie.title} />
              <span className={`watch-status detail-status${movie.isWatch ? " is-watched" : ""}`}>
                <span className="status-dot" aria-hidden="true" />
                {movie.isWatch ? "Logged" : "In queue"}
              </span>
            </div>
          </div>
          <div className="detail-copy">
            <div>
              <span className="section-kicker">DATABASE / RECORD</span>
              <div className="detail-meta">
                {movie.year && <span>{movie.year}</span>}
                {movie.genre && <span>{movie.genre}</span>}
                {movie.rating && <span className="movie-rating"><span aria-hidden="true">✦</span> {movie.rating}</span>}
              </div>
              <h1>{movie.title}</h1>
              {movie.director && (
                <p className="detail-director">
                  A film by <span>{movie.director}</span>
                </p>
              )}
              <div className="detail-overview">
                <h2>Plot data</h2>
                <p>{movie.synopsis || "No synopsis available for this title."}</p>
              </div>
            </div>
            <div className="detail-footer">
              <button
                type="button"
                onClick={() => toggleWatch(movie.id)}
                className={`detail-action${movie.isWatch ? " is-watched" : ""}`}
              >
                {movie.isWatch ? (
                  <><span aria-hidden="true">&#10003;</span> remove from watched</>
                ) : (
                  <><span aria-hidden="true">+</span> To watch</>
                )}
              </button>
              <div className="detail-watch-state">
                <span>Record status</span>
                <strong className={movie.isWatch ? "is-watched" : ""}>
                  {movie.isWatch ? "Logged" : "In queue"}
                </strong>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
