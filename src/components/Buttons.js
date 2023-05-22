import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";
export const Button = ({ text, url, type }) => {
  return (
    <Link to={url} className={type}>
      {text}
    </Link>
  );
};

export const Submit = ({ value }) => {
  return <input type="submit" value={value} className="submit button" />;
};
