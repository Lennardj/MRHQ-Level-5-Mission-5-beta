import style from "../styles/Pages.module.css";
import Laptop from "../components/main/laptop";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Tracker from "../components/main/positiontracker";
import FilterForm from "../components/main/filterForm";
import Slideshow from "../components/main/Slideshow";
import { useEffect, useState } from "react";
import axios from "axios";

const LaptopPage = () => {
  const [laptopFromDB, setLaptopFromDB] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/laptops/")
      .then(function (response) {
        // handle success
        setLaptopFromDB(response.data);
        // console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Header />
      <Tracker />
      <div className={style.mainSection}>
        <FilterForm />
        <Laptop laptopFromDB={laptopFromDB} />
      </div>
      <div className={style.slideshow}>
        <Slideshow />
        <Slideshow />
        <Slideshow />
        <Slideshow />
      </div>
      <Footer />
    </div>
  );
};

export default LaptopPage;
