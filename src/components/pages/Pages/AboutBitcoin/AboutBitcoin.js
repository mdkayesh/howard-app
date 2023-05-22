import React, { useState } from "react";
import Bradcaump from "../../../sectionbg/Bradcaump";
import CurrencyProg from "../../UseableComponents/CurrencyProg";
import VideoArea from "../../UseableComponents/VideoArea";
import "./AboutBitcoin.css";
import img1 from "./img/cart1.png";

const AboutBitcoin = () => {
  const [show, setshow] = useState(0);
  const navItems = [
    {
      url: "",
      title: "Day",
      img: img1,
    },
    {
      url: "",
      title: "Month",
      img: img1,
    },
    {
      url: "",
      title: "Year",
      img: img1,
    },
  ];
  return (
    <div className="about-bitcoin">
      <Bradcaump heading={"about bitcoin"} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="market-data">
              <div className="market-title text-center">
                <h1>About Market Data</h1>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. There are many variations of
                  passages of Lorem Ipsum available, but the majority have
                  suffered alteration in some form , by injected humour, or
                  randomised words which don't look even slightly believable.
                </p>
              </div>
              <div className="market-tab">
                <div className="market-filter">
                  <div className="select">
                    <select name="coin" id="coin">
                      <option value="Bitcoin">Bitcoin (BTC)</option>
                      <option value="Bitcoin">BUZZ (BUZZ)</option>
                      <option value="Bitcoin">BVC (BVC)</option>
                      <option value="Bitcoin">BXT (BXT)</option>
                      <option value="Bitcoin">Bata (Bata)</option>
                      <option value="Bitcoin">BTD (BTD)</option>
                    </select>
                  </div>
                  <div className="market-nav mt-3 mt-md-0">
                    {navItems.map((item, index) => (
                      <div className="nav-item" key={index}>
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            setshow(index);
                          }}
                          href="/"
                          className={show === index ? "active" : ""}
                        >
                          {item.title}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="tab-pane">
                  {navItems.map((item, index) => (
                    <div
                      className={`img ${show === index ? "active" : ""}`}
                      key={index}
                    >
                      {show === index && <img src={item.img} alt="cart" />}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tickets */}

      <div className="tickets">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-md-4 col-lg-2 position-relative right-border">
              <div className="ticket-item">
                <h6>Bitcoin - 1 BTC</h6>
                <span>8190.65</span>
                <p>1 XBT = 8,202.69 USD</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 position-relative right-border">
              <div className="ticket-item">
                <h6>Bitcoin - 1 BTC</h6>
                <span>8190.65</span>
                <p>1 XBT = 8,202.69 USD</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 position-relative right-border">
              <div className="ticket-item">
                <h6>Bitcoin - 1 BTC</h6>
                <span>8190.65</span>
                <p>1 XBT = 8,202.69 USD</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 position-relative right-border">
              <div className="ticket-item">
                <h6>Bitcoin - 1 BTC</h6>
                <span>8190.65</span>
                <p>1 XBT = 8,202.69 USD</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 position-relative right-border">
              <div className="ticket-item">
                <h6>Bitcoin - 1 BTC</h6>
                <span>8190.65</span>
                <p>1 XBT = 8,202.69 USD</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-2 position-relative right-border">
              <div className="ticket-item">
                <h6>Bitcoin - 1 BTC</h6>
                <span>8190.65</span>
                <p>1 XBT = 8,202.69 USD</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* market table */}

      <div className="market-table">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <table>
                <thead>
                  <tr>
                    <th>#NO</th>
                    <th>NAME & SYMBLE</th>
                    <th>PRICE</th>
                    <th>VOLUME</th>
                    <th>%7DAY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#1</td>
                    <td>Bitcoin (BTC)</td>
                    <td>$8003.77</td>
                    <td>$8919790000</td>
                    <td>-8.03%</td>
                  </tr>
                  <tr>
                    <td>#1</td>
                    <td>Bitcoin (BTC)</td>
                    <td>$8003.77</td>
                    <td>$8919790000</td>
                    <td>-8.03%</td>
                  </tr>
                  <tr>
                    <td>#1</td>
                    <td>Bitcoin (BTC)</td>
                    <td>$8003.77</td>
                    <td>$8919790000</td>
                    <td>-8.03%</td>
                  </tr>
                  <tr>
                    <td>#1</td>
                    <td>Bitcoin (BTC)</td>
                    <td>$8003.77</td>
                    <td>$8919790000</td>
                    <td>-8.03%</td>
                  </tr>
                  <tr>
                    <td>#1</td>
                    <td>Bitcoin (BTC)</td>
                    <td>$8003.77</td>
                    <td>$8919790000</td>
                    <td>-8.03%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <VideoArea />
      <CurrencyProg />
    </div>
  );
};

export default AboutBitcoin;
