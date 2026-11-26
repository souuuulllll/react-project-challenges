






















import { Link } from "react-router-dom";

export default function Header({
  watchedCount = 0,
  totalCount = 0,
  featuredMovie,
}) {
  return (
    <header className="masthead">
      <div className="masthead-top">
        <div className="terminal-breadcrumb">
          <span>SECTOR_07</span><i aria-hidden="true">/</i> PERSONAL INDEX
        </div>
        <div className="collection-stat" aria-label={`${watchedCount} of ${totalCount} titles watched`}>
          <span className="stat-label">ARCHIVE_STATUS: ACTIVE</span>
          <span className="stat-value">
            {String(watchedCount).padStart(2, "0")}
            <span> / {String(totalCount).padStart(2, "0")} WATCHED</span>
          </span>
        </div>
      </div>

      <div className="hero-layout">
        <div className="hero-copy">
          <span className="hero-kicker"><span /> SYSTEM / ARCHIVE ONLINE</span>
          <h1>Cinema,<br /><em>recoded.</em></h1>
          <p>A personal index of cinematic worlds. Catalog what you have seen; queue the next transmission.</p>
          <a className="hero-cta" href="#collection-title">
            Access the archive <span aria-hidden="true">&gt;&gt;</span>
          </a>
        </div>
        <div className="hero-visual">
          {featuredMovie && (
            <Link
              to={`/movies/${featuredMovie.id}`}
              className="hero-feature"
              id="featured-record"
              aria-label={`Featured film: ${featuredMovie.title}`}
            >
              <img src={featuredMovie.image} alt="" />
              <span className="feature-index">FILM.FILE / 001 <i /> FEATURED</span>
              <span className="feature-caption">
                <small>NOW INDEXED</small>
                <strong>{featuredMovie.title}</strong>
                <span>Open record <b aria-hidden="true">↗</b></span>
              </span>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
