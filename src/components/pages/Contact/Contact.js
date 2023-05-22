import React from "react";
import { Submit } from "../../Buttons";
import Bradcaump from "../../sectionbg/Bradcaump";
import SectionTitle from "../UseableComponents/SectionTitle";
import img from "./img/contact.png";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div>
        <Bradcaump heading={"Contact"} />
        <section className="contact">
          <div className="contact-title">
            <div className="container">
              <div className="row">
                <div className="col-md-8 mx-auto mb-5">
                  <div className="img">
                    <img src={img} alt="bitcoin" />
                  </div>
                </div>
                <SectionTitle
                  heading={"Get HOWARD where you need !"}
                  content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`}
                />
              </div>
            </div>
          </div>

          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <iframe
                  title="map"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2031.8771303858684!2d90.46420829637077!3d23.667409693747985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1684664570085!5m2!1sen!2sbd"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <div className="col-lg-6">
                <div className="contact-form">
                  <form action="">
                    <label htmlFor="fname">Full Name</label>
                    <input type="text" name="fname" id="fname" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                    <label htmlFor="subject">Subject</label>
                    <input type="text" name="subject" id="subject" />
                    <label htmlFor="massage">Massage</label>
                    <textarea
                      name="massage"
                      id="massage"
                      cols="30"
                      rows="5"
                    ></textarea>
                    <Submit value={"Submit"} />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
