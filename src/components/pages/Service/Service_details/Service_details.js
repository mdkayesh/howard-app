import React from "react";
import Bradcaump from "../../../sectionbg/Bradcaump";
import Transaction from "./Transaction";
import Security from "./Security";
import CurrencyProg from "../../UseableComponents/CurrencyProg";
import "./Service_details.css";

const ServiceDetails = () => {
  return (
    <section
      key={"service-details"}
      className="service-details p-0"
      id="service-details"
    >
      <Bradcaump heading={"service details"} />
      <Transaction />
      <Security />
      <CurrencyProg />
    </section>
  );
};

export default ServiceDetails;
