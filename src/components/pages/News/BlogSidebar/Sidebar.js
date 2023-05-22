import React from "react";
import postImg1 from "../NewsImg/post1.jpg";
import postImg2 from "../NewsImg/post2.jpg";
import postImg3 from "../NewsImg/post3.jpg";
import postImg4 from "../NewsImg/post4.jpg";
import banner from "../NewsImg/banner.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Sidebar.css";
const Sidebar = () => {
  // category elements

  const category = [
    {
      name: "Online Currency",
    },
    {
      name: "Money Transfer",
    },
    {
      name: "Bitcoin Rate",
    },
    {
      name: "World Trade",
    },
    {
      name: "Market Analytics",
    },
    {
      name: "Online Currency",
    },
  ];

  // post elements

  const post = [
    {
      heading: "Diffrent title gose here. This is demo title.",
      date: "February 15, 2020",
      img: postImg1,
    },
    {
      heading: "Diffrent title gose here. This is demo title.",
      date: "February 15, 2020",
      img: postImg2,
    },
    {
      heading: "Diffrent title gose here. This is demo title.",
      date: "February 15, 2020",
      img: postImg3,
    },
    {
      heading: "Diffrent title gose here. This is demo title.",
      date: "February 15, 2020",
      img: postImg4,
    },
  ];

  //   tag elements

  const tag = [
    {
      title: "Design",
    },
    {
      title: "Print",
    },
    {
      title: "Adobe",
    },
    {
      title: "Creative",
    },
    {
      title: "Support",
    },
    {
      title: "Creative",
    },
    {
      title: "Print",
    },
  ];

  return (
    <div className="sidebar">
      {/* search */}
      <div className="search">
        <input type="text" name="search" id="search" />
        <button type="button">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
      {/* category */}
      <div className="category">
        <h4 className="header">CATEGORIES</h4>
        <ul>
          {category.map((item, index) => (
            <li key={index}>
              <Link to="/blog">{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* recent post */}
      <div className="recent-post mt-5">
        <h4 className="header">Recent Post</h4>
        <ul>
          {post.map((item, index) => (
            <li key={index}>
              <div className="post-item my-4">
                <div className="img">
                  <img src={item.img} alt="bicoin" />
                </div>
                <div className="content">
                  <h4>
                    <Link to="blog-post">{item.heading}</Link>
                  </h4>
                  <p>{item.date}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      {/* banner */}
      <div className="banner mt-3">
        <div className="img">
          <img src={banner} alt="banner" />
        </div>
      </div>
      {/* tag */}
      <div className="tag mt-4">
        <h4 className="header">Tag</h4>
        <ul>
          {tag.map((item, index) => (
            <li key={index}>
              <Link>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
