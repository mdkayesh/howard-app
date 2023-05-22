import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import {
  contact,
  footerLinks,
  information,
  resourses,
  support,
} from "./FooterLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row pb-5">
          {footerLinks.map((item, index) => (
            <div className="col-md-6 col-lg-3 py-4" key={index}>
              <div className={item.heading}>
                <h2 className="mb-4">{item.heading}</h2>
                <ul>
                  {item.heading === "resourses"
                    ? resourses.map((item, index) => (
                        <li key={index}>
                          <Link>{item.title}</Link>
                        </li>
                      ))
                    : item.heading === "information"
                    ? information.map((item, index) => (
                        <li key={index}>
                          <Link>{item.title}</Link>
                        </li>
                      ))
                    : item.heading === "support"
                    ? support.map((item, index) => (
                        <li key={index}>
                          <Link>{item.title}</Link>
                        </li>
                      ))
                    : item.heading === "contact"
                    ? contact.map((item, index) => (
                        <li key={index}>
                          <Link>{item.title}</Link>
                        </li>
                      ))
                    : null}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="copyright py-4">
          <div className="row align-items-center">
            <div className="col-sm-6 text-center text-sm-start">
              <p>
                © Howard 2022 Made with <FontAwesomeIcon icon={faHeart} /> by
                HasThemes
              </p>
            </div>
            <div className="col-sm-6">
              <ul className="social-area d-flex justify-content-center justify-content-sm-end">
                <li>
                  <a href="http://www.facebook.com">
                    <FontAwesomeIcon icon={faFacebookSquare} />
                  </a>
                </li>
                <li>
                  <a href="http://www.instagram.com">
                    <FontAwesomeIcon icon={faInstagramSquare} />
                  </a>
                </li>
                <li>
                  <a href="http://www.linkedin.com">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </li>
                <li>
                  <a href="http://www.twitter.com">
                    <FontAwesomeIcon icon={faTwitterSquare} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
