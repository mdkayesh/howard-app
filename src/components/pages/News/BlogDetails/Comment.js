import React from "react";
import "./Comment.css";
const Comment = ({ img, userName, date, text }) => {
  return (
    <div className="commentItem">
      <div className="img">
        <img src={img} alt="user" />
      </div>
      <div className="content">
        <h4>{userName}</h4>
        <div className="comment-action">
          <span>{date}</span>
          <button className="reply-btn">Reply</button>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
