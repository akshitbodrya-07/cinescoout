import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";
import MovieCard from "./components/MovieCard";
import MovieModal from "./components/MovieModal";
import useMovies from "./hooks/useMovies";
import "./App.css";

const App = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { movies, loading, error, label, searchMovies, loadTrending, loadByGenre } = useMovies();

  useEffect(() => {
    loadTrending();
  }, []);

  const handleFilter = (id, name) => {
    setActiveFilter(id);
    if (id === "all") {
      loadTrending();
    } else {
      loadByGenre(id, name);
    }
  };

  const handleSearch = (query) => {
    setActiveFilter("all");
    searchMovies(query);
  };

  return (
    <div className="app">
      {/* ── HERO HEADER ── */}
      <header className="hero">
        <div className="hero-glow" />
        <h1 className="logo">CINE<span>SCOUT</span></h1>
        <p className="tagline">Discover your next favourite film</p>
        <SearchBar onSearch={handleSearch} />
        <FilterBar activeFilter={activeFilter} onFilter={handleFilter} />
      </header>

      {/* ── MAIN CONTENT ── */}
      <main className="content">
        {loading && (
          <div className="loading-state">
            <div className="spinner" />
            <p>Searching the archive...</p>
          </div>
        )}

        {error && !loading && (
          <div className="error-state">
            <p className="error-title">Something went wrong</p>
            <p className="error-sub">{error}</p>
            <p className="error-hint">
              Make sure your API key is correctly set in <code>src/config.js</code>
            </p>
          </div>
        )}

        {!loading && !error && movies.length === 0 && (
          <div className="empty-state">
            <p>No movies found. Try a different search.</p>
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <>
            <p className="results-label">
              <strong>{movies.length}</strong> {label}
            </p>
            <div className="movies-grid">
              {movies.map((movie, i) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  index={i}
                  onClick={setSelectedMovie}
                />
              ))}
            </div>
          </>
        )}
      </main>

      {/* ── MOVIE DETAIL MODAL ── */}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default App;
