import "./contact.css";
import RectangleCard from "../rectangle-card/rectangleCard";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2nn4vkz",
        "template_tmprsue",
        form.current,
        "5yAYTNN9_WqiwPmSG"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div className="container my-5" id="contact">
        <div className="text-center">
          <h2 className="main-heading heading-name">Get in touch</h2>
          <p>Feel free to drop me a line - Contact us</p>
          <div>
            <span className="dot my-3"></span>&nbsp;&nbsp;
            <span className="dot my-3"></span>&nbsp;&nbsp;
            <span className="dot my-3"></span>&nbsp;&nbsp;
            <span className="dot my-3"></span>&nbsp;&nbsp;
          </div>
        </div>
        <div className="container">
          <div className="col-md-8 offset-md-2">
            <div className="row gx-5 ">
              <form ref={form} onSubmit={sendEmail}>
                <div className="col-lg-6 col-md-12 my-3">
                  <input
                    type="text"
                    className="customise-input"
                    placeholder="Your Name"
                    name="user_name"
                  />
                </div>
                <div className="col-lg-6 col-md-12 my-3">
                  <input
                    type="text"
                    placeholder="Your Email Address"
                    className="customise-input"
                    name="user_email"
                  />
                </div>
                {/* </div> */}
                {/* <div className="text-center"> */}
                {/* <div className="row gx-5 my-3"> */}
                <div className="col-lg-12 col-md-12 my-3">
                  <input
                    type="text"
                    placeholder="Subject"
                    className="customise-input"
                    name="subject"
                  />
                </div>
                {/* </div> */}

                {/* <div className="row gx-5 my-3"> */}
                <div className="col-lg-12 col-md-12 my-3">
                  <textarea
                    placeholder="How can I help you?"
                    className="customise-input"
                    style={{ border: "2px solid" }}
                    name="message"
                  />
                </div>
                <div className="col-md-12 col-sm-12 mb-5 text-center my-3">
                  <button
                    className="text-center  customise-button"
                    type="submit"
                    value="Send"
                  >
                    Contact Now
                  </button>
                </div>
              </form>
            </div>
            {/* </div> */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4 col-md-12">
            <RectangleCard
              heading="Address"
              firstLine="Janta Quater Nanda Nagar"
              secondLine="Indore (Madhya Pradesh) , India."
            />
          </div>
          <div className="col-lg-4 col-md-12">
            <RectangleCard
              heading="Phone"
              firstLine="+91 7898971320 "
              secondLine="+91 8269322542 "
            />
          </div>
          <div className="col-lg-4 col-md-12">
            <RectangleCard
              heading="Email"
              firstLine="amanmishra1321@gmail.com "
              secondLine="amishra1320@gmail.com"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
