import React from "react";
import { Card } from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tabs } from "./Tabs";
import s from "./Weather.module.scss";
import "swiper/css";
import { Weather } from "../../../../store/types/types";

interface Props {
  weather: Weather;
}

export interface FullInfoDay {
  specification: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

export const WeatherInfo = ({ weather }: Props) => {
  const unixTime = weather.dt;
  const date = new Date(unixTime * 1000);
  const MONTHS = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря",
  ];
  const WeekDate = `${date.getDate()} ${MONTHS[date.getMonth()]}`;

  const weatherInfos: FullInfoDay[] = [
    {
      specification: "Влажность",
      day_info: WeekDate,
      icon_id: "water",
      temp_day: `${weather.main.humidity}%`,
      temp_night: "",
      info: "",
    },
    {
      specification: "Ветер",
      day_info: WeekDate,
      icon_id: "wind",
      temp_day: `${weather.wind.speed} м/с`,
      temp_night: "",
      info: "",
    },
    {
      specification: "Видимость",
      day_info: WeekDate,
      icon_id: "eye",
      temp_day: `${weather.visibility} м.`,
      temp_night: "",
      info: "",
    },
    {
      specification: "Максимальная температура",
      day_info: WeekDate,
      icon_id: "temp",
      temp_day: `${weather.main.temp_max}° C`,
      temp_night: "",
      info: "",
    },
    {
      specification: "Минимальная температура",
      day_info: WeekDate,
      icon_id: "temp",
      temp_day: `${weather.main.temp_min}° C`,
      temp_night: "",
      info: "",
    },
    {
      specification: "Облачность",
      day_info: WeekDate,
      icon_id: "mainly_cloudy",
      temp_day: `${weather.clouds.all}%`,
      temp_night: "",
      info: "",
    },
    {
      specification: "Давление",
      day_info: WeekDate,
      icon_id: "barometer",
      temp_day: `${weather.main.pressure} мм.рт.ст`,
      temp_night: "",
      info: "",
    },
  ];

  return (
    <>
      <Tabs />
      <div className={s.days}>
        <Swiper
          spaceBetween={18}
          slidesPerView={`auto`}
          slidesPerGroupAuto
          className={s.swiper}
        >
          {weatherInfos.map((info: FullInfoDay) => (
            <SwiperSlide className={s.swiperItem} key={info.specification}>
              <Card info={info} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};
