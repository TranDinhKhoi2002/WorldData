import { getCountries } from "./countries-slice";

const getCountriesFromApi = () => async (dispatch) => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all");
    if (!response.ok) {
      throw new Error("Somthing went wrong when fetching countries via API");
    }

    const data = await response.json();

    const countriesData = [];
    data.forEach((country) => {
      countriesData.push({
        countryName: country.name.common,
        flag: country.flags.svg,
      });
    });

    dispatch(getCountries(countriesData));
  } catch (err) {
    alert(err.message);
  }
};

export default getCountriesFromApi;
