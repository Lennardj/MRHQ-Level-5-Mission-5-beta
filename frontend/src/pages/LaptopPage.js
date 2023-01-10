import React from "react";
import style from "../styles/Pages.module.css";
import Laptop from "../components/main/laptop";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Tracker from "../components/main/positiontracker";
import FilterForm from "../components/main/filterForm";

const LaptopPage = () => {
  return (
    <div>
      <Header />
      <Tracker />
      <div className={style.mainSection}>
        <FilterForm className={style.FilterForm} />
        <Laptop className={style.Laptop} />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default LaptopPage;
