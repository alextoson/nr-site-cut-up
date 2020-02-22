import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faSlideshare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => (
  <footer className="footer">
    <a className="footer__social-link">
      <FontAwesomeIcon className="footer__icon" icon={faFacebookF} />
    </a>
    <a className="footer__social-link">
      <FontAwesomeIcon className="footer__icon" icon={faLinkedinIn} />
    </a>
    <a className="footer__social-link">
      <FontAwesomeIcon className="footer__icon" icon={faYoutube} />
    </a>
    <a className="footer__social-link">
      <FontAwesomeIcon className="footer__icon" icon={faSlideshare} />
    </a>
    <a className="footer__social-link">
      <FontAwesomeIcon className="footer__icon" icon={faInstagram} />
    </a>
  </footer>
);

export default Footer;
