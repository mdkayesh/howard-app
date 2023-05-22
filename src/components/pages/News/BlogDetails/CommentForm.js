import React from "react";
import "./CommentForm.css";
const CommentForm = () => {
  return (
    <div className="comment-form">
      <h4 className="text-uppercase">Leave a comment</h4>
      <form action="#">
        <div className="form">
          <div className="row">
            <div className="col-md-6">
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your name..."
              />
            </div>
            <div className="col-md-6">
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email..."
              />
            </div>
            <div className="col-12">
              <textarea
                name="Comment"
                id=""
                cols="30"
                rows="7"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
          </div>
          <input type="submit" value="Send Now" />
        </div>
      </form>
    </div>
  );
};

export default CommentForm;
