import "./aboutme.css";
import Profile from "../../assests/my-profile1.jpg";
import { FaRegAddressBook, FaBirthdayCake } from "react-icons/fa";
import { SiFreelancer } from "react-icons/si";
import { FcPhoneAndroid } from "react-icons/fc";
import { HiOutlineMail } from "react-icons/hi";
import { BsInstagram, BsFlag, BsGlobe } from "react-icons/bs";
const AboutMe = () => {
  return (
    <>
      <h2 className="text-center heading-name main-heading" id="about">
        About Me
      </h2>
      <div className="text-center">
        Professional Profile - There Is All About Me
        <div>
          <span className="dot my-3"></span>&nbsp;&nbsp;
          <span className="dot my-3"></span>&nbsp;&nbsp;
          <span className="dot my-3"></span>&nbsp;&nbsp;
          <span className="dot my-3"></span>&nbsp;&nbsp;
        </div>
      </div>
      <div className="container">
        <div className="row gx-md-5 gx-none">
          <div className="col-lg-4 col-md-12">
            <img src={Profile} className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 col-md-12 my-lg-0 my-md-5">
            <h3 className="mt-3">I am Aman Mishra</h3>
            <hr
              className="heading-name"
              style={{ width: "10%", height: "4px" }}
            />
            <p className="secondary-text">
              As an algorithm expert, I have skilled in designing and
              implementing complex algorithms to solve a variety of problems,
              from data analysis to optimization. The expertise in this area
              allows me to develop algorithms that are accurate, and reliable,
              making them a valuable asset to any project.
            </p>
            <p className="secondary-text">
              Whether you're looking to build a new website from scratch or
              improve an existing one, I have the skills and expertise to
              deliver results that exceed your expectations. With a focus on
              delivering high-quality work on time and on budget, I am committed
              to helping clients achieve their goals and grow their businesses
              online.
            </p>
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-12">
                  <div className="my-3">
                    <span className="pe-3">
                      <FaBirthdayCake />
                    </span>
                    <span className="fw-bolder">Date of birth:</span> 19
                    December 1999
                  </div>
                  <div className="my-3">
                    <span className="pe-3">
                      <SiFreelancer />
                    </span>
                    <span className="fw-bolder">Freelance:</span> Available
                  </div>
                  <div className="my-3">
                    <span className="pe-3">
                      <FaRegAddressBook style={{ color: "red !important" }} />
                    </span>
                    <span className="fw-bolder">Address:</span> Indore, India
                  </div>
                  <div className="my-3">
                    <span className="pe-3">
                      <BsGlobe />
                    </span>
                    <span className="fw-bolder">Spoken Langages:</span> English
                    - Hindi
                  </div>
                </div>
                <div className="col-lg-6 col-md-12">
                  <div className="my-3">
                    <span className="pe-3">
                      <BsFlag />
                    </span>
                    <span className="fw-bolder">Nationality:</span> Indian
                  </div>
                  <div className="my-3">
                    <span className="pe-3">
                      <FcPhoneAndroid />
                    </span>
                    <span className="fw-bolder">Phone :</span>
                    +91 7898971329
                  </div>
                  <div className="my-3">
                    <span className="pe-3">
                      <HiOutlineMail />
                    </span>
                    <span className="fw-bolder">Email:</span>{" "}
                    amanmishra1321@gmail.com
                  </div>
                  <div className="my-3">
                    <span className="pe-3">
                      <BsInstagram />
                    </span>
                    <span className="fw-bolder">Insta:</span> amanmishra1321
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutMe;
