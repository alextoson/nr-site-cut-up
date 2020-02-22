import React from "react";
import Header from "./Header";
import StayInTouch from "./StayInTouch";

const MainPage = () => (
  <div>
    <Header />
    <div className="body-panel">
      <p>This is the main page</p>
    </div>
    <StayInTouch />
  </div>
);

export default MainPage;
