import React from "react";
import "./Counter.css";
import { motion } from "framer-motion";
import { containerVarients, fadeUp2 } from "../../Animation";

const Counter = () => {
  const counterItems = [
    {
      heading: "Countries",
      numbers: 250,
    },
    {
      heading: "Business",
      numbers: 190,
    },
    {
      heading: "Payments",
      numbers: 1700,
    },
    {
      heading: "Projects",
      numbers: 371,
    },
  ];
  return (
    <section className="counter" id="counter">
      <div className="container">
        <motion.div
          className="row"
          variants={containerVarients}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
        >
          {counterItems.map((item, index) => (
            <motion.div
              className="col-6 col-lg-3 text-center"
              key={index}
              variants={fadeUp2}
            >
              <div className="item py-2">
                <h2>{item.heading}</h2>
                <p>{item.numbers}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Counter;
