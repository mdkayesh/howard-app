import React from "react";
import "./Security.css";
import img1 from "../serviceImg/security1.png";
import img2 from "../serviceImg/security2.png";
import img3 from "../serviceImg/security3.png";

const securityItems = [
  {
    img: img1,
    heading: "Safe Service",
    Text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.`,
  },
  {
    img: img2,
    heading: "Fast Transfer",
    Text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.`,
  },
  {
    img: img3,
    heading: "Secure Transfer",
    Text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.`,
  },
];

const Security = () => {
  return (
    <div className="security">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-md-10 m-auto">
            <div className="section-title">
              <h2>How to make security</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {securityItems.map((item, index) => (
            <div className="col-md-6 col-lg-4 py-4" key={index}>
              <div className="content">
                <div className="row">
                  <div className="col-3">
                    <div className="img">
                      <img src={item.img} alt="img" />
                    </div>
                  </div>
                  <div className="col-9">
                    <h4>{item.heading}</h4>
                    <p>
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum is simply.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Security;
