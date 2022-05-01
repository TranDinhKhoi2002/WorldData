import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import DetailsPage from "./pages/DetailsPage";

import HomePage from "./pages/HomePage";
import getCountriesFromApi from "./redux/countries-action";
import { setIsLoading } from "./redux/loading-slice";

function App() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.country.countries);

  useEffect(() => {
    dispatch(getCountriesFromApi());
    dispatch(setIsLoading(true));
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<HomePage countries={countries} />} />
      <Route path="/:countryName" element={<DetailsPage />} />
    </Routes>
  );
}

export default App;
