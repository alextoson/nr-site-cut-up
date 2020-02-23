import React from "react";
import Header from "./Header";
import HeroSlider from "./HeroSlider";
import BrandDev from "./BrandDev";
import BusinessStrategy from "./BusinessStrategy";
import StayInTouch from "./StayInTouch";
import Footer from "./Footer";

const MainPage = () => (
  <div>
    <div className="nav-panel">
      <Header />
    </div>
    <div className="body-panel">
      <HeroSlider />
      <BusinessStrategy />
      <BrandDev />
      <StayInTouch />
      <Footer />
    </div>
  </div>
);

export default MainPage;
