import React from "react";
import { Link } from "react-router-dom";
import style from "../../styles/Main.module.css";

const Laptop = () => {
  return (
    <div className={style.laptopinfo}>
      <h3 className={style.laptopinfoname}>Laptop Name</h3>
      <img src="http://placehold.it/" alt="placeholder" />
      <div>
        <p>
          <span>Laptop Specs</span>
        </p>
        <p>Price</p>
        <Link className={style.laptopbtn}>Add To Cart</Link>
        <p>Compare</p>
        <Link>BULK QUOTE</Link>
      </div>
    </div>
  );
};

export default Laptop;
