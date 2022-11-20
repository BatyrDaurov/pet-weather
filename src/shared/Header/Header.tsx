import React from "react";
import axios from "axios";
import AsyncSelect from "react-select/async";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { useTheme } from "../../hooks/useTheme";
import { useCustomDispatch } from "../../hooks/store";
import { changeCity } from "./../../store/slices/currentCitySlice";
import { storage } from "../../model/Storage";
import s from "./Header.module.scss";

type Props = {};
type City = {
  district: string;
  name: string;
  population: number;
};
type Option = {
  value: string;
  label: string;
};

export const Header = (props: Props) => {
  const theme = useTheme();
  const dispatch = useCustomDispatch();
  const [citys, setCitys] = React.useState([]);
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  function changeTheme() {
    theme.changeTheme(theme.theme === "light" ? "dark" : "light");
  }
  const colourStyles = {
    container: (styles: object) => ({
      ...styles,
      width: window.innerWidth >= 568 ? "192px" : "80%",
    }),
    control: (styles: object) => ({
      ...styles,
      backgroundColor:
        theme.theme === "light" ? "rgba(71, 147, 255, 0.2)" : "#4f4f4f",
      width: window.outerWidth >= 568 ? "194px" : "100%",
      height: "37px",
      border: "1px solid transparent",
      borderRadius: "10px",
      zIndex: 100,
      color: "#fff",
      // ["@media (max-width: (576px)"]
      //   width: "100%",
      "&:hover": {
        border: "1px solid #2684ff",
      },
    }),
    singleValue: (styles: object) => ({
      ...styles,
      color: theme.theme === "light" ? "#4f4f4f" : "#fff",
    }),
    option: (styles: object) => ({
      ...styles,
      color: theme.theme === "dark" ? "#fff" : "#4f4f4f",
      backgroundColor: theme.theme === "light" ? "#fff" : "#4f4f4f",
      "&:hover": {
        backgroundColor: theme.theme === "light" ? "#f0f0f0" : "#414141",
      },
    }),
    input: (styles: object) => ({
      ...styles,
      color: theme.theme === "light" ? "#4f4f4f" : "#fff",
    }),
  };

  async function GetCitys() {
    const arr: any = [];
    const data = await axios.get(
      "https://raw.githubusercontent.com/pensnarik/russian-cities/master/russian-cities.json"
    );
    data.data.map((item: City) => {
      arr.push({ value: item.name, label: item.name });
    });
    setCitys(arr);
  }
  React.useEffect(() => {
    GetCitys();
  }, []);
  const optionCitys = (inputValue: string) => {
    return citys.filter((i: Option) =>
      i.value.toLowerCase().includes(inputValue.toLowerCase())
    );
  };
  const loadOptions = (
    inputValue: string,
    callback: (options: City[]) => void
  ) => {
    setTimeout(() => {
      callback(optionCitys(inputValue));
    }, 1000);
  };

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id="header-logo" />
        </div>
        <div className={s.title}>React weather</div>
      </div>
      <div
        className={isOpenMenu ? s.mobileWrapper : s.wrapper}
        style={
          theme.theme === "dark" && window.innerWidth <= 568
            ? { backgroundColor: "rgb(30 36 45)" }
            : {}
        }
      >
        <button
          className={s.change_theme}
          onClick={changeTheme}
          aria-label="смена темы"
        >
          <GlobalSvgSelector id="change-theme" />
        </button>
        <AsyncSelect
          cacheOptions
          classNamePrefix="selector"
          loadOptions={loadOptions}
          placeholder="Введите город..."
          styles={colourStyles}
          onChange={(event: any) => {
            storage.setItem("city", event.value);
            dispatch(changeCity(event.value));
          }}
        />
      </div>
      <button
        className={isOpenMenu ? `${s.burger} ${s.burger__active}` : s.burger}
        onClick={() =>
          isOpenMenu ? setIsOpenMenu(false) : setIsOpenMenu(true)
        }
      >
        <span className={s.burger__line}></span>
      </button>
    </header>
  );
};
