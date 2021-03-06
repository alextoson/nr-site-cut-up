import React from "react";

const Slide = props => (
  <div className="slide">
    <div
      className={
        "slide__background slide__background--" + props.data.backgroundClass
      }
    ></div>
    <div className="slide__contents">
      <h2 className="heading">
        {props.data.title}
        <span className="heading__period">.</span>
      </h2>
      <p className="body-content body-content--grey">{props.data.content}</p>
      {props.data.slideIcons && <SlideIcon />}
      {props.data.slideButton && (
        <a className="button">
          <p>View Related Work</p>
        </a>
      )}
    </div>
  </div>
);

const SlideIcon = () => (
  <div className="slide-icons">
    <div className="slide-icons__card">
      <img
        className="img-rspnv slide-icons__icon"
        src="/images/Icon_Strategy.png"
      />
      <p className="slide-icons__text">
        Branding,
        <br /> Brand Strategy
      </p>
    </div>
    <div className="slide-icons__card">
      <img className="img-rspnv slide-icons__icon" src="/images/Icon_CRO.png" />
      <p className="slide-icons__text">
        Conversation
        <br /> Rate optimisations
      </p>
    </div>
    <div className="slide-icons__card">
      <img
        className="img-rspnv slide-icons__icon"
        src="/images/Icon_UXDesign.png"
      />
      <p className="slide-icons__text">
        UX, Design,
        <br /> Developemnt
      </p>
    </div>
  </div>
);

export default Slide;
