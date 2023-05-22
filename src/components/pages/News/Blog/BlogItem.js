import React from "react";
import "./BlogItem.css";
const BlogItem = ({ img, userImg, user, date, heading, text }) => {
  return (
    <article className="blog-item">
      <div className="img">
        <img src={img} alt="blog" />
      </div>
      <div className="content">
        <div className="author my-4">
          <div className="user-img">
            <img src={userImg} alt="author" />
          </div>
          <div>
            <h6>{user}</h6>
            <span>{date}</span>
          </div>
        </div>
        <h4>
          <a href="/">{heading}</a>
        </h4>
        <p>{text}</p>
      </div>
    </article>
  );
};

export default BlogItem;
