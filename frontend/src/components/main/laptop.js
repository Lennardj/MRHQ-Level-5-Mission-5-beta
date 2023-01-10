import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import style from "../../styles/Main.module.css";

const Laptop = () => {
  const [laptop, setLaptop] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/laptops/")
      .then(function (response) {
        // handle success
        setLaptop(response.data);
        console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div className={style.laptopinfo}>
      {laptop.map((item, index) => (
        <>
          <h3 className={style.laptopinfoname}>{laptop.name}</h3>
          <img src="/images/laptopimagee.png" alt="placeholder" />
        </>
      ))}

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
