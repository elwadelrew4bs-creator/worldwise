import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Homepage from "./pages/Homepage";
import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";
import { CitiesProvider } from "./contexts/CitiesContext";
import City from "./components/City";
function App() {
 
  return (
    <CitiesProvider>
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="app" element={<AppLayout />} >
           <Route index element={<Navigate replace to="cities" />} />
          <Route path="cities" element={<CityList />}/>
          <Route path="cities/:id" element={<City />} />
          <Route path="countries" element={<h1>Countries</h1>}/>
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
