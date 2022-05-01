import { createSlice } from "@reduxjs/toolkit";

const countriesSlice = createSlice({
  name: "countriesSlice",
  initialState: {
    countries: [],
    countryInfo: [],
  },
  reducers: {
    getCountries(state, action) {
      state.countries.push(...action.payload);
    },
    getCountryInfo(state, action) {
      state.countryInfo.push(...action.payload);
    },
  },
});

export const { getCountries, getCountryInfo } = countriesSlice.actions;

export default countriesSlice.reducer;
