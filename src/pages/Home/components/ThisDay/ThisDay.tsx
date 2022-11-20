import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { useCustomSelector } from "../../../../hooks/store";
import { storage } from "../../../../model/Storage";
import { Weather } from "../../../../store/types/types";
import s from "./ThisDay.module.scss";

type Props = {
  weather: Weather;
};

export const ThisDay = ({ weather }: Props) => {
  const date = new Date();
  const selector = useCustomSelector((state) => state.currentCitySlice.city);
  const cloudiness = weather.weather[0].description;

  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.top_block_wrapper}>
          <div className={s.this_temp}>{Math.trunc(weather.main.temp)}°</div>
          <div className={s.this_day_name}>Сегодня</div>
        </div>
        {cloudiness === "пасмурно" ? (
          <GlobalSvgSelector id="mainly_cloudy" />
        ) : cloudiness === "переменная облачность" ||
          cloudiness === "небольшая облачность" ? (
          <GlobalSvgSelector id="cloudiness_sun" />
        ) : cloudiness.includes("дождь") ? (
          <GlobalSvgSelector id="rain" />
        ) : cloudiness.includes("облачность") ? (
          <GlobalSvgSelector id="small_rain_sun" />
        ) : cloudiness.includes("снег") ? (
          <GlobalSvgSelector id="snow" />
        ) : (
          <GlobalSvgSelector id="sun" />
        )}
      </div>
      <div className={s.bottom_block}>
        <div className={s.time_now}>
          На время:{" "}
          <span>{`${date.getHours()}:${
            date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes()
          }`}</span>
        </div>
        <div className={s.this_city}>
          Город: <b>{storage.getItem("city") || selector}</b>
        </div>
      </div>
    </div>
  );
};
