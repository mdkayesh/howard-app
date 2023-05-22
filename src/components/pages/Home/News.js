import React from "react";
import "./News.css";
import img1 from "./homeImg/news1.jpg";
import img2 from "./homeImg/news2.jpg";
import img3 from "./homeImg/news3.jpg";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVarients, fadeUp2 } from "../../Animation";

const News = () => {
  const newsItems = [
    {
      cName: "newsItem",
      img: img1,
      URL: "/news",
      date: "13 Feb 2020",
      post: "John Doe",
      heading: "Why Bitcoin is popular?",
      text: `There are many variations passages of Lorem Ipsum available,the majority have suffered alteration in some form.`,
    },
    {
      cName: "newsItem",
      img: img2,
      URL: "/news",
      date: "14 Feb 2020",
      post: "Jonathon Doe",
      heading: "Three things to know about bitcoin.",
      text: `There are many variations passages of Lorem Ipsum available,the majority have suffered alteration in some form.`,
    },
    {
      cName: "newsItem",
      img: img3,
      URL: "/news",
      date: "13 Feb 2020",
      post: "John Doe",
      heading: "Why Bitcoin is popular?",
      text: `There are many variations passages of Lorem Ipsum available,the majority have suffered alteration in some form.`,
    },
  ];

  return (
    <section className="news" id="news">
      <div className="container">
        <h1 className="text-center mb-5">Latest News</h1>
        <motion.div
          className="row"
          variants={containerVarients}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {newsItems.map((item, index) => (
            <motion.div
              className="col-md-6 col-lg-4 py-3"
              variants={fadeUp2}
              key={index}
            >
              <div className={item.cName}>
                <div className="img">
                  <img src={item.img} alt="img" />
                </div>
                <div className="content">
                  <div className="date my-3">
                    <ul>
                      <li>{item.date}</li>
                      <li>post by:{item.post}</li>
                    </ul>
                  </div>
                  <h4>
                    <Link to="/blog-details">{item.heading}</Link>
                  </h4>
                  <p>{item.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default News;
