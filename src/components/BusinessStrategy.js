import React from "react";

const BusinessStrategy = () => (
  <section className="bus-strat">
    <div className="bus-strat__content">
      <div className="bus-strat__content-inner">
        <h2 className="heading bus-strat__title">
          Digital Business <br />
          Strategy
      </h2>
        <p className="body-content">
          We work withmany organisations to research and assess potential digital,
          mobile, and new technology business models that can help tehm
          differentiate, create new revenues or reduce the cost of delivery.
      </p>
        <p className="body-content">
          Many organisations that approach us don't have the background, skill or
          know how to identify and assess how their organisation can take
          advantage of digital opportunities.
      </p>
        <a className="button">
          <p>View Related Work</p>
        </a>
      </div>
    </div>
    <div className="bus-strat__image">
      <img
        className="img-rspnv bus-strat__img"
        src="/images/digital-business.jpg"
        alt="Business Strategy"
      />
    </div>
  </section>
);

export default BusinessStrategy;
