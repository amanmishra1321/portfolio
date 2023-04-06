import "./services.css";
import Card from "../cards/card";
import { SiXdadevelopers } from "react-icons/si";
const Services = () => {
  return (
    <div className="my-5 py-5">
      <h2 className="main-heading heading-name text-center">My Services</h2>
      <div className="text-center">
        <div>
          Lorem ipsum dolor sit amet consectetur
          <div>
            <span className="dot my-3"></span>&nbsp;&nbsp;
            <span className="dot my-3"></span>&nbsp;&nbsp;
            <span className="dot my-3"></span>&nbsp;&nbsp;
            <span className="dot my-3"></span>&nbsp;&nbsp;
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <Card heading={"Web Design"} icon={<SiXdadevelopers />} />
          </div>
          <div className="col-lg-4 col-md-12">
            <Card heading={"Front End Developer"} icon={<SiXdadevelopers />} />
          </div>
          <div className="col-lg-4 col-md-12">
            <Card heading={"Backend Developer"} icon={<SiXdadevelopers />} />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <Card heading={"Python Developer"} icon={<SiXdadevelopers />} />
          </div>
          <div className="col-lg-4 col-md-12">
            <Card heading={"Security Expert"} icon={<SiXdadevelopers />} />
          </div>
          <div className="col-lg-4 col-md-12">
            <Card heading={"Developer"} icon={<SiXdadevelopers />} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
