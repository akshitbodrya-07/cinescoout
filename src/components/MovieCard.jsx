import styles from "./MovieCard.module.css";
import { IMAGE_BASE_URL, GENRES } from "../config";

const MovieCard = ({ movie, onClick, index }) => {
  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}/w300${movie.poster_path}`
    : null;

  const year = movie.release_date ? movie.release_date.split("-")[0] : "";
  const genre = movie.genre_ids?.length ? GENRES[movie.genre_ids[0]] : "";
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : null;

  return (
    <div
      className={styles.card}
      onClick={() => onClick(movie)}
      style={{ animationDelay: `${index * 0.04}s` }}
    >
      <div className={styles.posterWrap}>
        {posterUrl ? (
          <img src={posterUrl} alt={movie.title} loading="lazy" className={styles.poster} />
        ) : (
          <div className={styles.posterPlaceholder}>{movie.title}</div>
        )}
        {rating && <div className={styles.ratingBadge}>{rating}</div>}
      </div>
      <div className={styles.info}>
        <p className={styles.title}>{movie.title}</p>
        <p className={styles.year}>{year}</p>
        {genre && <p className={styles.genre}>{genre}</p>}
      </div>
    </div>
  );
};

export default MovieCard;
