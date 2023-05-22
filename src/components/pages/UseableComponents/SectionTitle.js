import React from "react";
import "./SectionTitle.css";
const SectionTitle = ({ heading, content }) => {
  return (
    <div className="section-title">
      <div className="container">
        <div className="row">
          <div className="col-md-8 m-auto text-center">
            <h2>{heading}</h2>
            <p>{content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
