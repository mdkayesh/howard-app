import React from "react";
import "./Brand.css";
import Slide from "./Slide";

const Brand = () => {
  return (
    <section className="brand">
      <div className="container-fluid">
        <div className="row">
          <div className="content col-md-7 m-auto text-center">
            <h1>We work Together</h1>
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour.
            </p>
          </div>
        </div>
      </div>
      <Slide />
    </section>
  );
};

export default Brand;
