import React from "react";
import MobileMenu from './MobileMenu'

export default class Header extends React.Component {
  state = {
    menuOpen: false
  }
  menuHandler = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen
    }));
  }
  render() {
    return (
      <header className="header">
        <div className="header__mobile-logo">
          <a href="/" >
            <img src="/images/mobile-logo.png" alt="New Republique Mobile logo" />
          </a>
        </div>
        <div className="header__logo">
          <a href="/" >
            <img src="/images/nr-logo.png" alt="New Republique logo" />
          </a>
        </div>
        <nav className="header__nav">
          <ul className="site-nav">
            <li className="site-nav__list-item">
              <a className="site-nav__list-anchor" href="">
                about us
            <span rel="ABOUT US"></span>
              </a>
            </li>
            <li className="site-nav__list-item">
              <a className="site-nav__list-anchor" href="">
                work
            <span rel="WORK"></span>
              </a>
            </li>
            <li className="site-nav__list-item">
              <a className="site-nav__list-anchor" href="">
                services
            <span rel="SERVICES"></span>
              </a>
            </li>
            <li className="site-nav__list-item">
              <a className="site-nav__list-anchor" href="">
                blog
            <span rel="BLOG"></span>
              </a>
            </li>
            <li className="site-nav__list-item">
              <a className="site-nav__list-anchor" href="">
                research
            <span rel="RESEARCH"></span>
              </a>
            </li>
            <li className="site-nav__list-item">
              <a className="site-nav__list-anchor" href="">
                careers
            <span rel="CAREERS"></span>
              </a>
            </li>
            <li className="site-nav__list-item">
              <a className="site-nav__list-anchor" href="">
                contact us
            <span rel="CONTACT US"></span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__mobile-icon" onClick={this.menuHandler}>
          <img src="/images/menu-icon.png" alt="Mobile menu logo" />
        </div>
        <MobileMenu isOpen={this.state.menuOpen} />
      </header>
    )
  }
};
