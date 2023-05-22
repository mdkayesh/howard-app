import React from "react";
import { dropLink } from "./MenuItems";
import { NavLink } from "react-router-dom";
import "./Dropdown.css";
const [service, news, pages] = dropLink;

export const ServiceDrop = ({ ShowDrop }) => {
  return (
    <ul className={`${ShowDrop === "Service" ? "dropdown show" : "dropdown"}`}>
      {service.map((item, index) => (
        <li key={index}>
          <NavLink className={item.cName} to={item.Url}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export const NewsDrop = ({ ShowDrop }) => {
  return (
    <ul className={`${ShowDrop === "News" ? "dropdown show" : "dropdown"}`}>
      {news.map((item, index) => (
        <li key={index}>
          <NavLink className={item.cName} to={item.Url}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export const PagesDrop = ({ ShowDrop }) => {
  return (
    <ul className={`${ShowDrop === "Pages" ? "dropdown show" : "dropdown"}`}>
      {pages.map((item, index) => (
        <li key={index}>
          <NavLink className={item.cName} to={item.Url}>
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
