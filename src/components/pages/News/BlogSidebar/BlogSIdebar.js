import React from "react";
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
import BlogItem from "../Blog/BlogItem";
import Bradcaump from "../../../sectionbg/Bradcaump";
import "./BlogSidebar.css";
import Sidebar from "./Sidebar";

const BlogSIdebar = () => {
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
      <Bradcaump heading={"latest news"} />
      <div className="blog-sidebar">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                {blogItems.map((item, index) => (
                  <div className="col-md-6" key={index}>
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
            </div>
            <div className="col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSIdebar;
