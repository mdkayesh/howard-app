import React from "react";
import Bradcaump from "../../sectionbg/Bradcaump";
import "./Team.css";
import team from "./img/team.png";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGoogle,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Team = () => {
  const members = [
    {
      img: img1,
      name: "Raymond Stephen",
      work: "ceo",
    },
    {
      img: img2,
      name: "Raymond Stephen",
      work: "ceo",
    },
    {
      img: img3,
      name: "Raymond Stephen",
      work: "ceo",
    },
    {
      img: img4,
      name: "Raymond Stephen",
      work: "ceo",
    },
    {
      img: img5,
      name: "Raymond Stephen",
      work: "ceo",
    },
    {
      img: img6,
      name: "Raymond Stephen",
      work: "ceo",
    },
  ];
  return (
    <div>
      <Bradcaump heading={"Our Team"} />
      <section className="team">
        <div className="team-title">
          <div className="container">
            <div className="row">
              <div className="col-md-6 m-auto text-center">
                <div className="img">
                  <img src={team} alt="team img" />
                </div>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="team-members">
          <div className="container">
            <div className="row">
              {members.map((item, index) => (
                <div className="col-sm-6 col-lg-4" key={index}>
                  <div className="member">
                    <div className="img">
                      <a href="/">
                        <img src={item.img} alt="member" />
                      </a>
                    </div>
                    <div className="team-content">
                      <h4>
                        <a href="/">{item.name}</a>
                      </h4>
                      <p>{item.work}</p>
                    </div>
                    <div className="contact-info">
                      <a href="/">
                        <FontAwesomeIcon icon={faFacebookF} />
                      </a>
                      <a href="/">
                        <FontAwesomeIcon icon={faInstagram} />
                      </a>
                      <a href="/">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                      </a>
                      <a href="/">
                        <FontAwesomeIcon icon={faGoogle} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
