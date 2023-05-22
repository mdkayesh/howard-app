import React from "react";
import "./Process.css";
import img1 from "./homeImg/process1.png";
import img2 from "./homeImg/process2.png";
import img3 from "./homeImg/process3.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { containerVarients, fadeUp2 } from "../../Animation";

const Process = () => {
  const processItems = [
    {
      img: img1,
      heading: "REGISTER FOT BTC",
      text: `There are many variations of passages of Lorem Ipsum available.`,
    },
    {
      img: img2,
      heading: "OPEN CREYPTO WALLET",
      text: `There are many variations of passages of Lorem Ipsum available.`,
    },
    {
      img: img3,
      heading: "START WORKING WITH BTC",
      text: `There are many variations of passages of Lorem Ipsum available.`,
    },
  ];

  return (
    <section className="process" id="process">
      <div className="container">
        <h1>Working process</h1>
        <motion.div
          className="row"
          variants={containerVarients}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          {processItems.map((item, index) => (
            <motion.div
              className={`col-md-6 col-lg-4 py-4`}
              key={index}
              variants={fadeUp2}
            >
              <div className="img">
                <img src={item.img} alt="img" />
              </div>
              <div className="content">
                <h4>
                  <Link to="/contact">{item.heading}</Link>
                </h4>
                <p>{item.text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
