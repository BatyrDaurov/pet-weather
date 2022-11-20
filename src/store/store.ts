import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import currentWeatherSliceReducer from "./slices/currentWeatherSlice";
import currentCitySlice from "./slices/currentCitySlice";

const rootReducer = combineReducers({
    currentCitySlice,
    currentWeatherSliceReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    middleware: ((getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })) 
})

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = typeof store
export type AppDispatch = AppStore['dispatch']