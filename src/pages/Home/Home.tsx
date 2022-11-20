import React, { useEffect } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { storage } from "../../model/Storage";
import {
  selectCurrentCity,
  selectCurrentWeatherData,
  isLoadingSelector,
} from "../../store/selectors";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import { WeatherInfo } from "./components/WeatherInfo/Weather";
import { ThisDay } from "./components/ThisDay/ThisDay";
import { ThisDayInfo } from "./components/ThisDayInfo/ThisDayInfo";
import Loader from "../../shared/Loader/Loader";
import s from "./Home.module.scss";

type Props = {};

export const Home = (props: Props) => {
  const dispatch = useCustomDispatch();
  const { isLoading } = useCustomSelector(isLoadingSelector);
  const { weather } = useCustomSelector(selectCurrentWeatherData);
  const { city } = useCustomSelector(selectCurrentCity);

  useEffect(() => {
    dispatch(fetchCurrentWeather(storage.getItem("city") || city));
  }, [city]);

  return (
    <>
      {isLoading ? (
        <div className={s.loader}>
          <Loader />
        </div>
      ) : (
        <div className={s.home}>
          <div className={s.wrapper}>
            <ThisDay weather={weather} />
            <ThisDayInfo weather={weather} />
          </div>
          <WeatherInfo weather={weather} />
        </div>
      )}
    </>
  );
};
