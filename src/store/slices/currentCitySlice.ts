import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { City } from "../types/types";

const initialState: City = {
  city: "Москва",
};

const currentCitySlice = createSlice({
  name: "current_city",
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<string>) => {
      state.city = action.payload;
    },
  },
});

export const { changeCity } = currentCitySlice.actions;
export default currentCitySlice.reducer;
