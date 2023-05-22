import React from "react";
import "./Transaction.css";
import img1 from "../serviceImg/service-details1.png";
const Transaction = () => {
  return (
    <div className="transaction">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="content">
              <h3>
                THIS CURRENCY IS MOST SECURE. CRYPTOCURRENCY IS AWESOME FOR
                SECURE TRANSACTION.
              </h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore.
              </p>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit,
              </p>
            </div>
          </div>
          <div className="col-lg-5 py-4">
            <div className="img">
              <img src={img1} alt="bitcoin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transaction;
