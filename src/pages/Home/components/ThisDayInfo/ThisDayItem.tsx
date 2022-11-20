import React from "react";
import { IndicatorSvgSelector } from "../../../../assets/icons/indicators/IndicatorSvgSelector";
import { useTheme } from "../../../../hooks/useTheme";
import { Item } from "./ThisDayInfo";
import s from "./ThisDayInfo.module.scss";

interface Props {
  item: Item;
}

const ThisDayItem = ({ item }: Props) => {
  const theme = useTheme();
  const { icon_id, name, value } = item;
  return (
    <div className={s.item}>
      <div
        className={
          theme.theme === "dark"
            ? `${s.indicator} ${s.indicator__dark}`
            : s.indicator
        }
      >
        <IndicatorSvgSelector id={icon_id} />
      </div>
      <div className={s.indicator__wrapper}>
        <div className={s.indicator__name}>{name}</div>
        <div className={s.indicator__value}>{value}</div>
      </div>
    </div>
  );
};

export default ThisDayItem;
