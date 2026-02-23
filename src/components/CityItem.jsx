import styles from './CityItem.module.css'
function CityItem({city}) {
    return (
        <div className={styles.cityItem}>
            <p>{city.emoji}</p>
            <p>{city.cityName}</p>
            <p>{city.country }</p>
        </div>
    )
}

export default CityItem
