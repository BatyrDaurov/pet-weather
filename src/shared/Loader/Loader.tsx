import React from "react";
import s from "./Loader.module.scss";

type Props = {};

const Loader = (props: Props) => {
  return (
    <div className={s.lds_ring}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
