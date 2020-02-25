import React from "react";

const StayInTouch = () => (
  <section className="stay-in-touch">
    <div className="stay-in-touch__inner">
      <div className="stay-in-touch__col">
        <h2 className="heading">Stay in touch</h2>
        <p className="body-content">
          Each month we release a newsletter on how we do what we do. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit.</p>
        <form>
          <label>
            <input
              className="stay-in-touch__input"
              type="email"
              name="email"
              placeholder="Enter you email address..."
            />
            <input
              className="stay-in-touch__submit"
              type="submit"
              value="sign up to our newsletter"
            />
          </label>
        </form>
      </div>
    </div>
  </section>
);

export default StayInTouch;
