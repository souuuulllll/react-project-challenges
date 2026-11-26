import { useMovies } from "../hooks/useMovies";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import MovieList from "../components/MovieList";

export default function HomePage() {
  const { filter, setFilter, counts, movies, filteredMovies, toggleWatch } = useMovies();

  return (
    <div className="cinema-shell cyber-shell">
      <div className="archive-layout">
        <aside className="command-rail" aria-label="Archive navigation">
          <a className="rail-brand" href="#top" aria-label="Reel Net archive home">
            <span className="rail-brand-mark" aria-hidden="true">R/</span>
            <span>
              <strong>REEL//NET</strong>
              <small>FILM ARCHIVE · 01</small>
            </span>
          </a>

          <div className="rail-navigation">
            <span className="rail-label">DIRECTORY</span>
            <a className="rail-link is-active" href="#collection-title">
              <span className="rail-link-index">01</span>
              <span>Collection</span>
              <span className="rail-link-arrow" aria-hidden="true">↗</span>
            </a>
            <a className="rail-link" href="#featured-record">
              <span className="rail-link-index">02</span>
              <span>Featured file</span>
              <span className="rail-link-arrow" aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="rail-system">
            <span className="rail-label">NETWORK STATUS</span>
            <span className="rail-online"><i aria-hidden="true" /> NODE ONLINE</span>
            <span className="rail-node">LOCAL INSTANCE / 127.0.0.1</span>
            <div className="rail-signal" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /></div>
          </div>
        </aside>

        <div className="page-frame archive-main" id="top">
          <Header
            watchedCount={counts.watched}
            totalCount={counts.all}
            featuredMovie={movies[0]}
          />

          <section className="collection-section" aria-labelledby="collection-title">
            <div className="section-heading">
              <div>
                <span className="section-kicker">DATABASE / INDEX</span>
                <h2 id="collection-title">Indexed titles</h2>
              </div>
              <span className="title-count">
                {String(filteredMovies.length).padStart(2, "0")}{" "}
                <span>{filteredMovies.length === 1 ? "TITLE" : "TITLES"}</span>
              </span>
            </div>

            <FilterBar
              currentFilter={filter}
              onFilterChange={setFilter}
              counts={counts}
            />

            <main>
              <MovieList
                movies={filteredMovies}
                onToggleWatch={toggleWatch}
              />
            </main>
          </section>
        </div>
      </div>
    </div>
  );
}
