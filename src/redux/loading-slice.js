import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
  name: "loadingSlice",
  initialState: {
    isLoading: true,
  },
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
  },
});

export const { setIsLoading } = loadingSlice.actions;

export default loadingSlice.reducer;
