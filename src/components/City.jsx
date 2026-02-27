import styles from "./City.module.css";
import { useParams } from "react-router";
import { useCities } from "../contexts/CitiesContext";
import { useEffect } from "react";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { id } = useParams();
  const { state, dispatch } = useCities();
  const { cities, isLoading } = state;

  // Find the city in local state
  const city = cities.find((c) => String(c.id) === id);

  useEffect(() => {
    if (city) {
      dispatch({ type: "city/loaded", payload: city });
    }
  }, [city, dispatch]);

  if (isLoading || !city) return <p>Loading city...</p>;

  const { emoji, cityName, date, notes } = city;

  return (
    <div className={styles.city}>
      <div className={styles.row}>
        <h6>City name</h6>
        <h3>
          <span>{emoji}</span> {cityName}
        </h3>
      </div>

      <div className={styles.row}>
        <h6>You went to {cityName} on</h6>
        <p>{formatDate(date || null)}</p>
      </div>

      {notes && (
        <div className={styles.row}>
          <h6>Your notes</h6>
          <p>{notes}</p>
        </div>
      )}

      <div className={styles.row}>
        <h6>Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${encodeURIComponent(cityName)}`}
          target="_blank"
          rel="noreferrer"
        >
          Check out {cityName} on Wikipedia &rarr;
        </a>
      </div>
    </div>
  );
}

export default City;
