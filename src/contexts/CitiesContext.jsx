import { Children, createContext,  useEffect, useState } from "react";

const CitiesContext = createContext()

function CitiesProvider ({children}) { 
    const BASE_URL = 'http://localhost:9440'
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
    useEffect(function () {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        
        if (!res.ok) throw new Error("Could not load cities");
        const data = await res.json();
        setCities(data);
      } catch (err) {
        alert(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);
  return <CitiesContext.Provider value={{cities , isLoading}}>
    {children}
  </CitiesContext.Provider>
}

export {CitiesProvider}