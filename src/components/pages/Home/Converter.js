import React from "react";
import "./Converter.css";
import img from "./homeImg/converter.png";
import { motion } from "framer-motion";
import { containerVarients, fadeLeft } from "../../Animation";

const Converter = () => {
  return (
    <section className="converter" id="converter">
      <div className="container">
        <motion.div
          className="row"
          variants={containerVarients}
          initial={"hidden"}
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          <motion.div className="col-lg-6 py-5" variants={fadeLeft}>
            <div className="img">
              <img src={img} alt="chart" />
            </div>
          </motion.div>
          <motion.div className="col-lg-6" variants={fadeLeft}>
            <div className="content">
              <h1 className="mb-4">Todays Converter</h1>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <div className="row my-5">
                <div className="col-md-6">
                  <select name="usd" id="">
                    <option value="BTC">BTC</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="LTC">LTC</option>
                    <option value="RUB">RUB</option>
                  </select>
                  <input type="text" placeholder="01" />
                </div>
                <div className="col-md-6">
                  <select name="usd" id="">
                    <option value="BTC">BTC</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="LTC">LTC</option>
                    <option value="RUB">RUB</option>
                  </select>
                  <input type="text" placeholder="11750.55" />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Converter;
