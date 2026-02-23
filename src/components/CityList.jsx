import styles from './CityList.module.css'
import CityItem from './CityItem'
import { useContext } from 'react'
import { CitiesProvider } from '../contexts/CitiesContext'
function CityList() {
  const {cities , isLoading} = useContext(CitiesProvider)
  if(isLoading) return <p>Loading cities...</p>
  return (
    <ul className={styles.cityList}>
      {cities.map(city => <CityItem city={city} key={city.id}/>)}
    </ul>
  )
}

export default CityList
