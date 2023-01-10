import React from "react";
import style from "../styles/Pages.module.css";
import Laptop from "../components/main/laptop";

const LaptopPage = () => {
  return (
    <div>
      LaptopPage
      <div className={style.laptops}>
        <Laptop />
      </div>
    </div>
  );
};

export default LaptopPage;
