import React from "react";
import s from "./Weather.module.scss";

type Props = {};

export const Tabs = (props: Props) => {
  return (
    <div className={s.tabs}>
      <button className={s.tab}>Характеристика</button>
    </div>
  );
};
