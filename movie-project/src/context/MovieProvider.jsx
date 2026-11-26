import { useState, useMemo } from "react";
import { MovieContext } from "./MovieContext";
import { movies as initialMovies } from "../data/movies";

export function MovieProvider({ children }) {
  const [movies, setMovies] = useState(initialMovies);
  const [filter, setFilter] = useState("all");

  const toggleWatch = (id) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, isWatch: !movie.isWatch } : movie
      )
    );
  };

  const counts = useMemo(() => {
    const watched = movies.filter((m) => m.isWatch).length;
    return {
      all: movies.length,
      watched,
      unwatched: movies.length - watched,
    };
  }, [movies]);

  const filteredMovies = useMemo(() => {
    if (filter === "watched") return movies.filter((m) => m.isWatch);
    if (filter === "unwatched") return movies.filter((m) => !m.isWatch);
    return movies;
  }, [movies, filter]);

  const getMovieById = (id) => {
    return movies.find((movie) => movie.id === Number(id));
  };

  const value = {
    movies,
    filter,
    setFilter,
    toggleWatch,
    counts,
    filteredMovies,
    getMovieById,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
}

export default MovieProvider;
