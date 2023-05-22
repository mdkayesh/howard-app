import React from "react";
import "./Bradcaump.css";
import Particle from "../Particles";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp2 } from "../Animation";
import { containerVarients } from "../Animation";
const Bradcaump = ({ heading }) => {
  return (
    <div className="bradcaump" id="bradcaump">
      <div className="container">
        <div className="row">
          <motion.div
            className="col-md-12 m-auto text-center"
            variants={containerVarients}
            initial="hidden"
            animate="visible"
            exit={"exit"}
          >
            <div className="overflow">
              <motion.h1 variants={fadeUp2}>{heading}</motion.h1>
            </div>

            <div className="overflow">
              <motion.nav variants={fadeUp2}>
                <Link to="/">Home</Link>
                <span className="px-1">/</span>
                <span>{heading}</span>
              </motion.nav>
            </div>
          </motion.div>
        </div>
      </div>
      <Particle />
    </div>
  );
};

export default Bradcaump;
