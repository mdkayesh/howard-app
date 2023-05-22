import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Pagenation.css";
const Pagenation = () => {
  const [active, setactive] = useState("01");

  const pages = [
    {
      numb: "01",
      Url: "/",
    },
    {
      numb: "02",
      Url: "/",
    },
    {
      numb: "03",
      Url: "/",
    },
    {
      numb: "04",
      Url: "/",
    },
    {
      numb: "05",
      Url: "/",
    },
    {
      numb: "....",
      Url: "/",
    },
    {
      numb: "10",
      Url: "/",
    },
  ];
  return (
    <div className="pagenation mt-5">
      <ul>
        {pages.map((item, index) => (
          <li key={index}>
            <Link
              //   to={item.Url}
              className={active === item.numb ? "active" : ""}
              onClick={() =>
                active !== item.numb ? setactive(item.numb) : setactive("")
              }
            >
              {item.numb}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagenation;
