import React from "react";
import android from "./homeImg/android.png";
import mac from "./homeImg/mac.png";
import window from "./homeImg/window.png";
import app from "./homeImg/app.png";
import "./Software.css";
const Software = () => {
  const deviceItems = [
    {
      url: "/",
      img: android,
    },
    {
      url: "/",
      img: mac,
    },
    {
      url: "/",
      img: window,
    },
    {
      url: "/",
      img: app,
    },
  ];

  return (
    <section className="software my-5" id="software">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <h1>Download Software, Compatible For All Devices</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation Ut enim ad minim
                veniam, quis nostrud exercitation.
              </p>
              <div className="device-available mt-5">
                <div className="row">
                  {deviceItems.map((item, index) => (
                    <div className="col-6 py-3" key={index}>
                      <a href={item.url}>
                        <img src={item.img} alt="software" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Software;
