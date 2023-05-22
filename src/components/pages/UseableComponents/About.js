import React from "react";
import "./About.css";
const About = ({ heading, img, children }) => {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="content">
              <h1>{heading}</h1>
              {children}
            </div>
          </div>
          <div className="col-lg-5 pt-4">
            <div className="img">
              <img src={img} alt="webimg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
