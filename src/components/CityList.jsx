import styles from "./CityList.module.css";
import CityItem from "./CityItem";
import { useCities } from "../contexts/CitiesContext";

function CityList() {
  const { state } = useCities();
  const { cities, isLoading } = state;

  if (isLoading) return <p>Loading cities...</p>;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
