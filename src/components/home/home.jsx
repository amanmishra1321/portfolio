import Typewriter from "typewriter-effect";
import MyProfile from "../../assests/my-profile2.png";
import "./home.css";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div
            className="col-lg-6 col-md-12"
            style={{ marginTop: "70px", marginBottom: "70px" }}
          >
            <div className="fs-22 text-captalize">Hi There! I'm</div>
            <Typewriter
              className="fs-56"
              options={{
                autoStart: true,
                loop: true,
                strings: ["Coder.", "Full Stack Developer.", "Engineer."],
                delay: 40,
              }}
            />
            <br />
            <p className="w-90 d-block fs-20 secondary-text">
            I am, a website developer and algorithm expert with a passion for creating innovative solutions. With 2+ years of experience in the industry, I have worked with a diverse range of clients, from small businesses to large corporations, to develop custom websites and algorithms tailored to their unique needs.
            </p>
            <button className="my-5 p-3 rounded border-2">Download CV</button>
          </div>
          <div className="col-lg-6 col-md-12">
            <img src={MyProfile} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
