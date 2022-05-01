import { getCountryInfo } from "./countries-slice";

const getCountryInfoFromApi = (countryName) => async (dispatch) => {
  try {
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    if (!response.ok) {
      throw new Error("Somthing went wrong when fetching country info via API");
    }

    const data = await response.json();

    const countryInfo = [];
    data.forEach((country) => {
      countryInfo.push({
        official: country.name.official,
        capital: country.capital[0],
        region: country.region,
        timezone: country.timezones[0],
        flag: country.flags.svg,
        population: country.population,
        area: country.area,
      });
    });

    dispatch(getCountryInfo(countryInfo));
  } catch (err) {
    alert(err.message);
  }
};

export default getCountryInfoFromApi;
