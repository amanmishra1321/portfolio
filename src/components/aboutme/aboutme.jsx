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
      <h2 className="text-center heading-name main-heading">About Me</h2>
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
        <div className="row gx-5">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
              consectetur tempore ratione. Autem qui omnis suscipit aut
              explicabo quisquam incidunt, vitae soluta, eius assumenda eum
              tenetur nostrum blanditiis quaerat id!
            </p>
            <p className="secondary-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus laudantium esse laborum natus. Sapiente inventore
              cupiditate earum esse ipsum fugiat sunt fuga. Perspiciatis iure
              temporibus, voluptatem accusantium dicta saepe sunt.
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
                    amishra1320@gmail.com
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
