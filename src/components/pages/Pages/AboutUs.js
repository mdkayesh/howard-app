import React from "react";
import CurrencyProg from "../UseableComponents/CurrencyProg";
import VideoArea from "../UseableComponents/VideoArea";
import img from "../Service/serviceImg/about.png";
import Bradcaump from "../../sectionbg/Bradcaump";
import About from "../UseableComponents/About";

const AboutUs = () => {
  return (
    <div className="about-us">
      <Bradcaump heading={"about us"} />
      <About heading={"About HOWARD & its Future"} img={img}>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
        </p>
      </About>
      <VideoArea />
      <CurrencyProg />
    </div>
  );
};

export default AboutUs;
