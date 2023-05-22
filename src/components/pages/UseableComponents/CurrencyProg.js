import React from "react";
import img1 from "../Service/serviceImg/currency.png";
import "./CurrencyProg.css";
const CurrencyProg = () => {
  return (
    <div className="currency-prog">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="img">
              <img src={img1} alt="progress" />
            </div>
          </div>
          <div className="col-lg-7 mt-4 mt-lg-0">
            <div className="content">
              <h1>BEST SERVICES FROM US.</h1>
              <p>
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium, totam aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error voluptatem
                accusantium doloremque laudantium, totam aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur. There are many variations passages
                Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which
                don't look even slightly believable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrencyProg;
