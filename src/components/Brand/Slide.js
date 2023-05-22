import { Swiper, SwiperSlide } from "swiper/react";
import img1 from "./img/brand1.png";
import img2 from "./img/brand2.png";
import img3 from "./img/brand3.png";
import img4 from "./img/brand4.png";
import img5 from "./img/brand5.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay } from "swiper";

import React from "react";
import "./Slide.css";

const Slide = () => {
  const params = {
    loop: true,
    grabCursor: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      992: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      480: {
        slidesPerView: 2,
      },
      320: {
        slidesPerView: 1,
      },
    },
  };

  const images = [
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

  return (
    <>
      <div className="container-fluid px-4 py-5">
        <Swiper {...params} modules={[Autoplay]}>
          {images.map((item, index) => (
            <SwiperSlide key={index}>
              <a href="/">
                <img src={item.img} alt="brand images" />
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Slide;
