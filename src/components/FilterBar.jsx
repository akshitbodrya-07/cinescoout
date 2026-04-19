import styles from "./FilterBar.module.css";
import { FILTER_GENRES } from "../config";

const FilterBar = ({ activeFilter, onFilter }) => {
  return (
    <div className={styles.filters}>
      {FILTER_GENRES.map((g) => (
        <button
          key={g.id}
          className={`${styles.btn} ${activeFilter === g.id ? styles.active : ""}`}
          onClick={() => onFilter(g.id, g.label)}
        >
          {g.label}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
