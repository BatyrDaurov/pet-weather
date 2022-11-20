import { RootState } from "./store";

export const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer;
export const selectCurrentCity = (state: RootState) => state.currentCitySlice;
export const isLoadingSelector = (state: RootState) =>
  state.currentWeatherSliceReducer;
