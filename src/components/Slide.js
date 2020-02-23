import React from "react";

const Slide = props => (
  <div className={"slide"}>
    <div className="slide__background"></div>
    <div className="slide__contents">
      <h2 className="heading">{props.title}</h2>
      <p className="body-content body-content--grey">
        The imaginative crafting of psychology, art, technology and business to
        create beautiful ideas, products and services.
      </p>
      <div className="slide-icons">
        <div className="slide-icons__card">
          <img className="slide-icons__icon" src="/images/Icon_Strategy.png" />
          <p className="slide-icons__text">
            Branding,
            <br /> Brand Strategy
          </p>
        </div>
        <div className="slide-icons__card">
          <img className="slide-icons__icon" src="/images/Icon_CRO.png" />
          <p className="slide-icons__text">
            Conversation
            <br /> Rate optimisations
          </p>
        </div>
        <div className="slide-icons__card">
          <img className="slide-icons__icon" src="/images/Icon_UXDesign.png" />
          <p className="slide-icons__text">
            UX, Design,
            <br /> Developemnt
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Slide;
