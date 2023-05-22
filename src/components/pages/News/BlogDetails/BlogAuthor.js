import React from "react";
import img from "../NewsImg/details3.png";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./BlogAuthor.css";

const BlogAuthor = () => {
  const social = [
    {
      icon: faFacebook,
    },
    {
      icon: faInstagram,
    },
    {
      icon: faLinkedin,
    },
    {
      icon: faTwitter,
    },
  ];

  return (
    <div className="blog-author">
      <div className="img">
        <img src={img} alt="author" />
      </div>
      <div className="content">
        <h4>LAUREN WALLACE</h4>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which.
        </p>
        <ul className="social">
          {social.map((item, index) => (
            <li key={index}>
              <Link>
                <FontAwesomeIcon icon={item.icon} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default BlogAuthor;
