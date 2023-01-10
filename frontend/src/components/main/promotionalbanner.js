import React from "react";
import banner from "../../images/homepromotion.png";
import style from "../../styles/Main.module.css";

function Promotionalbanner() {
  return (
    <div className={style.banner}>
      <img src={banner} alt="placeholder" />
    </div>
  );
}

export default Promotionalbanner;
