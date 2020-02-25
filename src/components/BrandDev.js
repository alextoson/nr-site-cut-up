import React from "react";

const BrandDev = () => (
  <section className="brand-dev">
    <div className="brand-dev__content">
      <div className="brand-dev__content-inner">
        <h2 className="heading brand-dev__title">
          Brand <br />
          Development
      </h2>
        <p className="body-content">
          Our brand development process merges tradtional brand planning
          methodologies with a new world digital approach to developing brand.
      </p>
        <p className="body-content">
          Our process focuses on developing a brands position in market, tone or
          vioce, personality and communication platform.
      </p>
        <a className="button">
          <p>View Related Work</p>
        </a>
      </div>
    </div>
    <div className="brand-dev__image">
      <img
        className="img-rspnv brand-dev__img"
        src="/images/brand-development.jpg"
        alt="Brand Development"
      />
    </div>
  </section>
);

export default BrandDev;
