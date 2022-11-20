import React from "react";
import { GlobalSvgSelector } from "../../../../assets/icons/global/GlobalSvgSelector";
import { FullInfoDay } from "./Weather";
import s from "./Weather.module.scss";

interface Props {
  info: FullInfoDay;
}
export const Card = ({ info }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.day}>{info.specification}</div>
      <div className={s.day__info}>{info.day_info}</div>
      <div className={s.img}>
        <GlobalSvgSelector id={info.icon_id} />
      </div>
      <div className={s.temp__day}>{info.temp_day}</div>
      <div className={s.temp__night}>{info.temp_night}</div>
      <div className={s.info}>{info.info}</div>
    </div>
  );
};
