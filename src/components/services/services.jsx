import "./services.css";
import Card from "../cards/card";
import { SiXdadevelopers } from "react-icons/si";
import { SiAntdesign } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import { MdSecurity } from "react-icons/md";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdWeb } from "react-icons/md";

const Services = () => {
  return (
    <div className="my-5 py-5" id="services">
      <h2 className="main-heading heading-name text-center">My Services</h2>
      <div className="text-center">
        <div>
          Transforming your vision into a digital reality.
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
            <Card
              heading={"Web Design"}
              icon={<SiAntdesign />}
              text={
                "Experienced website developer with a passion for creating innovative solutions. Committed to delivering high-quality work that exceeds expectations."
              }
            />
          </div>
          <div className="col-lg-4 col-md-12">
            <Card
              heading={"Front End Developer"}
              icon={<SiXdadevelopers />}
              text={
                "Experienced FrontEnd developer with expertise in creating responsive and user-friendly websites. Committed to delivering results that enhance user experience."
              }
            />
          </div>
          <div className="col-lg-4 col-md-12">
            <Card
              heading={"Backend Developer"}
              icon={<MdWeb />}
              text={
                "With a wealth of expertise in BackEnd development, I specialize in crafting intricate web applications that demand robustness, scalability, and security."
              }
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-12">
            <Card
              heading={"Python Developer (CP)"}
              icon={<MdDeveloperMode />}
              text={
                "As a seasoned Python developer and accomplished competitive programmer, I leverage my expertise to solve complex algorithmic problems with efficiency, elegance,precision and in optimized way"
              }
            />
          </div>
          <div className="col-lg-4 col-md-12">
            <Card
              heading={"Security Expert"}
              icon={<MdSecurity />}
              text={
                "As a skilled security expert and ethical hacker, I employ my extensive knowledge of cyber threats and vulnerabilities to ensure websites and networks remain secure against malicious attacks."
              }
            />
          </div>
          <div className="col-lg-4 col-md-12">
            <Card
              heading={"Machine Learning Expert"}
              icon={<GiArtificialIntelligence />}
              text={
                "As a proficient Machine Learning expert, I possess a deep understanding of advanced algorithms and statistical models, leveraging these skills to deliver intelligent and data-driven solutions."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
