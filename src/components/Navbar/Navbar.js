import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { menuItems } from "./MenuItems";
import { ServiceDrop, NewsDrop, PagesDrop } from "./Dropdown";
import logo from "./img/logo.png";
import "./Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAngleDown,
  faAngleUp,
  faBars,
  faUser,
  faPhone,
  faMessage,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [ShowMenu, setShowMenu] = useState(false);
  const [ShowDrop, setShowDrop] = useState("");
  const [scrollNav, setscrollNav] = useState("");
  const toggle = () => setShowMenu(!ShowMenu);
  const closeMenu = () => setShowMenu(false);
  // social items

  const socialItems = [
    {
      href: "http://www.facebook.com",
      icon: faFacebookF,
    },
    {
      href: "http://www.instagram.com",
      icon: faInstagram,
    },
    {
      href: "http://www.twitter.com",
      icon: faTwitter,
    },
    {
      href: "http://www.pinterest.com",
      icon: faPinterest,
    },
  ];

  window.onscroll = () => {
    if (window.scrollY > 120) {
      setscrollNav("visible");
    } else {
      setscrollNav("");
    }
  };

  return (
    <header className={`${scrollNav}`}>
      <div className="navigation">
        {/* logo */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        {/* mainMenu */}
        <div className={ShowMenu ? "mainMenu show" : "mainMenu"}>
          <nav>
            <ul className="menuItem">
              {menuItems.map((item, index) => (
                <li key={index} onClick={closeMenu}>
                  <NavLink
                    className={item.cName}
                    to={item.Url}
                    onClick={closeMenu}
                  >
                    {item.title}
                    {index > 0 && index < 4 ? (
                      <span
                        className="menuExpand"
                        onClick={(event) => {
                          event.preventDefault();
                          event.stopPropagation();
                          ShowDrop !== item.title
                            ? setShowDrop(item.title)
                            : setShowDrop("");
                        }}
                      >
                        <FontAwesomeIcon
                          icon={
                            ShowDrop !== item.title ? faAngleDown : faAngleUp
                          }
                        />
                      </span>
                    ) : null}
                  </NavLink>
                  {item.title === "Service" ? (
                    <ServiceDrop ShowDrop={ShowDrop} />
                  ) : null}
                  {item.title === "News" ? (
                    <NewsDrop ShowDrop={ShowDrop} />
                  ) : null}
                  {item.title === "Pages" ? (
                    <PagesDrop ShowDrop={ShowDrop} />
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
          <div className="contactInfo">
            <ul>
              <li>
                <FontAwesomeIcon icon={faUser} />
                <Link to="/login-register">Login/Register</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <Link to="/login-register">+8801954392466</Link>
              </li>
              <li>
                <FontAwesomeIcon icon={faMessage} />
                <Link to="/login-register">kayeskhanakash@gmail.com</Link>
              </li>
            </ul>
            <div className="social-area">
              {socialItems.map((item, index) => (
                <span key={index}>
                  <a href={item.href} target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={item.icon} />
                  </a>
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* menubar */}
        <div className="menu">
          <div onClick={toggle}>
            <FontAwesomeIcon icon={ShowMenu ? faXmark : faBars} />
          </div>
        </div>
        {/* accounts */}
        <div className="accounts">
          <ul>
            <li className="login">
              <Link to="/login-register">Log In</Link>
            </li>
            <li className="signup">
              <Link to="/login-register">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
