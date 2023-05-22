import React from "react";
import Bradcaump from "../../sectionbg/Bradcaump";
import SectionTitle from "../UseableComponents/SectionTitle";
import walletImg from "./img/wallet.png";
import { Button, Submit } from "../../Buttons";
import icon1 from "./img/icon1.png";
import icon2 from "./img/icon2.png";
import icon3 from "./img/icon3.png";
import icon4 from "./img/icon4.png";
import wallet2 from "./img/wallet-2.png";
import "./Wallet.css";
import Software from "../Home/Software";
import News from "../Home/News";

const Wallet = () => {
  return (
    <div>
      <Bradcaump heading={"Wallet"} />
      <section className="wallet">
        <div className="about-wallet">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="content">
                  <h2>
                    A Most Powerful wallet is develop for you, you can use this
                    wallet for next secure transaction.
                  </h2>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore.
                  </p>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit,
                  </p>
                  <Button
                    text={"apply for wallet"}
                    url={"/contact"}
                    type={"wallet button mt-4"}
                  />
                </div>
              </div>
              <div className="col-md-6 mt-4">
                <div className="img">
                  <img src={walletImg} alt="wallet" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="wallet-feature">
          <SectionTitle
            heading={"What is our wallet features"}
            content={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text`}
          />
          <div className="feature-container mt-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                  <div className="feature-item">
                    <div className="icon">
                      <img src={icon1} alt="feature icon" />
                    </div>
                    <div className="content">
                      <h2>FAST ACCESS</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                  <div className="feature-item">
                    <div className="icon">
                      <img src={icon2} alt="feature icon" />
                    </div>
                    <div className="content">
                      <h2>FAST ACCESS</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                  <div className="feature-item">
                    <div className="icon">
                      <img src={icon3} alt="feature icon" />
                    </div>
                    <div className="content">
                      <h2>FAST ACCESS</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-lg-4 col-xl-3 d-flex justify-content-center">
                  <div className="feature-item">
                    <div className="icon">
                      <img src={icon4} alt="feature icon" />
                    </div>
                    <div className="content">
                      <h2>FAST ACCESS</h2>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing
                        typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="get-currency">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="currency-form">
                  <h2>
                    GET CURRENCY, <br />
                    INTEGRATED GATEWAY FOR CRYPTOCURRENCIES
                  </h2>
                  <form action="">
                    <div className="row">
                      <div className="col-md-6">
                        <label htmlFor="fname">First Name*</label>
                        <input type="text" name="fname" id="fname" />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="lname">Last Name*</label>
                        <input type="text" name="lname" id="lname" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <label htmlFor="email">Email Address*</label>
                        <input type="email" name="email" id="email" />
                      </div>
                      <div className="col-12">
                        <label htmlFor="digit">A/C No 15 Digit*</label>
                        <input type="text" name="digit" id="digit" />
                      </div>
                      <div className="col-12">
                        <label htmlFor="details">
                          Wallet Details (Optional)
                        </label>
                        <input type="text" name="details" id="details" />
                      </div>
                      <div className="submit-button">
                        <Submit value={"submit"} />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="img">
                  <img src={wallet2} alt="monitor" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <Software />
        <News />
      </section>
    </div>
  );
};

export default Wallet;
