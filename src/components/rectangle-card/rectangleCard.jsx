import React from "react";
import "./rectangleCard.css";
const RectangleCard = (props) => {
  return (
    <div className="card">
      <div id="my-card" className="border text-center p-3 my-3 center">
        <div>{props?.heading}</div>
        <div className="text-center">
          <hr className="customise-line" />
        </div>
        <div>
          <a href={props?.reference1} className="text-decoration-none">
            {props?.firstLine}
          </a>
        </div>
        <div>
          <a href={props?.reference2} className="text-decoration-none">
            {props?.secondLine}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RectangleCard;
