import React from "react";
import { Button } from "../../Buttons";
import img from "./homeImg/how.png";
import "./Work.css";
import { motion } from "framer-motion";
import { containerVarients, fadeUp2 } from "../../Animation";

const Work = () => {
  return (
    <section className="work" id="work">
      <div className="container">
        <motion.div
          className="row"
          variants={containerVarients}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          <motion.div className="col-lg-6" variants={fadeUp2}>
            <div className="img">
              <img src={img} alt="img" />
            </div>
          </motion.div>
          <motion.div className="col-lg-6 pt-5 pt-lg-0" variants={fadeUp2}>
            <div className="content">
              <h1>How It Works?</h1>
              <h5>
                cryptocurrency is a digital asset designed to work as a medium
                of exchange
              </h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <Button
                type={"blue button"}
                text={"Join with us"}
                url="/contact"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Work;
