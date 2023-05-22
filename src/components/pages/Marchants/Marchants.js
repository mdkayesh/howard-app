import React from "react";
import Bradcaump from "../../sectionbg/Bradcaump";
import SectionTitle from "../UseableComponents/SectionTitle";
import MarchantItem from "./MarchantItem";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import img5 from "./img/5.png";
import img6 from "./img/6.png";
import img7 from "./img/7.png";
import img8 from "./img/8.png";
import img9 from "./img/9.png";
import img10 from "./img/10.png";
import img11 from "./img/11.png";
import img12 from "./img/12.png";
import img13 from "./img/13.png";

const Marchants = () => {
  const supportItem = [
    {
      img: img1,
    },
    {
      img: img2,
    },
    {
      img: img3,
    },
    {
      img: img4,
    },
    {
      img: img5,
    },
  ];
  const shoppingItem = [
    {
      img: img6,
    },
    {
      img: img7,
    },
    {
      img: img8,
    },
    {
      img: img9,
    },
  ];
  const bankingItem = [
    {
      img: img10,
    },
    {
      img: img11,
    },
    {
      img: img12,
    },
    {
      img: img13,
    },
  ];
  return (
    <div>
      <Bradcaump heading={"Marchants"} />
      <section className="marchants">
        <SectionTitle
          heading={"BUSINESS SUPPORT"}
          content={`Ariations of passages of randomised Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.`}
        />
        <MarchantItem marchants={supportItem} />
        <SectionTitle
          heading={"Online Shopping"}
          content={`Ariations of passages of randomised Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.`}
        />
        <MarchantItem marchants={shoppingItem} />
        <SectionTitle
          heading={"Banking SUPPORT"}
          content={`Ariations of passages of randomised Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.`}
        />
        <MarchantItem marchants={bankingItem} />
      </section>
    </div>
  );
};

export default Marchants;
