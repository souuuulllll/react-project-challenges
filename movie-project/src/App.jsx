import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MovieProvider } from "./context/MovieProvider";
import HomePage from "./pages/HomePage";
import MovieDetails from "./pages/MovieDetails";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <MovieProvider>
      <BrowserRouter>
        <Routes>
          {/* Main Home Route */}
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<Navigate to="/" replace />} />

          {/* Dynamic Route for Movie Details */}
          <Route path="/movies/:id" element={<MovieDetails />} />
          <Route path="/movie/:id" element={<MovieDetails />} />

          {/* 404 Fallback Route */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </MovieProvider>
  );
}

export default App;
