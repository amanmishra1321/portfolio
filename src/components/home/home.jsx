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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              reiciendis ex reprehenderit quas quam tempora aliquam cum
              asperiores ea sequi nesciunt fugiat id, delectus fuga expedita in,
              placeat nisi voluptatem!
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
