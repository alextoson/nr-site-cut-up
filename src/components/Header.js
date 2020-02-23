import React from "react";

const Header = () => (
  <header className="header">
    <div className="header__mobile-logo">
      <img src="/images/mobile-logo.png" alt="New Republique Mobile logo" />
    </div>
    <div className="header__logo">
      <img src="/images/nr-logo.png" alt="New Republique logo" />
    </div>
    <nav className="header__nav">
      <ul className="header__nav-list">
        <li className="header__list-item">
          <a className="header__list-anchor" href="">
            about us
            <span rel="ABOUT US"></span>
          </a>
        </li>
        <li className="header__list-item">
          <a className="header__list-anchor" href="">
            work
            <span rel="WORK"></span>
          </a>
        </li>
        <li className="header__list-item">
          <a className="header__list-anchor" href="">
            services
            <span rel="SERVICES"></span>
          </a>
        </li>
        <li className="header__list-item">
          <a className="header__list-anchor" href="">
            blog
            <span rel="BLOG"></span>
          </a>
        </li>
        <li className="header__list-item">
          <a className="header__list-anchor" href="">
            research
            <span rel="RESEARCH"></span>
          </a>
        </li>
        <li className="header__list-item">
          <a className="header__list-anchor" href="">
            careers
            <span rel="CAREERS"></span>
          </a>
        </li>
        <li className="header__list-item">
          <a className="header__list-anchor" href="">
            contact us
            <span rel="CONTACT US"></span>
          </a>
        </li>
      </ul>
    </nav>
    <div className="header__mobile-icon">
      <img src="/images/menu-icon.png" alt="New Republique Mobile logo" />
    </div>
  </header>
);

export default Header;
