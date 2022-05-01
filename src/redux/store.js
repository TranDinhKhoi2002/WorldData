import { configureStore } from "@reduxjs/toolkit";
import countriesSlice from "./countries-slice";
import loadingSlice from "./loading-slice";

const store = configureStore({
  reducer: {
    country: countriesSlice,
    loading: loadingSlice,
  },
});

export default store;
