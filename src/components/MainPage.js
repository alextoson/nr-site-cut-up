import React from "react";
import Header from "./Header";
import BrandDev from "./BrandDev";
import BusinessStrategy from "./BusinessStrategy";
import StayInTouch from "./StayInTouch";
import Footer from "./Footer";

const MainPage = () => (
  <div>
    <Header />
    <div className="body-panel">
      <p>This is the main page</p>
    </div>
    <BusinessStrategy />
    <BrandDev />
    <StayInTouch />
    <Footer />
  </div>
);

export default MainPage;
