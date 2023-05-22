import React from "react";
import "./BlogDetails.css";
import Sidebar from "../BlogSidebar/Sidebar";
import Bradcaump from "../../../sectionbg/Bradcaump";
import img1 from "../NewsImg/details1.jpg";
import img2 from "../NewsImg/details2.png";
import { Link } from "react-router-dom";
import BlogAuthor from "./BlogAuthor";
import Comment from "./Comment";
import user1 from "../NewsImg/details3.png";
import user2 from "../NewsImg/details4.png";
import user3 from "../NewsImg/details5.png";
import user4 from "../NewsImg/details6.png";
import CommentForm from "./CommentForm";

const BlogDetails = () => {
  const page1 = [
    {
      title: "cleaning",
    },
    {
      title: "print",
    },
    {
      title: "creative",
    },
    {
      title: "support",
    },
  ];

  const page2 = [
    {
      title: "prev",
    },
    {
      title: "next",
    },
  ];

  const commentItems = [
    {
      userName: "Alvaro Santos",
      img: user1,
      date: "08 jun 2020",
      text: `But I must explain to you how all this mistaken ide a of denouncing pleasure and ising pain borand I will give you a complete account of the system`,
    },
    {
      userName: "JULIA THOMAS",
      img: user2,
      date: "08 jun 2020",
      text: `But I must explain to you how all this mistaken ide a of denouncing pleasure and ising pain borand I will give you a complete account of the system`,
    },
    {
      userName: "NICOLUS SMITH",
      img: user3,
      date: "08 jun 2020",
      text: `But I must explain to you how all this mistaken ide a of denouncing pleasure and ising pain borand I will give you a complete account of the system`,
    },
    {
      userName: "Alvaro Santos",
      img: user4,
      date: "08 jun 2020",
      text: `But I must explain to you how all this mistaken ide a of denouncing pleasure and ising pain borand I will give you a complete account of the system`,
    },
  ];

  return (
    <div>
      <Bradcaump heading={"Blog details"} />
      <section className="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="right-col py-4">
                <div className="img mb-5">
                  <img src={img1} alt="thumb" />
                </div>
                <div className="content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est.
                  </p>
                  <div className="row align-items-center my-3">
                    <div className="col-md-6">
                      <div className="img">
                        <img src={img2} alt="img" />
                      </div>
                    </div>
                    <div className="col-md-6 px-5">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est.
                      </p>
                    </div>
                  </div>
                </div>
                <blockquote>
                  I am a kind of paranoid in reverse. I suspect people of
                  plotting to make me happy.
                  <span>J. D. Salinger</span>
                </blockquote>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est.
                </p>

                <div className="details-pagenation">
                  <ul className="detail-tag">
                    {page1.map((item, index) => (
                      <li key={index}>
                        <Link>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="blog-page">
                    {page2.map((item, index) => (
                      <li key={index}>
                        <Link>{item.title}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <BlogAuthor />
                <div className="blog-comment">
                  <h4 className="text-uppercase">Comments</h4>
                  <div className="row justify-content-lg-end">
                    {commentItems.map((item, index) => (
                      <div
                        className={index % 2 !== 0 ? "col-lg-9" : "col-lg-12"}
                      >
                        <Comment
                          key={index}
                          userName={item.userName}
                          img={item.img}
                          date={item.date}
                          text={item.text}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <CommentForm />
              </div>
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogDetails;
