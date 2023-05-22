import React from "react";
import "./Subscribe.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Button } from "./Buttons";
const Subscribe = () => {
  return (
    <div className="subscribe" id="subscribe">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="news-letter text-center">
              <h2>Subscribe for latest updates</h2>
              <div className="input-box">
                <div className="icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Enter your email address..."
                />
                <Button type="blue button" text="subscribe" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
