import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="cinema-shell cyber-shell details-shell">
      <div className="not-found-panel">
        <div className="not-found-mark">404</div>
        <h1>Route not found</h1>
        <p>The requested record is not indexed at this address.</p>
        <Link to="/" className="detail-action">
          &larr; Return to archive
        </Link>
      </div>
    </div>
  );
}
