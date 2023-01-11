import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../../styles/Main.module.css";

const Laptop = (props) => {
  console.log(props.laptopFromDB);
  const laptop = props.laptopFromDB;

  return (
    <div className={style.laptopinfo}>
      {laptop.map((item, index) => (
        <div className={style.laptopcard}>
          <div className={style.top}>
            <h3 className={style.laptopinfoname}>{item.name}</h3>
            <figure class={style.hoverrotate}>
              <img src={item.imageUrl} alt="placeholder" />
            </figure>
            <p>
              {item.cpuFamily} | {item.screenSize} | {item.operatingSystem}
            </p>
          </div>
          <div className={style.bottom}>
            <button className={`${style.filterButton1} ${style.filterButton}`}>
              ADD TO CART
            </button>
            <button
              type="button"
              className={`${style.filterButton2} ${style.filterButton}`}
            >
              BULK QUOTE
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Laptop;
