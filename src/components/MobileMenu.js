import React from "react";

const MobileMenu = (props) => (
    <div className={props.isOpen ? "mobile-menu mobile-menu--open" : "mobile-menu"}>
        <ul className="mobile-menu__nav site-nav">
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
    </div>
);

export default MobileMenu;
