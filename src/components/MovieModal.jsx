import { useState, useEffect } from "react";
import styles from "./MovieModal.module.css";
import { API_KEY, BASE_URL, IMAGE_BASE_URL } from "../config";

const MovieModal = ({ movie, onClose }) => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      setLoading(true);
      try {
        const res = await fetch(`${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}`);
        const data = await res.json();
        setDetails(data);
      } catch {
        setDetails(null);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, [movie.id]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const backdropUrl = details?.backdrop_path
    ? `${IMAGE_BASE_URL}/w780${details.backdrop_path}`
    : null;

  return (
    <div className={styles.overlay} onClick={handleBackdropClick}>
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>

        {backdropUrl ? (
          <img src={backdropUrl} alt={details.title} className={styles.backdrop} />
        ) : (
          <div className={styles.backdropPlaceholder} />
        )}

        <div className={styles.body}>
          {loading ? (
            <div className={styles.spinner} />
          ) : details ? (
            <>
              <h2 className={styles.title}>{details.title}</h2>

              <div className={styles.meta}>
                {details.release_date && (
                  <span className={styles.pill}>{details.release_date.split("-")[0]}</span>
                )}
                {details.vote_average > 0 && (
                  <span className={`${styles.pill} ${styles.rating}`}>
                    ★ {details.vote_average.toFixed(1)} / 10
                  </span>
                )}
                {details.runtime > 0 && (
                  <span className={styles.pill}>{details.runtime} min</span>
                )}
                {details.genres?.map((g) => (
                  <span key={g.id} className={styles.pill}>{g.name}</span>
                ))}
              </div>

              <p className={styles.overview}>
                {details.overview || "No description available."}
              </p>

              {details.homepage && (
                <a
                  href={details.homepage}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.officialBtn}
                >
                  Official Site →
                </a>
              )}
            </>
          ) : (
            <p className={styles.errorText}>Could not load movie details.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
