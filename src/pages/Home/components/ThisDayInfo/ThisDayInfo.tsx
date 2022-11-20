import React from "react";
import { Weather } from "../../../../store/types/types";
import cloud from "./../../../../assets/imgs/cloud.png";
import rain from "./../../../../assets/imgs/rain.gif";
import s from "./ThisDayInfo.module.scss";
import ThisDayItem from "./ThisDayItem";

type Props = { weather: Weather };

export interface Item {
  icon_id: string;
  name: string;
  value: string;
}

export const ThisDayInfo = ({ weather }: Props) => {
  const items = [
    {
      icon_id: "temp",
      name: "Температура",
      value: `${Math.floor(weather.main.temp_min)} - ощущается как ${Math.ceil(
        weather.main.feels_like
      )}`,
    },
    {
      icon_id: "pressure",
      name: "Давление",
      value: `${weather.main.pressure} мм ртутного столба`,
    },
    {
      icon_id: "precipitation",
      name: "Облачность",
      value: `${weather.weather[0].description}`,
    },
    {
      icon_id: "wind",
      name: "Ветер",
      value: `${weather.wind.speed} м/с`,
    },
  ];
  const cloudiness = weather.weather[0].description;
  return (
    <div className={s.this__day_info}>
      <div className={s.this__day_info_items}>
        {items.map((item: Item, index: number) => (
          <ThisDayItem key={index} item={item} />
        ))}
      </div>

      <img
        className={s.cloud__img}
        src={cloud}
        width="41%"
        height="130px"
        alt="облако"
      />
    </div>
  );
};
