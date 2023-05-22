import React from "react";
import Bradcaump from "../../../sectionbg/Bradcaump";
import About from "../../UseableComponents/About";
import aboutImg from "../serviceImg/about.png";
import DgService from "./Dg_service";

const Service = () => {
  return (
    <>
      <div className="service">
        <Bradcaump heading={"services we provide"} />
        <About heading={"World Best Cryptocurrency"} img={aboutImg}>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <p>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </About>
        <DgService />
      </div>
    </>
  );
};

export default Service;
