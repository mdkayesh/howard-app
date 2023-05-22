import React from "react";
// import "./Blog.css";
import img1 from "../NewsImg/blog1.jpg";
import img2 from "../NewsImg/blog2.jpg";
import img3 from "../NewsImg/blog3.jpg";
import img4 from "../NewsImg/blog4.jpg";
import img5 from "../NewsImg/blog5.jpg";
import img6 from "../NewsImg/blog6.jpg";
import img7 from "../NewsImg/blog7.jpg";
import img8 from "../NewsImg/blog8.jpg";
import userImg1 from "../NewsImg/bloguser1.png";
import userImg2 from "../NewsImg/bloguser2.png";
import userImg3 from "../NewsImg/bloguser3.png";
import userImg4 from "../NewsImg/bloguser4.png";
import Bradcaump from "../../../sectionbg/Bradcaump";
import Pagenation from "./Pagenation";
import BlogItem from "./BlogItem";

const Blog = () => {
  const blogItems = [
    {
      img: img1,
      userImg: userImg1,
      user: "Farhan",
      date: "16 Feb, 2020",
      heading: `Large Mining Farm Discovered in Abandoned Russian Factory`,
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`,
    },
    {
      img: img2,
      userImg: userImg2,
      user: "Alex",
      date: "16 Feb, 2020",
      heading: `Phasellus semper felisnon imperdiet varius.`,
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`,
    },
    {
      img: img3,
      userImg: userImg3,
      user: "Farhan",
      date: "16 Feb, 2020",
      heading: `Large Mining Farm Discovered in Abandoned Russian Factory`,
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`,
    },
    {
      img: img4,
      userImg: userImg4,
      user: "Farhan",
      date: "16 Feb, 2020",
      heading: `Large Mining Farm Discovered in Abandoned Russian Factory`,
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`,
    },
    {
      img: img5,
      userImg: userImg1,
      user: "Farhan",
      date: "16 Feb, 2020",
      heading: `Large Mining Farm Discovered in Abandoned Russian Factory`,
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`,
    },
    {
      img: img6,
      userImg: userImg2,
      user: "Farhan",
      date: "16 Feb, 2020",
      heading: `Large Mining Farm Discovered in Abandoned Russian Factory`,
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`,
    },
    {
      img: img7,
      userImg: userImg3,
      user: "Farhan",
      date: "16 Feb, 2020",
      heading: `Large Mining Farm Discovered in Abandoned Russian Factory`,
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`,
    },
    {
      img: img8,
      userImg: userImg4,
      user: "Farhan",
      date: "16 Feb, 2020",
      heading: `Large Mining Farm Discovered in Abandoned Russian Factory`,
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`,
    },
    {
      img: img1,
      userImg: userImg1,
      user: "Farhan",
      date: "16 Feb, 2020",
      heading: `Large Mining Farm Discovered in Abandoned Russian Factory`,
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`,
    },
  ];

  return (
    <div>
      <Bradcaump heading={"latest News"} />
      <section className="blog">
        <div className="container">
          <div className="row">
            {blogItems.map((item, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <BlogItem
                  img={item.img}
                  userImg={item.userImg}
                  user={item.user}
                  date={item.date}
                  heading={item.heading}
                  text={item.text}
                />
              </div>
            ))}
          </div>
          <Pagenation />
        </div>
      </section>
    </div>
  );
};

export default Blog;
