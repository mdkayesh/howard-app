import React from "react";
import Converter from "./Converter";
import Counter from "./Counter";
import Hero from "./Hero";
import Process from "./Process";
import Progress from "./Progress";
import Software from "./Software";
import Work from "./Work";
import News from "./News";

const Home = () => {
  return (
    <>
      <div key={"home"} className="home">
        <Hero />
        <Work />
        <Progress />
        <Process />
        <Counter />
        <Converter />
        <Software />
        <News />
      </div>
    </>
  );
};

export default Home;
