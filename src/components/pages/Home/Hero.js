import React from "react";
import { Button } from "../../Buttons";
import Particle from "../../Particles";
import { motion } from "framer-motion";
import { fadeLeft, fadeUp } from "../../Animation";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero-area d-flex align-items-center">
      <div className="container">
        <div className="row">
          <motion.div
            className="hero-content col-lg-8"
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <h1>DECENTRALIZED CRYPTOCURRENCY IS PRODUCED.</h1>
            <motion.p variants={fadeUp}>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form
            </motion.p>
            <Button url={"/about"} text={"Read More"} type={"white button"} />
          </motion.div>
        </div>
      </div>
      <Particle />
    </section>
  );
};

export default Hero;
