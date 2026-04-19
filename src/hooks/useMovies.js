import { useState, useCallback } from "react";
import { API_KEY, BASE_URL } from "../config";

const useMovies = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [label, setLabel] = useState("");

  const fetchMovies = useCallback(async (url, resultLabel) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch. Check your API key.");
      const data = await res.json();
      setMovies(data.results || []);
      setLabel(resultLabel);
    } catch (err) {
      setError(err.message);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  const searchMovies = useCallback(
    (query) => {
      fetchMovies(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}&include_adult=false`,
        `Results for "${query}"`
      );
    },
    [fetchMovies]
  );

  const loadTrending = useCallback(() => {
    fetchMovies(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
      "Trending this week"
    );
  }, [fetchMovies]);

  const loadByGenre = useCallback(
    (genreId, genreName) => {
      fetchMovies(
        `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}&sort_by=popularity.desc`,
        `${genreName} movies`
      );
    },
    [fetchMovies]
  );

  return { movies, loading, error, label, searchMovies, loadTrending, loadByGenre };
};

export default useMovies;
