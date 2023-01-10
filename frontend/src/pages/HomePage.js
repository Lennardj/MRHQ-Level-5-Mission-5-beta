import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Promotionalbanner from "../components/main/promotionalbanner";
import style from "../styles/Pages.module.css";
const HomePage = () => {
  return (
    <>
      <Header />
      <Promotionalbanner />
      <Footer />
    </>
  );
};

export default HomePage;
