import React from "react";
import "./myskills.css";
import { AiOutlineStar, AiTwotoneStar } from "react-icons/ai";
function MySkills() {
  return (
    <div>
      <div className="container">
        <button className="btn-danger btn my-5">My Skills</button>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div>HTML5</div>
            <div>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiOutlineStar style={{ color: "yellow !important" }} />
            </div>
            <div>CSS3</div>
            <div>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiOutlineStar style={{ color: "yellow !important" }} />
            </div>
            <div>REACT JS</div>
            <div>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiOutlineStar style={{ color: "yellow !important" }} />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div>PYTHON</div>
            <div>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiOutlineStar style={{ color: "yellow !important" }} />
            </div>
            <div>DJANGO</div>
            <div>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiOutlineStar style={{ color: "yellow !important" }} />
            </div>
            <div>FLASK</div>
            <div>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiOutlineStar style={{ color: "yellow !important" }} />
            </div>
            <div>JAVASCRIPT</div>
            <div>
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiTwotoneStar />
              <AiOutlineStar style={{ color: "yellow !important" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MySkills;
