import React from "react";
import "./Progress.css";
import img from "./homeImg/cart3.png";
import { motion } from "framer-motion";
import { fadeUp2 } from "../../Animation";

const Progress = () => {
  return (
    <section className="progress" id="progress">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="chart">
              <div className="heading">
                <h3>REAL TIME PROGRESS</h3>
              </div>
              <motion.div
                className="img mt-5"
                variants={fadeUp2}
                initial={"hidden"}
                whileInView={"visible"}
                viewport={{ once: true }}
              >
                <img src={img} alt="chart" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
