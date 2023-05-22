import React from "react";
import { Link } from "react-router-dom";
import "./Dg_service.css";
import img1 from "../serviceImg/1.png";
import img2 from "../serviceImg/2.png";
import img3 from "../serviceImg/3.png";
import img4 from "../serviceImg/4.png";
import img5 from "../serviceImg/5.png";
import img6 from "../serviceImg/6.png";

const serviceItems = [
  {
    img: img1,
    heading: "SAFE SERVICE",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.`,
  },
  {
    img: img2,
    heading: "FAST TRANSFER",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.`,
  },
  {
    img: img3,
    heading: "SECURE TRANSFER",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.`,
  },
  {
    img: img4,
    heading: "ONLINE SHOPPING",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.`,
  },
  {
    img: img5,
    heading: "PHONE SUPPORT",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.`,
  },
  {
    img: img6,
    heading: "LOCAL BANK CONNCETION",
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply.`,
  },
];

const DgService = () => {
  return (
    <section className="dg-service">
      <div className="container">
        <div className="row text-center mb-5">
          <div className="col-md-10 m-auto">
            <div className="section-title">
              <h2>Our Services</h2>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {serviceItems.map((item, index) => (
            <div className="col-md-6 col-lg-4 my-3" key={index}>
              <div className="row">
                <div className="col-3">
                  <div className="img">
                    <img src={item.img} alt="service" />
                  </div>
                </div>
                <div className="col-9">
                  <div className="content">
                    <h4>
                      <Link to="/service-details">{item.heading}</Link>
                    </h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DgService;
