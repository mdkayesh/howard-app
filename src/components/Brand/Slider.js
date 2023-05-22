import React, { useRef, useEffect, useState } from "react";
import "./Slider.css";
import img1 from "./img/brand1.png";
import img2 from "./img/brand2.png";
import img3 from "./img/brand3.png";
import img4 from "./img/brand4.png";
import img5 from "./img/brand5.png";

const Slider = () => {
  const [slide, setslide] = useState(0);
  const [imgWidth, setimgWidth] = useState();
  const listRef = useRef();

  const images = [
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
    {
      src: img4,
    },
    {
      src: img5,
    },
    {
      src: img1,
    },
    {
      src: img2,
    },
    {
      src: img3,
    },
  ];

  let length = images.length;
  let width = window.innerWidth;

  if (width >= 768) {
    length = images.length - 4;
  } else if (width < 768 && width > 600) {
    length = images.length - 2;
  } else {
    length = images.length;
  }

  if (slide === length) {
    setslide(0);
  }

  useEffect(() => {
    const timeOut = setTimeout(() => setslide(slide + 1), 3000);

    setimgWidth(listRef.current.clientWidth);

    // clean up

    return () => {
      clearTimeout(timeOut);
    };
  }, [slide]);

  const tran = {
    transform: `translateX(${-imgWidth * slide}px)`,
  };

  return (
    <div className="slider container-fluid py-4">
      <div className="slider-container" style={tran}>
        {images.map((item, index) => (
          <div className="img" key={index} ref={listRef}>
            <a href="/">
              <img src={item.src} alt="brand" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
