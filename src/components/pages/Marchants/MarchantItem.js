import React from "react";
import "./MarchantItem.css";

const MarchantItem = ({ marchants }) => {
  return (
    <>
      <div className="marchants">
        {marchants.map((item, index) => (
          <div className="marchant-item" key={index}>
            <div className="img">
              <a href="/">
                <img src={item.img} alt="marchants" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MarchantItem;
